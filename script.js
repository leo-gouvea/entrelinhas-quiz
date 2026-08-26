// ==========================================
// BANCO COMPLETO DE QUESTÕES (30 TOTAL)
// ==========================================

const bancoQuestoes = [
    {
        id: 1,
        situacao: "João insiste repetidamente em ver as mensagens do celular de Maria. Quando ela hesita, ele argumenta que em um relacionamento verdadeiro não existem segredos e que essa transparência total é fundamental para construir confiança mútua entre o casal.",
        opcoes: [
            { texto: "Transparência é importante em relacionamentos sérios", correto: false },
            { texto: "Trata-se de controle mascarado como preocupação", correto: true },
            { texto: "Cada casal define seus próprios limites", correto: false }
        ],
        explicacao: "Invadir a privacidade da parceira sob o pretexto de 'confiança' ou 'transparência' é uma forma de controle psicológico. Relacionamentos saudáveis respeitam a autonomia e os limites individuais de cada pessoa, incluindo o direito à privacidade.",
        gravidade: "Alta"
    },
    {
        id: 2,
        situacao: "Durante uma discussão sobre algo que aconteceu há duas semanas, Pedro olha diretamente para Ana e diz com firmeza: 'Você está inventando isso na sua cabeça. Esse episódio nunca aconteceu da forma que você está contando. Você sempre exagera e distorce as coisas quando fica nervosa.'",
        opcoes: [
            { texto: "Pedro defende sua versão dos fatos", correto: false },
            { texto: "Isso configura gaslighting, manipulação psicológica", correto: true },
            { texto: "Memórias podem falhar sob estresse emocional", correto: false }
        ],
        explicacao: "Gaslighting é uma forma grave de abuso psicológico onde o agressor sistematicamente faz a vítima questionar sua própria percepção da realidade, memória e sanidade mental. Esse padrão de comportamento é usado como estratégia de controle e dominação.",
        gravidade: "Alta"
    },
    {
        id: 3,
        situacao: "Carlos observa a roupa que sua namorada escolheu para sair e comenta com desaprovação: 'Sério que você vai sair assim? Esse decote tá muito chamativo. Não quero que as pessoas pensem mal de você ou do nosso relacionamento. Troca de roupa, por favor.'",
        opcoes: [
            { texto: "Ele se preocupa com a reputação dela", correto: false },
            { texto: "Configura controle sobre autonomia corporal", correto: true },
            { texto: "Casais podem opinar sobre vestimenta", correto: false }
        ],
        explicacao: "Controlar as escolhas de vestimenta da parceira sob qualquer pretexto é cercear sua liberdade e autonomia corporal. O corpo de cada pessoa pertence a ela mesma, e ninguém tem o direito de determinar como outra pessoa deve ou não se vestir.",
        gravidade: "Alta"
    },
    {
        id: 4,
        situacao: "Durante uma reunião importante com clientes, Mariana está apresentando os resultados do trimestre quando seu colega Ricardo a interrompe no meio da explicação técnica: 'Deixa eu complementar aqui, Mariana. O que ela quis dizer é que...' e passa a reexplicar exatamente o que ela estava dizendo.",
        opcoes: [
            { texto: "Ricardo quer garantir clareza na comunicação", correto: false },
            { texto: "Mansplaining que invalida a competência dela", correto: true },
            { texto: "Colaboração natural em ambiente corporativo", correto: false }
        ],
        explicacao: "Mansplaining ocorre quando alguém assume condescendentemente que uma mulher não tem capacidade de explicar determinado assunto e toma sua fala, frequentemente reexplicando o que ela já estava dizendo. Isso constitui microagressão de gênero que mina credibilidade profissional.",
        gravidade: "Média"
    },
    {
        id: 5,
        situacao: "No dia seguinte a uma festa, circula nos grupos de WhatsApp um comentário sobre uma conhecida: 'A Fernanda bebeu demais ontem e acabou sendo assediada por aquele cara. Ela tinha que ter mais juízo, né? Sabia que ele era problemático e mesmo assim ficou sozinha com ele.'",
        opcoes: [
            { texto: "Alerta importante sobre comportamento de risco", correto: false },
            { texto: "Culpabilização da vítima por violência sofrida", correto: true },
            { texto: "Reflexão sobre consequências de escolhas", correto: false }
        ],
        explicacao: "Culpar a vítima por violência sexual sofrida transfere a responsabilidade moral e legal do agressor para quem foi agredida. A única pessoa responsável por assédio ou violência sexual é exclusivamente quem comete o ato, independentemente de qualquer circunstância.",
        gravidade: "Alta"
    },
    {
        id: 6,
        situacao: "Toda vez que Juliana senta ao volante do carro do casal, Bruno faz questão de comentar em tom de brincadeira: 'Lá vamos nós... mulher no volante, perigo constante!' Quando ela reclama, ele responde: 'Relaxa, é só uma piada! Todo mundo fala isso, não precisa levar tão a sério.'",
        opcoes: [
            { texto: "Piadas inofensivas fazem parte da cultura popular", correto: false },
            { texto: "Humor usado para diminuir capacidade feminina", correto: true },
            { texto: "Ditado tradicional sem conotação pejorativa", correto: false }
        ],
        explicacao: "Piadas e 'brincadeiras' repetitivas baseadas em estereótipos de gênero são microagressões que sistematicamente desvalorizam e questionam a competência de mulheres. O humor não serve como justificativa para perpetuar preconceito e discriminação.",
        gravidade: "Média"
    },
    {
        id: 7,
        situacao: "Marcos demonstra desconforto sempre que sua namorada menciona planos com as amigas. Eventualmente, ele expressa: 'Essas suas amigas não fazem bem pra você. Elas vivem te colocando contra mim e te incentivam a sair demais. Acho melhor você se afastar um pouco delas e passar mais tempo comigo e com minha família.'",
        opcoes: [
            { texto: "Protege o relacionamento de influências externas", correto: false },
            { texto: "Isolamento social como estratégia de controle", correto: true },
            { texto: "Sugestão válida quando amizades são tóxicas", correto: false }
        ],
        explicacao: "Afastar a parceira de amigos e familiares é uma tática clássica de relacionamentos abusivos. O isolamento social enfraquece a rede de apoio da vítima, tornando-a emocionalmente dependente e mais vulnerável ao controle do agressor.",
        gravidade: "Alta"
    },
    {
        id: 8,
        situacao: "Depois de gritar com Júlia durante uma discussão acalorada sobre finanças, Felipe percebe que ela está assustada e visivelmente abalada. Ele então se aproxima, abraça ela e diz com os olhos marejados: 'Me desculpa, amor. Eu só perdi o controle porque te amo demais. Fico muito nervoso quando penso em te perder.'",
        opcoes: [
            { texto: "Amor intenso pode provocar reações extremas", correto: false },
            { texto: "Manipulação emocional que justifica agressividade", correto: true },
            { texto: "Reconhecimento sincero de erro demonstra maturidade", correto: false }
        ],
        explicacao: "Usar amor, paixão ou medo de perda como justificativa para comportamento agressivo é manipulação emocional. Amor verdadeiro se expressa através de respeito, não de gritos, intimidação ou qualquer forma de agressão psicológica ou física.",
        gravidade: "Alta"
    },
    {
        id: 9,
        situacao: "Durante uma entrevista para uma vaga de gerência, o recrutador observa a aliança de casamento da candidata e pergunta com aparente naturalidade: 'Vi que você é casada. Vocês pretendem ter filhos nos próximos dois ou três anos? Preciso entender seu planejamento familiar para avaliar a adequação ao cargo.'",
        opcoes: [
            { texto: "Questão pertinente para planejamento organizacional", correto: false },
            { texto: "Discriminação de gênero proibida por lei", correto: true },
            { texto: "Candidata tem direito de responder se quiser", correto: false }
        ],
        explicacao: "Questionar planos reprodutivos ou familiares em processos seletivos constitui discriminação de gênero explícita e é expressamente proibido por lei. Decisões de contratação devem basear-se exclusivamente em competências profissionais, não em vida pessoal ou reprodutiva.",
        gravidade: "Média"
    },
    {
        id: 10,
        situacao: "Rafael instalou um aplicativo de rastreamento no celular da namorada que permite acompanhar sua localização em tempo real. Ele confere várias vezes ao dia onde ela está e fica visivelmente irritado quando ela demora mais de 10 minutos para responder suas mensagens, enviando múltiplas cobranças seguidas.",
        opcoes: [
            { texto: "Recursos tecnológicos normais em relacionamentos atuais", correto: false },
            { texto: "Vigilância e controle característicos de abuso", correto: true },
            { texto: "Demonstração contemporânea de cuidado e interesse", correto: false }
        ],
        explicacao: "Monitoramento constante de localização, cobranças por respostas imediatas e vigilância digital são manifestações claras de controle e violência psicológica. Relacionamentos saudáveis são construídos sobre confiança mútua, não sobre vigilância e restrição de liberdade.",
        gravidade: "Alta"
    },
    {
        id: 11,
        situacao: "Em uma festa de aniversário, alguém se aproxima de Carla e comenta em tom de admiração: 'Nossa, você está super bem! Nem parece que já tem 42 anos. Você se cuida muito bem, hein? Parece ter uns 30, no máximo.'",
        opcoes: [
            { texto: "Elogio sincero à aparência jovem", correto: false },
            { texto: "Reforça etarismo e padrões irreais de beleza", correto: true },
            { texto: "Forma socialmente aceita de fazer um cumprimento", correto: false }
        ],
        explicacao: "Esse tipo de 'elogio' implica que existe idade-limite para se ter boa aparência e reforça preconceito etário, especialmente contra mulheres. Beleza não possui prazo de validade, e vincular juventude a valor estético perpetua padrões irreais e discriminatórios.",
        gravidade: "Baixa"
    },
    {
        id: 12,
        situacao: "Paula chega em casa animada para contar ao marido sobre sua promoção no trabalho. Ele ouve com expressão neutra e responde: 'Que bom pra você. Mas não esquece que agora você vai ter ainda mais responsabilidade aqui em casa também, né? As crianças e a casa continuam precisando de atenção.'",
        opcoes: [
            { texto: "Lembrete realista sobre equilíbrio vida-trabalho", correto: false },
            { texto: "Diminuição de conquista reforçando papéis de gênero", correto: true },
            { texto: "Preocupação legítima com divisão de tarefas", correto: false }
        ],
        explicacao: "Minimizar conquistas profissionais de mulheres e imediatamente lembrá-las de 'suas responsabilidades domésticas' reforça desigualdade de gênero e divisão injusta de trabalho doméstico. Isso desvaloriza realizações femininas e perpetua a ideia de que mulheres são primariamente responsáveis pelo lar.",
        gravidade: "Média"
    },
    {
        id: 13,
        situacao: "Em uma roda de amigos, André comenta sobre a ex-namorada: 'Ela era muito sensível, vivia chorando e fazendo drama por qualquer coisinha. Mulher é tudo histérica mesmo, né? Não dá pra levar a sério quando elas ficam emotivas.'",
        opcoes: [
            { texto: "Observação baseada em experiência pessoal", correto: false },
            { texto: "Invalida emoções femininas através de estereótipo", correto: true },
            { texto: "Crítica ao comportamento específico da ex", correto: false }
        ],
        explicacao: "Rotular mulheres como 'histéricas' ou 'dramáticas' por expressarem emoções é uma forma de invalidação emocional baseada em estereótipos sexistas. Isso deslegitima sentimentos e experiências femininas, impedindo que sejam levadas a sério.",
        gravidade: "Média"
    },
    {
        id: 14,
        situacao: "Beatriz trabalha como engenheira em uma obra. Quando apresenta soluções técnicas complexas, o mestre de obras frequentemente ignora suas orientações e busca confirmação com engenheiros homens da equipe antes de implementar qualquer mudança.",
        opcoes: [
            { texto: "Busca por segunda opinião é prudente em projetos", correto: false },
            { texto: "Deslegitimação profissional baseada em gênero", correto: true },
            { texto: "Hierarquia natural baseada em experiência de campo", correto: false }
        ],
        explicacao: "Sistematicamente questionar ou ignorar competência técnica de uma profissional mulher enquanto aceita automaticamente a palavra de colegas homens configura discriminação de gênero no ambiente de trabalho. A autoridade profissional deve basear-se em qualificação, não em gênero.",
        gravidade: "Média"
    },
    {
        id: 15,
        situacao: "Thiago pega o celular de sua namorada enquanto ela está no banho e lê conversas privadas com as amigas. Quando confrontado, ele justifica: 'Se você não tem nada a esconder, por que se importa que eu olhe? Só estava checando se você estava falando mal de mim.'",
        opcoes: [
            { texto: "Insegurança justifica necessidade de verificação", correto: false },
            { texto: "Violação de privacidade e invasão de confiança", correto: true },
            { texto: "Transparência digital fortalece relacionamentos", correto: false }
        ],
        explicacao: "Invadir privacidade digital da parceira sem consentimento é violação grave de limites pessoais. A justificativa de 'não ter nada a esconder' inverte a lógica: privacidade é um direito, não algo que precisa ser justificado ou conquistado.",
        gravidade: "Alta"
    },
    {
        id: 16,
        situacao: "Durante o jantar em família, o sogro de Camila comenta: 'Quando você vai dar um neto pro meu filho? Vocês já estão casados há três anos. Você não tá ficando nova não, viu? Depois fica difícil engravidar.'",
        opcoes: [
            { texto: "Preocupação familiar legítima com descendência", correto: false },
            { texto: "Pressão social e invasão de decisão reprodutiva", correto: true },
            { texto: "Conselho bem-intencionado sobre planejamento familiar", correto: false }
        ],
        explicacao: "Pressionar mulheres sobre maternidade e fazer cobranças sobre decisões reprodutivas é invasivo e desrespeitoso. Ter ou não filhos, e quando tê-los, é decisão exclusiva do casal ou da mulher, não cabendo pressão ou julgamento externo.",
        gravidade: "Média"
    },
    {
        id: 17,
        situacao: "Renata está falando sobre sua experiência com machismo no trabalho quando seu namorado interrompe: 'Você exagera. Machismo não existe mais, as mulheres hoje têm os mesmos direitos. Você que interpreta tudo como ataque.'",
        opcoes: [
            { texto: "Oferece perspectiva alternativa sobre igualdade", correto: false },
            { texto: "Invalida experiência vivida através de negação", correto: true },
            { texto: "Questiona interpretação subjetiva de eventos", correto: false }
        ],
        explicacao: "Negar a existência de discriminação que outra pessoa vivencia e acusá-la de 'exagero' ou 'interpretação errada' é invalidação de experiência. Isso silencia vítimas e perpetua a invisibilização de violências sistêmicas.",
        gravidade: "Média"
    },
    {
        id: 18,
        situacao: "Laura é a única mulher em uma reunião executiva. Quando ela começa a falar, é repetidamente interrompida por colegas homens. Quando um deles repete exatamente sua ideia minutos depois, todos elogiam a 'brilhante contribuição dele'.",
        opcoes: [
            { texto: "Dinâmica comum em ambientes corporativos competitivos", correto: false },
            { texto: "Apropriação de ideias e silenciamento sistemático", correto: true },
            { texto: "Falha de comunicação sobre autoria de propostas", correto: false }
        ],
        explicacao: "Interromper sistematicamente mulheres e depois apropriar-se de suas ideias é uma forma de silenciamento e invisibilização profissional baseada em gênero. Esse padrão nega reconhecimento e oportunidades de crescimento.",
        gravidade: "Média"
    },
    {
        id: 19,
        situacao: "Durante uma festa, um homem encosta repetidamente em Sabrina enquanto dançam, mesmo depois dela se afastar várias vezes. Quando ela finalmente diz que está incomodada, ele responde: 'Que exagero! É assim que se dança, relaxa um pouco.'",
        opcoes: [
            { texto: "Diferença de interpretação sobre espaço pessoal", correto: false },
            { texto: "Assédio com invalidação do desconforto dela", correto: true },
            { texto: "Mal-entendido comum em ambientes festivos", correto: false }
        ],
        explicacao: "Ignorar sinais claros de desconforto físico e invalidar o sentimento de invasão da outra pessoa configura assédio. Consentimento deve ser contínuo e qualquer hesitação ou recuo deve ser imediatamente respeitado.",
        gravidade: "Alta"
    },
    {
        id: 20,
        situacao: "Priscila é médica cirurgiã. Pacientes frequentemente entram no consultório, olham para ela e perguntam: 'O médico já vai chegar?' Quando ela esclarece que ela é a médica, muitos demonstram surpresa ou desconfiança visível.",
        opcoes: [
            { texto: "Expectativa razoável baseada em estatísticas da área", correto: false },
            { texto: "Preconceito de gênero que questiona autoridade", correto: true },
            { texto: "Confusão inicial sem intenção discriminatória", correto: false }
        ],
        explicacao: "Presumir automaticamente que profissionais de determinadas áreas são homens e demonstrar surpresa ou desconfiança ao encontrar uma mulher reflete viés de gênero que questiona competência e autoridade feminina em posições de poder.",
        gravidade: "Média"
    },
    {
        id: 21,
        situacao: "Daniela conta ao namorado que um colega de trabalho fez comentários desconfortáveis sobre seu corpo. Ele responde irritado: 'Você deve ter dado mole. Por que você usa essas roupas justas? Depois reclama que os caras ficam olhando.'",
        opcoes: [
            { texto: "Alerta sobre como comportamento pode ser interpretado", correto: false },
            { texto: "Culpabilização que transfere responsabilidade ao assediador", correto: true },
            { texto: "Conselho sobre como evitar situações constrangedoras", correto: false }
        ],
        explicacao: "Culpar a vítima de assédio por sua vestimenta ou comportamento transfere a responsabilidade de quem assedia para quem é assediada. A roupa de uma pessoa nunca justifica ou provoca desrespeito, assédio ou violência.",
        gravidade: "Alta"
    },
    {
        id: 22,
        situacao: "Quando Vanessa expressa opinião política diferente do marido durante um jantar com amigos, ele a interrompe e diz em tom condescendente: 'Meu amor, você não entende bem desse assunto. Deixa eu explicar como funciona de verdade.'",
        opcoes: [
            { texto: "Correção respeitosa de informação imprecisa", correto: false },
            { texto: "Desautorização pública que infantiliza a parceira", correto: true },
            { texto: "Complemento necessário para esclarecer posição do casal", correto: false }
        ],
        explicacao: "Desautorizar e infantilizar a parceira publicamente, especialmente com tom condescendente, é forma de diminuição e humilhação. Isso mina sua credibilidade social e reforça dinâmica de poder desigual no relacionamento.",
        gravidade: "Média"
    },
    {
        id: 23,
        situacao: "Gustavo controla todas as senhas das redes sociais da namorada e exige que ela lhe mostre todas as conversas. Ele explica: 'É pra nossa proteção. Assim ninguém consegue criar problema entre a gente. Se você me ama de verdade, não vai se importar.'",
        opcoes: [
            { texto: "Medida preventiva para proteger relacionamento", correto: false },
            { texto: "Controle digital coercitivo e manipulação emocional", correto: true },
            { texto: "Acordo de transparência mútua no casal", correto: false }
        ],
        explicacao: "Exigir acesso total a contas pessoais e monitorar comunicações privadas é controle digital abusivo. Usar amor como justificativa para violar privacidade e autonomia constitui manipulação emocional e violência psicológica.",
        gravidade: "Alta"
    },
    {
        id: 24,
        situacao: "Melissa recebe elogios constantes sobre sua aparência física em reuniões profissionais, enquanto contribuições técnicas são sistematicamente ignoradas. Colegas homens têm suas competências destacadas, mas ela só ouve sobre cabelo, roupa e sorriso.",
        opcoes: [
            { texto: "Elogios demonstram ambiente de trabalho amigável", correto: false },
            { texto: "Objetificação que reduz valor à aparência física", correto: true },
            { texto: "Comentários positivos que valorizam múltiplos aspectos", correto: false }
        ],
        explicacao: "Reduzir uma profissional a atributos físicos enquanto ignora competências técnicas é objetificação que diminui seu valor como profissional. Isso reforça a ideia de que o principal valor de mulheres está na aparência, não em suas habilidades.",
        gravidade: "Média"
    },
    {
        id: 25,
        situacao: "Sofia descobre que ganha 30% menos que colegas homens exercendo a mesma função e com qualificações similares. Quando questiona o gestor, ele explica: 'Eles têm família pra sustentar. Você ainda mora com os pais, não precisa tanto.'",
        opcoes: [
            { texto: "Ajuste salarial baseado em necessidade individual", correto: false },
            { texto: "Discriminação salarial ilegal baseada em gênero", correto: true },
            { texto: "Critério legítimo de diferenciação remuneratória", correto: false }
        ],
        explicacao: "Pagar salários diferentes para pessoas exercendo mesma função com qualificações equivalentes, baseando-se em gênero ou supostas 'necessidades pessoais', é discriminação salarial ilegal. Remuneração deve basear-se no trabalho realizado, não em características pessoais.",
        gravidade: "Alta"
    },
    {
        id: 26,
        situacao: "Quando Helena critica comportamento controlador do namorado, ele responde: 'Você tá igual sua mãe, sempre reclamando de tudo. Por isso seu pai largou ela. Quer que eu faça o mesmo com você?' Depois disso, Helena evita tocar no assunto.",
        opcoes: [
            { texto: "Comparação que ajuda reflexão sobre padrões", correto: false },
            { texto: "Ameaça velada que silencia através de medo", correto: true },
            { texto: "Observação sobre dinâmica familiar repetitiva", correto: false }
        ],
        explicacao: "Fazer ameaças veladas de abandono para silenciar críticas legítimas é intimidação emocional. Usar vulnerabilidades e histórico familiar da parceira como arma para controlar comportamento configura violência psicológica.",
        gravidade: "Alta"
    },
    {
        id: 27,
        situacao: "Adriana trabalha em TI e frequentemente precisa explicar conceitos técnicos básicos para desenvolvedores homens juniores. Porém, quando ela precisa de informação, eles sempre assumem que ela não entende e explicam desde o princípio, mesmo ela tendo senioridade.",
        opcoes: [
            { texto: "Zelo pedagógico para garantir compreensão completa", correto: false },
            { texto: "Presunção de incompetência baseada em gênero", correto: true },
            { texto: "Abordagem didática padrão em ambientes técnicos", correto: false }
        ],
        explicacao: "Presumir automaticamente que uma profissional mulher não possui conhecimento técnico, mesmo com evidências contrárias de sua senioridade, enquanto homens menos experientes são presumidos competentes, é viés de gênero que mina autoridade profissional.",
        gravidade: "Média"
    },
    {
        id: 28,
        situacao: "Depois de uma crise de ciúmes onde quebrou objetos da casa, Leonardo chora e implora perdão a Isabela: 'Eu não queria te assustar, mas quando penso em te perder eu enlouqueço. Você é tudo pra mim. Prometo que vou mudar, mas não me abandona agora.'",
        opcoes: [
            { texto: "Demonstração sincera de arrependimento e amor", correto: false },
            { texto: "Ciclo de violência com manipulação emocional", correto: true },
            { texto: "Vulnerabilidade emocional que indica desejo de mudança", correto: false }
        ],
        explicacao: "Episódios de violência seguidos de pedidos dramáticos de desculpas e promessas de mudança fazem parte do ciclo clássico de relacionamentos abusivos. Essa alternância entre agressão e reconciliação mantém a vítima presa em esperança de mudança que raramente acontece.",
        gravidade: "Alta"
    },
    {
        id: 29,
        situacao: "Fernanda está participando de um happy hour corporativo quando o diretor se aproxima, coloca a mão em sua cintura e diz próximo ao ouvido: 'Você está linda hoje. Se quiser crescer aqui na empresa, a gente podia conversar melhor em outro ambiente.'",
        opcoes: [
            { texto: "Elogio profissional com oferta de mentoria", correto: false },
            { texto: "Assédio sexual com insinuação de chantagem", correto: true },
            { texto: "Abordagem desajeitada sem má intenção", correto: false }
        ],
        explicacao: "Fazer contato físico não consentido e condicionar oportunidades profissionais a favores sexuais é assédio sexual e abuso de poder. Isso cria ambiente de trabalho hostil e é crime previsto em lei.",
        gravidade: "Alta"
    },
    {
        id: 30,
        situacao: "Amanda divide apartamento com o namorado. Ele trabalha 8 horas por dia, ela trabalha 8 horas por dia. Chegando em casa, ela cozinha, limpa e lava, enquanto ele joga videogame. Quando ela reclama, ele diz: 'Mas eu lavo o banheiro todo sábado. Você quer o quê? Que eu vire doméstica?'",
        opcoes: [
            { texto: "Divisão de tarefas baseada em preferências pessoais", correto: false },
            { texto: "Sobrecarga doméstica feminina e desvalorização do trabalho", correto: true },
            { texto: "Cada um contribui conforme suas habilidades naturais", correto: false }
        ],
        explicacao: "Esperar que mulheres assumam desproporcionalmente tarefas domésticas mesmo trabalhando as mesmas horas é perpetuação da divisão sexual do trabalho. Chamar trabalho doméstico de 'coisa de doméstica' revela desprezo por atividade historicamente feminizada e essencial.",
        gravidade: "Média"
    }
];

