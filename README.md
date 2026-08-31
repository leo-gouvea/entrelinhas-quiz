# Entrelinhas — Você Reconheceria?

**Um quiz interativo que treina o olho para reconhecer violência de gênero disfarçada de normalidade.**

🔗 [Jogue aqui](#) · 🎓 Projeto do Prêmio CIEE de Responsabilidade Social — Categoria III (O Lúdico), programa [Se Liga, Moçada!](https://seligamocada.com.br/)

> **TL;DR (EN):** A single-page quiz built with vanilla HTML/CSS/JS that presents 30 real-world scenarios of normalized gender-based violence (gaslighting, coercive control, victim-blaming, workplace discrimination). No framework, no build step — deliberately, so anyone can open the source and understand it. Includes a real anonymous-analytics backend via Google Apps Script, a hand-rolled Canvas-based share-image generator (no html2canvas), and a debugging story below about a CSS/JS animation-timing desync that's a genuinely good technical read.

---

## Por que esse projeto existe

Violência de gênero raramente se apresenta como violência. Ela chega disfarçada de ciúme, de "brincadeira", de cuidado excessivo, de piada "inofensiva", de uma frase dita à mesa de jantar. A maioria das pessoas só reconhece o padrão depois de já ter vivido — ou nunca reconhece.

Este projeto nasceu de uma pergunta simples: **dá pra treinar isso como se treina qualquer outra habilidade de reconhecimento de padrões?** A resposta virou um quiz de 30 situações reais — controle disfarçado de proteção, gaslighting, culpabilização da vítima, mansplaining, isolamento social, discriminação salarial — cada uma com um feedback explicativo escrito pra ensinar o *porquê*, não só o *o quê*.

Não é só um projeto de portfólio. É uma tentativa pequena, mas real, de fazer alguém pausar por 30 segundos e reconhecer algo que talvez estivesse acontecendo bem debaixo do nariz dela.

## O que o site faz

- Apresenta 12 situações sorteadas de um banco de 30, com 3 alternativas cada (a posição da resposta certa é embaralhada a cada rodada — sem viés de posição).
- Pontuação ponderada por gravidade (situações mais graves valem mais no score final).
- Feedback explicativo após cada resposta, com estatística real da comunidade quando há dados suficientes ("63% de quem já respondeu essa questão também errou").
- Tela de resultado com nível de consciência, ranking simulado e canais de apoio reais (180, 100, 188) — porque o objetivo não é só testar, é também ser uma porta de entrada pra ajuda.
- Compartilhamento do resultado como imagem (gerada localmente, sem servidor) ou texto.

## Stack técnica — e por que ela é deliberadamente simples

**HTML, CSS e JavaScript puro. Sem framework, sem build step, sem `node_modules`.**

Essa não é uma limitação — é uma escolha. Um recrutador (ou um professor do CIEE) pode abrir `Ctrl+U` no navegador e ler exatamente o que o site faz, do início ao fim, sem precisar rodar `npm install` primeiro. O projeto roda em qualquer navegador, hospeda de graça em qualquer lugar (GitHub Pages, Netlify, Vercel), e não tem nenhuma dependência que pode quebrar daqui a dois anos porque uma lib parou de ser mantida.

| Camada | Ferramenta | Por quê |
|---|---|---|
| Estrutura/estilo | HTML5 + CSS3 puro (custom properties, `clamp()`, Grid/Flexbox) | Zero dependências, controle total |
| Interatividade | JavaScript vanilla (ES6+) | Sem overhead de framework para uma SPA de 4 telas |
| Áudio | `Audio()` nativo do navegador, arquivos `.wav` locais | Sem bibliotecas de áudio externas |
| Imagem de compartilhamento | Canvas API, desenhada manualmente | Ver seção "html2canvas e por que eu abandonei ele" |
| Estatísticas | Google Sheets + Google Apps Script (Web App) | Backend gratuito, sem servidor próprio, sem banco de dados pra manter |
| Deploy | GitHub Pages | Estático, gratuito, sem CI/CD necessário |

## Decisões de engenharia que valem a pena explicar numa entrevista

### 1. O bug do "teleporte" — um caso real de dessincronia CSS/JS

Por várias iterações, as transições entre telas pareciam suaves no início mas "cortavam" abruptamente no fim, como se o elemento teleportasse pro lugar final em vez de deslizar até ele. O sintoma era consistente, mas a causa não era óbvia à primeira vista.

**Diagnóstico:** a animação CSS (`@keyframes slideInRight`, `slideOutLeft`, etc.) tinha duração de `0.8s`, declarada no `style.css`. Mas a função `mostrarTela()` no JavaScript removia a classe responsável pela animação depois de `420ms` num `setTimeout`. Como o navegador para de aplicar os estilos de uma classe assim que ela é removida do elemento — mesmo que a animação `@keyframes` ainda devesse estar em andamento — o elemento "perdia" a transformação intermediária e caía direto no estado final (`transform: none`, `opacity: 1`) instantaneamente.

**Correção:** sincronizar o `setTimeout` do JS com a duração real declarada no CSS (`800ms`). Simples de corrigir, mas o tipo de bug que só aparece quando CSS e JS são editados por pessoas (ou sessões) diferentes ao longo do tempo, sem uma fonte única de verdade para a duração da animação.

**Lição de arquitetura:** duração de animação deveria ser uma única constante (idealmente uma custom property CSS lida via `getComputedStyle` no JS), não um número mágico duplicado em dois arquivos.

### 2. `html2canvas` e por que eu abandonei ele

A primeira versão da imagem de compartilhamento usava `html2canvas` pra capturar o cartão de resultado ao vivo do DOM. Funcionava — até a fonte customizada (Playfair Display) não carregar a tempo da captura, produzindo imagens com texto sobreposto, desalinhado, ou usando fonte de fallback do sistema com métricas diferentes.

Em vez de caçar condições de corrida de carregamento de fonte, reescrevi a geração de imagem **desenhando diretamente na Canvas API**: resolução fixa de 800×600, título/score/nível/frase posicionados com coordenadas explícitas, aguardando `document.fonts.ready` antes de desenhar. Mais código, mas **zero ambiguidade** sobre o resultado final — o mesmo output, sempre, em qualquer navegador.

### 3. Estatística real sem backend próprio

Ao invés de montar um backend completo só pra contar respostas certas/erradas por questão, usei uma planilha do Google Sheets com Google Apps Script como Web App. O endpoint só faz duas coisas: registrar uma resposta (`doPost`) e devolver estatísticas agregadas (`doGet`) — nada além disso é exposto. Envio via `fetch(..., { mode: 'no-cors' })` (fire-and-forget, não bloqueia a interface esperando resposta) e leitura com fallback silencioso: se a planilha estiver fora do ar, o quiz continua funcionando normalmente, só sem a estatística — nunca quebra a experiência principal por causa de uma feature secundária.

### 4. Ajuste automático de escala (sem scroll, em qualquer resolução)

O site tem uma restrição de design explícita: nenhuma tela deve precisar de scroll, em nenhuma resolução. Isso é fácil de garantir quando o conteúdo é curto e fica difícil quando cresce (estatísticas dinâmicas, textos legais, blocos de apoio). Em vez de caçar valores de `clamp()` pra cada combinação possível de conteúdo/viewport, implementei uma função que mede a altura real do conteúdo depois de renderizado e aplica um `transform: scale()` proporcional quando ultrapassa a altura da tela — nunca corta, nunca precisa de scroll, se ajusta automaticamente mesmo se o conteúdo mudar de tamanho no futuro.

## Estrutura do projeto

```
entrelinhas/
├── index.html              # Estrutura das 4 telas (início, quiz, loading, resultado)
├── style.css                # Todo o design system (custom properties, animações, responsividade)
├── script.js                 # Lógica do quiz, transições, áudio, canvas, integração com Sheets
├── sons/
│   ├── cardSwipe.wav         # hover nas opções
│   ├── cardArriving.wav      # cartões/telas chegando
│   ├── cardSelect.wav        # resposta certa
│   ├── error.wav              # resposta errada
│   └── complete.wav           # tela de resultado
└── apps-script-codigo.gs     # Backend de estatísticas (cole no Google Apps Script)
```

## Como rodar localmente

Não precisa de build nem servidor de verdade:

```bash
python3 -m http.server 8000
# ou, se tiver Node:
npx serve .
```

Ou simplesmente abra o `index.html` direto no navegador.

## Deploy (GitHub Pages, grátis)

1. Suba a pasta inteira (incluindo `sons/`) pra um repositório no GitHub.
2. **Settings → Pages** → branch `main`, pasta raiz → Save.
3. O site fica no ar em `https://seu-usuario.github.io/nome-do-repo`.

## Acessibilidade

- Cursor customizado com fallback nativo em dispositivos touch (`matchMedia('(hover: none)')`).
- Foco visível por teclado (`:focus-visible`) em todos os elementos interativos.
- Contraste testado nas paletas clara e escura.
- Tipografia fluida (`clamp()`) — nada estoura ou empurra layout em telas pequenas.

## O que eu faria diferente com mais tempo

Ser honesto sobre limitações é parte de mostrar maturidade técnica, não só entregar algo que "funciona":

- **Testes automatizados.** Hoje a cobertura é zero — tudo foi validado manualmente. Num projeto maior, a lógica de embaralhamento, cálculo de score e o parser de falas entre aspas (`renderizarSituacao`) seriam os primeiros candidatos a testes unitários.
- **Persistência de estado.** Se a pessoa recarregar a página no meio do quiz, perde o progresso. Um `localStorage` simples resolveria.
- **Internacionalização.** O conteúdo é 100% em português, propositalmente (o público-alvo é brasileiro), mas a arquitetura não separa texto de lógica — não daria pra traduzir sem editar o banco de questões diretamente.
- **Categorização temática das questões.** Hoje as 30 situações têm apenas gravidade (Alta/Média/Baixa), não categoria (relacionamento, trabalho, família). Isso permitiria uma trilha de apoio personalizada no final, em vez de canais genéricos.

## Créditos

Efeitos sonoros extraídos de jogos existentes e adaptados para uso educacional, não comercial, em projeto estudantil sem fins lucrativos.

---

Desenvolvido por **Leonardo José Alves Gouvea** para o Prêmio CIEE de Responsabilidade Social 2025 — Categoria III (O Lúdico), programa [Se Liga, Moçada!](https://seligamocada.com.br/).
