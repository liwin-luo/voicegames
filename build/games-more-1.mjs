// Game copy overlay for pt / fr / de — merged onto the game objects by build.mjs.
export const gamesMore1 = {
  pt: {
    "3d/dino": {
      tagline: "Pule gritando", metaDesc: "Dino 3D é um jogo de voz grátis de 30 segundos. Mantenha um som e o dinossauro de blocos se sustenta. Fique em silêncio e ele cai.",
      kicker: "Mantenha o som", heard: "Mantenha um som, a barra ou o mouse. O dinossauro fica de pé.",
      featureSmall: "Mantenha o som — se calar, cai",
      steps: ["Pulse Começar e permita o microfone se o navegador pedir.", "Mantenha um som, a barra ou o mouse e o dinossauro se sustenta. Solte e ele cai.", "Cada pedra superada soma um ponto.", "Bata numa pedra e a rodada termina. Você tem 30 segundos."],
      note: "Você vê o dinossauro de lado. As pedras vêm da direita. O Dino 3D mede o volume na página: não envia áudio a nenhum serviço de voz nem guarda gravações.",
      faq: [
        { q: "Como marcar pontos no Dino 3D?", a: "Cada pedra que o dinossauro supera soma um ponto antes dos 30 segundos acabarem." },
        { q: "Preciso gritar?", a: "Não. Qualquer som constante o sustenta — falar, cantarolar ou segurar a barra também funciona. Gritar é só mais engraçado." }
      ]
    },
    "3d/flap": {
      tagline: "Suba com sua voz", metaDesc: "Flap 3D é um jogo de voz grátis de 30 segundos. Mantenha um som e a mariposa de blocos sobe pelos vãos. Fique em silêncio e ela cai.",
      kicker: "Mantenha o som", heard: "Mantenha um som, a barra ou o mouse e a mariposa sobe.",
      featureSmall: "Mantenha o som para subir pelos vãos",
      steps: ["Pulse Começar e permita o microfone se o navegador pedir.", "Mantenha um som, a barra ou o mouse e a mariposa sobe. Solte e ela cai.", "Atravesse um vão para marcar um ponto.", "Bata numa parede, no teto ou no chão e a rodada termina. Você tem 30 segundos."],
      note: "Você vê a mariposa de lado. Os vãos vêm da direita. O Flap 3D mede o volume na página e não guarda gravações.",
      faq: [
        { q: "Como marcar pontos no Flap 3D?", a: "Atravesse um vão para somar um ponto. Encadeie quantos puder em 30 segundos." },
        { q: "Por que minha mariposa cai sempre?", a: "O som é o impulso. Com a sala em silêncio ela desce — mantenha um som ou a barra e ela sobe." }
      ]
    },
    "3d/float": {
      tagline: "Atravesse o aro", metaDesc: "Float 3D é um jogo de voz grátis de 30 segundos. O volume eleva um balão de blocos por buracos redondos. O silêncio o derruba.",
      kicker: "Eleve com volume", heard: "Mais volume, a barra ou o mouse para cima elevam o balão.",
      featureSmall: "O volume eleva o balão pelos aros",
      steps: ["Pulse Começar e permita o microfone se o navegador pedir.", "Mais volume eleva o balão; segure a barra para subir ou o mouse e mova para cima e para baixo.", "Atravesse cada buraco redondo para marcar um ponto.", "Toque num aro e a rodada termina. Você tem 30 segundos."],
      note: "Você vê o balão de lado, e os buracos são aros que vêm da direita. O Float 3D mede o volume na página e não guarda gravações.",
      faq: [
        { q: "O que muda no Float 3D em relação aos outros 3D?", a: "O volume é um botão de altura, não só liga e desliga: quanto mais alto, mais alto vai o balão. Vence o controle fino." },
        { q: "Posso jogar só com o mouse?", a: "Sim. Segure o mouse na imagem e mova para cima e para baixo — o balão segue o ponteiro. A barra também funciona." }
      ]
    },
    dino: {
      tagline: "Pule gritando", metaDesc: "Dino é um jogo de voz grátis de 30 segundos. Mantenha um som e o dinossauro se sustenta. Fique em silêncio e ele cai.",
      kicker: "Mantenha o som", heard: "Mantenha o som e o dinossauro se sustenta.", cardSmall: "A versão 2D",
      steps: ["Pulse Começar e permita o microfone.", "Mantenha um som e o dinossauro se sustenta. Fique em silêncio e ele cai.", "Cada pedra superada soma um ponto.", "Bata numa pedra e a rodada termina. Você tem 30 segundos."],
      note: "O Dino mede o volume na página: não envia áudio a nenhum serviço de voz nem guarda gravações. O dinossauro e as pedras são desenhados aqui.",
      faq: [
        { q: "Qual a diferença entre Dino e Dino 3D?", a: "Mesmas regras, duas telas. O Dino é o original plano em pixels; o Dino 3D é a mesma corrida em vista de blocos." },
        { q: "O Dino funciona no celular?", a: "Sim. Roda no navegador do celular e escuta pelo microfone dele. Segure a imagem para jogar sem som." }
      ]
    },
    flap: {
      tagline: "Suba com sua voz", metaDesc: "Flap é um jogo de voz grátis de 30 segundos. Mantenha um som e a mariposa sobe pelos vãos. Fique em silêncio e ela cai.",
      kicker: "Mantenha o som", heard: "Mantenha o som e a mariposa sobe.", cardSmall: "A versão 2D",
      steps: ["Pulse Começar e permita o microfone.", "Mantenha um som e a mariposa sobe. Fique em silêncio e ela cai.", "Atravesse um vão para marcar um ponto.", "Bata numa parede, no teto ou no chão e a rodada termina. Você tem 30 segundos."],
      note: "O Flap mede o volume na página: não envia áudio a nenhum serviço de voz nem guarda gravações. A mariposa e os muros são desenhados aqui.",
      faq: [
        { q: "Qual a diferença entre Flap e Flap 3D?", a: "Mesmas regras, duas telas. O Flap é a versão plana em pixels; o Flap 3D mostra o mesmo voo em blocos." },
        { q: "Como manter a mariposa numa altura?", a: "Dê um som constante — um \"aaaa\" longo no mesmo volume a mantém nivelada. Volume instável faz ela quicar." }
      ]
    },
    float: {
      tagline: "Atravesse o buraco", metaDesc: "Float é um jogo de voz grátis de 30 segundos. O volume eleva uma bola por buracos redondos. O silêncio a derruba.",
      kicker: "Eleve com volume", heard: "Mais volume eleva a bola. O silêncio a derruba.", cardSmall: "A versão 2D",
      steps: ["Pulse Começar e permita o microfone.", "Mais volume eleva a bola; silêncio a faz descer.", "Atravesse cada buraco redondo para marcar um ponto.", "Toque na borda e a rodada termina. Você tem 30 segundos."],
      note: "O Float mede o volume na página: não envia áudio a nenhum serviço de voz nem guarda gravações. A bola e os buracos são desenhos próprios deste site.",
      faq: [
        { q: "O Float é igual ao jogo do helicóptero?", a: "É da mesma família de um só botão, mas sua voz é o botão e todos os gráficos são originais deste site." },
        { q: "Por que a bola cai tão rápido quando eu calo?", a: "A gravidade é mais forte que o impulso de propósito — o seguro é manter um som baixo e constante em vez de silêncio total." }
      ]
    },
    louder: {
      tagline: "Mantenha o volume", metaDesc: "Louder é um jogo de voz grátis de 30 segundos. Cada segundo acima da linha soma. Silêncio não conta. Nada é gravado.",
      kicker: "Mantenha o volume", heard: "Segundos em silêncio não contam.", cardSmall: "Cada segundo alto soma",
      attract: "Faça barulho — cada segundo alto soma",
      steps: ["Pulse Começar e permita o microfone.", "Fale, cante ou apenas faça barulho acima da linha.", "Cada segundo acima soma um ponto. Silêncio não conta.", "A rodada dura 30 segundos. Bata seu recorde."],
      note: "O Louder mede o volume nesta página: não envia o áudio a nenhum serviço de voz nem guarda gravações. A palavra na tela só indica se o nível passou a linha.",
      faq: [
        { q: "O que conta como \"alto o suficiente\"?", a: "Falar em volume normal passa a linha numa sala tranquila. Se aparecer \"Mais alto\", ainda não chegou — force um pouco mais." },
        { q: "Posso pontuar com música ou vídeo?", a: "Tecnicamente sim — o jogo só ouve volume. Mas a graça é fazer o barulho você mesmo." }
      ]
    },
    say: {
      tagline: "Diga a palavra", metaDesc: "Say It é um jogo de voz grátis de um minuto. Aparece uma palavra, você a diz e surge a próxima. Chrome para computador com microfone.",
      kicker: "Diga a palavra", heard: "Aparece uma palavra. Diga-a.", cardSmall: "Aparece uma palavra — diga",
      attract: "Diga a palavra em voz alta", prompt: "palavra",
      steps: ["Pulse Começar e permita o microfone.", "Uma palavra enche a tela. Diga-a com clareza.", "Quando coincidir, soma um ponto e surge outra.", "Você tem 60 segundos. Pulse Parar para terminar antes."],
      note: "O Say It usa o serviço de voz do Chrome para virar texto. Esta página não guarda a gravação. Abra no Chrome para computador.",
      faq: [
        { q: "Por que minha palavra não conta?", a: "Diga a palavra inteira com clareza. A faixa inferior mostra o que o Chrome ouviu — compare e tente de novo." },
        { q: "Posso jogar em outros idiomas?", a: "Sim — mude o idioma do site na barra superior e as palavras mudam junto. Cada versão ouve no seu idioma." }
      ]
    },
    count: {
      tagline: "Conte em voz alta", metaDesc: "Count é um jogo de voz grátis. Diga um, depois dois, e siga até trinta. Você tem 60 segundos. Chrome para computador.",
      kicker: "Diga este número", heard: "Comece no um e siga.", cardSmall: "De um a trinta",
      attract: "Conte desde um, em voz alta", prompt: "um",
      steps: ["Pulse Começar. O primeiro número é um.", "Diga o número na tela e o seguinte quando aparecer.", "Cada número ouvido na ordem soma um ponto.", "A conta para em trinta, ou quando os 60 segundos acabam."],
      note: "O Count usa o serviço de voz do Chrome para virar texto. Esta página não guarda a gravação. Abra no Chrome para computador.",
      faq: [
        { q: "E se eu disser um número fora de ordem?", a: "Nada de mais — a tela segue pedindo o mesmo número até ouvir o certo. Só a ordem correta soma." },
        { q: "Preciso dizer o número exato?", a: "Quase vale. O jogo aceita variações comuns e dígitos, então conte com naturalidade." }
      ]
    },
    repeat: {
      tagline: "Repita a frase", metaDesc: "Repeat é um jogo de voz grátis. Aparece uma frase de duas palavras e você a diz inteira. A próxima surge ao acertar. 60 segundos.",
      kicker: "Diga a frase inteira", heard: "Diga cada palavra da frase.", cardSmall: "Repita a frase inteira",
      attract: "Repita a frase, palavra por palavra", prompt: "maçã vermelha",
      steps: ["Pulse Começar e permita o microfone.", "Aparece uma frase curta de duas palavras, como \"maçã vermelha\".", "Diga as duas palavras. Só pontua a frase completa.", "Cada acerto traz uma frase nova. Você tem 60 segundos."],
      note: "O Repeat usa o serviço de voz do Chrome para virar texto. Esta página não guarda a gravação. Abra no Chrome para computador.",
      faq: [
        { q: "Ordem e palavras extras importam?", a: "Todas as palavras da frase devem ser ouvidas; as extras são ignoradas. Ordem errada não pontua." },
        { q: "Crianças podem jogar Repeat?", a: "É um ótimo aquecimento de leitura: frases curtas, sem pressão de tempo e o placar conta palavras ouvidas. experimentem juntos." }
      ]
    },
    "voice-over": {
      tagline: "Leia a linha", metaDesc: "Voice Over é um jogo de voz grátis de 60 segundos. Aparece uma narração, leia em voz alta e surge a seguinte. Chrome com microfone.",
      kicker: "Leia a linha", heard: "Aparece uma narração. Leia.", cardSmall: "Leia a narração",
      attract: "Leia a narração em voz alta", prompt: "o trem está atrasado",
      steps: ["Pulse Começar e permita o microfone.", "Uma linha curta de narração enche a tela, como \"o trem está atrasado\".", "Leia cada palavra. Só pontua a linha completa.", "Cada acerto traz uma linha nova. Você tem 60 segundos."],
      note: "As linhas foram escritas para este jogo. O Voice Over usa o serviço de voz do Chrome. Esta página não guarda a gravação. Abra no Chrome para computador.",
      faq: [
        { q: "Serve para praticar leitura?", a: "É essa a ideia. Linhas curtas e naturais, e o jogo só ouve se as palavras caíram — vale como treino de leitura em voz alta." },
        { q: "Qual a diferença da página Voice Over Game?", a: "Esta é nosso jogo de palavras de 60 segundos que roda aqui. A outra página incrusta um estúdio externo, o Choicer Voicer." }
      ]
    },
    "voice-acting": {
      tagline: "Diga com humor", metaDesc: "Voice Acting é um jogo grátis de 60 segundos. Um humor aparece sobre uma linha original — diga a linha e represente. Chrome com microfone.",
      kicker: "Com este humor", heard: "Diga a linha. O humor está em cima.", cardSmall: "Diga com esse humor",
      attract: "Diga a linha com esse humor", prompt: "larga isso",
      steps: ["Pulse Começar e permita o microfone.", "Um humor aparece sobre uma linha original, como sussurro ou raiva.", "Diga a linha — e represente o humor ao fazê-lo.", "O placar conta as palavras. O humor é seu. Você tem 60 segundos."],
      note: "Esta página não ouve se você soou bravo ou calmo, então não pontua a interpretação — só confere as palavras. As linhas são escritas para este jogo. O Voice Acting usa o serviço de voz do Chrome e não guarda a gravação.",
      faq: [
        { q: "Representar o humor muda minha pontuação?", a: "Não — o placar só confere as palavras. O humor existe para diversão e para treinar o registro." },
        { q: "Serve para testes ou demos de voz?", a: "Como aquecimento é perfeito: humores aleatórios, linhas curtas, um minuto no relógio. Para gravações reais use um estúdio — esta página não guarda áudio." }
      ]
    },
    miner: {
      tagline: "Grite e solte a garra", metaDesc: "Miner é um jogo de voz grátis de 30 segundos. Uma garra balança sobre uma caverna — grite, pulse a barra ou clique para soltá-la e puxar o ouro. Nada é gravado.",
      kicker: "Grite na hora certa", heard: "Grite, pulse a barra ou clique e a garra desce.", cardSmall: "O garimpo com voz",
      steps: ["Pulse Começar e permita o microfone.", "A garra balança sozinha. Grite, pulse a barra ou clique e ela desce reta.", "Ela puxa o que pegar: o ouro vale bastante, a pedra é pesada e lenta, e a gema azul é o prêmio.", "Pegue o máximo que puder em 30 segundos."],
      note: "O Miner mede o volume na página: não envia áudio a nenhum serviço de voz nem guarda gravações. A garra, o ouro e a caverna são desenhados aqui.",
      faq: [
        { q: "Como fazer mais pontos no Miner?", a: "Espere a garra apontar para uma pepita antes de gritar. O ouro grande vale 120 e a gema azul 300 — mire antes de soltar." },
        { q: "Preciso gritar?", a: "Não — qualquer som curto acima da linha solta a garra, e a barra ou um clique funcionam sem microfone." }
      ]
    },
    floors: {
      tagline: "Desça 100 andares com a voz", metaDesc: "Floors é um jogo de voz grátis de 30 segundos. Um rapaz desce por um poço — tarareia grave para ir à esquerda, cante agudo para ir à direita e desvie das pontas. Nada é gravado.",
      kicker: "Grave à esquerda, agudo à direita", heard: "Tom grave anda à esquerda, agudo à direita.", cardSmall: "O clássico da descida, na voz",
      steps: ["Pulse Começar e permita o microfone.", "O rapaz desce sozinho. Tarareia um som grave e ele anda à esquerda; assobie ou cante agudo e ele vai à direita.", "Guie pelos vãos de cada andar. Andares com pontas e o teto de pontas que desce encerram a rodada.", "As setas, ou segurar a metade esquerda ou direita da imagem, também funcionam. Você tem 30 segundos."],
      note: "O Floors mede o tom na página. O áudio nunca sai do seu dispositivo e nada é gravado. O rapaz, o poço e as pontas são desenhados aqui.",
      faq: [
        { q: "Como funciona a direção pela voz?", a: "A página segue o tom da sua voz: som grave (tararear) anda à esquerda e agudo (assobio ou um \"iii\") à direita. Em silêncio, ele continua caindo reto." },
        { q: "Floors é igual ao jogo de descer 100 andares?", a: "É nossa versão com voz do clássico da descida: mesmo rapaz caindo e mesmo teto de pontas, mas as setas viram o tom da sua voz." }
      ]
    },
    catch: {
      tagline: "Atrape o ouro que cai", metaDesc: "Catch é um jogo de voz grátis de 30 segundos. Tarareia grave ou agudo para deslizar a cesta, pegue moedas e gemas e evite as bombas. Nada é gravado.",
      kicker: "Grave à esquerda, agudo à direita", heard: "Deslize a cesta. Pegue moedas e gemas, evite bombas.", cardSmall: "Pegue moedas, evite bombas",
      steps: ["Pulse Começar e permita o microfone.", "Tarareia grave para deslizar a cesta à esquerda, agudo à direita. As setas ou segurar cada metade da imagem também funcionam.", "Moedas valem um, gemas azuis valem três, e uma bomba pegada encerra a rodada.", "Você tem 30 segundos. Bata seu recorde."],
      note: "O Catch mede volume e tom na página. O áudio nunca sai do seu dispositivo e nada é gravado. A cesta, as moedas e as bombas são desenhados aqui.",
      faq: [
        { q: "O que conta como nota grave ou aguda?", a: "Tararear ou um \"mmm\" é grave e desliza à esquerda; assobio ou um \"iii\" é agudo e vai à direita. Notas sustentadas controlam melhor." },
        { q: "O que acontece se eu pegar uma bomba?", a: "A rodada termina na hora e seu placar fica. As bombas caem com frequência — cesta gananciosa se dá mal." }
      ]
    },
    racer: {
      tagline: "Desvie do trânsito pelo tom", metaDesc: "Racer é um jogo de voz grátis de 30 segundos. Tarareia grave ou agudo para descer a estrada e desviar dos carros. Nada é gravado.",
      kicker: "Atravesse as faixas", heard: "Desça a estrada e desvie dos carros.", cardSmall: "Direção pelo tom",
      steps: ["Pulse Começar e permita o microfone.", "Tarareia grave para ir à esquerda, agudo à direita. Setas ou cada metade da imagem também funcionam.", "Cada carro ultrapassado vale um ponto. Tocar num carro encerra a rodada.", "O trânsito acelera com o tempo. Você tem 30 segundos."],
      note: "O Racer mede o tom na página. O áudio nunca sai do seu dispositivo e nada é gravado. A estrada e os carros são desenhados aqui.",
      faq: [
        { q: "O carro fica preso numa faixa?", a: "Não — a direção é contínua, como um volante de verdade. Correções pequenas bastam." },
        { q: "Quão rápido fica?", a: "O trânsito acelera a cada carro ultrapassado — os últimos dez segundos são o teste." }
      ]
    },
    bricks: {
      tagline: "Quebre a parede com a voz", metaDesc: "Bricks é um jogo de voz grátis de 30 segundos. Tarareia para deslizar a raquete, grite para lançar a bola e quebre o máximo de tijolos. Nada é gravado.",
      kicker: "Deslize a raquete, grite para lançar", heard: "Deslize a raquete. Grite, barra ou clique para lançar.", cardSmall: "Quebra-tijolos por tom",
      steps: ["Pulse Começar e permita o microfone.", "Tarareia grave ou agudo para deslizar a raquete; a bola viaja com ela até o lançamento.", "Grite, pulse a barra ou clique para lançar. Fileiras douradas de cima valem 3, do meio 2, de baixo 1.", "Se a bola cair, encoste e grite para lançar de novo. Você tem 30 segundos."],
      note: "O Bricks mede volume e tom na página. O áudio nunca sai do seu dispositivo e nada é gravado. A parede, a raquete e a bola são desenhados aqui.",
      faq: [
        { q: "Por que relançar a bola?", a: "O grito é o seu saque. Quando a bola cai, encoste num bom lugar e grite de novo — sacar bem também pontua." },
        { q: "Quais tijolos valem mais?", a: "As duas fileiras douradas de cima valem 3, as do meio 2 e a de baixo 1 — mantenha a bola lá em cima." }
      ]
    },
    snake: {
      tagline: "Guie a cobra pelo tom", metaDesc: "Snake é um jogo de voz grátis de 30 segundos. Nota grave vira à esquerda, aguda à direita — coma as maçãs e não se morda. Nada é gravado.",
      kicker: "Grave vira à esquerda, agudo à direita", heard: "Coma as maçãs. Não se morda.", cardSmall: "O clássico, curvas pelo tom",
      steps: ["Pulse Começar e permita o microfone.", "A cobra anda sozinha. Nota grave vira à esquerda dela, aguda à direita — curvas relativas ao rumo.", "Cada maçã vale um ponto e alonga duas casas.", "Morder o muro ou o próprio corpo encerra a rodada. Você tem 30 segundos."],
      note: "O Snake mede o tom na página. O áudio nunca sai do seu dispositivo e nada é gravado. A cobra e as maçãs são desenhados aqui.",
      faq: [
        { q: "As curvas são absolutas ou relativas?", a: "Relativas: \"esquerda\" é sempre a esquerda da cobra, como numa curva real. Duas notas graves seguidas fazem um U." },
        { q: "Qual o tamanho inicial da cobra?", a: "Quatro casas. Cada maçã alonga duas e o ritmo sobe — o final fica cheio." }
      ]
    },
    march: {
      tagline: "Som para andar, silêncio para parar", metaDesc: "March é um jogo de voz grátis de 30 segundos. Som para andar pelo corredor, silêncio para parar — freie antes das pontas, que o muro de pontas persegue você. Nada é gravado.",
      kicker: "Anda no som, freia no silêncio", heard: "Som para andar. Silêncio para parar.", cardSmall: "O clássico andar e parar",
      steps: ["Pulse Começar e permita o microfone.", "Mantenha um som e o rapaz anda; fique em silêncio e ele para onde está.", "Pare antes das faixas de pontas — tocá-las encerra a rodada, e o muro de pontas atrás não para de chegar.", "O placar conta metros. Você tem 30 segundos."],
      note: "O March mede o volume na página. Não envia áudio a nenhum serviço de voz nem guarda gravações. O rapaz, as pontas e o muro são desenhados aqui.",
      faq: [
        { q: "Qual a precisão da parada?", a: "Instantânea — o silêncio o freia onde está. O jogo é ler o chão à frente e soltar cedo." },
        { q: "E se eu ficar quieto?", a: "O muro de pontas avança sempre — parado só atrasa, e só os metros pontuam." }
      ]
    },
    tug: {
      tagline: "Grite mais forte que a máquina", metaDesc: "Tug é um jogo de voz grátis de 30 segundos. Seu volume puxa a corda contra uma máquina que puxa mais forte a cada rodada. Venha quantas puder. Nada é gravado.",
      kicker: "Mais volume puxa mais forte", heard: "Seu volume leva o marcador à sua linha.", cardSmall: "Corda contra a máquina",
      steps: ["Pulse Começar e permita o microfone.", "Grite, cante ou tarareie — quanto mais forte, mais sua lado puxa a corda.", "Leve o marcador passado a linha verde para vencer a rodada. A máquina puxa de volta, mais forte a cada rodada.", "Venha quantas rodadas puder em 30 segundos."],
      note: "O Tug mede o volume na página. Não envia áudio a nenhum serviço de voz nem guarda gravações. A corda, a bandeira e os puxadores são desenhados aqui.",
      faq: [
        { q: "Quão alto preciso ser?", a: "As primeiras rodadas caem com uma voz forte. Na terceira você já grita — é proposital." },
        { q: "E se a máquina vencer a rodada?", a: "O marcador volta ao meio e a máquina afrouxa um pouco — perder não acumula." }
      ]
    },
    puff: {
      tagline: "Infla, guarda, não explote", metaDesc: "Puff é um jogo de voz grátis de 30 segundos. Mantenha um som para inflar a bola — cada bola esconde seu ponto de estouro, então silencie e guarde antes que explote. Nada é gravado.",
      kicker: "Infla grande, guarde cedo", heard: "Som para inflar. Silêncio para guardar.", cardSmall: "Inflar e sacar a tempo",
      steps: ["Pulse Começar e permita o microfone.", "Mantenha um som e a bola cresce uns 44 pixels por segundo — maior vale mais.", "Fique em silêncio meio segundo para guardar o tamanho como pontos e começar outra.", "Cada bola esconde seu ponto de estouro. Passou, estoura sem valer nada. Você tem 30 segundos."],
      note: "O Puff mede o volume na página. Não envia áudio a nenhum serviço de voz nem guarda gravações. As bolas e o estouro são desenhados aqui.",
      faq: [
        { q: "Onde fica o ponto de estouro?", a: "Escondido, e diferente em cada bola — entre 48 e 112. O número na bola é o tamanho atual; o limite é o segredo." },
        { q: "Bola estourada penaliza?", a: "Só o orgulho — estoura a zero e outra aparece na hora. A ganância custa os segundos soprados." }
      ]
    },
    hop: {
      tagline: "Carregue a voz e salte", metaDesc: "Hop é um jogo de voz grátis de 30 segundos. Mantenha um som para carregar o pulo, silencie para saltar — aterrisse no próximo pilar sem passar. Nada é gravado.",
      kicker: "Segure para carregar, silêncio para pular", heard: "Som para carregar. Silêncio para pular.", cardSmall: "O clássico do pulo carregado",
      steps: ["Pulse Começar e permita o microfone.", "Mantenha um som e o anel de carga enche — cheio, salta longe.", "Silencie e o rapaz salta para o próximo pilar. Acertar o meio vale dois.", "Cair no desfiladeiro encerra a rodada. Você tem 30 segundos."],
      note: "O Hop mede o volume na página. Não envia áudio a nenhum serviço de voz nem guarda gravações. Os pilares e o rapaz são desenhados aqui.",
      faq: [
        { q: "Como julgar o salto?", a: "O número sobre a van é a largura, e o anel mostra a carga — cheio voa uns quatrocentos pixels; solte cedo em vãos curtos." },
        { q: "Posso voltar ao pilar de origem?", a: "Sim, em segurança — só não pontua. Só o pilar distante vale." }
      ]
    },
    "3d/miner": {
      tagline: "Grite e solte a garra",
      metaDesc: "Miner 3D é um jogo de voz grátis de 30 segundos. Uma garra de blocos balança sobre uma caverna de blocos — grite, pulse a barra ou clique para soltá-la e puxar o ouro. Nada é gravado.",
      kicker: "Grite na hora certa",
      heard: "Grite, pulse a barra ou clique e a garra desce.",
      featureSmall: "O garimpo em blocos",
      steps: ["Pulse Começar e permita o microfone se o navegador pedir.", "A garra balança sozinha. Grite, pulse a barra ou clique e ela desce reta.", "Ela puxa o que pegar: o ouro vale bastante, a pedra é pesada e lenta, e a gema azul é o prêmio.", "Pegue o máximo que puder em 30 segundos."],
      note: "Você vê a mina de lado, tudo em blocos. O Miner 3D mede o volume na página e não guarda gravações.",
      faq: [
        { q: "Qual a diferença do Miner 3D para o Miner?", a: "Mesmas regras, duas telas: a mina plana em pixels e esta vista lateral em blocos. Os recordes são separados." },
        { q: "Preciso gritar?", a: "Não — qualquer som curto acima da linha solta a garra, e a barra ou um clique funcionam sem microfone." }
      ]
    },
    "3d/floors": {
      tagline: "Desça 100 andares com a voz",
      metaDesc: "Floors 3D é um jogo de voz grátis de 30 segundos. Um rapaz de blocos desce por um poço de blocos — grave para ir à esquerda, agudo à direita, desviando das pontas. Nada é gravado.",
      kicker: "Grave à esquerda, agudo à direita",
      heard: "Tom grave anda à esquerda, agudo à direita.",
      featureSmall: "A descida em blocos",
      steps: ["Pulse Começar e permita o microfone se o navegador pedir.", "O rapaz desce sozinho. Tarareia grave e ele anda à esquerda; assobie ou cante agudo e ele vai à direita.", "Guie pelos vãos de cada andar. Andares com pontas e o teto de pontas encerram a rodada.", "As setas ou cada metade da imagem também funcionam. Você tem 30 segundos."],
      note: "Você vê o poço de lado, tudo em blocos. O Floors 3D mede o tom na página. O áudio nunca sai do seu dispositivo.",
      faq: [
        { q: "Qual a diferença do Floors 3D para o Floors?", a: "Mesmas regras, duas telas: o poço plano em pixels e esta vista lateral em blocos. Os recordes são separados." },
        { q: "Como funciona a direção pela voz?", a: "A página segue o tom da sua voz: grave anda à esquerda, agudo à direita. Em silêncio, ele cai reto." }
      ]
    }
  },
  fr: {
    "3d/dino": {
      tagline: "Saute en criant", metaDesc: "Dino 3D est un jeu de voix gratuit de 30 secondes. Maintiens un son et le dinosaure de blocs tient. Tais-toi et il tombe.",
      kicker: "Garde le son", heard: "Maintiens un son, Espace ou la souris. Le dinosaure reste debout.",
      featureSmall: "Maintiens le son — tu te tais, tu tombes",
      steps: ["Appuie sur Commencer, puis autorise le micro si le navigateur le demande.", "Maintiens un son, Espace ou la souris et le dinosaure tient. Lâche et il tombe.", "Chaque pierre franchie rapporte un point.", "Touche une pierre et la manche s'arrête. Tu as 30 secondes."],
      note: "Tu vois le dinosaure de côté. Les pierres arrivent par la droite. Dino 3D mesure le volume dans la page : il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement.",
      faq: [
        { q: "Comment marquer à Dino 3D ?", a: "Chaque pierre franchie par le dinosaure rapporte un point avant la fin des 30 secondes." },
        { q: "Faut-il crier ?", a: "Non. N'importe quel son constant le tient — parler, fredonner ou tenir Espace marche aussi. Crier, c'est juste plus drôle." }
      ]
    },
    "3d/flap": {
      tagline: "Monte avec ta voix", metaDesc: "Flap 3D est un jeu de voix gratuit de 30 secondes. Maintiens un son et le papillon de blocs monte par les passages. Tais-toi et il tombe.",
      kicker: "Garde le son", heard: "Maintiens un son, Espace ou la souris et le papillon monte.",
      featureSmall: "Maintiens le son pour passer les trous",
      steps: ["Appuie sur Commencer, puis autorise le micro si le navigateur le demande.", "Maintiens un son, Espace ou la souris et le papillon monte. Lâche et il tombe.", "Passe dans un trou pour marquer un point.", "Touche un mur, le plafond ou le sol et la manche s'arrête. Tu as 30 secondes."],
      note: "Tu vois le papillon de côté. Les trous arrivent par la droite. Flap 3D mesure le volume dans la page et ne garde aucun enregistrement.",
      faq: [
        { q: "Comment marquer à Flap 3D ?", a: "Passe dans un trou pour un point. Enchaîne un maximum de trous en 30 secondes." },
        { q: "Pourquoi mon papillon tombe sans arrêt ?", a: "Le son, c'est la poussée. Dans une pièce silencieuse il descend — tiens un son ou Espace et il monte." }
      ]
    },
    "3d/float": {
      tagline: "Traverse l'anneau", metaDesc: "Float 3D est un jeu de voix gratuit de 30 secondes. Le volume fait monter un ballon de blocs à travers des anneaux. Le silence le fait tomber.",
      kicker: "Monte avec le volume", heard: "Plus fort, Espace ou la souris en haut font monter le ballon.",
      featureSmall: "Le volume fait passer le ballon dans les anneaux",
      steps: ["Appuie sur Commencer, puis autorise le micro si le navigateur le demande.", "Plus fort fait monter le ballon ; tiens Espace pour monter, ou la souris en bougeant haut et bas.", "Traverse chaque anneau pour marquer un point.", "Touche un anneau et la manche s'arrête. Tu as 30 secondes."],
      note: "Tu vois le ballon de côté, et les trous sont des anneaux qui arrivent par la droite. Float 3D mesure le volume dans la page et ne garde aucun enregistrement.",
      faq: [
        { q: "Qu'est-ce qui change par rapport aux autres 3D ?", a: "Le volume est une molette de hauteur, pas un simple interrupteur : plus tu es fort, plus le ballon est haut. Le contrôle fin gagne." },
        { q: "Je peux jouer uniquement à la souris ?", a: "Oui. Tiens le clic sur l'image et bouge en haut et en bas — le ballon suit ton pointeur. Espace marche aussi." }
      ]
    },
    dino: {
      tagline: "Saute en criant", metaDesc: "Dino est un jeu de voix gratuit de 30 secondes. Maintiens un son et le petit dinosaure tient. Tais-toi et il tombe.",
      kicker: "Garde le son", heard: "Garde le son et le dinosaure reste debout.", cardSmall: "La version 2D",
      steps: ["Appuie sur Commencer et autorise le micro.", "Maintiens un son et le dinosaure monte, puis reste. Tais-toi et il tombe.", "Chaque pierre franchie rapporte un point.", "Touche une pierre et la manche s'arrête. Tu as 30 secondes."],
      note: "Dino mesure le volume dans la page : il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Le dinosaure et les pierres sont dessinés ici.",
      faq: [
        { q: "Différence entre Dino et Dino 3D ?", a: "Mêmes règles, deux images. Dino est l'original en pixels plats ; Dino 3D est la même course en vue de blocs." },
        { q: "Dino marche sur téléphone ?", a: "Oui. Il tourne dans le navigateur du mobile et écoute via son micro. Maintiens l'image pour jouer sans son." }
      ]
    },
    flap: {
      tagline: "Monte avec ta voix", metaDesc: "Flap est un jeu de voix gratuit de 30 secondes. Maintiens un son et le papillon monte par les passages. Tais-toi et il tombe.",
      kicker: "Garde le son", heard: "Garde le son et le papillon monte.", cardSmall: "La version 2D",
      steps: ["Appuie sur Commencer et autorise le micro.", "Maintiens un son et le papillon monte. Tais-toi et il tombe.", "Passe dans un passage pour marquer un point.", "Touche un mur, le plafond ou le sol et la manche s'arrête. Tu as 30 secondes."],
      note: "Flap mesure le volume dans la page : il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Le papillon et les murs sont dessinés ici.",
      faq: [
        { q: "Différence entre Flap et Flap 3D ?", a: "Mêmes règles, deux images. Flap est la version plate en pixels ; Flap 3D montre le même vol en blocs." },
        { q: "Comment garder le papillon à la même hauteur ?", a: "Nourris-le d'un son constant — un long « ahhh » au même volume le tient à niveau." }
      ]
    },
    float: {
      tagline: "Traverse le trou", metaDesc: "Float est un jeu de voix gratuit de 30 secondes. Le volume fait monter un ballon à travers des trous ronds. Le silence le fait tomber.",
      kicker: "Monte avec le volume", heard: "Plus fort fait monter le ballon. Le silence le fait tomber.", cardSmall: "La version 2D",
      steps: ["Appuie sur Commencer et autorise le micro.", "Plus fort fait monter le ballon ; le silence le fait descendre.", "Traverse chaque trou rond pour marquer un point.", "Touche le bord et la manche s'arrête. Tu as 30 secondes."],
      note: "Float mesure le volume dans la page : il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Le ballon et les trous sont dessinés ici, ils ne viennent pas d'un autre jeu.",
      faq: [
        { q: "Float, c'est le jeu de l'hélicoptère ?", a: "C'est la même famille à un seul bouton, mais ta voix est le bouton et tous les graphismes sont dessinés pour ce site." },
        { q: "Pourquoi le ballon tombe vite quand je me tais ?", a: "La gravité est volontairement plus forte que la poussée — le plus sûr est de garder un son bas et constant plutôt que le silence total." }
      ]
    },
    louder: {
      tagline: "Reste fort", metaDesc: "Louder est un jeu de voix gratuit de 30 secondes. Chaque seconde au-dessus de la ligne marque. Le silence ne compte pas. Rien n'est enregistré.",
      kicker: "Reste fort", heard: "Les secondes de silence ne comptent pas.", cardSmall: "Chaque seconde forte marque",
      attract: "Fais du bruit — chaque seconde forte marque",
      steps: ["Appuie sur Commencer et autorise le micro.", "Parle, chante ou fais simplement du bruit au-dessus de la ligne.", "Chaque seconde au-dessus ajoute un point. Le silence ne compte pas.", "La manche dure 30 secondes. Bats ton record."],
      note: "Louder mesure le volume dans cette page : il n'envoie pas l'audio à un service vocal et ne garde aucun enregistrement. Le mot à l'écran indique seulement si le niveau passe la ligne.",
      faq: [
        { q: "Qu'est-ce qui compte comme « assez fort » ?", a: "Une voix normale passe la ligne dans une pièce calme. Si « Plus fort » s'affiche, c'est en dessous — force un peu plus." },
        { q: "Je peux marquer avec de la musique ?", a: "Techniquement oui — le jeu n'entend que le volume. Mais le plaisir, c'est de faire le bruit toi-même." }
      ]
    },
    say: {
      tagline: "Dis le mot", metaDesc: "Say It est un jeu de voix gratuit d'une minute. Un mot apparaît, dis-le, et le suivant arrive. Chrome pour ordinateur avec micro.",
      kicker: "Dis le mot", heard: "Un mot apparaît. Dis-le.", cardSmall: "Un mot apparaît — dis-le",
      attract: "Dis le mot à voix haute", prompt: "mot",
      steps: ["Appuie sur Commencer et autorise le micro.", "Un mot remplit l'écran. Dis-le clairement.", "Quand il tombe, le score monte et un nouveau mot arrive.", "Tu as 60 secondes. Appuie sur Arrêter pour finir avant."],
      note: "Say It utilise le service vocal de Chrome pour transformer ta voix en texte. Cette page ne garde pas l'enregistrement. Ouvre-la dans Chrome pour ordinateur.",
      faq: [
        { q: "Pourquoi mon mot ne compte pas ?", a: "Dis le mot entier, clairement. La bande du bas montre ce que Chrome a entendu — compare avec le mot et réessaie." },
        { q: "Je peux jouer dans d'autres langues ?", a: "Oui — change la langue du site dans la barre du haut et les mots changent avec. Chaque version écoute dans sa langue." }
      ]
    },
    count: {
      tagline: "Compte à voix haute", metaDesc: "Count est un jeu de voix gratuit. Dis un, puis deux, et continue jusqu'à trente. Tu as 60 secondes. Chrome pour ordinateur.",
      kicker: "Dis ce nombre", heard: "Commence à un et continue.", cardSmall: "De un à trente",
      attract: "Compte à partir de un, à voix haute", prompt: "un",
      steps: ["Appuie sur Commencer. Le premier nombre est un.", "Dis le nombre à l'écran, puis le suivant quand il arrive.", "Chaque nombre entendu dans l'ordre rapporte un point.", "La compte s'arrête à trente, ou quand les 60 secondes sont passées."],
      note: "Count utilise le service vocal de Chrome pour transformer ta voix en texte. Cette page ne garde pas l'enregistrement. Ouvre-la dans Chrome pour ordinateur.",
      faq: [
        { q: "Et si je dis un nombre dans le désordre ?", a: "Rien de grave — l'écran redemande le même nombre jusqu'à entendre le bon. Seul le bon ordre marque." },
        { q: "Faut-il le nombre exact ?", a: "Presque suffit. Le jeu accepte les variantes courantes et les chiffres, donc compte naturellement." }
      ]
    },
    repeat: {
      tagline: "Répète la phrase", metaDesc: "Repeat est un jeu de voix gratuit. Une phrase de deux mots apparaît, dis les deux. La suivante arrive quand toute la phrase tombe. 60 secondes.",
      kicker: "Dis toute la phrase", heard: "Dis chaque mot de la phrase.", cardSmall: "Répète toute la phrase",
      attract: "Répète la phrase, chaque mot", prompt: "pomme rouge",
      steps: ["Appuie sur Commencer et autorise le micro.", "Une courte phrase de deux mots apparaît, comme « pomme rouge ».", "Dis les deux mots. Le score ne bouge que si toute la phrase tombe.", "Une nouvelle phrase arrive à chaque fois. Tu as 60 secondes."],
      note: "Repeat utilise le service vocal de Chrome pour transformer ta voix en texte. Cette page ne garde pas l'enregistrement. Ouvre-la dans Chrome pour ordinateur.",
      faq: [
        { q: "L'ordre et les mots en plus comptent ?", a: "Tous les mots de la phrase doivent être entendus ; les mots en plus sont ignorés. Le mauvais ordre ne marque pas." },
        { q: "Les enfants peuvent jouer à Repeat ?", a: "C'est un bon échauffement en lecture : phrases courtes, pas de pression de temps, et le score compte les mots entendus." }
      ]
    },
    "voice-over": {
      tagline: "Lis la ligne", metaDesc: "Voice Over est un jeu de voix gratuit de 60 secondes. Une narration apparaît, lis-la à voix haute, et la suivante arrive. Chrome avec micro.",
      kicker: "Lis la ligne", heard: "Une narration apparaît. Lis-la.", cardSmall: "Lis la narration",
      attract: "Lis la narration à voix haute", prompt: "le train est en retard",
      steps: ["Appuie sur Commencer et autorise le micro.", "Une courte narration remplit l'écran, comme « le train est en retard ».", "Lis chaque mot. Le score bouge quand toute la phrase tombe.", "Une nouvelle ligne arrive à chaque fois. Tu as 60 secondes."],
      note: "Les lignes sont écrites pour ce jeu. Voice Over utilise le service vocal de Chrome. Cette page ne garde pas l'enregistrement. Ouvre-la dans Chrome pour ordinateur.",
      faq: [
        { q: "Bon pour la lecture à voix haute ?", a: "C'est l'idée. Des lignes courtes et naturelles, et le jeu n'entend que si les mots sont tombés — un vrai exercice de lecture." },
        { q: "Différence avec la page Voice Over Game ?", a: "Ici, c'est notre jeu de mots de 60 secondes qui tourne sur la page. L'autre page incruste un studio externe, Choicer Voicer." }
      ]
    },
    "voice-acting": {
      tagline: "Dis-le avec le ton", metaDesc: "Voice Acting est un jeu gratuit de 60 secondes. Un ton apparaît au-dessus d'une ligne originale — dis la ligne et joue le ton. Chrome avec micro.",
      kicker: "Avec ce ton", heard: "Dis la ligne. Le ton est au-dessus.", cardSmall: "Dis-la avec ce ton",
      attract: "Dis la ligne avec ce ton", prompt: "pose ça",
      steps: ["Appuie sur Commencer et autorise le micro.", "Un ton apparaît au-dessus d'une ligne originale, comme chuchoté ou en colère.", "Dis la ligne — et joue le ton en le disant.", "Le score compte les mots. Le ton est à toi de jouer. Tu as 60 secondes."],
      note: "Cette page n'entend pas si tu sonnais en colère ou calme, donc elle ne note pas le jeu d'acteur — elle vérifie seulement les mots. Les lignes sont écrites pour ce jeu. Voice Acting utilise le service vocal de Chrome et ne garde pas l'enregistrement.",
      faq: [
        { q: "Jouer le ton change mon score ?", a: "Non — le score vérifie seulement les mots. Le ton est là pour le plaisir et pour travailler sa palette." },
        { q: "Utile pour des castings ou des démos ?", a: "Comme échauffement c'est parfait : tons aléatoires, lignes courtes, une minute au chrono. Pour de vraies prises, utilise un vrai studio — cette page ne garde pas l'audio." }
      ]
    },
    miner: {
      tagline: "Crie et lâche la griffe", metaDesc: "Miner est un jeu de voix gratuit de 30 secondes. Une griffe se balance au-dessus d'une grotte — crie, appuie sur Espace ou clique pour la lâcher et hisser l'or. Rien n'est enregistré.",
      kicker: "Crie au bon moment", heard: "Un cri, Espace ou un clic lâche la griffe.", cardSmall: "La ruée vers l'or, à la voix",
      steps: ["Appuie sur Commencer et autorise le micro.", "La griffe se balance toute seule. Crie, appuie sur Espace ou clique et elle plonge droit en bas.", "Elle remonte ce qu'elle attrape — l'or rapporte gros, la roche est lourde et lente, et le joyau bleu est le jackpot.", "Attrape un maximum en 30 secondes."],
      note: "Miner mesure le volume dans la page : il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. La griffe, l'or et la grotte sont dessinés ici.",
      faq: [
        { q: "Comment marquer plus à Miner ?", a: "Attends que la griffe pointe une pépite avant de crier. Le gros or rapporte 120 et le joyau bleu 300 — vise d'abord." },
        { q: "Faut-il crier ?", a: "Non — n'importe quel son court au-dessus de la ligne lâche la griffe, et Espace ou un clic marchent sans micro." }
      ]
    },
    floors: {
      tagline: "Descends 100 étages avec ta voix", metaDesc: "Floors est un jeu de voix gratuit de 30 secondes. Un grimpeur s'enfonce dans un puits — fredonne grave pour aller à gauche, chante aigu pour aller à droite, évite les pointes. Rien n'est enregistré.",
      kicker: "Grave à gauche, aigu à droite", heard: "Son grave à gauche, son aigu à droite.", cardSmall: "Le classique de la descente, à la voix",
      steps: ["Appuie sur Commencer et autorise le micro.", "Le grimpeur descend tout seul. Fredonne une note grave et il marche à gauche ; siffle ou chante aigu et il va à droite.", "Guide-le par les trous de chaque étage. Les étages à pointes et le plafond à pointes qui descend terminent la manche.", "Les flèches, ou maintenir la moitié gauche ou droite de l'image, marchent aussi. Tu as 30 secondes."],
      note: "Floors écoute la hauteur du son dans la page. L'audio ne quitte jamais ton appareil et rien n'est enregistré. Le grimpeur, le puits et les pointes sont dessinés ici.",
      faq: [
        { q: "Comment marche la direction à la voix ?", a: "La page suit la hauteur de ta voix : les sons graves (fredonner) marchent à gauche, les aigus (siffler ou un « ii ») à droite. En silence, il continue de tomber droit." },
        { q: "Floors, c'est le jeu des 100 étages ?", a: "C'est notre version voix du classique de la descente : même grimpeur qui tombe, même plafond à pointes, mais les flèches sont remplacées par la hauteur de ta voix." }
      ]
    },
    catch: {
      tagline: "Attrape l'or qui tombe", metaDesc: "Catch est un jeu de voix gratuit de 30 secondes. Fredonne grave ou aigu pour glisser le panier, attrape pièces et gemmes, évite les bombes. Rien n'est enregistré.",
      kicker: "Grave à gauche, aigu à droite", heard: "Glisse le panier. Attrape pièces et gemmes, évite les bombes.", cardSmall: "Pièces oui, bombes non",
      steps: ["Appuie sur Commencer et autorise le micro.", "Fredonne grave pour glisser le panier à gauche, aigu à droite. Les flèches ou tenir chaque moitié de l'image marchent aussi.", "Les pièces valent un, les gemmes bleues trois, et une bombe attrapée termine la manche.", "Tu as 30 secondes. Bats ton record."],
      note: "Catch écoute le volume et la hauteur dans la page. L'audio ne quitte jamais ton appareil et rien n'est enregistré. Le panier, les pièces et les bombes sont dessinés ici.",
      faq: [
        { q: "Qu'est-ce qu'une note grave ou aiguë ?", a: "Fredonner ou un « mm » est grave et glisse à gauche ; siffler ou un « ii » est aigu à droite. Les notes tenues dirigent le mieux." },
        { q: "Que se passe-t-il si j'attrape une bombe ?", a: "La manche s'arrête net et ton score reste. Les bombes tombent assez souvent pour piéger les gourmands." }
      ]
    },
    racer: {
      tagline: "Esquive le trafic par la hauteur", metaDesc: "Racer est un jeu de voix gratuit de 30 secondes. Fredonne grave ou aigu pour descendre la route et esquiver les voitures. Rien n'est enregistré.",
      kicker: "Slalome entre les voies", heard: "Descends la route et esquive les voitures.", cardSmall: "Volant à la hauteur du son",
      steps: ["Appuie sur Commencer et autorise le micro.", "Fredonne grave pour aller à gauche, aigu à droite. Les flèches ou chaque moitié de l'image marchent aussi.", "Chaque voiture doublée rapporte un point. En toucher une termine la manche.", "Le trafic accélère avec le temps. Tu as 30 secondes."],
      note: "Racer écoute la hauteur du son dans la page. L'audio ne quitte jamais ton appareil et rien n'est enregistré. La route et les voitures sont dessinées ici.",
      faq: [
        { q: "La voiture reste-t-elle sur une voie ?", a: "Non — la direction est continue, comme un vrai volant. De petites corrections suffisent." },
        { q: "Jusqu'où ça accélère ?", a: "Le trafic prend du rythme à chaque voiture doublée — les dix dernières secondes sont le vrai test." }
      ]
    },
    bricks: {
      tagline: "Casse le mur avec ta voix", metaDesc: "Bricks est un jeu de voix gratuit de 30 secondes. Fredonne pour glisser le palet, crie pour lancer la balle et casse un max de briques. Rien n'est enregistré.",
      kicker: "Glisse le palet, crie pour lancer", heard: "Glisse le palet. Un cri, Espace ou un clic lance la balle.", cardSmall: "Casse-briques à la voix",
      steps: ["Appuie sur Commencer et autorise le micro.", "Fredonne grave ou aigu pour glisser le palet ; la balle voyage avec lui jusqu'au lancer.", "Crie, appuie sur Espace ou clique pour lancer. Les rangées dorées du haut valent 3, du milieu 2, du bas 1.", "Si la balle tombe, place-toi et crie pour resservir. Tu as 30 secondes."],
      note: "Bricks écoute le volume et la hauteur dans la page. L'audio ne quitte jamais ton appareil et rien n'est enregistré. Le mur, le palet et la balle sont dessinés ici.",
      faq: [
        { q: "Pourquoi relancer la balle ?", a: "Le cri, c'est ton service. Quand la balle tombe, place-toi bien et crie — bien servir fait partie du score." },
        { q: "Quelles briques rapportent le plus ?", a: "Les deux rangées dorées du haut valent 3, celles du milieu 2, celle du bas 1 — garde la balle en hauteur." }
      ]
    },
    snake: {
      tagline: "Guide le serpent par la hauteur", metaDesc: "Snake est un jeu de voix gratuit de 30 secondes. Une note grave tourne à gauche, aiguë à droite — mange les pommes sans te mordre. Rien n'est enregistré.",
      kicker: "Grave tourne à gauche, aigu à droite", heard: "Mange les pommes. Ne te mords pas.", cardSmall: "Le classique, virages à la voix",
      steps: ["Appuie sur Commencer et autorise le micro.", "Le serpent rampe tout seul. Une note grave tourne à sa gauche, aiguë à sa droite — selon sa direction.", "Chaque pomme rapporte un point et allonge de deux cases.", "Mordre un mur ou soi-même termine la manche. Tu as 30 secondes."],
      note: "Snake écoute la hauteur du son dans la page. L'audio ne quitte jamais ton appareil et rien n'est enregistré. Le serpent et les pommes sont dessinés ici.",
      faq: [
        { q: "Les virages sont absolus ou relatifs ?", a: "Relatifs : « gauche » veut toujours dire la gauche du serpent, comme un vrai virage. Deux notes graves rapides font un demi-tour." },
        { q: "Sa longueur au départ ?", a: "Quatre cases. Chaque pomme en ajoute deux et le rythme monte — la fin se remplit." }
      ]
    },
    march: {
      tagline: "Sonne pour marcher, tais-toi pour stopper", metaDesc: "March est un jeu de voix gratuit de 30 secondes. Tiens un son pour avancer dans le couloir, tais-toi pour stopper — freine avant les pointes, le mur à pointes te poursuit. Rien n'est enregistré.",
      kicker: "Marche au son, freine au silence", heard: "Tiens un son pour marcher. Le silence t'arrête.", cardSmall: "Le classique marcher-stop",
      steps: ["Appuie sur Commencer et autorise le micro.", "Tiens un son et le grimpeur avance ; tais-toi et il s'arrête net.", "Stoppe avant les bandes de pointes — les toucher termine la manche, et le mur à pointes derrière ne cesse de se rapprocher.", "Le score compte les mètres. Tu as 30 secondes."],
      note: "March écoute le volume dans la page. Il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Le marcheur, les pointes et le mur sont dessinés ici.",
      faq: [
        { q: "La stoppe est-elle précise ?", a: "Instantanée — le silence le freine sur place. Le jeu, c'est lire le sol devant et lâcher tôt." },
        { q: "Et si je reste silencieux ?", a: "Le mur à pointes avance toujours — rester immobile ne fait que repousser, et seuls les mètres comptent." }
      ]
    },
    tug: {
      tagline: "Crie plus fort que la machine", metaDesc: "Tug est un jeu de voix gratuit de 30 secondes. Ton volume tire la corde contre une machine qui tire plus fort à chaque manche. Gagne un max de manches. Rien n'est enregistré.",
      kicker: "Plus fort tire plus fort", heard: "Ton volume pousse le drapeau vers ta ligne.", cardSmall: "Corde contre la machine",
      steps: ["Appuie sur Commencer et autorise le micro.", "Crie, chante ou fredonne — plus tu es fort, plus ton côté tire la corde.", "Pousse le drapeau passé la ligne verte pour gagner la manche. La machine le ramène, plus fort chaque manche.", "Gagne un maximum de manches en 30 secondes."],
      note: "Tug écoute le volume dans la page. Il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. La corde, le drapeau et les deux tireurs sont dessinés ici.",
      faq: [
        { q: "Quel volume faut-il ?", a: "Les premières manches tombent avec une voix forte. À la troisième, tu cries — c'est voulu." },
        { q: "Et si la machine gagne une manche ?", a: "Le drapeau revient au centre et la machine relâche un peu — une manche perdue n'empile pas." }
      ]
    },
    puff: {
      tagline: "Gonfle, encaisse, n'explose pas", metaDesc: "Puff est un jeu de voix gratuit de 30 secondes. Tiens un son pour gonfler le ballon — chaque ballon cache sa taille d'explosion, alors tais-toi et encaisse avant qu'il n'éclate. Rien n'est enregistré.",
      kicker: "Gonfle grand, encaisse tôt", heard: "Tiens un son pour gonfler. Tais-toi pour encaisser.", cardSmall: "Gonfler et encaisser à temps",
      steps: ["Appuie sur Commencer et autorise le micro.", "Tiens un son et le ballon grossit d'environ 44 pixels par seconde — plus gros, plus de points.", "Tais-toi une demi-seconde pour encaisser la taille du ballon en points et en gonfler un neuf.", "Chaque ballon cache sa taille d'explosion. Trop gonflé, il éclate pour rien. Tu as 30 secondes."],
      note: "Puff écoute le volume dans la page. Il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Les ballons et l'explosion sont dessinés ici.",
      faq: [
        { q: "Où est le point d'explosion ?", a: "Caché, et différent pour chaque ballon — entre 48 et 112. Le chiffre sur le ballon est sa taille actuelle ; la limite est le secret." },
        { q: "Un ballon éclaté, ça punit ?", a: "Juste l'orgueil — il éclate à zéro et un neuf apparaît aussitôt. La gourmandise coûte les seconds soufflés." }
      ]
    },
    hop: {
      tagline: "Charge ta voix, saute le vide", metaDesc: "Hop est un jeu de voix gratuit de 30 secondes. Tiens un son pour charger ton saut, tais-toi pour sauter — atterris sur le pilier suivant sans te tromper. Rien n'est enregistré.",
      kicker: "Tiens pour charger, tais-toi pour sauter", heard: "Tiens un son pour charger. Tais-toi pour sauter.", cardSmall: "Le classique du saut chargé",
      steps: ["Appuie sur Commencer et autorise le micro.", "Tiens un son et l'anneau de charge se remplit — plein, il vole loin.", "Tais-toi et le grimpeur bondit vers le pilier suivant. Atterrir au centre paie deux.", "Tomber dans le canyon termine la manche. Tu as 30 secondes."],
      note: "Hop écoute le volume dans la page. Il n'envoie aucun audio à un service vocal et ne garde aucun enregistrement. Les piliers et le grimpeur sont dessinés ici.",
      faq: [
        { q: "Comment juger le saut ?", a: "Le chiffre au-dessus du vide est sa largeur, et l'anneau montre ta charge — plein vole quatre cents pixels ; lâche tôt pour les petits trous." },
        { q: "Je peux retomber d'où je suis parti ?", a: "Oui, sans danger — ça ne marque rien. Seul le pilier d'en face paie." }
      ]
    },
    "3d/miner": {
      tagline: "Crie et lâche la griffe",
      metaDesc: "Miner 3D est un jeu de voix gratuit de 30 secondes. Une griffe à blocs se balance au-dessus d'une grotte à blocs — crie, appuie sur Espace ou clique pour la lâcher et hisser l'or. Rien n'est enregistré.",
      kicker: "Crie au bon moment",
      heard: "Un cri, Espace ou un clic lâche la griffe.",
      featureSmall: "La ruée vers l'or en blocs",
      steps: ["Appuie sur Commencer, puis autorise le micro si le navigateur le demande.", "La griffe se balance toute seule. Crie, appuie sur Espace ou clique et elle plonge droit en bas.", "Elle remonte ce qu'elle attrape — l'or rapporte gros, la roche est lourde et lente, et le joyau bleu est le jackpot.", "Attrape un maximum en 30 secondes."],
      note: "Tu vois la mine de côté, tout en blocs. Miner 3D mesure le volume dans la page et ne garde aucun enregistrement.",
      faq: [
        { q: "Miner 3D contre Miner, quelle différence ?", a: "Mêmes règles, deux aspects : la mine plate en pixels et cette vue de blocs. Les records sont séparés." },
        { q: "Faut-il crier ?", a: "Non — n'importe quel son court au-dessus de la ligne lâche la griffe, et Espace ou un clic marchent sans micro." }
      ]
    },
    "3d/floors": {
      tagline: "Descends 100 étages avec ta voix",
      metaDesc: "Floors 3D est un jeu de voix gratuit de 30 secondes. Un grimpeur à blocs s'enfonce dans un puits à blocs — fredonne grave pour aller à gauche, aigu à droite, en évitant les pointes. Rien n'est enregistré.",
      kicker: "Grave à gauche, aigu à droite",
      heard: "Son grave à gauche, son aigu à droite.",
      featureSmall: "La descente en blocs",
      steps: ["Appuie sur Commencer, puis autorise le micro si le navigateur le demande.", "Le grimpeur descend tout seul. Fredonne grave et il va à gauche ; siffle ou chante aigu et il va à droite.", "Guide-le par les trous de chaque étage. Les étages à pointes et le plafond qui descend terminent la manche.", "Les flèches ou chaque moitié de l'image marchent aussi. Tu as 30 secondes."],
      note: "Tu vois le puits de côté, tout en blocs. Floors 3D écoute la hauteur du son dans la page. L'audio ne quitte jamais ton appareil.",
      faq: [
        { q: "Floors 3D contre Floors, quelle différence ?", a: "Mêmes règles, deux aspects : le puits plat en pixels et cette vue de blocs. Les records sont séparés." },
        { q: "Comment marche la direction à la voix ?", a: "La page suit la hauteur de ta voix : grave à gauche, aigu à droite. En silence, il tombe droit." }
      ]
    }
  },
  de: {
    "3d/dino": {
      tagline: "Spring mit Schall", metaDesc: "Dino 3D ist ein kostenloses 30-Sekunden-Sprachspiel. Halte einen Ton und der Blockdino hält durch. Verstumme und er fällt.",
      kicker: "Halte den Ton", heard: "Halte einen Ton, Leertaste oder Maus. Der Dinosaurier bleibt oben.",
      featureSmall: "Halte den Ton — verstummst du, fällst du",
      steps: ["Drück Start und erlaube das Mikrofon, wenn der Browser fragt.", "Halte einen Ton, die Leertaste oder die Maus und der Dino bleibt oben. Lass los und er fällt.", "Jeder geschaffte Stein gibt einen Punkt.", "Berühr einen Stein und die Runde endet. Du hast 30 Sekunden."],
      note: "Du siehst den Dino von der Seite. Die Steine kommen von rechts. Dino 3D misst die Lautstärke in der Seite: Es sendet kein Audio an einen Sprachdienst und nimmt nichts auf.",
      faq: [
        { q: "Wie punkte ich bei Dino 3D?", a: "Jeder geschaffte Stein gibt einen Punkt, bevor die 30 Sekunden um sind." },
        { q: "Muss ich schreien?", a: "Nein. Jeder gleichmäßige Ton hält ihn — Reden, Summen oder Leertaste geht auch. Schreien ist nur lustiger." }
      ]
    },
    "3d/flap": {
      tagline: "Steig mit deiner Stimme", metaDesc: "Flap 3D ist ein kostenloses 30-Sekunden-Sprachspiel. Halte einen Ton und die Blockmotte steigt durch die Lücken. Verstumme und sie fällt.",
      kicker: "Halte den Ton", heard: "Halte einen Ton, Leertaste oder Maus und die Motte steigt.",
      featureSmall: "Halte den Ton, um durch die Lücken zu steigen",
      steps: ["Drück Start und erlaube das Mikrofon, wenn der Browser fragt.", "Halte einen Ton, Leertaste oder Maus und die Motte steigt. Lass los und sie fällt.", "Flieg durch eine Lücke für einen Punkt.", "Berühr eine Wand, oben oder den Boden und die Runde endet. Du hast 30 Sekunden."],
      note: "Du siehst die Motte von der Seite. Die Lücken kommen von rechts. Flap 3D misst die Lautstärke in der Seite und nimmt nichts auf.",
      faq: [
        { q: "Wie punkte ich bei Flap 3D?", a: "Flieg durch eine Lücke für einen Punkt. Kette so viele wie möglich in 30 Sekunden." },
        { q: "Warum fällt meine Motte ständig?", a: "Ton ist Auftrieb. Im stillen Raum sinkt sie — halte einen Ton oder die Leertaste, dann steigt sie." }
      ]
    },
    "3d/float": {
      tagline: "Steuere durchs Loch", metaDesc: "Float 3D ist ein kostenloses 30-Sekunden-Sprachspiel. Lautstärke hebt den Blockballon durch runde Löcher. Stille lässt ihn fallen.",
      kicker: "Heb mit Lautstärke", heard: "Lauter, Leertaste oder Maus nach oben hebt den Ballon.",
      featureSmall: "Lautstärke trägt den Ballon durch die Ringe",
      steps: ["Drück Start und erlaube das Mikrofon, wenn der Browser fragt.", "Lauter hebt den Ballon; halte die Leertaste zum Steigen oder die Maus und beweg sie auf und ab.", "Flieg durch jedes runde Loch für einen Punkt.", "Berühr einen Ring und die Runde endet. Du hast 30 Sekunden."],
      note: "Du siehst den Ballon von der Seite, die Löcher sind Ringe von rechts. Float 3D misst die Lautstärke in der Seite und nimmt nichts auf.",
      faq: [
        { q: "Was ist anders als bei den anderen 3D-Spielen?", a: "Lautstärke ist ein Höhenregler, nicht nur ein Schalter: je lauter, desto höher der Ballon. Feine Kontrolle gewinnt." },
        { q: "Geht es nur mit der Maus?", a: "Ja. Halte die Maustaste auf dem Bild und beweg sie auf und ab — der Ballon folgt dem Zeiger. Leertaste geht auch." }
      ]
    },
    dino: {
      tagline: "Spring mit Schall", metaDesc: "Dino ist ein kostenloses 30-Sekunden-Sprachspiel. Halte einen Ton und der kleine Dino bleibt oben. Verstumme und er fällt.",
      kicker: "Halte den Ton", heard: "Halte den Ton und der Dinosaurier bleibt oben.", cardSmall: "Das 2D-Bild",
      steps: ["Drück Start und erlaube das Mikrofon.", "Halte einen Ton und der Dino steigt und bleibt. Verstumme und er fällt.", "Jeder geschaffte Stein gibt einen Punkt.", "Berühr einen Stein und die Runde endet. Du hast 30 Sekunden."],
      note: "Dino misst die Lautstärke in der Seite: kein Audio an einen Sprachdienst, keine Aufnahme. Der Dino und die Steine sind hier gezeichnet.",
      faq: [
        { q: "Unterschied zwischen Dino und Dino 3D?", a: "Gleiche Regeln, zwei Bilder. Dino ist das flache Pixel-Original; Dino 3D ist derselbe Lauf in Blockansicht." },
        { q: "Läuft Dino am Handy?", a: "Ja. Es läuft im Handy-Browser und hört über das Mikrofon. Halte das Bild gedrückt, um ohne Ton zu spielen." }
      ]
    },
    flap: {
      tagline: "Steig mit deiner Stimme", metaDesc: "Flap ist ein kostenloses 30-Sekunden-Sprachspiel. Halte einen Ton und die Pixelmotte steigt durch die Lücken. Verstumme und sie fällt.",
      kicker: "Halte den Ton", heard: "Halte den Ton und die Motte steigt.", cardSmall: "Das 2D-Bild",
      steps: ["Drück Start und erlaube das Mikrofon.", "Halte einen Ton und die Motte steigt. Verstumme und sie fällt.", "Flieg durch eine Lücke für einen Punkt.", "Berühr eine Wand, oben oder den Boden und die Runde endet. Du hast 30 Sekunden."],
      note: "Flap misst die Lautstärke in der Seite: kein Audio an einen Sprachdienst, keine Aufnahme. Motte und Tore sind hier gezeichnet.",
      faq: [
        { q: "Unterschied zwischen Flap und Flap 3D?", a: "Gleiche Regeln, zwei Bilder. Flap ist die flache Pixel-Version; Flap 3D zeigt denselben Flug in Blöcken." },
        { q: "Wie halte ich die Motte auf einer Höhe?", a: "Füttere sie mit gleichmäßigem Ton — ein langes „ahhh“ auf einer Lautstärke hält sie eben." }
      ]
    },
    float: {
      tagline: "Steuere durchs Loch", metaDesc: "Float ist ein kostenloses 30-Sekunden-Sprachspiel. Lautstärke hebt den Ballon durch runde Löcher. Stille lässt ihn fallen.",
      kicker: "Heb mit Lautstärke", heard: "Lauter hebt den Ballon. Stille lässt ihn fallen.", cardSmall: "Das 2D-Bild",
      steps: ["Drück Start und erlaube das Mikrofon.", "Lauter hebt den Ballon; Stille lässt ihn sinken.", "Flieg durch jedes runde Loch für einen Punkt.", "Berühr den Rand und die Runde endet. Du hast 30 Sekunden."],
      note: "Float misst die Lautstärke in der Seite: kein Audio an einen Sprachdienst, keine Aufnahme. Ballon und Löcher sind hier gezeichnet, sie stammen nicht von einem anderen Spiel.",
      faq: [
        { q: "Ist Float das Hubschrauber-Spiel?", a: "Es gehört zur selben Ein-Knopf-Familie, aber deine Stimme ist der Knopf und alle Grafiken sind für diese Seite gezeichnet." },
        { q: "Warum fällt der Ballon so schnell, wenn ich verstumme?", a: "Die Schwerkraft ist absichtlich stärker als der Auftrieb — sicherer ist ein leiser, gleichmäßiger Ton statt völliger Stille." }
      ]
    },
    louder: {
      tagline: "Bleib laut", metaDesc: "Louder ist ein kostenloses 30-Sekunden-Sprachspiel. Jede Sekunde über der Linie zählt. Stille zählt nicht. Nichts wird aufgenommen.",
      kicker: "Bleib laut", heard: "Stille Sekunden zählen nicht.", cardSmall: "Jede laute Sekunde zählt",
      attract: "Mach Lärm — jede laute Sekunde zählt",
      steps: ["Drück Start und erlaube das Mikrofon.", "Sprich, sing oder mach einfach Lärm über der Linie.", "Jede Sekunde darüber gibt einen Punkt. Stille zählt nicht.", "Die Runde dauert 30 Sekunden. Schlag deinen Rekord."],
      note: "Louder misst die Lautstärke auf dieser Seite: kein Audio an einen Sprachdienst, keine Aufnahme. Das Wort auf dem Bildschirm sagt nur, ob der Pegel über der Linie liegt.",
      faq: [
        { q: "Was zählt als „laut genug“?", a: "Normale Sprechlautstärke schafft die Linie in einem stillen Raum. Steht „Lauter“ da, fehlt noch etwas." },
        { q: "Zählen Musik oder Videos?", a: "Technisch ja — das Spiel hört nur Lautstärke. Aber der Spaß ist, den Lärm selbst zu machen." }
      ]
    },
    say: {
      tagline: "Sag das Wort", metaDesc: "Say It ist ein kostenloses Ein-Minuten-Sprachspiel. Ein Wort erscheint, sag es, und das nächste kommt. Desktop-Chrome mit Mikrofon.",
      kicker: "Sag das Wort", heard: "Ein Wort erscheint. Sag es.", cardSmall: "Ein Wort erscheint — sag es",
      attract: "Sag das Wort laut", prompt: "Wort",
      steps: ["Drück Start und erlaube das Mikrofon.", "Ein Wort füllt den Bildschirm. Sag es deutlich.", "Trifft es, steigt der Punkt und ein neues Wort kommt.", "Du hast 60 Sekunden. Stopp beendet früher."],
      note: "Say It nutzt den Sprachdienst von Chrome, um Stimme in Text zu wandeln. Diese Seite speichert die Aufnahme nicht. Öffne sie im Desktop-Chrome.",
      faq: [
        { q: "Warum zählt mein Wort nicht?", a: "Sag das ganze Wort deutlich. Der Streifen unten zeigt, was Chrome gehört hat — vergleiche und versuch es again." },
        { q: "Kann ich in anderen Sprachen spielen?", a: "Ja — wechsle die Sprache oben in der Leiste, die Wörter wechseln mit. Jede Version hört in ihrer Sprache." }
      ]
    },
    count: {
      tagline: "Zähl laut", metaDesc: "Count ist ein kostenloses Sprachspiel. Sag eins, dann zwei, und zähl bis dreißig. Du hast 60 Sekunden. Desktop-Chrome.",
      kicker: "Sag diese Zahl", heard: "Fang bei eins an und zähl weiter.", cardSmall: "Von eins bis dreißig",
      attract: "Zähl ab eins, laut", prompt: "eins",
      steps: ["Drück Start. Die erste Zahl ist eins.", "Sag die Zahl auf dem Bildschirm, dann die nächste, wenn sie kommt.", "Jede gehörte Zahl in der Ordnung gibt einen Punkt.", "Gezählt wird bis dreißig, oder die 60 Sekunden sind um."],
      note: "Count nutzt den Sprachdienst von Chrome, um Stimme in Text zu wandeln. Diese Seite speichert die Aufnahme nicht. Öffne sie im Desktop-Chrome.",
      faq: [
        { q: "Was, wenn ich eine Zahl in falscher Ordnung sage?", a: "Nichts Schlimmes — der Bildschirm bleibt bei derselben Zahl, bis die richtige kommt. Nur richtige Ordnung zählt." },
        { q: "Muss die Zahl exakt sein?", a: "Fast reicht. Das Spiel akzeptiert übliche Varianten und Ziffern — zähl einfach natürlich." }
      ]
    },
    repeat: {
      tagline: "Sag den ganzen Satz", metaDesc: "Repeat ist ein kostenloses Sprachspiel. Ein Zwei-Wort-Satz erscheint, sag beide Wörter. Der nächste kommt, wenn der ganze Satz passt. 60 Sekunden.",
      kicker: "Sag den ganzen Satz", heard: "Sag jedes Wort im Satz.", cardSmall: "Sag den ganzen Satz nach",
      attract: "Wiederhole den Satz, jedes Wort", prompt: "roter Apfel",
      steps: ["Drück Start und erlaube das Mikrofon.", "Ein kurzer Zwei-Wort-Satz erscheint, wie „roter Apfel“.", "Sag beide Wörter. Nur der ganze Satz zählt.", "Jeder Treffer bringt einen neuen Satz. Du hast 60 Sekunden."],
      note: "Repeat nutzt den Sprachdienst von Chrome, um Stimme in Text zu wandeln. Diese Seite speichert die Aufnahme nicht. Öffne sie im Desktop-Chrome.",
      faq: [
        { q: "Zählen Reihenfolge und zusätzliche Wörter?", a: "Alle Wörter des Satzes müssen gehört werden; zusätzliche werden ignoriert. Falsche Reihenfolge zählt nicht." },
        { q: "Können Kinder Repeat spielen?", a: "Ein gutes Lese-Aufwärmen: kurze Sätze, kein Zeitdruck pro Satz, der Punktestand zählt gehörte Wörter." }
      ]
    },
    "voice-over": {
      tagline: "Lies die Zeile", metaDesc: "Voice Over ist ein kostenloses 60-Sekunden-Sprachspiel. Ein kurzer Erzählsatz erscheint, lies ihn laut, und der nächste kommt. Chrome mit Mikrofon.",
      kicker: "Lies die Zeile", heard: "Ein Erzählsatz erscheint. Lies ihn.", cardSmall: "Lies die Erzählzeile",
      attract: "Lies die Erzählung laut", prompt: "der Zug hat Verspätung",
      steps: ["Drück Start und erlaube das Mikrofon.", "Ein kurzer Erzählsatz füllt den Bildschirm, wie „der Zug hat Verspätung“.", "Lies jedes Wort. Der Punkt kommt, wenn der ganze Satz passt.", "Jeder Treffer bringt eine neue Zeile. Du hast 60 Sekunden."],
      note: "Die Zeilen sind für dieses Spiel geschrieben. Voice Over nutzt den Sprachdienst von Chrome. Diese Seite speichert die Aufnahme nicht. Öffne sie im Desktop-Chrome.",
      faq: [
        { q: "Gut zum laut Lesen üben?", a: "Genau die Idee. Kurze, natürliche Sätze, und das Spiel hört nur, ob die Worte passten — ein echtes Vorlese-Training." },
        { q: "Unterschied zur Seite Voice Over Game?", a: "Hier läuft unser eigenes 60-Sekunden-Wortspiel. Die andere Seite bettet ein externes Studio ein, Choicer Voicer." }
      ]
    },
    "voice-acting": {
      tagline: "Sag es mit Gefühl", metaDesc: "Voice Acting ist ein kostenloses 60-Sekunden-Spiel. Eine Stimmung erscheint über einem Originalsatz — sag den Satz und spiel die Stimmung.",
      kicker: "In dieser Stimmung", heard: "Sag den Satz. Die Stimmung steht darüber.", cardSmall: "Sag ihn mit dieser Stimmung",
      attract: "Sag den Satz in dieser Stimmung", prompt: "leg das weg",
      steps: ["Drück Start und erlaube das Mikrofon.", "Eine Stimmung erscheint über einem Originalsatz, wie Geflüstert oder Wütend.", "Sag den Satz — und spiel die Stimmung dabei.", "Der Punkt zählt die Wörter. Die Stimmung ist dein Spiel. Du hast 60 Sekunden."],
      note: "Diese Seite hört nicht, ob du wütend oder leise klangst, also bewertet sie die schauspielerei nicht — sie prüft nur die Wörter. Die Sätze sind für dieses Spiel geschrieben. Voice Acting nutzt den Sprachdienst von Chrome und speichert die Aufnahme nicht.",
      faq: [
        { q: "Ändert das Spielen der Stimmung meinen Punkt?", a: "Nein — gezählt werden nur die Wörter. Die Stimmung ist für Spaß und fürs Stimmungsspektrum-Üben da." },
        { q: "Für Castings oder Demos brauchbar?", a: "Als Aufwärmen perfekt: zufällige Stimmungen, kurze Sätze, eine Minute auf der Uhr. Für echte Aufnahmen nimm ein Studio — diese Seite speichert kein Audio." }
      ]
    },
    miner: {
      tagline: "Ruf und lass die Kralle fallen", metaDesc: "Miner ist ein kostenloses Stimm-Spiel für 30 Sekunden. Eine Kralle schwingt über einer Höhle — ruf, drück Leertaste oder klicke, um sie fallen zu lassen und Gold hochzuziehen. Nichts wird aufgenommen.",
      kicker: "Ruf im richtigen Moment", heard: "Ruf, Leertaste oder ein Klick lässt die Kralle fallen.", cardSmall: "Der Goldrausch mit der Stimme",
      steps: ["Drück Start und erlaube das Mikrofon.", "Die Kralle schwingt von selbst. Ruf, drück Leertaste oder klicke — sie schießt gerade nach unten.", "Sie zieht hoch, was sie erwischt: Gold bringt viel, Stein ist schwer und langsam, der blaue Edelstein ist der Jackpot.", "Hol so viel wie möglich in 30 Sekunden."],
      note: "Miner misst die Lautstärke in der Seite: Es geht kein Audio an einen Sprachdienst und keine Aufnahme wird gespeichert. Kralle, Gold und Höhle sind hier gezeichnet.",
      faq: [
        { q: "Wie hole ich mehr Punkte in Miner?", a: "Warte, bis die Kralle auf einen Klumpen zeigt, bevor du rufst. Großes Gold bringt 120, der blaue Edelstein 300 — erst zielen, dann fallen lassen." },
        { q: "Muss ich rufen?", a: "Nein — jeder kurze Sound über der Linie lässt die Kralle fallen, und Leertaste oder Klick gehen auch ohne Mikrofon." }
      ]
    },
    floors: {
      tagline: "Mit der Stimme 100 Etagen runter", metaDesc: "Floors ist ein kostenloses Stimm-Spiel für 30 Sekunden. Ein Kletterer sinkt in einen Schacht — summe tief für links, singe hoch für rechts und weich den Stacheln aus. Nichts wird aufgenommen.",
      kicker: "Tief links, hoch rechts", heard: "Tiefer Ton geht nach links, hoher nach rechts.", cardSmall: "Der Abstieg-Klassiker, per Tonhöhe",
      steps: ["Drück Start und erlaube das Mikrofon.", "Der Kletterer sinkt von selbst. Summe einen tiefen Ton und er geht nach links; pfeife oder singe hoch und er geht nach rechts.", "Führ ihn durch die Lücken jeder Etage. Stachel-Etagen und die herabkommende Stacheldecke beenden die Runde.", "Auch die Pfeiltasten oder das Festhalten der linken oder rechten Bildhälfte steuern. Du hast 30 Sekunden."],
      note: "Floors hört die Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie, und nichts wird gespeichert. Kletterer, Schacht und Stacheln sind hier gezeichnet.",
      faq: [
        { q: "Wie funktioniert das Steuern mit der Stimme?", a: "Die Seite verfolgt die Tonhöhe deiner Stimme: Tiefe Töne (Summen) gehen nach links, hohe (Pfeifen oder ein \"ii\") nach rechts. Bei Stille fällt er gerade weiter." },
        { q: "Ist Floors dasselbe wie das 100-Etagen-Spiel?", a: "Es ist unsere Stimme-Version vom klassischen Abstieg: gleicher fallender Kletterer, gleiche Stacheldecke — nur dass die Pfeiltasten durch deine Tonhöhe ersetzt sind." }
      ]
    },
    catch: {
      tagline: "Fang das fallende Gold", metaDesc: "Catch ist ein kostenloses Stimm-Spiel für 30 Sekunden. Summe tief oder hoch, um den Korb zu schieben, fang Münzen und Edelsteine und meide die Bomben. Nichts wird aufgenommen.",
      kicker: "Tief links, hoch rechts", heard: "Schieb den Korb. Fang Münzen und Edelsteine, meide Bomben.", cardSmall: "Münzen fangen, Bomben meiden",
      steps: ["Drück Start und erlaube das Mikrofon.", "Summe tief, um den Korb nach links zu schieben, hoch für rechts. Auch die Pfeiltasten oder das Halten jeder Bildhälfte wirken.", "Münzen zählen eins, blaue Edelsteine drei, und eine gefangene Bombe beendet die Runde.", "Du hast 30 Sekunden. Schlag deinen Rekord."],
      note: "Catch misst Lautstärke und Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie, und nichts wird gespeichert. Korb, Münzen und Bomben sind hier gezeichnet.",
      faq: [
        { q: "Was zählt als tiefer oder hoher Ton?", a: "Summen oder ein \"mm\" ist tief und schiebt nach links; Pfeifen oder ein \"ii\" ist hoch nach rechts. Gehaltene Töne steuern am besten." },
        { q: "Was passiert, wenn ich eine Bombe fange?", a: "Die Runde endet sofort, dein Punktstand bleibt. Bomben fallen oft genug — gierige Körbe fliegen auf." }
      ]
    },
    racer: {
      tagline: "Weiche dem Verkehr per Tonhöhe aus", metaDesc: "Racer ist ein kostenloses Stimm-Spiel für 30 Sekunden. Summe tief oder hoch, um die Straße runterzusteuern und Autos auszuweichen. Nichts wird aufgenommen.",
      kicker: "Slalom durch die Spuren", heard: "Steuere die Straße runter und weiche den Autos aus.", cardSmall: "Lenkrad per Tonhöhe",
      steps: ["Drück Start und erlaube das Mikrofon.", "Summe tief für links, hoch für rechts. Auch Pfeiltasten oder jede Bildhälfte wirken.", "Jedes überholte Auto zählt einen Punkt. Eines berühren beendet die Runde.", "Der Verkehr wird schneller. Du hast 30 Sekunden."],
      note: "Racer hört die Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie, und nichts wird gespeichert. Straße und Autos sind hier gezeichnet.",
      faq: [
        { q: "Bleibt das Auto in einer Spur?", a: "Nein — die Lenkung ist durchgehend, wie ein echtes Lenken. Kleine Korrekturen reichen." },
        { q: "Wie schnell wird es?", a: "Mit jedem überholten Auto wird der Verkehr schneller — die letzten zehn Sekunden sind der Test." }
      ]
    },
    bricks: {
      tagline: "Zerschieß die Mauer mit der Stimme", metaDesc: "Bricks ist ein kostenloses Stimm-Spiel für 30 Sekunden. Summe, um das Paddle zu schieben, ruf oder drück Leertaste für den Ball und zerschlag möglichst viele Steine. Nichts wird aufgenommen.",
      kicker: "Schieb das Paddle, ruf den Abschuss", heard: "Schieb das Paddle. Ruf, Leertaste oder Klick stößt den Ball ab.", cardSmall: "Ballern per Tonhöhe",
      steps: ["Drück Start und erlaube das Mikrofon.", "Summe tief oder hoch, um das Paddle zu schieben; der Ball reitet mit bis zum Abschuss.", "Ruf, drück Leertaste oder klicke zum Abschuss. Obere Goldreihen zählen 3, mittlere 2, untere 1.", "Fällt der Ball, positionier dich und ruf neu. Du hast 30 Sekunden."],
      note: "Bricks misst Lautstärke und Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie, und nichts wird gespeichert. Mauer, Paddle und Ball sind hier gezeichnet.",
      faq: [
        { q: "Warum neu abschießen?", a: "Der Ruf ist dein Aufschlag. Fällt der Ball, stell dich klug und ruf wieder — gut Aufschlagen zählt auch." },
        { q: "Welche Steine zählen am meisten?", a: "Die zwei oberen Goldreihen zählen 3, die mittleren 2, die untere 1 — halt den Ball oben." }
      ]
    },
    snake: {
      tagline: "Steuere die Schlange per Tonhöhe", metaDesc: "Snake ist ein kostenloses Stimm-Spiel für 30 Sekunden. Tiefer Ton biegt links ab, hoher rechts — iss Äpfel und beiß nicht in dich selbst. Nichts wird aufgenommen.",
      kicker: "Tief biegt links, hoch rechts", heard: "Iss die Äpfel. Beiß nicht in dich selbst.", cardSmall: "Der Klassiker, Kurven per Ton",
      steps: ["Drück Start und erlaube das Mikrofon.", "Die Schlange kriecht von selbst. Tiefer Ton biegt nach ihrer links, hoher nach rechts — relativ zur Richtung.", "Jeder Apfel zählt einen Punkt und macht zwei Zellen länger.", "Mauer oder sich selbst beißen beendet die Runde. Du hast 30 Sekunden."],
      note: "Snake hört die Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie, und nichts wird gespeichert. Schlange und Äpfel sind hier gezeichnet.",
      faq: [
        { q: "Sind die Kurven absolut oder relativ?", a: "Relativ: \"links\" heißt immer die linke Seite der Schlange, wie ein echtes Lenken. Zwei schnelle tiefe Töne ergeben eine Wende." },
        { q: "Wie lang ist die Schlange am Anfang?", a: "Vier Zellen. Jeder Apfel macht zwei länger, das Tempo steigt — zum Schluss wird es voll." }
      ]
    },
    march: {
      tagline: "Ton zum Gehen, Stille zum Stoppen", metaDesc: "March ist ein kostenloses Stimm-Spiel für 30 Sekunden. Halte einen Ton, um den Korridor entlangzugehen, Stille zum Stoppen — bremse vor den Stacheln, die Stachelwand jagt dich. Nichts wird aufgenommen.",
      kicker: "Auf Ton gehen, in Stille bremsen", heard: "Halte einen Ton zum Gehen. Stille stoppt dich.", cardSmall: "Der Geh-und-Steh-Klassiker",
      steps: ["Drück Start und erlaube das Mikrofon.", "Halte einen Ton und der Kletterer geht; werde still und er bleibt stehen.", "Stoppe vor den Stachelstreifen — sie berühren beendet die Runde, und die Stachelwand hinten rückt ewig näher.", "Der Punktestand zählt Meter. Du hast 30 Sekunden."],
      note: "March misst die Lautstärke in der Seite. Es geht kein Audio an einen Sprachdienst, und keine Aufnahme wird gespeichert. Läufer, Stacheln und Wand sind hier gezeichnet.",
      faq: [
        { q: "Wie präzise ist das Stoppen?", a: "Sofort — Stille bremst ihn auf der Stelle. Das Spiel ist, den Boden vor dir zu lesen und früh loszulassen." },
        { q: "Und wenn ich einfach still bleibe?", a: "Die Stachelwand rückt ewig vor — Stillstand schiebt es nur auf, und nur Meter zählen." }
      ]
    },
    tug: {
      tagline: "Schreie lauter als die Maschine", metaDesc: "Tug ist ein kostenloses Stimm-Spiel für 30 Sekunden. Deine Lautstärke zieht das Seil gegen eine Maschine, die jede Runde stärker zieht. Gewinne so viele Runden wie möglich. Nichts wird aufgenommen.",
      kicker: "Lauter zieht stärker", heard: "Deine Lautstärke zieht die Markierung zu deiner Linie.", cardSmall: "Seilziehen gegen die Maschine",
      steps: ["Drück Start und erlaube das Mikrofon.", "Ruf, sing oder summe — je lauter, desto stärker zieht deine Seite.", "Zieh die Markierung über die grüne Linie, um die Runde zu gewinnen. Die Maschine zieht zurück, jede Runde stärker.", "Gewinn so viele Runden wie möglich in 30 Sekunden."],
      note: "Tug misst die Lautstärke in der Seite. Es geht kein Audio an einen Sprachdienst, und keine Aufnahme wird gespeichert. Seil, Fahne und beide Zieher sind hier gezeichnet.",
      faq: [
        { q: "Wie laut muss ich sein?", a: "Die ersten Runden fallen mit kräftiger Sprechstimme. Ab Runde drei schreist du — so ist es gedacht." },
        { q: "Was, wenn die Maschine eine Runde gewinnt?", a: "Die Markierung zurück in die Mitte, und die Maschine lässt etwas nach — eine verlorene Runde stapelt sich nicht." }
      ]
    },
    puff: {
      tagline: "Aufblasen, sichern, nicht platzen", metaDesc: "Puff ist ein kostenloses Stimm-Spiel für 30 Sekunden. Halte einen Ton, um den Ballon aufzublasen — jeder Ballon hat eine geheime Platzgröße, also sichere ihn mit Stille, bevor er platzt. Nichts wird aufgenommen.",
      kicker: "Groß blasen, früh sichern", heard: "Halte einen Ton zum Blasen. Werde still zum Sichern.", cardSmall: "Aufblasen und rechtzeitig kassieren",
      steps: ["Drück Start und erlaube das Mikrofon.", "Halte einen Ton und der Ballon wächst etwa 44 Pixel pro Sekunde — größer zählt mehr.", "Werde eine halbe Sekunde still, um die Größe als Punkte zu sichern und neu aufzublasen.", "Jeder Ballon versteckt seine eigene Platzgröße. Darüber geblasen, platzt er umsonst. Du hast 30 Sekunden."],
      note: "Puff misst die Lautstärke in der Seite. Es geht kein Audio an einen Sprachdienst, und keine Aufnahme wird gespeichert. Ballons und Platzen sind hier gezeichnet.",
      faq: [
        { q: "Wo ist die Platzgrenze?", a: "Versteckt, und bei jedem Ballon anders — irgendwo zwischen 48 und 112. Die Zahl auf dem Ballon ist seine Größe; die Grenze ist das Geheimnis." },
        { q: "Straft ein geplatzter Ballon?", a: "Nur den Stolz — er platzt auf null und sofort kommt ein neuer. Gier kostet die geblasenen Sekunden." }
      ]
    },
    hop: {
      tagline: "Stimme aufladen, über die Lücke springen", metaDesc: "Hop ist ein kostenloses Stimm-Spiel für 30 Sekunden. Halte einen Ton, um den Sprung aufzuladen, werde still, um zu springen — land auf dem nächsten Pfeiler, ohne dich zu vertun. Nichts wird aufgenommen.",
      kicker: "Halten zum Laden, still zum Springen", heard: "Halte einen Ton zum Laden. Werde still zum Springen.", cardSmall: "Der Lade-Sprung-Klassiker",
      steps: ["Drück Start und erlaube das Mikrofon.", "Halte einen Ton und der Ladering füllt sich — voll heißt weiter fliegen.", "Werde still und der Kletterer springt zum nächsten Pfeiler. Mitte trifft, gibt zwei.", "In den Canyon fallen beendet die Runde. Du hast 30 Sekunden."],
      note: "Hop misst die Lautstärke in der Seite. Es geht kein Audio an einen Sprachdienst, und keine Aufnahme wird gespeichert. Pfeiler und Kletterer sind hier gezeichnet.",
      faq: [
        { q: "Wie einschätzen?", a: "Die Zahl über der Lücke ist ihre Breite, der Ring zeigt deine Ladung — voll fliegt er rund vierhundert Pixel; bei kurzen Lücken früh loslassen." },
        { q: "Kann ich zurück auf den Startpfeiler?", a: "Ja, gefahrlos — zählt nur nichts. Nur der ferne Pfeiler bringt Punkte." }
      ]
    },
    "3d/miner": {
      tagline: "Ruf und lass die Kralle fallen",
      metaDesc: "Miner 3D ist ein kostenloses Stimm-Spiel für 30 Sekunden. Eine Blockkralle schwingt über einer Blockhöhle — ruf, drück Leertaste oder klicke, um sie fallen zu lassen und Gold hochzuholen. Nichts wird aufgenommen.",
      kicker: "Ruf im richtigen Moment",
      heard: "Ruf, Leertaste oder ein Klick lässt die Kralle fallen.",
      featureSmall: "Der Goldrausch in Blöcken",
      steps: ["Drück Start, dann erlaube das Mikrofon, wenn der Browser fragt.", "Die Kralle schwingt von selbst. Ruf, drück Leertaste oder klicke — sie schießt gerade nach unten.", "Sie zieht hoch, was sie erwischt: Gold bringt viel, Stein ist schwer und langsam, der blaue Edelstein ist der Jackpot.", "Hol so viel wie möglich in 30 Sekunden."],
      note: "Du siehst die Mine von der Seite, alles aus Blöcken. Miner 3D misst die Lautstärke in der Seite und speichert nichts.",
      faq: [
        { q: "Miner 3D oder Miner — was ist der Unterschied?", a: "Gleiche Regeln, zwei Bilder: die flache Pixelmine und diese Blockansicht. Die Rekorde werden getrennt gespeichert." },
        { q: "Muss ich rufen?", a: "Nein — jeder kurze Sound über der Linie lässt die Kralle fallen, und Leertaste oder Klick gehen ohne Mikrofon." }
      ]
    },
    "3d/floors": {
      tagline: "Mit der Stimme 100 Etagen runter",
      metaDesc: "Floors 3D ist ein kostenloses Stimm-Spiel für 30 Sekunden. Ein Blockkletterer sinkt in einen Blockschacht — summe tief für links, singe hoch für rechts und weich den Stacheln aus. Nichts wird aufgenommen.",
      kicker: "Tief links, hoch rechts",
      heard: "Tiefer Ton geht nach links, hoher nach rechts.",
      featureSmall: "Der Abstieg in Blöcken",
      steps: ["Drück Start, dann erlaube das Mikrofon, wenn der Browser fragt.", "Der Kletterer sinkt von selbst. Summe tief und er geht nach links; pfeife oder singe hoch und er geht nach rechts.", "Führ ihn durch die Lücken jeder Etage. Stachel-Etagen und die Stacheldecke beenden die Runde.", "Auch die Pfeiltasten oder jede Bildhälfte steuern. Du hast 30 Sekunden."],
      note: "Du siehst den Schacht von der Seite, alles aus Blöcken. Floors 3D hört die Tonhöhe in der Seite. Das Audio verlässt dein Gerät nie.",
      faq: [
        { q: "Floors 3D oder Floors — was ist der Unterschied?", a: "Gleiche Regeln, zwei Bilder: der flache Pixelschacht und diese Blockansicht. Die Rekorde sind getrennt." },
        { q: "Wie funktioniert das Steuern mit der Stimme?", a: "Die Seite verfolgt die Tonhöhe: tief geht nach links, hoch nach rechts. Bei Stille fällt er gerade weiter." }
      ]
    }
  }
}