// ==========================================
// VARIÁVEIS GLOBAIS
// ==========================================

let questoesAtivas = []; // 12 questões sorteadas para este quiz
let indicePerguntaAtual = 0;
let respostasUsuario = [];
let pontuacaoTotal = 0;
let html2canvasCarregado = false;
let respostaBloqueada = false; // Prevenir cliques múltiplos

// ==========================================
// WEB AUDIO API - SISTEMA DE SONS
// ==========================================

const AudioContextClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
const audioContext = new AudioContextClass();

function playSwipeSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playCorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5

    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playIncorrectSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playResultSound(scorePercentual) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Som varia com o score: maior score = frequência mais alta e duração mais longa
    const baseFreq = 300 + (scorePercentual * 3); // 300Hz a 600Hz
    const duration = 0.5 + (scorePercentual / 100); // 0.5s a 1.5s

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(baseFreq, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, audioContext.currentTime + duration);

    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function playHoverSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);

    gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
}

// ==========================================
// CURSOR PERSONALIZADO
// ==========================================

const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Adicionar classe hover em elementos clicáveis
function atualizarEventosCursor() {
    // Usar delegação de eventos para evitar acúmulo de listeners
    document.body.addEventListener('mouseenter', (e) => {
        if (e.target.matches('button, a, .botao, .botao-opcao')) {
            cursor.classList.add('hover');
            playHoverSound();
        }
    }, true);

    document.body.addEventListener('mouseleave', (e) => {
        if (e.target.matches('button, a, .botao, .botao-opcao')) {
            cursor.classList.remove('hover');
        }
    }, true);
}

