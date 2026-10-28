// Game copy overlay for it / ko / ru — merged onto the game objects by build.mjs.
export const gamesMore2 = {
  it: {
    "3d/dino": {
      tagline: "Salta urlando", metaDesc: "Dino 3D è un gioco di voce gratis di 30 secondi. Tieni un suono e il dinosauro a blocchi resta su. Fai silenzio e cade.",
      kicker: "Tieni il suono", heard: "Tieni un suono, Spazio o il mouse. Il dinosauro resta in piedi.",
      featureSmall: "Tieni il suono — se stai zitto, cadi",
      steps: ["Premi Start e consenti il microfono se il browser lo chiede.", "Tieni un suono, Spazio o il mouse e il dinosauro resta su. Lascia e cade.", "Ogni pietra superata vale un punto.", "Tocca una pietra e il round finisce. Hai 30 secondi."],
      note: "Vedi il dinosauro di lato. Le pietre arrivano da destra. Dino 3D misura il volume nella pagina: non invia audio a servizi vocali e non registra nulla.",
      faq: [
        { q: "Come si fa punto in Dino 3D?", a: "Ogni pietra superata dal dinosauro vale un punto prima che finiscano i 30 secondi." },
        { q: "Devo urlare?", a: "No. Qualsiasi suono costante lo tiene — parlare, canticchiare o tenere Spazio va bene. Urlare è solo più divertente." }
      ]
    },
    "3d/flap": {
      tagline: "Sali con la voce", metaDesc: "Flap 3D è un gioco di voce gratis di 30 secondi. Tieni un suono e la falena a blocchi sale dai varchi. Fai silenzio e cade.",
      kicker: "Tieni il suono", heard: "Tieni un suono, Spazio o il mouse e la falena sale.",
      featureSmall: "Tieni il suono per passare dai varchi",
      steps: ["Premi Start e consenti il microfono se il browser lo chiede.", "Tieni un suono, Spazio o il mouse e la falena sale. Lascia e cade.", "Passa da un varco per fare un punto.", "Tocca un muro, il soffitto o il terreno e il round finisce. Hai 30 secondi."],
      note: "Vedi la falena di lato. I varchi arrivano da destra. Flap 3D misura il volume nella pagina e non registra nulla.",
      faq: [
        { q: "Come si fa punto in Flap 3D?", a: "Passa da un varco per un punto. Incatenane più che puoi in 30 secondi." },
        { q: "Perché la mia falena cade sempre?", a: "Il suono è la spinta. Con la stanza silenziosa scende — tieni un suono o Spazio e sale." }
      ]
    },
    "3d/float": {
      tagline: "Attraversa l'anello", metaDesc: "Float 3D è un gioco di voce gratis di 30 secondi. Il volume solleva un pallone a blocchi attraverso anelli rotondi. Il silenzio lo fa cadere.",
      kicker: "Solleva col volume", heard: "Più forte, Spazio o il mouse in alto sollevano il pallone.",
      featureSmall: "Il volume porta il pallone negli anelli",
      steps: ["Premi Start e consenti il microfono se il browser lo chiede.", "Più forte solleva il pallone; tieni Spazio per salire o il mouse muovendolo su e giù.", "Attraversa ogni anello per fare un punto.", "Tocca un anello e il round finisce. Hai 30 secondi."],
      note: "Vedi il pallone di lato, e i buchi sono anelli che arrivano da destra. Float 3D misura il volume nella pagina e non registra nulla.",
      faq: [
        { q: "Cosa cambia rispetto agli altri 3D?", a: "Il volume è una manopola di altezza, non un interruttore: più sei forte, più in alto va il pallone. Vince il controllo fine." },
        { q: "Posso giocare solo col mouse?", a: "Sì. Tieni il mouse sull'immagine e muovilo su e giù — il pallone segue il puntatore. Anche Spazio funziona." }
      ]
    },
    dino: {
      tagline: "Salta urlando", metaDesc: "Dino è un gioco di voce gratis di 30 secondi. Tieni un suono e il piccolo dinosauro resta su. Fai silenzio e cade.",
      kicker: "Tieni il suono", heard: "Tieni il suono e il dinosauro resta su.", cardSmall: "La versione 2D",
      steps: ["Premi Start e consenti il microfono.", "Tieni un suono e il dinosauro sale, poi resta. Fai silenzio e cade.", "Ogni pietra superata vale un punto.", "Tocca una pietra e il round finisce. Hai 30 secondi."],
      note: "Dino misura il volume nella pagina: non invia audio a servizi vocali e non registra nulla. Il dinosauro e le pietre sono disegnati qui.",
      faq: [
        { q: "Differenza tra Dino e Dino 3D?", a: "Stesse regole, due immagini. Dino è l'originale a pixel piatti; Dino 3D è la stessa corsa in vista a blocchi." },
        { q: "Dino funziona sul telefono?", a: "Sì. Gira nel browser del telefono e ascolta col suo microfono. Tieni l'immagine per giocare senza suono." }
      ]
    },
    flap: {
      tagline: "Sali con la voce", metaDesc: "Flap è un gioco di voce gratis di 30 secondi. Tieni un suono e la falena a pixel sale dai varchi. Fai silenzio e cade.",
      kicker: "Tieni il suono", heard: "Tieni il suono e la falena sale.", cardSmall: "La versione 2D",
      steps: ["Premi Start e consenti il microfono.", "Tieni un suono e la falena sale. Fai silenzio e cade.", "Passa da un varco per fare un punto.", "Tocca un muro, il soffitto o il terreno e il round finisce. Hai 30 secondi."],
      note: "Flap misura il volume nella pagina: non invia audio a servizi vocali e non registra nulla. La falena e i muri sono disegnati qui.",
      faq: [
        { q: "Differenza tra Flap e Flap 3D?", a: "Stesse regole, due immagini. Flap è la versione a pixel piatta; Flap 3D mostra lo stesso volo a blocchi." },
        { q: "Come tengo la falena alla stessa altezza?", a: "Dalle un suono costante — un lungo \"ahhh\" allo stesso volume la tiene livellata." }
      ]
    },
    float: {
      tagline: "Attraversa il buco", metaDesc: "Float è un gioco di voce gratis di 30 secondi. Il volume solleva un pallone attraverso buchi rotondi. Il silenzio lo fa cadere.",
      kicker: "Solleva col volume", heard: "Più forte solleva il pallone. Il silenzio lo fa cadere.", cardSmall: "La versione 2D",
      steps: ["Premi Start e consenti il microfono.", "Più forte solleva il pallone; il silenzio lo fa scendere.", "Attraversa ogni buco rotondo per fare un punto.", "Tocca il bordo e il round finisce. Hai 30 secondi."],
      note: "Float misura il volume nella pagina: non invia audio a servizi vocali e non registra nulla. Il pallone e i buchi sono disegni originali di questo sito.",
      faq: [
        { q: "Float è il gioco dell'elicottero?", a: "È della stessa famiglia a un pulsante, ma il pulsante è la tua voce e ogni grafica è originale di questo sito." },
        { q: "Perché il pallone cade in fretta quando mi fermo?", a: "La gravità è apposta più forte della spinta — la mossa sicura è un suono basso e costante, non il silenzio totale." }
      ]
    },
    louder: {
      tagline: "Resta forte", metaDesc: "Louder è un gioco di voce gratis di 30 secondi. Ogni secondo sopra la linea vale. Il silenzio non conta. Nessuna registrazione.",
      kicker: "Resta forte", heard: "I secondi di silenzio non contano.", cardSmall: "Ogni secondo forte vale",
      attract: "Fai rumore — ogni secondo forte vale",
      steps: ["Premi Start e consenti il microfono.", "Parla, canta o fai semplicemente rumore sopra la linea.", "Ogni secondo sopra aggiunge un punto. Il silenzio non conta.", "Il round dura 30 secondi. Battere il tuo record."],
      note: "Louder misura il volume in questa pagina: non manda l'audio a servizi vocali e non salva registrazioni. La parola sullo schermo dice solo se il livello supera la linea.",
      faq: [
        { q: "Cosa conta come \"abbastanza forte\"?", a: "La voce normale passa la linea in una stanza silenziosa. Se compare \"Più forte\", non ci sei ancora — sforza un po'." },
        { q: "Posso fare punto con la musica?", a: "Tecnicamente sì — il gioco sente solo il volume. Ma il bello è fare il rumore tu." }
      ]
    },
    say: {
      tagline: "Di la parola", metaDesc: "Say It è un gioco di voce gratis di un minuto. Appare una parola, dila, e arriva la successiva. Chrome desktop con microfono.",
      kicker: "Di la parola", heard: "Appare una parola. Dilala.", cardSmall: "Appare una parola — dila",
      attract: "Di la parola a voce alta", prompt: "parola",
      steps: ["Premi Start e consenti il microfono.", "Una parola riempie lo schermo. Dilala chiaramente.", "Quando combacia, il punto sale e arriva una nuova parola.", "Hai 60 secondi. Stop finisce prima."],
      note: "Say It usa il servizio vocale di Chrome per trasformare la voce in testo. Questa pagina non salva la registrazione. Aprila in Chrome per desktop.",
      faq: [
        { q: "Perché la mia parola non conta?", a: "Di' la parola intera con chiarezza. La striscia in basso mostra cosa ha sentito Chrome — confronta e riprova." },
        { q: "Posso giocare in altre lingue?", a: "Sì — cambia la lingua del sito nella barra in alto e le parole cambiano con lei. Ogni versione ascolta nella sua lingua." }
      ]
    },
    count: {
      tagline: "Conta a voce alta", metaDesc: "Count è un gioco di voce gratis. Di uno, poi due, e continua fino a trenta. Hai 60 secondi. Chrome desktop.",
      kicker: "Di questo numero", heard: "Parti da uno e continua.", cardSmall: "Da uno a trenta",
      attract: "Conta da uno, a voce alta", prompt: "uno",
      steps: ["Premi Start. Il primo numero è uno.", "Di' il numero sullo schermo, poi il successivo quando appare.", "Ogni numero udito nell'ordine vale un punto.", "Il conteggio si ferma a trenta, o quando finiscono i 60 secondi."],
      note: "Count usa il servizio vocale di Chrome per trasformare la voce in testo. Questa pagina non salva la registrazione. Aprilo in Chrome per desktop.",
      faq: [
        { q: "E se dico un numero fuori ordine?", a: "Niente di grave — lo schermo continua a chiedere lo stesso numero finché non sente quello giusto. Conta solo l'ordine corretto." },
        { q: "Devo dire il numero esatto?", a: "Basta che sia vicino. Il gioco accetta varianti comuni e cifre, quindi conta con naturalezza." }
      ]
    },
    repeat: {
      tagline: "Ripeti la frase", metaDesc: "Repeat è un gioco di voce gratis. Appare una frase di due parole, dilala intera. La successiva arriva quando combacia. 60 secondi.",
      kicker: "Di tutta la frase", heard: "Di ogni parola della frase.", cardSmall: "Ripeti tutta la frase",
      attract: "Ripeti la frase, parola per parola", prompt: "mela rossa",
      steps: ["Premi Start e consenti il microfono.", "Appare una breve frase di due parole, come \"mela rossa\".", "Di' entrambe le parole. Punto solo se arriva tutta la frase.", "Ogni volta arriva una frase nuova. Hai 60 secondi."],
      note: "Repeat usa il servizio vocale di Chrome per trasformare la voce in testo. Questa pagina non salva la registrazione. Aprila in Chrome per desktop.",
      faq: [
        { q: "Ordine e parole in più contano?", a: "Tutte le parole della frase devono essere udite; le extra sono ignorate. L'ordine sbagliato non fa punto." },
        { q: "I bambini possono giocare a Repeat?", a: "È un buon riscaldamento alla lettura: frasi brevi, nessuna pressione di tempo, e il punteggio conta le parole udite." }
      ]
    },
    "voice-over": {
      tagline: "Leggi la battuta", metaDesc: "Voice Over è un gioco di voce gratis di 60 secondi. Appare una narrazione, legala a voce alta e arriva la successiva. Chrome con microfono.",
      kicker: "Leggi la battuta", heard: "Appare una narrazione. Legila.", cardSmall: "Leggi la narrazione",
      attract: "Leggi la narrazione a voce alta", prompt: "il treno è in ritardo",
      steps: ["Premi Start e consenti il microfono.", "Una breve narrazione riempie lo schermo, come \"il treno è in ritardo\".", "Leggi ogni parola. Il punto arriva con tutta la frase.", "Ogni volta arriva una battuta nuova. Hai 60 secondi."],
      note: "Le battute sono scritte per questo gioco. Voice Over usa il servizio vocale di Chrome. Questa pagina non salva la registrazione. Aprila in Chrome per desktop.",
      faq: [
        { q: "Va bene per esercitarsi a leggere?", a: "È proprio l'idea. Battute corte e naturali, e il gioco sente solo se le parole sono arrivate — un vero esercizio di lettura ad alta voce." },
        { q: "Differenza con la pagina Voice Over Game?", a: "Questa è il nostro gioco di parole di 60 secondi che gira qui. L'altra pagina incrusta uno studio esterno, Choicer Voicer." }
      ]
    },
    "voice-acting": {
      tagline: "Dila col tono", metaDesc: "Voice Acting è un gioco gratis di 60 secondi. Un tono appare sopra una battuta originale — dila e recitalo. Chrome con microfono.",
      kicker: "Con questo tono", heard: "Di la battuta. Il tono è sopra.", cardSmall: "Dila con quel tono",
      attract: "Di la battuta con quel tono", prompt: "lascialo",
      steps: ["Premi Start e consenti il microfono.", "Un tono appare sopra una battuta originale, come sussurrato o arrabbiato.", "Di' la battuta — e recita il tono mentre la dici.", "Il punteggio conta le parole. Il tono è tutto tuo. Hai 60 secondi."],
      note: "Questa pagina non sente se sembravi arrabbiato o calmo, quindi non giudica l'interpretazione — controlla solo le parole. Le battute sono scritte per questo gioco. Voice Acting usa il servizio vocale di Chrome e non salva la registrazione.",
      faq: [
        { q: "Recitare il tono cambia il punteggio?", a: "No — il punteggio controlla solo le parole. Il tono c'è per divertirsi ed allenare la gamma." },
        { q: "Utile per provini o demo?", a: "Come riscaldamento è perfetto: toni casuali, battute corte, un minuto sul cronometro. Per registrazioni vere usa uno studio — questa pagina non salva audio." }
      ]
    },
    miner: {
      tagline: "Grida e lascia cadere la pinza", metaDesc: "Miner è un gioco di voce gratis di 30 secondi. Una pinza oscilla sopra una caverna — grida, premi Spazio o clicca per farla cadere e tirare su l'oro. Nessuna registrazione.",
      kicker: "Grida al momento giusto", heard: "Grida, Spazio o un clic fanno cadere la pinza.", cardSmall: "La corsa all'oro con la voce",
      steps: ["Premi Start e consenti il microfono.", "La pinza oscilla da sola. Grida, premi Spazio o clicca e scende dritta.", "Riporta su quello che afferra: l'oro vale molto, la roccia è pesante e lenta, e la gemma blu è il jackpot.", "Prendi più che puoi in 30 secondi."],
      note: "Miner misura il volume nella pagina: non invia audio a nessun servizio vocale e non salva registrazioni. La pinza, l'oro e la caverna sono disegnati qui.",
      faq: [
        { q: "Come faccio più punti in Miner?", a: "Aspetta che la pinza punti una pepita prima di gridare. L'oro grande vale 120 e la gemma blu 300 — mira prima di lasciarla cadere." },
        { q: "Devo gridare?", a: "No — qualsiasi suono corto oltre la linea fa cadere la pinza, e Spazio o un clic funzionano anche senza microfono." }
      ]
    },
    floors: {
      tagline: "Scendi 100 piani con la voce", metaDesc: "Floors è un gioco di voce gratis di 30 secondi. Un piccolo minatore scende in un pozzo — canticchia grave per andare a sinistra, canta acuto per andare a destra e schiva le spine. Nessuna registrazione.",
      kicker: "Grave a sinistra, acuto a destra", heard: "Tono grave cammina a sinistra, acuto a destra.", cardSmall: "Il classico della discesa, con la voce",
      steps: ["Premi Start e consenti il microfono.", "Il minatore scende da solo. Canticchia una nota grave e cammina a sinistra; fischia o canta acuto e va a destra.", "Guidalo nei buchi di ogni piano. I piani con spine e il soffitto di spine che scende finiscono la partita.", "Anche le frecce, o tenere premuta la metà sinistra o destra dell'immagine, funzionano. Hai 30 secondi."],
      note: "Floors ascolta l'intonazione nella pagina. L'audio non lascia mai il tuo dispositivo e nulla viene salvato. Il minatore, il pozzo e le spine sono disegnati qui.",
      faq: [
        { q: "Come funziona la direzione con la voce?", a: "La pagina segue l'intonazione della tua voce: i suoni gravi (canticchiare) vanno a sinistra, gli acuti (fischiare o un \"ii\") a destra. In silenzio continua a cadere dritto." },
        { q: "Floors è uguale al gioco dei 100 piani?", a: "È la nostra versione con voce del classico della discesa: stesso minatore che cade e stesso soffitto di spine, ma le frecce sono sostituite dall'intonazione della tua voce." }
      ]
    },
    catch: {
      tagline: "Afferra l'oro che cade", metaDesc: "Catch è un gioco di voce gratis di 30 secondi. Canticchia grave o acuto per far scorrere il cestino, afferra monete e gemme e schiva le bombe. Nessuna registrazione.",
      kicker: "Grave a sinistra, acuto a destra", heard: "Fa scorrere il cestino. Afferra monete e gemme, schiva le bombe.", cardSmall: "Monete sì, bombe no",
      steps: ["Premi Start e consenti il microfono.", "Canticchia grave per far scorrere il cestino a sinistra, acuto a destra. Anche le frecce o tenere premuta metà immagine.", "Le monete valgono uno, le gemme blu tre, e una bomba afferrata finisce la partita.", "Hai 30 secondi. Superi il tuo record."],
      note: "Catch misura volume e intonazione nella pagina. L'audio non lascia mai il tuo dispositivo e nulla viene salvato. Cestino, monete e bombe sono disegnati qui.",
      faq: [
        { q: "Cosa conta come nota grave o acuta?", a: "Canticchiare o un \"mm\" è grave e scorre a sinistra; fischiare o un \"ii\" è acuto a destra. Le note tenute guidano meglio." },
        { q: "Cosa succede se afferro una bomba?", a: "La partita finisce subito e il punteggio resta. Le bombe cadono abbastanza spesso." }
      ]
    },
    racer: {
      tagline: "Schiva il traffico con l'intonazione", metaDesc: "Racer è un gioco di voce gratis di 30 secondi. Canticchia grave o acuto per scendere lungo la strada e schivare le auto. Nessuna registrazione.",
      kicker: "Slalom tra le corsie", heard: "Scendi lungo la strada e schiva le auto.", cardSmall: "Volante a intonazione",
      steps: ["Premi Start e consenti il microfono.", "Canticchia grave per andare a sinistra, acuto a destra. Anche frecce o metà immagine.", "Ogni auto superata vale un punto. Toccarne una finisce la partita.", "Il traffico accelera col tempo. Hai 30 secondi."],
      note: "Racer ascolta l'intonazione nella pagina. L'audio non lascia mai il tuo dispositivo e nulla viene salvato. Strada e auto sono disegnate qui.",
      faq: [
        { q: "L'auto resta in una corsia?", a: "No — la guida è continua, come un vero volante. Bastano piccole correzioni." },
        { q: "Quanto accelera?", a: "Il traffico cresce a ogni auto superata — gli ultimi dieci secondi sono la prova." }
      ]
    },
    bricks: {
      tagline: "Rompi il muro con la voce", metaDesc: "Bricks è un gioco di voce gratis di 30 secondi. Canticchia per far scorrere la barra, grida o premi Spazio per lanciare la pallina e rompi più mattoni che puoi. Nessuna registrazione.",
      kicker: "Fa scorrere la barra, grida per lanciare", heard: "Fa scorrere la barra. Grida, Spazio o un clic lanciano la pallina.", cardSmall: "Breakout a intonazione",
      steps: ["Premi Start e consenti il microfono.", "Canticchia grave o acuto per far scorrere la barra; la pallina viaggia con lei fino al lancio.", "Grida, premi Spazio o clicca per lanciare. Le file dorate in alto valgono 3, al centro 2, in basso 1.", "Se la pallina cade, posizionati e grida di nuovo. Hai 30 secondi."],
      note: "Bricks misura volume e intonazione nella pagina. L'audio non lascia mai il tuo dispositivo e nulla viene salvato. Muro, barra e pallina sono disegnati qui.",
      faq: [
        { q: "Perché rilanciare la pallina?", a: "Il grido è il tuo servizio. Quando la pallina cade, posizionati bene e grida — servire bene conta anch'esso." },
        { q: "Quali mattoni valgono di più?", a: "Le due file dorate in alto valgono 3, quelle centrali 2, quella in basso 1 — tieni la pallina in alto." }
      ]
    },
    snake: {
      tagline: "Guida il serpente con l'intonazione", metaDesc: "Snake è un gioco di voce gratis di 30 secondi. Una nota grave gira a sinistra, acuta a destra — mangia le mele e non morderti. Nessuna registrazione.",
      kicker: "Grave gira a sinistra, acuto a destra", heard: "Mangia le mele. Non morderti.", cardSmall: "Il classico, curve a intonazione",
      steps: ["Premi Start e consenti il microfono.", "Il serpente striscia da solo. Una nota grave gira alla sua sinistra, acuta alla sua destra — rispetto alla direzione.", "Ogni mela vale un punto e allunga di due celle.", "Mordere un muro o se stessi finisce la partita. Hai 30 secondi."],
      note: "Snake ascolta l'intonazione nella pagina. L'audio non lascia mai il tuo dispositivo e nulla viene salvato. Serpente e mele sono disegnati qui.",
      faq: [
        { q: "Le curve sono assolute o relative?", a: "Relative: \"sinistra\" è sempre la sinistra del serpente, come una vera curva. Due note gravi rapide fanno un'inversione." },
        { q: "Quanto è lungo il serpente all'inizio?", a: "Quattro celle. Ogni mela ne aggiunge due e il ritmo sale — alla fine si riempie." }
      ]
    },
    march: {
      tagline: "Suona per camminare, silenzio per fermarsi", metaDesc: "March è un gioco di voce gratis di 30 secondi. Tieni un suono per camminare lungo il corridoio, silenzio per fermarti — frena prima delle spine, il muro di spine ti insegue. Nessuna registrazione.",
      kicker: "Cammina col suono, frena col silenzio", heard: "Tieni un suono per camminare. Il silenzio ti ferma.", cardSmall: "Il classico cammina-e-fermati",
      steps: ["Premi Start e consenti il microfono.", "Tieni un suono e il minatore cammina; fai silenzio e si ferma sul posto.", "Fermati prima delle strisce di spine — toccarle finisce la partita, e il muro di spine dietro non smette di avvicinarsi.", "Il punteggio conta i metri. Hai 30 secondi."],
      note: "March misura il volume nella pagina. Non invia audio a nessun servizio vocale e non salva registrazioni. Il camminatore, le spine e il muro sono disegnati qui.",
      faq: [
        { q: "Quanto è precisa la fermata?", a: "Istantanea — il silenzio lo frena dove sta. Il gioco è leggere il terreno davanti e lasciare presto." },
        { q: "E se resto in silenzio?", a: "Il muro di spine avanza per sempre — fermarsi rimanda solo, e contano solo i metri." }
      ]
    },
    tug: {
      tagline: "Grida più forte della macchina", metaDesc: "Tug è un gioco di voce gratis di 30 secondi. Il tuo volume tira la corda contro una macchina che tira più forte a ogni round. Vinci più round che puoi. Nessuna registrazione.",
      kicker: "Più forte tira più forte", heard: "Il tuo volume porta il segno alla tua linea.", cardSmall: "Corda contro la macchina",
      steps: ["Premi Start e consenti il microfono.", "Grida, canta o canticchia — più sei forte, più la tua parte tira.", "Porta il segno oltre la linea verde per vincere il round. La macchina lo riporta, e più forte ogni round.", "Vinci più round che puoi in 30 secondi."],
      note: "Tug misura il volume nella pagina. Non invia audio a nessun servizio vocale e non salva registrazioni. Corda, bandierina e tiratori sono disegnati qui.",
      faq: [
        { q: "Quanto devo essere forte?", a: "I primi round cadono con una voce forte. Al terzo round stai già gridando — è voluto." },
        { q: "E se vince la macchina?", a: "Il segno torna al centro e la macchina si rilassa un po' — un round perso non si accumula." }
      ]
    },
    puff: {
      tagline: "Gonfia, incassa, non scoppiare", metaDesc: "Puff è un gioco di voce gratis di 30 secondi. Tieni un suono per gonfiare il palloncino — ogni palloncino nasconde la sua soglia di scoppio, quindi fai silenzio e incassa prima che scoppi. Nessuna registrazione.",
      kicker: "Gonfia grande, incassa presto", heard: "Tieni un suono per gonfiare. Fai silenzio per incassare.", cardSmall: "Gonfia e incassa in tempo",
      steps: ["Premi Start e consenti il microfono.", "Tieni un suono e il palloncino cresce circa 44 pixel al secondo — più grande paga più punti.", "Fai silenzio per mezzo secondo per incassare la dimensione in punti e iniziarne uno nuovo.", "Ogni palloncino nasconde la sua soglia di scoppio. Superarla fa scoppiare tutto per niente. Hai 30 secondi."],
      note: "Puff misura il volume nella pagina. Non invia audio a nessun servizio vocale e non salva registrazioni. I palloncini e lo scoppio sono disegnati qui.",
      faq: [
        { q: "Dov'è la soglia di scoppio?", a: "Nascosta, e diversa per ogni palloncino — tra 48 e 112. Il numero sul palloncino è la dimensione attuale; il limite è il segreto." },
        { q: "Un palloncino scoppiato penalizza?", a: "Solo l'orgoglio — scoppia a zero e subito arriva uno nuovo. L'avidità costa i secondi spesi a soffiare." }
      ]
    },
    hop: {
      tagline: "Carica la voce, salta il fossa", metaDesc: "Hop è un gioco di voce gratis di 30 secondi. Tieni un suono per caricare il salto, fai silenzio per saltare — atterra sul pilastro successivo senza sbagliare. Nessuna registrazione.",
      kicker: "Tieni per caricare, silenzio per saltare", heard: "Tieni un suono per caricare. Fai silenzio per saltare.", cardSmall: "Il classico salto caricato",
      steps: ["Premi Start e consenti il microfono.", "Tieni un suono e l'anello di carica si riempie — pieno vola lontano.", "Fai silenzio e il minatore salta verso il pilastro successivo. Il centro paga due.", "Cadere nel canyon finisce la partita. Hai 30 secondi."],
      note: "Hop misura il volume nella pagina. Non invia audio a nessun servizio vocale e non salva registrazioni. I pilastri e il minatore sono disegnati qui.",
      faq: [
        { q: "Come valuto il salto?", a: "Il numero sopra il buco è la sua larghezza, e l'anello mostra la carica — pieno vola circa quattrocento pixel; lascia presto per buchi corti." },
        { q: "Posso atterrare di nuovo dove sono partito?", a: "Sì, in sicurezza — non vale però nessun punto. Solo il pilastro lontano paga." }
      ]
    },
    "3d/miner": {
      tagline: "Grida e lascia cadere la pinza",
      metaDesc: "Miner 3D è un gioco di voce gratis di 30 secondi. Una pinza a bloci oscilla sopra una caverna a bloci — grida, premi Spazio o clicca per farla cadere e tirare su l'oro. Nessuna registrazione.",
      kicker: "Grida al momento giusto",
      heard: "Grida, Spazio o un clic fanno cadere la pinza.",
      featureSmall: "La corsa all'oro a bloci",
      steps: ["Premi Start e consenti il microfono se il browser lo chiede.", "La pinza oscilla da sola. Grida, premi Spazio o clicca e scende dritta.", "Riporta su quello che afferra: l'oro vale molto, la roccia è pesante e lenta, e la gemma blu è il jackpot.", "Prendi più che puoi in 30 secondi."],
      note: "Vedi la miniera di lato, tutto a bloci. Miner 3D misura il volume nella pagina e non salva registrazioni.",
      faq: [
        { q: "Miner 3D o Miner, quale differenza?", a: "Stesse regole, due aspetti: la miniera piatta in pixel e questa vista a bloci. I record sono separati." },
        { q: "Devo gridare?", a: "No — qualsiasi suono corto oltre la linea fa cadere la pinza, e Spazio o un clic funzionano senza microfono." }
      ]
    },
    "3d/floors": {
      tagline: "Scendi 100 piani con la voce",
      metaDesc: "Floors 3D è un gioco di voce gratis di 30 secondi. Un minatore a bloci scende in un pozzo a bloci — grave per andare a sinistra, acuto a destra, schivando le spine. Nessuna registrazione.",
      kicker: "Grave a sinistra, acuto a destra",
      heard: "Tono grave cammina a sinistra, acuto a destra.",
      featureSmall: "La discesa a bloci",
      steps: ["Premi Start e consenti il microfono se il browser lo chiede.", "Il minatore scende da solo. Canticchia grave e va a sinistra; fischia o canta acuto e va a destra.", "Guidalo nei buchi di ogni piano. I piani con spine e il soffitto che scende finiscono la partita.", "Anche le frecce o metà immagine funzionano. Hai 30 secondi."],
      note: "Vedi il pozzo di lato, tutto a bloci. Floors 3D ascolta l'intonazione nella pagina. L'audio non lascia mai il tuo dispositivo.",
      faq: [
        { q: "Floors 3D o Floors, quale differenza?", a: "Stesse regole, due aspetti: il pozzo piatto in pixel e questa vista a bloci. I record sono separati." },
        { q: "Come funziona la direzione con la voce?", a: "La pagina segue l'intonazione della tua voce: grave a sinistra, acuto a destra. In silenzio cade dritto." }
      ]
    }
  },
  ko: {
    "3d/dino": {
      tagline: "외쳐서 점프", metaDesc: "Dino 3D는 30초짜리 무료 음성 게임. 소리를 유지하면 블록 공룡이 달리고, 조용해지면 쓰러집니다. 소리는 기기를 벗어나지 않습니다.",
      kicker: "소리를 유지", heard: "소리·스페이스·마우스를 누르고 있으면 공룡이 버텨요.",
      featureSmall: "소리를 유지 — 조용해지면 쓰러져요",
      steps: ["시작을 누르고, 브라우저가 물으면 마이크를 허용하세요.", "소리·스페이스·마우스를 누르고 있으면 공룡이 달리고, 떼면 쓰러져요.", "돌 하나를 넘을 때마다 1점.", "돌에 부딪히면 라운드 종료. 시간은 30초입니다."],
      note: "공룡은 옆모습으로 보이고 돌은 오른쪽에서 옵니다. Dino 3D는 페이지 안에서 볼륨만 측정할 뿐, 음성 서비스로 전송하거나 녹음하지 않습니다.",
      faq: [
        { q: "Dino 3D는 점수를 어떻게 얻나요?", a: "공룡이 돌을 하나 넘을 때마다 1점. 30초 동안 몇 개를 넘을 수 있을까요?" },
        { q: "외쳐야 하나요?", a: "아니요. 꾸준한 소리라면 무엇이든 됩니다 — 말하기·흥얼거리기·스페이스 꾹 누르기도 OK. 외치는 건 그냥 더 재밌을 뿐이에요." }
      ]
    },
    "3d/flap": {
      tagline: "소리로 날개 짓", metaDesc: "Flap 3D는 30초짜리 무료 음성 게임. 소리를 유지하면 블록 나방이 틈새를 통과하고, 조용해지면 떨어집니다.",
      kicker: "소리를 유지", heard: "소리·스페이스·마우스를 누르고 있으면 나방이 올라가요.",
      featureSmall: "소리를 유지해서 틈새를 통과",
      steps: ["시작을 누르고, 브라우저가 물으면 마이크를 허용하세요.", "소리·스페이스·마우스를 누르고 있으면 나방이 올라가고, 떼면 떨어져요.", "틈새 하나를 통과할 때마다 1점.", "벽·천장·바닥에 닿으면 라운드 종료. 시간은 30초입니다."],
      note: "나방은 옆모습으로 보이고 틈새는 오른쪽에서 옵니다. Flap 3D는 페이지 안에서 볼륨만 측정하고 녹음하지 않습니다.",
      faq: [
        { q: "Flap 3D는 점수를 어떻게 얻나요?", a: "틈새 하나 통과마다 1점. 30초 동안 연속으로 많이 통과해 보세요." },
        { q: "나방이 계속 떨어지는 이유는?", a: "소리가 추진력이에요. 조용한 방에서는 가라앉습니다 — 소리나 스페이스를 유지하면 올라가요." }
      ]
    },
    "3d/float": {
      tagline: "링을 통과해", metaDesc: "Float 3D는 30초짜리 무료 음성 게임. 볼륨으로 블록 풍선을 띄워 링을 통과하고, 조용해지면 떨어집니다.",
      kicker: "볼륨으로 띄우기", heard: "더 큰 소리·스페이스·마우스를 위로 하면 풍선이 올라가요.",
      featureSmall: "볼륨으로 풍선을 링에 통과",
      steps: ["시작을 누르고, 브라우저가 물으면 마이크를 허용하세요.", "큰 소리일수록 풍선이 올라가고, 스페이스를 누르거나 마우스를 위아래로 움직여도 됩니다.", "링 하나 통과마다 1점.", "링에 닿으면 라운드 종료. 시간은 30초입니다."],
      note: "풍선은 옆모습이고 링은 오른쪽에서 옵니다. Float 3D는 페이지 안에서 볼륨만 측정하고 녹음하지 않습니다.",
      faq: [
        { q: "다른 3D 게임과 뭐가 다른가요?", a: "볼륨이 단순한 온·오프가 아니라 높이 다이얼입니다. 클수록 높이 떠서, 섬세한 컨트롤이 승부를 가릅니다." },
        { q: "마우스로만 할 수 있나요?", a: "네. 화면에서 마우스를 누른 채 위아래로 움직이면 풍선이 따라옵니다. 스페이스도 가능해요." }
      ]
    },
    dino: {
      tagline: "외쳐서 점프", metaDesc: "Dino는 30초짜리 무료 2D 음성 게임. 소리를 유지하면 작은 공룡이 달리고, 조용해지면 쓰러집니다.",
      kicker: "소리를 유지", heard: "소리를 유지하면 공룡이 버텨요.", cardSmall: "2D 버전",
      steps: ["시작을 누르고 마이크를 허용하세요.", "소리를 유지하면 공룡이 달립니다. 조용해지면 쓰러져요.", "돌 하나를 넘을 때마다 1점.", "돌에 부딪히면 라운드 종료. 시간은 30초입니다."],
      note: "Dino는 페이지 안에서 볼륨만 측정할 뿐, 음성 서비스로 전송하거나 녹음하지 않습니다. 공룡과 돌은 이 사이트가 직접 그렸습니다.",
      faq: [
        { q: "Dino와 Dino 3D의 차이는?", a: "규칙은 같고 화면만 달라요. Dino는 픽셀 2D 원작, Dino 3D는 같은 달리기를 블록 입체 시점으로 한 버전입니다." },
        { q: "Dino는 휴대폰에서 되나요?", a: "네. 모바일 브라우저에서 실행되고 휴대폰 마이크로 듣습니다. 화면을 누르고 있으면 소리 없이도 플레이할 수 있어요." }
      ]
    },
    flap: {
      tagline: "소리로 날개 짓", metaDesc: "Flap는 30초짜리 무료 2D 음성 게임. 소리를 유지하면 픽셀 나방이 틈새를 통과하고, 조용해지면 떨어집니다.",
      kicker: "소리를 유지", heard: "소리를 유지하면 나방이 올라가요.", cardSmall: "2D 버전",
      steps: ["시작을 누르고 마이크를 허용하세요.", "소리를 유지하면 나방이 올라갑니다. 조용해지면 떨어져요.", "틈새 하나 통과마다 1점.", "벽·천장·바닥에 닿으면 라운드 종료. 시간은 30초입니다."],
      note: "Flap는 페이지 안에서 볼륨만 측정할 뿐, 음성 서비스로 전송하거나 녹음하지 않습니다. 나방과 벽은 이 사이트가 직접 그렸습니다.",
      faq: [
        { q: "Flap와 Flap 3D의 차이는?", a: "규칙은 같고 화면만 달라요. Flap는 픽셀 2D, Flap 3D는 같은 비행을 블록 입체 시점으로 한 버전입니다." },
        { q: "나방을 일정 높이로 유지하려면?", a: "일정한 소리를 주세요 — 같은 볼륨으로 \"아——\" 길게 하면 수평을 유지합니다." }
      ]
    },
    float: {
      tagline: "구멍을 통과해", metaDesc: "Float는 30초짜리 무료 2D 음성 게임. 볼륨으로 풍선을 띄워 둥근 구멍을 통과하고, 조용해지면 떨어집니다.",
      kicker: "볼륨으로 띄우기", heard: "큰 소리는 풍선을 올리고, 조용하면 내려앉아요.", cardSmall: "2D 버전",
      steps: ["시작을 누르고 마이크를 허용하세요.", "큰 소리일수록 풍선이 올라가고, 조용하면 가라앉아요.", "둥근 구멍 하나 통과마다 1점.", "가장자리에 닿으면 라운드 종료. 시간은 30초입니다."],
      note: "Float는 페이지 안에서 볼륨만 측정할 뿐, 음성 서비스로 전송하거나 녹음하지 않습니다. 풍선과 구멍은 이 사이트의 오리지널 그래픽입니다.",
      faq: [
        { q: "Float는 헬리콥터 게임과 같은 건가요?", a: "같은 원버튼 계열이지만 버튼 대신 목소리를 쓰고, 그래픽은 모두 이 사이트의 오리지널입니다." },
        { q: "조용히 하면 풍선이 왜 그렇게 빨리 떨어지죠?", a: "중력을 일부러 추진력보다 강하게 만들었습니다 — 완전 침묵보다 작고 꾸준한 소리를 유지하는 게 안전해요." }
      ]
    },
    louder: {
      tagline: "계속 크게", metaDesc: "Louder는 30초짜리 무료 음성 게임. 기준선을 넘은 매 초가 점수가 되고, 조용한 시간은 집계되지 않습니다. 녹음은 없습니다.",
      kicker: "계속 크게", heard: "조용한 시간은 점수에 포함되지 않아요.", cardSmall: "큰 소리 1초가 1점",
      attract: "소리를 내요 — 큰 소리의 매 초가 점수",
      steps: ["시작을 누르고 마이크를 허용하세요.", "말하기·노래·그냥 소리들리기, 기준선 위로 올려보세요.", "선 위의 매 초마다 1점. 조용하면 집계되지 않아요.", "라운드는 30초. 자기 최고 기록에 도전하세요."],
      note: "Louder는 이 페이지 안에서 볼륨만 측정할 뿐, 음성 서비스로 전송하거나 녹음을 저장하지 않습니다. 화면의 단어는 레벨이 선을 넘었는지의 표시일 뿐입니다.",
      faq: [
        { q: "\"충분히 큰\" 기준은?", a: "조용한 방에서 보통 말하는 볼륨이면 선을 넘습니다. 화면에 \"더 크게\"가 나오면 아직 부족한 거예요." },
        { q: "음악이나 영상으로 점수가 되나요?", a: "원리상은 됩니다 — 게임이 듣는 건 볼륨뿐이에요. 하지만 재미는 직접 소리를 낼 때죠." }
      ]
    },
    say: {
      tagline: "단어를 말해요", metaDesc: "Say It는 1분짜리 무료 음성 게임. 화면의 단어를 소리 내어 말하면 다음 단어가 나타납니다. 마이크 있는 데스크톱 Chrome에서.",
      kicker: "이 단어를 말해요", heard: "단어가 나타나면 말하세요.", cardSmall: "단어가 나오면 말하기",
      attract: "화면의 단어를 소리 내어 말해요", prompt: "단어",
      steps: ["시작을 누르고 마이크를 허용하세요.", "단어 하나가 화면을 채웁니다. 또렷하게 말하세요.", "인식되면 1점이 오르고 다음 단어가 나와요.", "제한은 60초. 정지로 일찍 끝낼 수 있어요."],
      note: "Say It는 Chrome의 음성 서비스로 목소리를 글자로 바꿉니다. 이 페이지는 녹음을 저장하지 않아요. 데스크톱 Chrome으로 열어주세요.",
      faq: [
        { q: "말했는데 점수가 안 올라가요.", a: "단어 전체를 또렷하게 말하세요. 아래 막대에 Chrome이 들은 글자가 표시됩니다. 화면의 단어와 비교해 다시 시도해 보세요." },
        { q: "다른 언어로도 할 수 있나요?", a: "네 — 상단 바에서 사이트 언어를 바꾸면 단어도 함께 바뀝니다. 각 언어 버전은 해당 언어로 인식해요." }
      ]
    },
    count: {
      tagline: "숫자를 소리 내어", metaDesc: "Count는 무료 음성 게임. 일에서 시작해 삼십까지 계속 세어 보세요. 제한 60초. 데스크톱 Chrome에서.",
      kicker: "이 숫자를 말해요", heard: "일부터 계속 세어 보세요.", cardSmall: "일부터 삼십까지",
      attract: "일부터 소리 내어 세어 보세요", prompt: "일",
      steps: ["시작을 누르세요. 첫 숫자는 일입니다.", "화면의 숫자를 말하고, 다음이 나오면 이어서 말하세요.", "순서대로 인식될 때마다 1점.", "삼십에 도달하거나 60초가 지나면 끝납니다."],
      note: "Count는 Chrome의 음성 서비스로 목소리를 글자로 바꿉니다. 이 페이지는 녹음을 저장하지 않아요. 데스크톱 Chrome으로 열어주세요.",
      faq: [
        { q: "순서를 틀리면 어떻게 되나요?", a: "괜찮아요 — 올바른 숫자가 인식될 때까지 같은 숫자가 계속 표시됩니다. 순서대로만 점수가 올라가요." },
        { q: "정확히 말해야 하나요?", a: "비슷하면 돼요. 흔한 표현과 숫자 형태도 받아들이므로 자연스럽게 세면 됩니다." }
      ]
    },
    repeat: {
      tagline: "문장 전부 말하기", metaDesc: "Repeat는 무료 음성 게임. 두 단어짜리 문장이 나오면 그대로 말하세요. 전부 인식되면 다음 문장이 나옵니다. 60초.",
      kicker: "문장 전체를 말해요", heard: "문장의 모든 단어를 말하세요.", cardSmall: "문장 전체 복창",
      attract: "한 글자도 빠짐없이 복창하세요", prompt: "빨간 사과",
      steps: ["시작을 누르고 마이크를 허용하세요.", "두 단어짜리 짧은 문장이 나옵니다. 예: \"빨간 사과\".", "두 단어를 모두 말하세요. 전부 인식될 때만 점수가 올라가요.", "정답마다 새 문장이 나옵니다. 제한은 60초."],
      note: "Repeat는 Chrome의 음성 서비스로 목소리를 글자로 바꿉니다. 이 페이지는 녹음을 저장하지 않아요. 데스크톱 Chrome으로 열어주세요.",
      faq: [
        { q: "어순이나 추가 단어도 영향하나요?", a: "문장의 모든 단어가 들리면 되고, 다른 말이 섞여도 무시됩니다. 자연스럽게 말해도 돼요. 순서가 틀리면 점수가 없습니다." },
        { q: "아이도 Repeat를 할 수 있나요?", a: "읽기 워밍업으로 좋아요 — 짧은 문장, 문장당 시간 압박 없음, 들린 단어만 카운트. 함께 도전해 보세요." }
      ]
    },
    "voice-over": {
      tagline: "나레이션 읽기", metaDesc: "Voice Over는 60초짜리 무료 음성 게임. 짧은 나레이션이 나오면 소리 내어 읽고, 다음 문장이 나타납니다. 데스크톱 Chrome.",
      kicker: "이 문장을 읽어요", heard: "나레이션이 나타나면 읽으세요.", cardSmall: "나레이션 읽기",
      attract: "나레이션을 소리 내어 읽어요", prompt: "기차가 늦었어요",
      steps: ["시작을 누르고 마이크를 허용하세요.", "짧은 나레이션이 화면을 채웁니다. 예: \"기차가 늦었어요\".", "모든 단어를 읽으세요. 문장 전부가 인식될 때 점수가 올라가요.", "정답마다 새 문장이 나옵니다. 제한은 60초."],
      note: "문장은 이 게임을 위해 쓴 것입니다. Voice Over는 Chrome의 음성 서비스를 사용하며 녹음을 저장하지 않아요. 데스크톱 Chrome으로 열어주세요.",
      faq: [
        { q: "소리 내어 읽기 연습에 좋나요?", a: "바로 그 목적이에요. 짧고 자연스러운 문장으로, 게임은 단어가 들렸는지만 보기 때문에 읽기 연습이 됩니다." },
        { q: "Voice Over Game 페이지와 뭐가 달라요?", a: "이쪽은 이 사이트 자체의 60초 단어 게임이고, 저쪽은 외부 스튜디오인 Choicer Voicer를 내장한 페이지입니다." }
      ]
    },
    "voice-acting": {
      tagline: "감정을 담아 말하기", metaDesc: "Voice Acting는 60초짜리 무료 게임. 오리지널 대사 위에 감정 태그가 나오면, 대사를 말하며 연기해 보세요. 데스크톱 Chrome.",
      kicker: "이 감정으로", heard: "대사를 말하세요. 감정은 위에 있어요.", cardSmall: "감정을 담아 말하기",
      attract: "감정을 담아 대사를 말하세요", prompt: "그거 내려놔",
      steps: ["시작을 누르고 마이크를 허용하세요.", "오리지널 대사 위에 감정이 나타납니다. 예: 속삭임·화남.", "대사를 말하면서 그 감정을 연기하세요.", "점수는 단어만 확인합니다. 감정 연기는 자유! 제한은 60초."],
      note: "이 페이지는 연기가 잘 들렸는지 듣지 못하므로 연기는 채점하지 않습니다 — 단어만 확인해요. 대사는 이 게임을 위해 쓴 것입니다. Voice Acting는 Chrome의 음성 서비스를 사용하며 녹음을 저장하지 않습니다.",
      faq: [
        { q: "감정 연기가 점수에 영향하나요?", a: "아니요 — 점수는 단어만 확인합니다. 감정 태그는 재미와 표현력 연습을 위한 거예요." },
        { q: "오디션이나 데모 연습에 쓸 수 있나요?", a: "워밍업으로 딱 좋아요 — 랜덤 감정, 짧은 대사, 1분 제한. 실제 녹음은 제대로 된 스튜디오에서 하세요 — 이 페이지는 오디오를 저장하지 않습니다." }
      ]
    },
    miner: {
      tagline: "외치고 클로를 떨어뜨려", metaDesc: "Miner는 30초 무료 보이스 게임입니다. 동굴 위에서 클로가 흔들립니다 — 외치거나 스페이스 또는 클릭으로 떨어뜨려 금을 끌어올리세요. 녹음은 없습니다.",
      kicker: "타이밍 맞춰 외치기", heard: "외치거나 스페이스, 클릭하면 클로가 떨어집니다.", cardSmall: "목소리로 하는 골드 러시",
      steps: ["시작을 누르고 마이크를 허용하세요.", "클로는 스스로 좌우로 흔들립니다. 외치거나 스페이스, 클릭하면 곧장 내려갑니다.", "잡은 것은 무엇이든 끌어올립니다 — 금은 비싸고, 바위는 무겁고 느리며, 파란 보석이 대박입니다.", "30초 동안 최대한 많이 캐세요."],
      note: "Miner는 페이지 안에서 볼륨을 측정할 뿐, 음성 서비스로 전송하거나 녹음을 저장하지 않습니다. 클로·금덩이·동굴은 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "Miner에서 점수를 더 내려면?", a: "클로가 금덩이 위를 가리킬 때까지 기다렸다가 외치세요. 큰 금은 120점, 파란 보석은 300점 — 조준하고 떨어뜨리는 게 핵심입니다." },
        { q: "꼭 외쳐야 하나요?", a: "아니요 — 볼륨 선을 넘는 짧은 소리면 무엇이든 클로가 떨어집니다. 마이크 없이도 스페이스나 클릭으로 할 수 있어요." }
      ]
    },
    floors: {
      tagline: "목소리로 100층 내려가기", metaDesc: "Floors는 30초 무료 보이스 게임입니다. 등반가가 갱도로 계속 내려갑니다 — 낮은 소리로 왼쪽, 높은 소리로 오른쪽으로 걷고 가시를 피하세요. 녹음은 없습니다.",
      kicker: "낮은 소리 왼쪽, 높은 소리 오른쪽", heard: "낮은 톤은 왼쪽, 높은 톤은 오른쪽으로 걷습니다.", cardSmall: "음정으로 조작하는 하강 클래식",
      steps: ["시작을 누르고 마이크를 허용하세요.", "등반가는 스스로 가라앉습니다. 낮게 \"으—\" 하고 웅크리면 왼쪽으로, 휘파람이나 높은 소리면 오른쪽으로 걷습니다.", "층마다 틈으로 안내하세요. 가시 바닥과 내려오는 가시 천장에 닿으면 라운드가 끝납니다.", "방향키나 화면 왼쪽·오른쪽 절반을 누르고 있어도 조작됩니다. 30초입니다."],
      note: "Floors는 페이지 안에서 음정을 측정합니다. 오디오는 기기를 떠나지 않고 아무것도 저장되지 않습니다. 등반가·갱도·가시는 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "목소리 조작은 어떻게 작동하나요?", a: "페이지가 목소리 음정을 추적합니다. 낮은 소리(허밍)는 왼쪽으로, 높은 소리(휘파람·\"이—\")는 오른쪽으로. 조용하면 곧장 떨어집니다." },
        { q: "Floors는 \"백층 하강\" 게임과 같은 건가요?", a: "하강 게임 클래식을 목소리로 즐기는 오리지널 버전입니다. 떨어지는 등반가와 가시 천장은 그대로지만, 방향키 대신 목소리 음정으로 조작합니다." }
      ]
    },
    catch: {
      tagline: "떨어지는 금을 잡아라", metaDesc: "Catch는 30초 무료 보이스 게임입니다. 낮은 소리와 높은 소리로 바구니를 움직여 금화와 보석을 잡고 폭탄을 피하세요. 녹음은 없습니다.",
      kicker: "낮은 소리 왼쪽, 높은 소리 오른쪽", heard: "바구니를 움직이세요. 금화·보석은 잡고 폭탄은 피하세요.", cardSmall: "금화는 잡고 폭탄은 피하기",
      steps: ["시작을 누르고 마이크를 허용하세요.", "낮은 소리로 왼쪽, 높은 소리로 오른쪽 이동. 방향키나 화면 좌우 절반을 누르고 있어도 됩니다.", "금화 +1, 파란 보석 +3, 폭탄을 잡으면 라운드 종료.", "30초 동안 최고 기록에 도전하세요."],
      note: "Catch는 페이지 안에서 볼륨과 음정을 측정합니다. 오디오는 기기를 떠나지 않고 아무것도 저장되지 않습니다. 바구니·금화·폭탄은 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "낮은 소리·높은 소리의 기준은?", a: "허밍이나 \"음—\"은 낮은 소리로 왼쪽, 휘파람이나 \"이—\"는 높은 소리로 오른쪽입니다. 길게 뻗는 소리가 가장 잘 조작됩니다." },
        { q: "폭탄을 잡으면?", a: "라운드가 즉시 끝나고 점수는 그대로 남습니다. 폭탄은 자주 떨어집니다 — 욕심내면 당합니다." }
      ]
    },
    racer: {
      tagline: "음정으로 차량 피하기", metaDesc: "Racer는 30초 무료 보이스 게임입니다. 낮은 소리와 높은 소리로 진행 방향을 조절해 마주 오는 차를 피하세요. 녹음은 없습니다.",
      kicker: "차선 사이로 통과", heard: "운전해서 마주 오는 차를 피하세요.", cardSmall: "음정 핸들",
      steps: ["시작을 누르고 마이크를 허용하세요.", "낮은 소리 왼쪽, 높은 소리 오른쪽. 방향키나 화면 좌우도 됩니다.", "피할 때마다 +1점. 충돌하면 라운드 종료.", "차량은 점점 빨라집니다. 30초입니다."],
      note: "Racer는 페이지 안에서 음정을 측정합니다. 오디오는 기기를 떠나지 않고 아무것도 저장되지 않습니다. 도로와 차량은 이 사이트의 그림입니다.",
      faq: [
        { q: "차는 차선에 고정되나요?", a: "아니요 — 조향은 연속적입니다. 작은 수정이면 충분해요." },
        { q: "얼마나 빨라지나요?", a: "피할 때마다 조금씩 빨라집니다 — 마지막 10초가 진짜 시험입니다." }
      ]
    },
    bricks: {
      tagline: "목소리로 벽돌 부수기", metaDesc: "Bricks는 30초 무료 보이스 게임입니다. 허밍으로 패들을 움직이고, 외치거나 스페이스로 공을 발사해 벽돌을 부수세요. 녹음은 없습니다.",
      kicker: "패들 이동, 외쳐서 발사", heard: "패들을 움직이세요. 외치기·스페이스·클릭으로 발사합니다.", cardSmall: "음정 벽돌깨",
      steps: ["시작을 누르고 마이크를 허용하세요.", "낮은 소리·높은 소리로 패들 이동. 공은 발사 전까지 패들에 함께 다닙니다.", "외치기·스페이스·클릭으로 발사. 위쪽 금 벽돌 +3, 중간 +2, 아래 +1.", "공을 떨어뜨리면 다시 외쳐서 발사하세요. 30초입니다."],
      note: "Bricks는 페이지 안에서 볼륨과 음정을 측정합니다. 오디오는 기기를 떠나지 않고 아무것도 저장되지 않습니다. 벽·패들·공은 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "공을 다시 발사하는 이유는?", a: "외침이 서브입니다. 공이 떨어지면 좋은 위치로 이동해서 다시 외치세요 — 서브도 실력입니다." },
        { q: "어떤 벽돌이 가장 비싸요?", a: "맨 위 금 벽돌 두 줄은 +3, 중간은 +2, 아래는 +1 — 공을 위에 유지하세요." }
      ]
    },
    snake: {
      tagline: "음정으로 뱀 조종", metaDesc: "Snake는 30초 무료 보이스 게임입니다. 낮은 소리는 좌회전, 높은 소리는 우회전 — 사과를 먹고 길어지되 자신을 물지 마세요. 녹음은 없습니다.",
      kicker: "낮은 소리 좌회전, 높은 소리 우회전", heard: "사과를 먹으세요. 자신을 물지 마세요.", cardSmall: "음정 회전 클래식",
      steps: ["시작을 누르고 마이크를 허용하세요.", "뱀은 스스로 기어갑니다. 낮은 소리는 왼쪽으로, 높은 소리는 오른쪽으로 — 진행 방향 기준 회전입니다.", "사과 하나당 +1점, 몸이 2칸 길어집니다.", "벽이나 자기 몸을 물면 라운드 종료. 30초입니다."],
      note: "Snake는 페이지 안에서 음정을 측정합니다. 오디오는 기기를 떠나지 않고 아무것도 저장되지 않습니다. 뱀과 사과는 이 사이트의 그림입니다.",
      faq: [
        { q: "회전은 절대 방향인가요?", a: "상대적입니다 — \"왼쪽\"은 항상 뱀 기준 왼쪽입니다. 낮은 소리 두 번이면 유턴입니다." },
        { q: "처음 뱀 길이는?", a: "4칸입니다. 사과마다 2칸씩 길어지고 속도도 올라갑니다." }
      ]
    },
    march: {
      tagline: "소리 나면 걷고, 조용하면 멈춤", metaDesc: "March는 30초 무료 보이스 게임입니다. 소리를 내면 복도를 걷고, 조용해지면 멈춥니다 — 가시 앞에서 미리 브레이크, 뒤의 가시 벽도 계속 다가옵니다. 녹음은 없습니다.",
      kicker: "소리로 걷고, 침묵으로 브레이크", heard: "소리를 내면 걷습니다. 조용하면 멈춥니다.", cardSmall: "걷고 멈추는 클래식",
      steps: ["시작을 누르고 마이크를 허용하세요.", "소리를 내는 동안 걷고, 조용해지면 그 자리에 멈춥니다.", "가시 구역 앞에서 미리 멈추세요 — 밟으면 라운드 종료, 뒤의 가시 벽도 계속 다가옵니다.", "점수는 미터 수입니다. 30초입니다."],
      note: "March는 페이지 안에서 볼륨을 측정할 뿐, 전송도 녹음도 없습니다. 걷는 사람·가시·벽은 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "멈춤은 얼마나 정확한가요?", a: "즉시 멈춥니다 — 조용해지는 순간 그 자리에서 서요. 앞 지형을 읽고 일찍 소리를 끊는 게 게임입니다." },
        { q: "계속 조용히 있으면?", a: "가시 벽은 끝없이 다가옵니다 — 멈춰 있는 건 시간 벌기일 뿐이고, 점수는 미터만큼입니다." }
      ]
    },
    tug: {
      tagline: "기계보다 크게 외쳐라", metaDesc: "Tug는 30초 무료 보이스 게임입니다. 당신의 볼륨이 밧줄을 당기고, 기계는 라운드마다 더 세게 당깁니다. 최대한 많은 라운드를 가져오세요. 녹음은 없습니다.",
      kicker: "큰 소리일수록 강하게", heard: "볼륨으로 표식을 내 라인으로 끌어오세요.", cardSmall: "기계와의 줄다리기",
      steps: ["시작을 누르고 마이크를 허용하세요.", "외치고, 노래하고, 허밍하세요 — 클수록 우리 쪽이 세게 당깁니다.", "표식을 초록 선 너머로 보내면 라운드 승리. 기계는 라운드마다 더 세게 되당깁니다.", "30초 동안 최대한 많은 라운드를 따내세요."],
      note: "Tug는 페이지 안에서 볼륨을 측정할 뿐, 전송도 녹음도 없습니다. 밧줄·깃발·당기는 사람들 모두 이 사이트의 그림입니다.",
      faq: [
        { q: "얼마나 크게 외쳐야 하나요?", a: "초반 라운드는 큰 목소리면 충분합니다. 3라운드부터는 외침입니다 — 의도된 설계예요." },
        { q: "기계가 라운드를 가져가면?", a: "표식이 중앙으로 돌아오고 기계도 살짝 힘을 뺍니다 — 한 번의 패배가 눈덩이가 되지 않습니다." }
      ]
    },
    puff: {
      tagline: "붊고, 확정하고, 터지지 말기", metaDesc: "Puff는 30초 무료 보이스 게임입니다. 소리를 내는 동안 풍선이 붊습니다 — 풍선마다 숨겨진 터지는 크기가 있으니, 터지기 전에 조용해져서 확정하세요. 녹음은 없습니다.",
      kicker: "크게 붊고, 일찍 확정", heard: "소리로 붊습니다. 조용해지면 확정합니다.", cardSmall: "제때 확정하는 붊기",
      steps: ["시작을 누르고 마이크를 허용하세요.", "소리를 내는 동안 풍선은 초당 약 44픽셀씩 커집니다 — 클수록 고득점.", "반 초만 조용해지면 크기가 점수로 확정되고 새 풍선이 시작됩니다.", "풍선마다 터지는 크기가 숨겨져 있어요. 넘기면 그대로 폭발, 0점. 30초입니다."],
      note: "Puff는 페이지 안에서 볼륨을 측정할 뿐, 전송도 녹음도 없습니다. 풍선과 폭발은 이 사이트의 그림입니다.",
      faq: [
        { q: "터지는 지점은 어디인가요?", a: "비밀입니다 — 풍선마다 48~112 사이로 다릅니다. 풍선의 숫자는 현재 크기고, 한계치가 비밀이에요." },
        { q: "터진 풍선은 페널티인가요?", a: "자존심만 — 0점으로 터지고 곧바로 새 풍선이 나옵니다. 욕심은 부는 데 쓴 시간을 앗아갑니다." }
      ]
    },
    hop: {
      tagline: "소리로 모으고, 점프로 건너라", metaDesc: "Hop는 30초 무료 보이스 게임입니다. 소리를 내면 점프가 차오르고, 조용해지면 뛰어오릅니다 — 다음 기둥에 착지하세요. 녹음은 없습니다.",
      kicker: "눌러서 차오르고, 조용히 점프", heard: "소리로 차오릅니다. 조용해지면 점프합니다.", cardSmall: "차지 점프 클래식",
      steps: ["시작을 누르고 마이크를 허용하세요.", "소리를 내면 차지 링이 차오릅니다 — 만충일수록 멀리 납니다.", "조용해지는 순간 점프해 다음 기둥으로. 정중앙 착지는 +2.", "협곡으로 떨어지면 라운드 종료. 30초입니다."],
      note: "Hop는 페이지 안에서 볼륨을 측정할 뿐, 전송도 녹음도 없습니다. 기둥과 등반가는 이 사이트의 그림입니다.",
      faq: [
        { q: "점프 세기는 어떻게 판단하나요?", a: "틈 위의 숫자가 폭이고, 링이 차지량입니다 — 만충이면 약 400픽셀. 짧은 틈은 일찍 멈추세요." },
        { q: "출발한 기둥에 다시 착지해도 되나요?", a: "네, 안전합니다 — 다만 점수는 없어요. 먼 기둥만 점수입니다." }
      ]
    },
    "3d/miner": {
      tagline: "외치고 클로를 떨어뜨려",
      metaDesc: "Miner 3D는 30초 무료 보이스 게임입니다. 블록 동굴 위에서 블록 클로가 흔들립니다 — 외치거나 스페이스 또는 클릭으로 떨어뜨려 금을 끌어올리세요. 녹음은 없습니다.",
      kicker: "타이밍 맞춰 외치기",
      heard: "외치거나 스페이스, 클릭하면 클로가 떨어집니다.",
      featureSmall: "블록으로 만든 골드 러시",
      steps: ["시작을 누르고 브라우저가 묻으면 마이크를 허용하세요.", "클로는 스스로 좌우로 흔들립니다. 외치거나 스페이스, 클릭하면 곧장 내려갑니다.", "잡은 것은 무엇이든 끌어올립니다 — 금은 비싸고, 바위는 무겁고 느리며, 파란 보석이 대박입니다.", "30초 동안 최대한 많이 캐세요."],
      note: "광산을 옆에서 보는 블록 화면입니다. Miner 3D는 페이지 안에서 볼륨만 측정하고 녹음하지 않습니다.",
      faq: [
        { q: "Miner 3D와 Miner의 차이는?", a: "같은 규칙, 다른 화면 — 픽셀 평면 광산과 블록 입장 버전. 기록은 따로 저장됩니다." },
        { q: "꼭 외쳐야 하나요?", a: "아니요 — 선을 넘는 짧은 소리면 클로가 떨어집니다. 스페이스나 클릭도 가능해요." }
      ]
    },
    "3d/floors": {
      tagline: "목소리로 100층 내려가기",
      metaDesc: "Floors 3D는 30초 무료 보이스 게임입니다. 블록 등반가가 블록 갱도로 내려갑니다 — 낮은 소리로 왼쪽, 높은 소리로 오른쪽, 가시를 피하세요. 녹음은 없습니다.",
      kicker: "낮은 소리 왼쪽, 높은 소리 오른쪽",
      heard: "낮은 톤은 왼쪽, 높은 톤은 오른쪽으로 걷습니다.",
      featureSmall: "블록으로 만든 하강",
      steps: ["시작을 누르고 브라우저가 묻으면 마이크를 허용하세요.", "등반가는 스스로 가라앉습니다. 낮은 소리 왼쪽, 높은 소리 오른쪽.", "층마다 틈으로 안내하세요. 가시 바닥과 내려오는 가시 천장이 라운드를 끝냅니다.", "방향키나 화면 좌우 절반으로도 조작됩니다. 30초입니다."],
      note: "갱도를 옆에서 보는 블록 화면입니다. Floors 3D는 페이지 안에서 음정만 측정합니다. 오디오는 기기를 떠나지 않습니다.",
      faq: [
        { q: "Floors 3D와 Floors의 차이는?", a: "같은 규칙, 다른 화면 — 픽셀 평면 갱도와 블록 입장 버전. 기록은 따로 저장됩니다." },
        { q: "목소리 조작은 어떻게 작동하나요?", a: "페이지가 목소리 음정을 추적합니다. 낮은 소리 왼쪽, 높은 소리 오른쪽. 조용하면 곧장 떨어집니다." }
      ]
    }
  },
  ru: {
    "3d/dino": {
      tagline: "Прыгай криком", metaDesc: "Dino 3D — бесплатная голосовая игра на 30 секунд. Держи звук, и блоковый динозавр бежит. Замолчи — он падает.",
      kicker: "Держи звук", heard: "Держи звук, пробел или мышь. Динозавр остаётся на ногах.",
      featureSmall: "Держи звук — замолчал, упал",
      steps: ["Нажми Старт и разреши микрофон, если браузер спросит.", "Держи звук, пробел или мышь — динозавр бежит. Отпусти — падает.", "Каждый пройденный камень даёт очко.", "Врежешься в камень — раунд окончен. У тебя 30 секунд."],
      note: "Динозавр виден сбоку, камни едут справа. Dino 3D измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей.",
      faq: [
        { q: "Как набирать очки в Dino 3D?", a: "Каждый камень, который прошёл динозавр, даёт очко до конца 30 секунд." },
        { q: "Обязательно кричать?", a: "Нет. Любой ровный звук его держит — речь, гудение или зажатый пробел. Кричать просто веселее." }
      ]
    },
    "3d/flap": {
      tagline: "Лети голосом", metaDesc: "Flap 3D — бесплатная голосовая игра на 30 секунд. Держи звук, и блоковая мотылёк летит сквозь просветы. Замолчи — она падает.",
      kicker: "Держи звук", heard: "Держи звук, пробел или мышь — и мотылёк летит вверх.",
      featureSmall: "Держи звук, чтобы пройти просветы",
      steps: ["Нажми Старт и разреши микрофон, если браузер спросит.", "Держи звук, пробел или мышь — мотылёк летит вверх. Отпусти — падает.", "Пролети через просвет — очко.", "Коснёшься стены, верха или земли — раунд окончен. У тебя 30 секунд."],
      note: "Мотылёк виден сбоку, просветы едут справа. Flap 3D измеряет громкость на странице и ничего не записывает.",
      faq: [
        { q: "Как набирать очки во Flap 3D?", a: "Каждый пройденный просвет — очко. Успей пройти как можно больше за 30 секунд." },
        { q: "Почему мотылёк всё время падает?", a: "Звук — это подъёмная сила. В тихой комнате она снижается — держи звук или пробел, и она полетит." }
      ]
    },
    "3d/float": {
      tagline: "Пройди сквозь кольцо", metaDesc: "Float 3D — бесплатная голосовая игра на 30 секунд. Громкость поднимает блоковый шар сквозь круглые кольца. Тишина — он падает.",
      kicker: "Поднимай громкостью", heard: "Громче, пробел или мышь выше — шар поднимается.",
      featureSmall: "Громкость ведёт шар сквозь кольца",
      steps: ["Нажми Старт и разреши микрофон, если браузер спросит.", "Чем громче, тем выше шар; зажми пробел или веди мышью вверх и вниз.", "Пройди каждое кольцо — очко.", "Коснёшься кольца — раунд окончен. У тебя 30 секунд."],
      note: "Шар виден сбоку, кольца едут справа. Float 3D измеряет громкость на странице и ничего не записывает.",
      faq: [
        { q: "Чем Float 3D отличается от других 3D?", a: "Громкость тут — регулятор высоты, а не просто вкл/выкл: громче — выше шар. Побеждает тонкий контроль." },
        { q: "Можно играть только мышью?", a: "Да. Зажми кнопку на картинке и веди вверх-вниз — шар следует за указателем. Пробел тоже работает." }
      ]
    },
    dino: {
      tagline: "Прыгай криком", metaDesc: "Dino — бесплатная голосовая игра на 30 секунд. Держи звук, и маленький динозавр бежит. Замолчи — он падает.",
      kicker: "Держи звук", heard: "Держи звук, и динозавр остаётся на ногах.", cardSmall: "2D-версия",
      steps: ["Нажми Старт и разреши микрофон.", "Держи звук, и динозавр поднимается и держится. Замолчи — падает.", "Каждый пройденный камень даёт очко.", "Врежешься в камень — раунд окончен. У тебя 30 секунд."],
      note: "Dino измеряет громкость на странице: ни отправки в речевые сервисы, ни записей. Динозавр и камни нарисованы здесь.",
      faq: [
        { q: "Разница между Dino и Dino 3D?", a: "Правила те же, картинки две. Dino — плоский пиксельный оригинал; Dino 3D — тот же забег в блочном виде сбоку." },
        { q: "Dino работает на телефоне?", a: "Да. Играет в браузере телефона и слушает через его микрофон. Держи картинку — можно играть без звука." }
      ]
    },
    flap: {
      tagline: "Лети голосом", metaDesc: "Flap — бесплатная голосовая игра на 30 секунд. Держи звук, и пиксельный мотылёк летит сквозь просветы. Замолчи — она падает.",
      kicker: "Держи звук", heard: "Держи звук, и мотылёк поднимается.", cardSmall: "2D-версия",
      steps: ["Нажми Старт и разреши микрофон.", "Держи звук, и мотылёк летит вверх. Замолчи — падает.", "Пролети просвет — очко.", "Коснёшься стены, верха или земли — раунд окончен. У тебя 30 секунд."],
      note: "Flap измеряет громкость на странице: ни отправки в речевые сервисы, ни записей. Мотылёк и стены нарисованы здесь.",
      faq: [
        { q: "Разница между Flap и Flap 3D?", a: "Правила те же, картинки две. Flap — плоская пиксельная версия; Flap 3D — тот же полёт в блоках." },
        { q: "Как держать мотылька на одной высоте?", a: "Корми её ровным звуком — долгое «ааа» на одной громкости держит её горизонтально." }
      ]
    },
    float: {
      tagline: "Пройди сквозь дырку", metaDesc: "Float — бесплатная голосовая игра на 30 секунд. Громкость поднимает шар сквозь круглые дырки. Тишина — он падает.",
      kicker: "Поднимай громкостью", heard: "Громче — шар выше. Тишина — он опускается.", cardSmall: "2D-версия",
      steps: ["Нажми Старт и разреши микрофон.", "Громче — шар выше; тишина — он опускается.", "Пройди каждую дырку — очко.", "Коснёшься края — раунд окончен. У тебя 30 секунд."],
      note: "Float измеряет громкость на странице: ни отправки в речевые сервисы, ни записей. Шар и дырки — оригинальная графика этого сайта.",
      faq: [
        { q: "Float — это игра про вертолёт?", a: "Та же семья «одной кнопки», но кнопка — твой голос, и вся графика нарисована для этого сайта." },
        { q: "Почему шар так быстро падает, когда я замолкаю?", a: "Гравитация нарочно сильнее подъёмной — надёжнее держать тихий ровный звук, чем полную тишину." }
      ]
    },
    louder: {
      tagline: "Держи громкость", metaDesc: "Louder — бесплатная голосовая игра на 30 секунд. Каждая секунда выше линии даёт очко. Тишина не считается. Ничего не записывается.",
      kicker: "Держи громкость", heard: "Тихие секунды не считаются.", cardSmall: "Каждая громкая секунда — очко",
      attract: "Шуми — каждая громкая секунда даёт очко",
      steps: ["Нажми Старт и разреши микрофон.", "Говори, пой или просто шуми выше линии.", "Каждая секунда выше линии — очко. Тишина не считается.", "Раунд длится 30 секунд. Побей свой рекорд."],
      note: "Louder измеряет громкость на этой странице: не отправляет аудио в речевые сервисы и не хранит записи. Слово на экране лишь показывает, превысил ли уровень линию.",
      faq: [
        { q: "Что значит «достаточно громко»?", a: "Обычная речь проходит линию в тихой комнате. Если на экране «Громче» — не дотягиваешь, добавь немного." },
        { q: "Засчитается музыка или видео?", a: "Технически да — игра слышит только громкость. Но кайф в том, чтобы шуметь самому." }
      ]
    },
    say: {
      tagline: "Скажи слово", metaDesc: "Say It — бесплатная голосовая игра на одну минуту. Появляется слово, скажи его, и приходит следующее. Chrome для компьютера с микрофоном.",
      kicker: "Скажи это слово", heard: "Появляется слово. Скажи его.", cardSmall: "Появилось слово — скажи его",
      attract: "Скажи слово вслух", prompt: "слово",
      steps: ["Нажми Старт и разреши микрофон.", "Одно слово заполняет экран. Скажи его чётко.", "Совпало — очко растёт, приходит новое слово.", "У тебя 60 секунд. Стоп заканчивает раньше."],
      note: "Say It использует голосовой сервис Chrome, чтобы превратить речь в текст. Эта страница не хранит запись. Открой её в Chrome для компьютера.",
      faq: [
        { q: "Почему моё слово не считается?", a: "Скажи всё слово чётко. Полоса внизу показывает, что услышал Chrome — сверься со словом на экране и попробуй снова." },
        { q: "Можно играть на других языках?", a: "Да — смени язык сайта в верхней панели, и слова поменяются вместе с ним. Каждая версия слушает на своём языке." }
      ]
    },
    count: {
      tagline: "Считай вслух", metaDesc: "Count — бесплатная голосовая игра. Скажи «один», потом «два», и считай до тридцати. У тебя 60 секунд. Chrome для компьютера.",
      kicker: "Скажи это число", heard: "Начни с одного и считай дальше.", cardSmall: "От одного до тридцати",
      attract: "Считай от одного вслух", prompt: "один",
      steps: ["Нажми Старт. Первое число — один.", "Скажи число на экране, затем следующее, когда оно появится.", "Каждое услышанное по порядку число даёт очко.", "Счёт доходит до тридцати, или истекают 60 секунд."],
      note: "Count использует голосовой сервис Chrome, чтобы превратить речь в текст. Эта страница не хранит запись. Открой её в Chrome для компьютера.",
      faq: [
        { q: "А если я скажу число не по порядку?", a: "Ничего страшного — экран продолжает просить то же число, пока не услышит верное. Очки только за правильный порядок." },
        { q: "Нужно ли точное число?", a: "Хватит похожего. Игра принимает обычные варианты и цифры — считай естественно." }
      ]
    },
    repeat: {
      tagline: "Повтори фразу", metaDesc: "Repeat — бесплатная голосовая игра. Появляется фраза из двух слов, скажи её целиком. Следующая придёт, когда вся фраза засчитается. 60 секунд.",
      kicker: "Скажи всю фразу", heard: "Скажи каждое слово фразы.", cardSmall: "Повтори всю фразу",
      attract: "Повтори фразу, каждое слово", prompt: "красное яблоко",
      steps: ["Нажми Старт и разреши микрофон.", "Появляется короткая фраза из двух слов, например «красное яблоко».", "Скажи оба слова. Очко только когда вся фраза услышана.", "Каждый раз приходит новая фраза. У тебя 60 секунд."],
      note: "Repeat использует голосовой сервис Chrome, чтобы превратить речь в текст. Эта страница не хранит запись. Открой её в Chrome для компьютера.",
      faq: [
        { q: "Важны ли порядок и лишние слова?", a: "Все слова фразы должны быть услышаны; лишние игнорируются. Неверный порядок очков не даёт." },
        { q: "Дети могут играть в Repeat?", a: "Отличная разминка для чтения: короткие фразы, без давления времени, счёт идёт по услышанным словам." }
      ]
    },
    "voice-over": {
      tagline: "Прочитай строку", metaDesc: "Voice Over — бесплатная голосовая игра на 60 секунд. Появляется короткая строка рассказа, прочитай вслух — придёт следующая. Chrome с микрофоном.",
      kicker: "Прочитай строку", heard: "Появляется строка рассказа. Прочитай её.", cardSmall: "Прочитай рассказ",
      attract: "Прочитай рассказ вслух", prompt: "поезд опаздывает",
      steps: ["Нажми Старт и разреши микрофон.", "Короткая строка рассказа заполняет экран, например «поезд опаздывает».", "Прочитай каждое слово. Очко, когда вся строка засчитана.", "Каждый раз приходит новая строка. У тебя 60 секунд."],
      note: "Строки написаны для этой игры. Voice Over использует голосовой сервис Chrome. Эта страница не хранит запись. Открой её в Chrome для компьютера.",
      faq: [
        { q: "Подходит для практики чтения вслух?", a: "Именно для этого. Короткие естественные строки, и игра слышит только, упали ли слова — готовое упражнение для чтения." },
        { q: "Отличие от страницы Voice Over Game?", a: "Здесь наша собственная игра в слова на 60 секунд. Та страница встраивает внешнюю студию, Choicer Voicer." }
      ]
    },
    "voice-acting": {
      tagline: "Скажи с настроением", metaDesc: "Voice Acting — бесплатная игра на 60 секунд. Над оригинальной строкой появляется настроение — скажи строку и сыграй его. Chrome с микрофоном.",
      kicker: "С этим настроением", heard: "Скажи строку. Настроение — над ней.", cardSmall: "Скажи с этим настроением",
      attract: "Скажи строку с этим настроением", prompt: "брось это",
      steps: ["Нажми Старт и разреши микрофон.", "Над оригинальной строкой появляется настроение, например шёпот или злость.", "Скажи строку — и сыграй настроение, говоря её.", "Счёт проверяет слова. Настроение — твоё actoрство. У тебя 60 секунд."],
      note: "Эта страница не слышит, звучал ли ты злым или спокойным, поэтому игру не оценивает — она проверяет только слова. Строки написаны для этой игры. Voice Acting использует голосовой сервис Chrome и не хранит запись.",
      faq: [
        { q: "Игра настроения меняет счёт?", a: "Нет — счёт проверяет только слова. Настроение тут ради удовольствия и тренировки диапазона." },
        { q: "Годится для кастингов и демо?", a: "Как разминка — идеально: случайные настроения, короткие строки, минута на таймере. Для настоящих записей нужен студия — эта страница не хранит аудио." }
      ]
    },
    miner: {
      tagline: "Крикни и опусти крюк", metaDesc: "Miner — бесплатная голосовая игра на 30 секунд. Крюк качается над пещерой — крикни, нажми пробел или кликни, чтобы опустить его и вытянуть золото. Ничего не записывается.",
      kicker: "Крикни вовремя", heard: "Крик, пробел или клик опускают крюк.", cardSmall: "Золотая лихорадка голосом",
      steps: ["Нажми Старт и разреши микрофон.", "Крюк качается сам. Крикни, нажми пробел или кликни — и он нырнёт прямо вниз.", "Он вытащит то, за что зацепится: золото дорогое, камень тяжёлый и медленный, а синий кристалл — джекпот.", "Натащи сколько сможешь за 30 секунд."],
      note: "Miner измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей. Крюк, золото и пещера нарисованы здесь.",
      faq: [
        { q: "Как набрать больше в Miner?", a: "Дождись, пока крюк встанет над самородком, и только потом кричи. Большое золото даёт 120, синий кристалл — 300: сначала прицелься." },
        { q: "Обязательно кричать?", a: "Нет — любой короткий звук выше линии опускает крюк, а без микрофона работают пробел и клик." }
      ]
    },
    floors: {
      tagline: "Голосом вниз 100 этажей", metaDesc: "Floors — бесплатная голосовая игра на 30 секунд. Скалолаз опускается по стволу — гуди низко, чтобы идти влево, пой высоко, чтобы идти вправо, и берегись шипов. Ничего не записывается.",
      kicker: "Низ — влево, высокий — вправо", heard: "Низкий тон идёт влево, высокий — вправо.", cardSmall: "Классика спуска голосом",
      steps: ["Нажми Старт и разреши микрофон.", "Скалолаз опускается сам. Потяни низко (\"у-у\") — он пойдёт влево; свистни или спой высоко — вправо.", "Веди его через пролёты каждого этажа. Шипастые этажи и опускающийся шипастый потолок завершают раунд.", "Стрелки или удержание левой или правой половины картинки тоже управляют. У тебя 30 секунд."],
      note: "Floors слушает высоту тона прямо на странице. Аудио не покидает твоё устройство и ничего не сохраняется. Скалолаз, ствол и шипы нарисованы здесь.",
      faq: [
        { q: "Как работает управление голосом?", a: "Страница следит за высотой твоего голоса: низкие звуки (гудение) идут влево, высокие (свист или \"и-и\") — вправо. В тишине он продолжает падать прямо." },
        { q: "Floors — это та самая \"сто этажей вниз\"?", a: "Это наша голосовая версия классического спуска: тот же падающий скалолаз и тот же шипастый потолок, только вместо стрелок — высота твоего голоса." }
      ]
    },
    catch: {
      tagline: "Лови падающее золото", metaDesc: "Catch — бесплатная голосовая игра на 30 секунд. Гуди низко или высоко, двигай корзину, лови монеты и кристаллы и берегись бомб. Ничего не записывается.",
      kicker: "Низ — влево, высокий — вправо", heard: "Двигай корзину. Лови монеты и кристаллы, берегись бомб.", cardSmall: "Монеты — да, бомбы — нет",
      steps: ["Нажми Старт и разреши микрофон.", "Потя низко — корзина поедет влево, высоко — вправо. Стрелки или удержание половин картинки тоже работают.", "Монета даёт 1, синий кристалл 3, а пойманная бомба завершает раунд.", "У тебя 30 секунд. Побей свой рекорд."],
      note: "Catch слушает громкость и высоту тона прямо на странице. Аудио не покидает твоё устройство и ничего не сохраняется. Корзина, монеты и бомбы нарисованы здесь.",
      faq: [
        { q: "Что считать низким или высоким тоном?", a: "Гудение или «мм» — низко, корзина влево; свист или «и-и» — высоко, вправо. Лучше всего держать тянущийся звук." },
        { q: "Что будет, если поймаю бомбу?", a: "Раунд сразу закончится, счёт останется. Бомбы падают часто — жадных ловят." }
      ]
    },
    racer: {
      tagline: "Уходи от машин тоном", metaDesc: "Racer — бесплатная голосовая игра на 30 секунд. Гуди низко или высоко, рули по дороге и уворачивайся от встречных машин. Ничего не записывается.",
      kicker: "Проскочи между полосами", heard: "Рули вниз по дороге и уворачивайся от машин.", cardSmall: "Руль из голоса",
      steps: ["Нажми Старт и разреши микрофон.", "Низкий тон — влево, высокий — вправо. Стрелки или удержание половин картинки тоже работают.", "Каждая пропущенная машина — очко. Столкновение завершает раунд.", "Трафик ускоряется. У тебя 30 секунд."],
      note: "Racer слушает высоту тона прямо на странице. Аудио не покидает твоё устройство и ничего не сохраняется. Дорога и машины нарисованы здесь.",
      faq: [
        { q: "Машина держится полосы?", a: "Нет — руль непрерывный, как настоящий. Маленьких поправок достаточно." },
        { q: "Насколько быстрее?", a: "С каждой пройденной машиной трафик быстрее — последние десять секунд и есть экзамен." }
      ]
    },
    bricks: {
      tagline: "Разбей стену голосом", metaDesc: "Bricks — бесплатная голосовая игра на 30 секунд. Гуди, чтобы двигать платформу, крикни или жми пробел для подачи и разбей как можно больше кирпичей. Ничего не записывается.",
      kicker: "Двигай платформу, крикни — подача", heard: "Двигай платформу. Крик, пробел или клик запускают мяч.", cardSmall: "Арканоид по тону",
      steps: ["Нажми Старт и разреши микрофон.", "Гуди низко или высоко, двигая платформу; мяч едет с ней до подачи.", "Крик, пробел или клик — запуск. Верхние золотые ряды дают 3, средние 2, нижний 1.", "Упал мяч — встань умно и крикни снова. У тебя 30 секунд."],
      note: "Bricks слушает громкость и высоту тона прямо на странице. Аудио не покидает твоё устройство и ничего не сохраняется. Стена, платформа и мяч нарисованы здесь.",
      faq: [
        { q: "Почему мяч надо подавать заново?", a: "Крик — твоя подача. Упал мяч — встань в удачное место и крикни ещё: хорошо подать тоже очки." },
        { q: "Какие кирпичи дороже?", a: "Два верхних золотых ряда дают по 3, средние по 2, нижний по 1 — держи мяч вверху." }
      ]
    },
    snake: {
      tagline: "Змея по высоте тона", metaDesc: "Snake — бесплатная голосовая игра на 30 секунд. Низкий тон поворачивает влево, высокий вправо — ешь яблоки и не кусай себя. Ничего не записывается.",
      kicker: "Низкий влево, высокий вправо", heard: "Ешь яблоки. Не кусай себя.", cardSmall: "Классика с поворотами по тону",
      steps: ["Нажми Старт и разреши микрофон.", "Змея ползёт сама. Низкий тон поворачивает её влево, высокий вправо — относительно её хода.", "Каждое яблоко — очко и плюс две клетки длины.", "Укус стены или себя завершает раунд. У тебя 30 секунд."],
      note: "Snake слушает высоту тона прямо на странице. Аудио не покидает твоё устройство и ничего не сохраняется. Змея и яблоки нарисованы здесь.",
      faq: [
        { q: "Повороты абсолютные или относительные?", a: "Относительные: «влево» — это всегда лево самой змеи, как настоящий поворот. Два быстрых низких тона — разворот." },
        { q: "Какая длина в начале?", a: "Четыре клетки. Каждое яблоко добавляет две, темп растёт — в конце тесно." }
      ]
    },
    march: {
      tagline: "Звук — идти, тишина — стоять", metaDesc: "March — бесплатная голосовая игра на 30 секунд. Держи звук, чтобы идти по коридору, тишина — чтобы стоять — тормози перед шипами, шипастая стена догоняет. Ничего не записывается.",
      kicker: "Иди на звуке, тормози в тишине", heard: "Держи звук — идёшь. Тишина — стоишь.", cardSmall: "Классика иди-стой",
      steps: ["Нажми Старт и разреши микрофон.", "Держи звук — скалолаз идёт; замолчи — остановится на месте.", "Тормози перед шипастыми полосами — задел шипы, раунд закончен, а шипастая стена сзади всё ближе.", "Счёт идёт в метрах. У тебя 30 секунд."],
      note: "March измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей. Идущий, шипы и стена нарисованы здесь.",
      faq: [
        { q: "Насколько точна остановка?", a: "Мгновенная — тишина тормозит его на месте. Игра в том, чтобы читать дорогу и отпускать звук заранее." },
        { q: "А если просто молчать?", a: "Шипастая стена ползёт вечно — стоять на месте лишь отсрочка, и счёт только за метры." }
      ]
    },
    tug: {
      tagline: "Перекричи машину", metaDesc: "Tug — бесплатная голосовая игра на 30 секунд. Твоя громкость тянет канат против машины, которая каждую раунд тянет сильнее. Выиграй как можно больше раундов. Ничего не записывается.",
      kicker: "Громче — сильнее тянешь", heard: "Громкость тянет флажок к твоей линии.", cardSmall: "Перетягивание с машиной",
      steps: ["Нажми Старт и разреши микрофон.", "Кричи, пой или гуди — чем громче, тем сильнее тянет твоя сторона.", "Дотяни флажок за зелёную линию — раунд твой. Машина тянет обратно, и с каждым раундом сильнее.", "Выиграй сколько сможешь раундов за 30 секунд."],
      note: "Tug измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей. Канат, флажок и оба тянувших нарисованы здесь.",
      faq: [
        { q: "Насколько громко надо?", a: "Первые раунды берутся громкой речью. К третьему ты уже кричишь — так и задумано." },
        { q: "Если машина возьмёт раунд?", a: "Флажок вернётся в центр, машина чуть ослабнет — проигрыш не снежный ком." }
      ]
    },
    puff: {
      tagline: "Дуй, фиксируй, не лопни", metaDesc: "Puff — бесплатная голосовая игра на 30 секунд. Держи звук, чтобы надувать шар — у каждого шара своя скрытая граница лопания, замолчи и зафиксируй вовремя. Ничего не записывается.",
      kicker: "Дуй смело, фиксируй рано", heard: "Держи звук — дуешь. Замолчи — фиксируешь.", cardSmall: "Надуй и успей забрать",
      steps: ["Нажми Старт и разреши микрофон.", "Держи звук — шар растёт примерно на 44 пикселя в секунду, большой шар даёт больше.", "Замолчи на полсекунды — размер шара станет очками, и надуется новый.", "У каждого шара скрытая граница лопания. Пердуешь — шар лопнет зря. У тебя 30 секунд."],
      note: "Puff измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей. Шары и хлопки нарисованы здесь.",
      faq: [
        { q: "Где граница лопания?", a: "Секрет, у каждого шара своя — между 48 и 112. Число на шаре — текущий размер; предел скрыт." },
        { q: "Лопнувший шар штрафует?", a: "Только гордость — лопнул в ноль, тут же новый. Жадность стоит выдутых секунд." }
      ]
    },
    hop: {
      tagline: "Заряжай голосом, прыгай через провал", metaDesc: "Hop — бесплатная голосовая игра на 30 секунд. Держи звук, чтобы зарядить прыжок, замолчи — чтобы прыгнуть — приземлись на следующий столб и не промахнись. Ничего не записывается.",
      kicker: "Держи — заряд, замолчи — прыжок", heard: "Держи звук — заряд. Замолчи — прыжок.", cardSmall: "Классика заряжаемого прыжка",
      steps: ["Нажми Старт и разреши микрофон.", "Держи звук — кольцо заряда заполняется, полное летит дальше всего.", "Замолчи — скалолаз прыгнет к следующему столбу. Точно в центр — плюс два.", "Упал в каньон — раунд закончен. У тебя 30 секунд."],
      note: "Hop измеряет громкость прямо на странице: ни отправки в речевые сервисы, ни записей. Столбы и скалолаз нарисованы здесь.",
      faq: [
        { q: "Как рассчитать прыжок?", a: "Число над провалом — его ширина, кольцо показывает заряд — полный летит примерно четыреста пикселей; на коротких провалах отпускай заранее." },
        { q: "Можно вернуться на свой столб?", a: "Можно, безопасно — но очков нет. Платит только дальний столб." }
      ]
    },
    "3d/miner": {
      tagline: "Крикни и опусти крюк",
      metaDesc: "Miner 3D — бесплатная голосовая игра на 30 секунд. Блочный крюк качается над блочной пещерой — крикни, нажми пробел или кликни, чтобы опустить его и вытянуть золото. Ничего не записывается.",
      kicker: "Крикни вовремя",
      heard: "Крик, пробел или клик опускают крюк.",
      featureSmall: "Золотая лихорадка из блоков",
      steps: ["Нажми Старт, затем разреши микрофон, если браузер спросит.", "Крюк качается сам. Крикни, нажми пробел или кликни — и он нырнёт прямо вниз.", "Он вытащит то, за что зацепится: золото дорогое, камень тяжёлый и медленный, синий кристалл — джекпот.", "Натащи сколько сможешь за 30 секунд."],
      note: "Ты видишь шахту сбоку, всё из блоков. Miner 3D измеряет громкость на странице и ничего не записывает.",
      faq: [
        { q: "Чем Miner 3D отличается от Miner?", a: "Правила те же, картинка другая: плоская пиксельная шахта и блочный вид сбоку. Рекорды хранятся отдельно." },
        { q: "Обязательно кричать?", a: "Нет — любой короткий звук выше линии опускает крюк, а без микрофона работают пробел и клик." }
      ]
    },
    "3d/floors": {
      tagline: "Голосом вниз 100 этажей",
      metaDesc: "Floors 3D — бесплатная голосовая игра на 30 секунд. Блочный скалолаз опускается по блочному стволу — гуди низко влево, пой высоко вправо, берегись шипов. Ничего не записывается.",
      kicker: "Низ — влево, высокий — вправо",
      heard: "Низкий тон идёт влево, высокий — вправо.",
      featureSmall: "Спуск из блоков",
      steps: ["Нажми Старт, затем разреши микрофон, если браузер спросит.", "Скалолаз опускается сам. Низкий тон — влево, свист или высокий — вправо.", "Веди его через пролёты этажей. Шипастые этажи и опускающийся потолок завершают раунд.", "Стрелки или удержание половин картинки тоже управляют. У тебя 30 секунд."],
      note: "Ты видишь ствол сбоку, всё из блоков. Floors 3D слушает высоту тона на странице. Аудио не покидает твоё устройство.",
      faq: [
        { q: "Чем Floors 3D отличается от Floors?", a: "Правила те же, картинка другая: плоский пиксельный ствол и блочный вид сбоку. Рекорды хранятся отдельно." },
        { q: "Как работает управление голосом?", a: "Страница следит за высотой твоего голоса: низкие звуки — влево, высокие — вправо. В тишине он падает прямо." }
      ]
    }
  }
}
