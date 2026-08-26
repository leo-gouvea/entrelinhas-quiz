Aqui está o **PRD (Documento de Requisitos do Produto)** atualizado e refinado, incorporando todas as suas solicitações de design, funcionalidades avançadas (como animações, cursor personalizado, cálculos de probabilidade) e o alinhamento temático preciso.

---

# PRD: Entrelinhas – Você Reconheceria?
**Versão:** 2.0 (Atualizada)  
**Autor:** Leonardo José Alves Gouvea  
**Categoria:** III – O Lúdico  
**Data:** 23 de Agosto de 2026  
**Status:** Pronto para Desenvolvimento

---

## 1. Visão Geral e Conceito
**"Entrelinhas: Você Reconheceria?"** é uma experiência digital interativa e gamificada, desenhada para jovens adultos. O projeto utiliza a mecânica de quiz narrativo para expor **violências invisíveis** (machismo, misoginia, controle sutil) presentes no cotidiano.

Diferente de testes tradicionais, o site oferece uma **análise de perfil** baseada em probabilidades e lógica contextual, entregando um "Score de Consciência" personalizado. A proposta é educativa, mas com estética moderna, fluida e imersiva, onde a tecnologia serve para engajar o usuário em uma reflexão profunda sobre comportamentos socialmente naturalizados.

**Diferencial:** Não há login. O usuário entra, joga, recebe um resultado analítico e compartilha. Tudo em uma única página (SPA - Single Page Application) com transições fluidas.

---

## 2. Identidade Visual e Experiência (UI/UX)

### 2.1. Paleta de Cores (Tema Feminista Moderno)
A paleta foi desenhada para ser acolhedora, mas com alertas visuais claros, remetendo à luta feminista de forma contemporânea e não agressiva.
- **Fundo:** *Off-White Amarelado* (`#FDFCF0` ou similar). Traz conforto visual, evitando o branco puro cansativo, e remete a papel de livro ou caderno.
- **Primária (Botões/Ações):** *Roxo Pastel* (`#B39DDB` a `#9575CD`). O roxo é a cor histórica do feminismo, mas em tom pastel torna-se moderno e acessível.
- **Destaques/Alertas:** *Vermelho Suave* (`#E57373` ou `#EF5350`). Usado apenas para indicar erro, violência ou atenção necessária.
- **Texto:** *Cinza Escuro* (`#37474F`). Para máxima legibilidade sem o contraste duro do preto puro.
- **Acentos:** *Verde Menta* (`#80CBC4`) para acertos e validações positivas.

### 2.2. Elementos de Interface
- **Cursor Personalizado:** Um cursor customizado (CSS) que substitui o padrão. Sugestão: um pequeno ícone de "olho" ou "lupa" estilizado em roxo, que muda de estado (ex: aumenta de tamanho) ao passar por botões clicáveis.
- **Tipografia:** Fontes modernas e limpas (ex: *Montserrat* para títulos, *Open Sans* ou *Lato* para corpo).
- **Animações:**
  - **Entrada de Conteúdo:** As situações e botões não "aparecem" de repente; eles deslizam suavemente (`fade-in-up`) ou escalam (`scale-in`).
  - **Transições de Tela:** Ao responder, a tela atual desvanece e a próxima surge com uma transição de *slide* ou *zoom* suave.
  - **Microinterações:** Botões têm efeito de *hover* (elevação ou mudança de cor sutil) e efeito de *click* (press down).

---

## 3. Funcionalidades e Lógica do Jogo

### 3.1. Estrutura de Navegação (Single Page Application)
O site é uma única página HTML. O JavaScript controla a visibilidade das "telas" (divs), garantindo que não haja recarregamento da página (reload), o que mantém a fluidez.

**Fluxo do Usuário:**
1.  **Tela de Boas-Vindas:** Título animado, breve introdução e botão "Iniciar Jornada".
2.  **Tela de Jogo (Repetível):**
    - Exibição da situação (texto + ilustração sutil).
    - Botões de resposta aparecem **dinamicamente** (um de cada vez, com delay de animação).
    - Ao clicar: Feedback imediato (correto/incorreto) + Explicação educativa.
    - Transição automática para a próxima questão após 2-3 segundos.
