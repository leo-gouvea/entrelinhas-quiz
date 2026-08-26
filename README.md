# Entrelinhas – Você Reconheceria?

Uma experiência digital interativa e gamificada que expõe **violências invisíveis** no cotidiano através de um quiz narrativo.

## 🎯 Sobre o Projeto

O **Entrelinhas** é uma Single Page Application (SPA) educativa que ajuda jovens adultos a identificar comportamentos problemáticos normalizados na sociedade, como:

- Controle disfarçado de cuidado
- Gaslighting e manipulação psicológica
- Culpabilização da vítima
- Isolamento social
- Microagressões de gênero

## ✨ Funcionalidades

- **Quiz Interativo**: 12 situações cotidianas baseadas em dados reais
- **Score Ponderado**: Pontuação baseada na gravidade das questões
- **Ranking Simulado**: Comparação estatística com distribuição normal
- **Feedback Educativo**: Explicações detalhadas para cada resposta
- **Compartilhamento**: Geração de imagem e texto para redes sociais
- **Design Moderno**: Cursor personalizado, animações fluidas, paleta feminista
- **100% Responsivo**: Mobile-first, adaptado para todos os dispositivos
- **Acessível**: Navegação por teclado, contraste WCAG AA, sem barreiras

## 🎨 Identidade Visual

### Paleta de Cores
- **Fundo**: Off-White Amarelado (#FDFCF0)
- **Primária**: Roxo Pastel (#9575CD) - cor histórica do feminismo
- **Sucesso**: Verde Menta (#80CBC4)
- **Alerta**: Vermelho Suave (#EF5350)
- **Texto**: Cinza Escuro (#37474F)

### Tipografia
- **Títulos**: Montserrat (bold)
- **Corpo**: Open Sans (regular)

## 🛠️ Tecnologias

- **HTML5 Semântico**
- **CSS3** (Flexbox, Grid, Animações, Variáveis CSS)
- **JavaScript ES6+** (Vanilla JS, sem frameworks)
- **html2canvas** (geração de imagem para compartilhamento)

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seliga_mocada.git
cd seliga_mocada
```

2. Abra o arquivo `index.html` em qualquer navegador moderno:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos:
```bash
git init
git add .
git commit -m "Initial commit: Entrelinhas quiz"
git branch -M main
git remote add origin https://github.com/seu-usuario/seliga_mocada.git
git push -u origin main
```

3. Ative o GitHub Pages:
   - Vá em **Settings** → **Pages**
   - Em **Source**, selecione **main** branch
   - Clique em **Save**
   - Seu site estará disponível em: `https://seu-usuario.github.io/seliga_mocada/`

## 📁 Estrutura do Projeto

```
seliga_mocada/
├── index.html          # Estrutura HTML (SPA com 5 telas)
├── style.css           # Estilos, animações, responsividade
├── script.js           # Lógica do quiz, cálculos, transições
├── PRD.md              # Documento de requisitos do produto
└── README.md           # Documentação (este arquivo)
```

## 🧪 Testes

### Checklist de Validação

- [x] **Estrutura HTML**: Semântica, acessível
- [x] **CSS**: Paleta aplicada, animações GPU-accelerated
- [x] **JavaScript**: 12 questões com pesos (Baixa/Média/Alta)
- [x] **Cursor Personalizado**: Funcional com estados hover
- [x] **Animações**: Transições suaves entre telas
- [x] **Responsividade**: Mobile (320px) até Desktop (1920px+)
- [x] **Cálculo de Score**: Ponderação por gravidade
- [x] **Ranking**: Distribuição normal simulada
- [x] **Compartilhamento**: html2canvas + clipboard
- [x] **Reset**: Botão "Tentar Novamente" funcional

### Testar Manualmente

1. **Fluxo Completo**:
   - Clique em "Iniciar Jornada"
   - Responda todas as 12 questões
   - Veja o feedback imediato (verde/vermelho)
   - Observe a tela de processamento
   - Confira o resultado com score, nível e ranking
   - Teste o compartilhamento (baixar imagem e copiar texto)
   - Clique em "Tentar Novamente"

2. **Responsividade**:
   - Abra Chrome DevTools (F12)
   - Ative modo responsivo (Ctrl+Shift+M)
   - Teste em iPhone SE (375px), iPad (768px), Desktop (1920px)

3. **Acessibilidade**:
   - Navegue pelo site usando apenas o teclado (Tab + Enter)
   - Use Lighthouse (Chrome DevTools) para auditoria
   - Verifique contraste de cores

## 📊 Dados das Questões

As 12 situações do quiz são baseadas em:
- **Observatório da Violência contra a Mulher**
- **ONU Mulheres**
- **Lei Maria da Penha**

Cada questão tem:
- Situação cotidiana real
- 3 opções de resposta (1 correta)
- Explicação educativa
- Gravidade (Baixa, Média, Alta)

## 🎯 Níveis de Consciência

- **0-40%**: Atenção Necessária
- **41-70%**: Observador em Desenvolvimento
- **71-100%**: Leitor de Entrelinhas

## 🤝 Contribuindo

Contribuições são bem-vindas! Para melhorias:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é educacional e de conscientização social.

## 👤 Autor

**Leonardo José Alves Gouvea**

- Categoria: III – O Lúdico
- Data: Agosto de 2026

## 🙏 Agradecimentos

- Movimento feminista pela luta histórica
- Organizações que documentam e combatem violência de gênero
- Todos que contribuem para um mundo mais consciente e respeitoso

---

**"Você reconheceu o que muitos normalizam"**