// Chamar apenas uma vez na inicialização
atualizarEventosCursor();

// ==========================================
// NAVEGAÇÃO ENTRE TELAS COM ANIMAÇÃO SLIDE
// ==========================================

function mostrarTela(idTela, direcao = 'direita') {
    const telaAtual = document.querySelector('.tela-ativa');

    playSwipeSound();

    if (telaAtual) {
        telaAtual.classList.remove('tela-ativa');

        // Animação especial: tela-inicio sai para cima quando vai para tela-quiz
        if (telaAtual.id === 'tela-inicio' && idTela === 'tela-quiz') {
            telaAtual.classList.add('tela-saindo-cima');

            // Mudar cor de fundo durante a animação
            setTimeout(() => {
                document.body.classList.add('quiz-ativo');
            }, 300);

            setTimeout(() => {
                telaAtual.classList.remove('tela-saindo-cima');
                telaAtual.style.display = 'none';
                telaAtual.style.transform = ''; // Limpar transform para evitar retorno
            }, 600);
        } else {
            // Animações normais para outras transições
            const classeSaida = direcao === 'direita' ? 'tela-saindo-esquerda' : 'tela-saindo-direita';
            telaAtual.classList.add(classeSaida);

            setTimeout(() => {
                telaAtual.classList.remove('tela-saindo-esquerda', 'tela-saindo-direita');
                telaAtual.style.display = 'none';
                telaAtual.style.transform = ''; // Limpar transform
            }, 400);

            // Remover cor de fundo roxa ao sair do quiz
            if (telaAtual.id === 'tela-quiz' || telaAtual.id === 'tela-loading') {
                document.body.classList.remove('quiz-ativo');
            }
        }
    }

    // Delay apropriado baseado na animação de saída
    const delay = (telaAtual && telaAtual.id === 'tela-inicio' && idTela === 'tela-quiz') ? 600 : 400;

    setTimeout(() => {
        const novaTela = document.getElementById(idTela);
        novaTela.style.display = 'flex';
        novaTela.style.alignItems = 'center';
        novaTela.style.justifyContent = 'center';

        // Tela-quiz sempre entra de baixo quando vem da tela-inicio
        if (idTela === 'tela-quiz' && telaAtual && telaAtual.id === 'tela-inicio') {
            novaTela.classList.add('entrando-baixo');
            setTimeout(() => {
                novaTela.classList.remove('entrando-baixo');
                novaTela.classList.add('tela-ativa');
            }, 50);
        } else {
            // Animações normais para outras transições
            const classeEntrada = direcao === 'direita' ? 'entrando-direita' : 'entrando-esquerda';
            novaTela.classList.add(classeEntrada);

            setTimeout(() => {
                novaTela.classList.remove('entrando-direita', 'entrando-esquerda');
                novaTela.classList.add('tela-ativa');
            }, 50);
        }
    }, delay);
}