3.  **Tela de Processamento:** Barra de carregamento animada ("Analisando suas entrelinhas...").
4.  **Tela de Resultado:**
    - **Score de Consciência (%):** Calculado com base em acertos, mas ponderado pela **gravidade** da questão (ex: errar sobre controle é "mais grave" do que errar sobre uma piada leve).
    - **Nível de Conhecimento:** Texto descritivo (ex: "Você tem uma visão aguçada" ou "Atenção: algumas normas sociais ainda passam despercebidas").
    - **Ranking Simulado:** Comparativo com a média (ex: "Você está acima de 85% dos participantes"). *Nota: Como não há banco de dados, este número pode ser gerado via cálculo probabilístico local ou ser um valor fixo de referência para o usuário.*
    - **Botões de Ação:** "Tentar Novamente" e "Compartilhar Resultado".
5.  **Modal de Compartilhamento:** Gera um texto pronto ou uma imagem (canvas) com o resultado para copiar e colar no WhatsApp/Instagram.

### 3.2. Lógica de Pontuação e Probabilidade
- **Base:** Cada resposta correta soma pontos.
- **Peso das Questões:** As questões são categorizadas por gravidade (Baixa, Média, Alta).
- **Cálculo do Score:**
  $$ Score = \left( \frac{\text{Pontuação Real}}{\text{Pontuação Máxima Possível}} \right) \times 100 $$
- **Interpretação:** O resultado final não é apenas um número, mas uma análise de viabilidade de comportamento:
  - *0-40%:* "Atenção Necessária" (Muitas normalizações).
  - *41-70%:* "Observador em Desenvolvimento".
  - *71-100%:* "Leitor de Entrelinhas" (Alta consciência crítica).

### 3.3. Conteúdo das Situações (Revisado e Neutro)
As situações devem ser **isentas de viés político óbvio**, focando puramente na **dinâmica de poder e comportamento**.
- **Requisito de Conteúdo:** Todas as situações devem ser baseadas em dados reais sobre violência contra a mulher (ex: dados do Observatório da Violência ou ONU Mulheres), mas apresentadas como cenários cotidianos.
- **Exemplos de Temas:**
  - Controle de rede social sob pretexto de "confiança".
  - Piadas que diminuem a capacidade intelectual da mulher.
  - Isolamento de amigos sob pretexto de "ciúme".
  - Culpar a vítima pela roupa ou horário.
- **Revisão:** O roteiro deve passar por uma revisão de "viés de gênero" para garantir que a resposta correta seja baseada em **segurança e respeito**, não em opinião pessoal.

---

## 4. Requisitos Técnicos (Stack Simplificada e Moderna)

Para atender a fluidez, animações e custo zero, a stack será puramente **Front-end**:

| Componente | Tecnologia | Observação |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 Semântico | Foco em acessibilidade e SEO básico. |
| **Estilo** | CSS3 Avançado | Uso de `flexbox`, `grid`, variáveis CSS (`:root`) para a paleta de cores e `@keyframes` para animações. |
| **Lógica** | JavaScript (ES6+) | Manipulação do DOM, cálculos de probabilidade, geração de imagens para compartilhamento (usando `html2canvas` ou similar via CDN). |
| **Animações** | CSS Transitions + JS | Transições suaves entre "telas" (classe `.active`, `.hidden`). |
| **Hospedagem** | GitHub Pages | Gratuito, SSL incluído, rápido. |
| **Assets** | Canva/Figma + SVG | Ícones vetoriais (SVG) para leveza e cursor customizado. |
| **Bibliotecas** | html2canvas (CDN) | Apenas para gerar a imagem do resultado para compartilhar. |

**Nota sobre Backend:** Não haverá backend. O "ranking" será uma estimativa estatística baseada em dados públicos ou um valor fixo de referência para o usuário, sem necessidade de salvar dados no servidor.

---

## 5. Requisitos de Design e Acessibilidade

- **Responsividade Total:** O layout deve se adaptar perfeitamente de telas de celular (320px) até desktops grandes.
  - *Mobile:* Botões grandes (touch-friendly), texto legível sem zoom.
  - *Desktop:* Espaçamento generoso, animações mais elaboradas.
- **Acessibilidade:**
  - Contraste de cores verificado (ferramentas como WCAG).
  - Suporte a navegação por teclado (Tab).
  - Textos alternativos (`alt`) em todas as imagens/ilustrações.
- **Performance:**
  - Tempo de carregamento inicial < 2 segundos.
  - Uso de animações via `transform` e `opacity` (GPU accelerated) para evitar travamentos.

