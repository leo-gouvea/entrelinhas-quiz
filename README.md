# Entrelinhas — Você Reconheceria?

**Um quiz interativo que treina o olho para reconhecer violência de gênero disfarçada de normalidade.** 
🎓 Projeto para o programa [Se Liga, Moçada!](https://seligamocada.com.br/)

# 🔗 [Jogue aqui](https://leo-gouvea.github.io/entrelinhas-quiz/)(#) 

---

## Por que esse projeto existe

No cotidiano, violência de gênero raramente se apresenta como violência. Ela chega disfarçada de ciúme, de "brincadeira", de cuidado excessivo, de "piada inofensiva" ou até de uma frase dita à mesa de jantar. A maioria das pessoas só reconhece o padrão depois de já ter vivido ou, pior, nunca reconhece.

Este projeto nasceu de uma pergunta simples para entender se **é possível treinar isso como se treina qualquer outra habilidade de reconhecimento de padrões?** A resposta virou um quiz de 30 situações reais: controle disfarçado de proteção, gaslighting, culpabilização da vítima, mansplaining, isolamento social, discriminação salarial; cada uma com um feedback explicativo escrito pra ensinar o *porquê*, não só o *o quê*.

É uma tentativa pequena, mas real, de fazer alguém pausar por alguns segundos e reconhecer algo que talvez estivesse acontecendo bem debaixo do nariz dela e, se for o caso, encontrar um canal de apoio real sem precisar procurar em outro lugar.

## O que o site faz

- Apresenta 12 situações sorteadas de um banco de 30, com 3 alternativas cada;
- Pontuação ponderada por gravidade (situações mais graves valem mais no score final);
- Feedback explicativo após cada resposta, com estatística real da comunidade quando há amostra suficiente e sensível ao resultado do usuário;
- Tempo de leitura do feedback calibrado (7,5s, com barra de progresso sincronizada) para dar espaço real de absorver a explicação antes da próxima situação, em vez de só validar/invalidar rápido;
- Tela de resultado com nível de consciência, ranking simulado e canais de apoio reais (180, 100, 188) porque o objetivo não é só testar, é também ser uma porta de entrada pra ajuda;
- Compartilhamento do resultado como imagem gerada localmente, sem servidor ou texto;
- Falas citadas dentro dos enunciados são destacadas visualmente com uma fonte manuscrita; um detalhe estético pequeno, mas que ajuda a diferenciar "o que a pessoa disse" de "o contexto da situação" antes mesmo de ler com atenção.

## Stack técnica — e por que ela é deliberadamente simples

**HTML, CSS e JavaScript puro.**

Essa não é uma limitação, é uma escolha. O projeto roda em qualquer navegador, hospeda de graça em qualquer lugar e não tem nenhuma dependência que pode quebrar daqui a dois anos porque uma lib parou de ser mantida.

| Camada | Ferramenta | Por quê |
|---|---|---|
| Estrutura/estilo | HTML5 + CSS3 puro (custom properties, `clamp()`, Grid/Flexbox) | Zero dependências, controle total |
| Interatividade | JavaScript vanilla (ES6+) | Sem overhead de framework para uma SPA de 4 telas |
| Áudio | `Audio()` nativo do navegador, arquivos `.wav` locais | Sem bibliotecas de áudio externas |
| Imagem de compartilhamento | Canvas API, desenhada manualmente |
| Estatísticas | Google Sheets + Google Apps Script (Web App) | Backend gratuito, sem servidor próprio, sem banco de dados pra manter |
| Deploy | GitHub Pages | Estático, gratuito, sem CI/CD necessário |

## Estrutura do projeto

```
entrelinhas/
├── index.html              # Estrutura das 4 telas (início, quiz, loading, resultado)
├── style.css                # Todo o design system (custom properties, animações, responsividade)
├── script.js                 # Lógica do quiz, transições, áudio, canvas, integração com Sheets
├── sons/
│  ├── cardSwipe.wav         # hover nas opções 
   ├── cardArriving.wav      # cartões/telas chegando
   ├── cardSelect.wav        # resposta certa
   ├── error.wav              # resposta errada
   └── complete.wav           # tela de resultado
```

## Como rodar localmente

Não precisa de build nem servidor de verdade:

```bash
python3 -m http.server 8000
# ou, se tiver Node:
npx serve .
```

Ou simplesmente abra o `index.html` direto no navegador.

## Acessibilidade

- Cursor customizado com fallback nativo em dispositivos touch (`matchMedia('(hover: none)')`).
- Foco visível por teclado (`:focus-visible`) em todos os elementos interativos.
- Contraste testado nas paletas clara e escura.
- Tipografia fluida (`clamp()`) — nada estoura ou empurra layout em telas pequenas.
- Scroll vertical liberado no mobile — nenhum conteúdo fica inacessível em telas pequenas, mesmo quando o texto é mais longo que a viewport.

## O que eu faria diferente com mais tempo

- **Testes automatizados.** Hoje a cobertura é zero, tudo foi validado manualmente. Num projeto maior, a lógica de embaralhamento, cálculo de score e o parser de falas entre aspas seriam os primeiros candidatos a testes unitários.
- **Persistência de estado.** Se a pessoa recarregar a página no meio do quiz, perde o progresso. Um `localStorage` simples resolveria.
- **Internacionalização.** O conteúdo é 100% em português pois o público-alvo é brasileiro, mas a arquitetura não separa texto de lógica, então não daria pra traduzir sem editar o banco de questões diretamente.
- **Categorização temática das questões.** Hoje as 30 situações têm apenas gravidade (Alta/Média/Baixa), não categoria (relacionamento, trabalho, família). Isso permitiria uma trilha de apoio personalizada no final, em vez de canais genéricos.

## Créditos

Efeitos sonoros extraídos de jogos existentes e adaptados para uso educacional, não comercial, em projeto estudantil sem fins lucrativos.

---