// ==========================================
// LÓGICA DO QUIZ
// ==========================================

function selecionarQuestoesAleatorias() {
    // Embaralha banco completo e pega 12 questões
    const embaralhado = [...bancoQuestoes].sort(() => Math.random() - 0.5);
    return embaralhado.slice(0, 12);
}

function iniciarQuiz() {
    indicePerguntaAtual = 0;
    respostasUsuario = [];
    pontuacaoTotal = 0;
    questoesAtivas = selecionarQuestoesAleatorias();

    mostrarTela('tela-quiz', 'direita');
    carregarPergunta();
}

function carregarPergunta() {
    const questao = questoesAtivas[indicePerguntaAtual];
    const situacaoTexto = document.getElementById('situacao-texto');
    const opcoesContainer = document.getElementById('opcoes-container');
    const feedbackDiv = document.getElementById('feedback');
    const questaoAtualSpan = document.getElementById('questao-atual');
    const questaoTotalSpan = document.getElementById('questao-total');
    const progressoPreenchido = document.getElementById('progresso-preenchido');

    respostaBloqueada = false; // Reset do bloqueio de cliques

    // Atualizar progresso
    questaoAtualSpan.textContent = indicePerguntaAtual + 1;
    questaoTotalSpan.textContent = questoesAtivas.length;
    const percentualProgresso = ((indicePerguntaAtual + 1) / questoesAtivas.length) * 100;
    progressoPreenchido.style.width = percentualProgresso + '%';

    // Limpar conteúdo anterior com animação de saída
    opcoesContainer.style.opacity = '0';
    opcoesContainer.style.transform = 'translateX(-50px)';

    setTimeout(() => {
        situacaoTexto.textContent = '';
        opcoesContainer.innerHTML = '';
        feedbackDiv.classList.add('escondido');

        // Resetar e animar situação
        situacaoTexto.style.opacity = '0';
        situacaoTexto.textContent = questao.situacao;

        setTimeout(() => {
            situacaoTexto.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            situacaoTexto.style.opacity = '1';
            situacaoTexto.style.transform = 'translateY(0)';
        }, 50);

        // Criar botões de opções vindos da DIREITA com delay sequencial
        opcoesContainer.style.opacity = '1';
        opcoesContainer.style.transform = 'translateX(0)';
        opcoesContainer.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        questao.opcoes.forEach((opcao, index) => {
            setTimeout(() => {
                const botao = document.createElement('button');
                botao.classList.add('botao', 'botao-opcao');
                botao.textContent = opcao.texto;
                botao.style.opacity = '0';
                botao.style.transform = 'translateX(100px)'; // Vem da DIREITA

                // CORREÇÃO: Handler único de clique (sem re-adicionar listeners de hover)
                botao.addEventListener('click', () => responderPergunta(opcao, botao), { once: true });

                opcoesContainer.appendChild(botao);

                // Animar entrada da direita
                setTimeout(() => {
                    botao.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    botao.style.opacity = '1';
                    botao.style.transform = 'translateX(0)';
                }, 50);
            }, 400 + (index * 150));
        });
    }, 200);

    // CORREÇÃO: Event listeners de cursor adicionados uma única vez via delegação
    // Remover chamada para atualizarEventosCursor() que reaplicava listeners
}