---

## 6. Detalhamento das Funcionalidades Específicas

### 6.1. Cursor Personalizado
- Implementação via CSS: `cursor: none` no container principal e um elemento `div` absoluto que segue o mouse (via JS) com a imagem de um ícone estilizado.
- Estado de Hover: Quando o mouse passa sobre um botão, o cursor muda de forma (ex: de "olho" para "mão" ou aumenta de tamanho).

### 6.2. Animações de Transição
- **Entrada:** `opacity: 0; transform: translateY(20px);` -> `opacity: 1; transform: translateY(0);` (duração 0.5s).
- **Saída:** `opacity: 0; transform: scale(0.95);` (duração 0.3s).
- **Botões Dinâmicos:** Os botões de resposta aparecem sequencialmente (delay de 0.1s entre cada um) para criar um ritmo de jogo.

### 6.3. Compartilhamento de Resultado
- Ao clicar em "Compartilhar", o site gera uma imagem (canvas) contendo:
  - Título do projeto.
  - Score de Consciência (%).
  - Nível alcançado.
  - Uma frase de impacto ("Você reconheceu o que muitos normalizam").
  - Logo ou marca d'água.
- O usuário pode baixar a imagem ou copiar o texto gerado para colar no WhatsApp/Instagram.

### 6.4. "Tentar Novamente"
- Reinicia o array de questões (opcionalmente embaralhando a ordem das perguntas para variar a experiência).
- Reseta o score e o nível.
- Animação de reset suave.

---

## 7. Critérios de Aceite (Checklist de Desenvolvimento)

- [ ] **Design:** Paleta de cores (Roxo Pastel, Fundo Amarelado, Vermelho) aplicada corretamente.
- [ ] **Cursor:** Cursor personalizado funcionando e responsivo.
- [ ] **Animações:** Transições fluidas entre todas as telas (sem piscadas brancas).
- [ ] **Conteúdo:** 10-12 situações revisadas, sem viés, focadas em violência invisível.
- [ ] **Lógica:** Cálculo de score e porcentagem funcionando corretamente.
- [ ] **Responsividade:** Testado em pelo menos 3 tamanhos de tela (Mobile, Tablet, Desktop).
- [ ] **Compartilhamento:** Funcionalidade de gerar imagem/texto para redes sociais.
- [ ] **Performance:** Site leve, sem dependências pesadas, carregando rápido.
- [ ] **Custo:** Zero custo de hospedagem ou ferramentas.

---

## 8. Riscos e Mitigações

| Risco | Mitigação |
| :--- | :--- |
| **Animações travarem em celulares antigos** | Usar apenas `transform` e `opacity` (acelerados por GPU). Testar em dispositivo de baixo custo. |
| **Conteúdo considerado "político demais"** | Focar estritamente em comportamentos de **segurança e respeito**, citando fontes (ex: Lei Maria da Penha, ONU) como base, não opinião. |
| **Cursor não funcionar em alguns navegadores** | Manter o cursor padrão como fallback caso o CSS `cursor: none` falhe. |
| **Geração de imagem falhar** | Ter um texto alternativo de compartilhamento pronto caso a imagem não gere. |

---

## 9. Próximos Passos (Plano de Ação)

1.  **Definição Final do Roteiro:** Escrever as 12 situações e validar com um grupo de teste (amigos/colegas) para garantir neutralidade e clareza.
2.  **Setup do Projeto:** Criar repositório no GitHub, configurar estrutura de arquivos (`index.html`, `style.css`, `script.js`).
3.  **Implementação do Core:**
    - Criar o HTML estrutural.
    - Aplicar o CSS com a paleta de cores e cursor.
    - Programar a lógica do quiz (array de objetos com perguntas/respostas).
4.  **Refinamento de UI/UX:** Adicionar as animações de entrada/saída e transições.
5.  **Implementação de Recursos Avançados:** Score, cálculo de probabilidade, tela de resultado e compartilhamento.
6.  **Testes e Ajustes:** Testar em múltiplos dispositivos e navegadores.
7.  **Deploy:** Publicar no GitHub Pages.

Este PRD agora está completo, alinhado com sua visão de um projeto **moderno, esteticamente agradável, tecnicamente viável e socialmente relevante**, pronto para ser desenvolvido e apresentado no concurso.