function responderPergunta(opcao, botaoElemento) {
    // Prevenir cliques múltiplos
    if (respostaBloqueada) return;
    respostaBloqueada = true;

    const questao = questoesAtivas[indicePerguntaAtual];
    const todosOsBotoes = document.querySelectorAll('.botao-opcao');
    const feedbackDiv = document.getElementById('feedback');
    const feedbackTitulo = document.getElementById('feedback-titulo');
    const feedbackExplicacao = document.getElementById('feedback-explicacao');

    // Desabilitar todos os botões
    todosOsBotoes.forEach(btn => btn.disabled = true);

    // Marcar resposta e tocar som (SEM OVERLAP)
    if (opcao.correto) {
        botaoElemento.classList.add('correto');
        feedbackDiv.classList.remove('incorreto');
        feedbackDiv.classList.add('correto');
        feedbackTitulo.textContent = '✓ Correto!';
        playCorrectSound();

        // Adicionar pontuação ponderada
        const peso = questao.gravidade === 'Alta' ? 3 : questao.gravidade === 'Média' ? 2 : 1;
        pontuacaoTotal += peso;
    } else {
        botaoElemento.classList.add('incorreto');
        feedbackDiv.classList.remove('correto');
        feedbackDiv.classList.add('incorreto');
        feedbackTitulo.textContent = '✗ Incorreto';
        playIncorrectSound();

        // Mostrar qual era a resposta correta
        todosOsBotoes.forEach(btn => {
            const textoBtn = btn.textContent;
            const opcaoCorreta = questao.opcoes.find(o => o.texto === textoBtn && o.correto);
            if (opcaoCorreta) {
                btn.classList.add('correto');
            }
        });
    }

    // Mostrar explicação
    feedbackExplicacao.textContent = questao.explicacao;
    feedbackDiv.classList.remove('escondido');

    // Registrar resposta
    respostasUsuario.push({
        questao: questao,
        respostaUsuario: opcao,
        correto: opcao.correto
    });

    // Próxima pergunta ou resultado
    setTimeout(() => {
        indicePerguntaAtual++;
        if (indicePerguntaAtual < questoesAtivas.length) {
            // Animar saída da questão atual para a esquerda antes de carregar a próxima
            const opcoesContainer = document.getElementById('opcoes-container');
            opcoesContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            opcoesContainer.style.opacity = '0';
            opcoesContainer.style.transform = 'translateX(-100px)';

            setTimeout(() => {
                carregarPergunta();
            }, 300);
        } else {
            // Última questão - ir para tela de processamento SEM tocar som adicional
            setTimeout(() => {
                mostrarTelaProcessamento();
            }, 200);
        }
    }, 3200);
}

// ==========================================
// TELA DE PROCESSAMENTO
// ==========================================

function mostrarTelaProcessamento() {
    mostrarTela('tela-loading', 'direita');

    setTimeout(() => {
        calcularResultado();
    }, 2500);
}

// ==========================================
// CÁLCULO DE SCORE E RANKING
// ==========================================

function calcularResultado() {
    // Calcular pontuação máxima possível das questões ativas
    const pontuacaoMaxima = questoesAtivas.reduce((sum, q) => {
        const peso = q.gravidade === 'Alta' ? 3 : q.gravidade === 'Média' ? 2 : 1;
        return sum + peso;
    }, 0);

    // Calcular score percentual
    const score = Math.round((pontuacaoTotal / pontuacaoMaxima) * 100);

    // Tocar som baseado no resultado
    playResultSound(score);

    // Calcular ranking simulado (distribuição normal)
    const ranking = calcularRanking(score);

    // Determinar nível
    let nivel, descricao;
    if (score <= 40) {
        nivel = 'Atenção Necessária';
        descricao = 'Muitas situações de violência passam despercebidas. É importante desenvolver consciência crítica sobre comportamentos normalizados.';
    } else if (score <= 70) {
        nivel = 'Observador em Desenvolvimento';
        descricao = 'Você identifica algumas situações problemáticas, mas ainda há espaço para aprimorar sua percepção sobre violências sutis.';
    } else {
        nivel = 'Leitor de Entrelinhas';
        descricao = 'Você tem uma visão aguçada e consegue identificar violências invisíveis que muitos normalizam. Continue atento(a)!';
    }

    exibirResultado(score, ranking, nivel, descricao);
}

function calcularRanking(score) {
    // Simulação baseada em distribuição normal
    // Média = 60%, Desvio padrão = 15%
    const media = 60;
    const desvio = 15;
    const z = (score - media) / desvio;
    const percentil = cumulativeNormal(z) * 100;
    return Math.max(0, Math.min(100, Math.round(percentil)));
}

// Função de distribuição normal acumulada (aproximação)
function cumulativeNormal(z) {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
}

function exibirResultado(score, ranking, nivel, descricao) {
    document.getElementById('score-valor').textContent = score + '%';
    document.getElementById('nivel-titulo').textContent = nivel;
    document.getElementById('nivel-descricao').textContent = descricao;
    document.getElementById('ranking-texto').textContent =
        `Você está acima de ${ranking}% dos participantes`;

    // Atualizar card de compartilhamento
    document.getElementById('card-score').textContent = score + '%';
    document.getElementById('card-nivel').textContent = nivel;

    mostrarTela('tela-resultado', 'direita');
}

// ==========================================
// REINICIAR QUIZ
// ==========================================

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    respostasUsuario = [];
    pontuacaoTotal = 0;
    questoesAtivas = selecionarQuestoesAleatorias(); // Novas questões aleatórias

    mostrarTela('tela-inicio', 'esquerda');
}

// ==========================================
// COMPARTILHAMENTO
// ==========================================

async function gerarImagemResultado() {
    if (!html2canvasCarregado) {
        html2canvasCarregado = true;
    }

    const elementoResultado = document.getElementById('card-resultado');

    try {
        const canvas = await html2canvas(elementoResultado, {
            backgroundColor: '#FDFCF0',
            scale: 2,
            logging: false
        });

        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'entrelinhas-resultado.png';
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });
    } catch (error) {
        console.error('Erro ao gerar imagem:', error);
        alert('Não foi possível gerar a imagem. Tente copiar o texto.');
    }
}

function copiarTextoCompartilhar() {
    const score = document.getElementById('score-valor').textContent;
    const nivel = document.getElementById('nivel-titulo').textContent;

    const texto = `🔍 Acabei de fazer o quiz "Entrelinhas – Você Reconheceria?"

Meu Score de Consciência: ${score}
Nível: ${nivel}

Você consegue identificar violências invisíveis no cotidiano?
Teste você também!`;

    navigator.clipboard.writeText(texto).then(() => {
        const feedbackCopiar = document.getElementById('feedback-copiar');
        feedbackCopiar.classList.remove('escondido');
        setTimeout(() => {
            feedbackCopiar.classList.add('escondido');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar texto:', err);
        alert('Não foi possível copiar o texto.');
    });
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.getElementById('btn-iniciar').addEventListener('click', iniciarQuiz);
document.getElementById('btn-tentar-novamente').addEventListener('click', reiniciarQuiz);
document.getElementById('btn-compartilhar').addEventListener('click', () => {
    document.getElementById('modal-compartilhar').classList.remove('escondido');
});

document.getElementById('modal-fechar').addEventListener('click', () => {
    document.getElementById('modal-compartilhar').classList.add('escondido');
});

document.getElementById('btn-baixar-imagem').addEventListener('click', gerarImagemResultado);
document.getElementById('btn-copiar-texto').addEventListener('click', copiarTextoCompartilhar);

// Fechar modal ao clicar fora
document.getElementById('modal-compartilhar').addEventListener('click', (e) => {
    if (e.target.id === 'modal-compartilhar') {
        document.getElementById('modal-compartilhar').classList.add('escondido');
    }
});

// ==========================================
// INICIALIZAÇÃO
// ==========================================

console.log('Quiz Entrelinhas carregado com sucesso!');
console.log(`Banco total: ${bancoQuestoes.length} questões`);
console.log(`Questões por quiz: 12 (selecionadas aleatoriamente)`);
