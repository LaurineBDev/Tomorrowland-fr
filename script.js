
const VIDEO_ID = "fO64LaGqx3s";

const subtitleElement = document.getElementById("subtitle");

let player;
let subtitleTimer;

  // Sous-titres français pour la vidéo
const subtitles = [
  // *Introduction
   {
     start: 25,
     end: 28,
     text: "Honnêtement, l'un des plus beaux jours de ma vie."
    },
    { start: 28,
      end: 33,
      text: "Quand tout va aussi vite, il est très difficile de ralentir le rythme."
    },
    {
      start: 33,
      end: 40,
      text: "J'ai appris que les bonnes actions s'accomplissent en silence, tandis que le mal... hurle et détruit."
    },
    {
      start: 40,
      end: 45,
      text: "C’est une vie qui n’est pas simple, mais elle est amusante."
    },
    {
      start: 45,
      end: 55,
      text: "Bien sûr, je savais que je voulais visiter les lieux, mais faire partie de l’histoire, c’était quelque chose d’irréel pour moi."
    },
    {
      start: 55,
      end: 64,
      text: "Cela vous oblige, en fait, à donner une intention à ce que vous faites et, au bout du compte, c’est la vie que je souhaite mener."
    },
          // Miss Monique's path --------------------------------------------------
    {
      start: 72,
      end: 76,
      text: "Salut maman. Bon, je viens tout juste de rentrer de tournée."
    },
    {
      start: 76,
      end: 85,
      text: "Retrouvons-nous demain pour dîner, et je te raconterai toutes les péripéties de cette tournée. Alors, ma vie en ce moment, ça donne un peu ça..."
    },
    {
      start: 85,
      end: 88,
      text: "Je dirais très intense. Environ 200 vols par an."
    },
    {
      start: 93,
      end: 101,
      text: "Plein de voyages. Et surtout, beaucoup de musique."
    },
    {
      start: 101,
      end: 110,
      text: "La première fois que la musique m'a fait ressentir quelque chose, c'était probablement quand je suis allé en boîte de nuit pour la première fois."
    },
    {
      start: 110,
      end: 118,
      text: "J'ai observé comment le DJ maîtrisait professionnellement non seulement la musique, mais créait aussi une atmosphère particulière."
    },
    {
      start: 118,
      end: 125,
      text: "J'ai commencé à me demander : « Pourquoi ne pas essayer moi-même ? » Je n'avais pas d'objectif précis."
    },
    {
      start: 125,
      end: 134,
      text: "Je me disais simplement : « Ce serait génial, j'aime me produire sur scène. » À l'époque, nous n'avions pas de matériel de DJ."
    },
    {
      start: 134,
      end: 143,
      text: "Mais la boîte de nuit nous a accordé deux jours, trois heures par jour. La fois suivante, j'ai essayé de mixer moi-même lors d'une fête."
    },
    {
      start: 143,
      end: 152,
      text: "Heureusement pour moi, les téléphones n'existaient pas encore comme aujourd'hui. J'ai commencé à voyager dans différentes villes d'Ukraine."
    },
    {
      start: 152,
      end: 162,
      text: "J'ai commencé à croire en moi en tant que DJ, à croire que je pouvais vraiment créer quelque chose de spécial, quelque chose que les gens remarqueraient."
    },
    {
      start: 162,
      end: 169,
      text: "C'est pour cette raison que certaines personnes viennent spécialement pour assister à mes sets."
    },
    {
      start: 176,
      end: 186,
      text: "Je pense avoir vu environ la moitié du monde. Mais il n'existe aucun autre endroit comme Kyiv."
    },
    {
      start: 186,
      end: 193,
      text: "Je suis profondément attaché à cette ville et je pense que je n'oublierai jamais le jour où la Russie a attaqué mon pays."
    },
    {
      start: 193,
      end: 199,
      text: "J'étais chez moi et je me souviens qu'à trois heures du matin, j'étais encore en studio à enregistrer un nouveau podcast."
    },
    {
      start: 199,
      end: 211,
      text: "Je me suis levé pour prendre l'air et j'ai entendu quelque chose qui ressemblait à des explosions. Honnêtement, je n'arrivais pas à y croire."
    },
    {
      start: 211,
      end: 219,
      text: "C'était vraiment effrayant. Aujourd'hui encore, quand je repense à ce souvenir, mon corps tremble."
    },
    {
      start: 219,
      end: 235,
      text: "Parce que la guerre fait peur. C'est quelque chose qui… Je suis désolé."
    },
    {
      start: 240,
      end: 249,
      text: "Après une semaine, nous avons compris qu'il serait peut-être plus sûr pour toute notre famille de quitter Kyiv."
    },
    {
      start: 249,
      end: 258,
      text: "Honnêtement, c'était l'une des décisions les plus difficiles de ma vie."
    },
    {
      start: 258,
      end: 264,
      text: "Je crois que je n'avais qu'un seul sac. J'ai pris uniquement les choses les plus importantes."
    },
    {
      start: 264,
      end: 274,
      text: "Nous avons tout laissé à la maison, fermé la porte, pris notre voiture et commencé à rouler. D'habitude, le trajet durait environ deux heures."
    },
    {
      start: 274,
      end: 280,
      text: "Ce jour-là, il a duré vingt-quatre heures. Nous avons roulé sans nous arrêter."
    },
    {
      start: 280,
      end: 300,
      text: "C'est seulement lors de ma première nuit paisible, sans explosions, que j'ai compris que mon ancienne vie était probablement terminée. Désolé."
    },
    {
      start: 307,
      end: 314,
      text: "J'ai donc déménagé à Lisbonne et commencé une nouvelle vie ici."
    },
    {
      start: 314,
      end: 322,
      text: "J'aime le Portugal, honnêtement. C'est un magnifique pays et j'adore sa nature."
    },
    {
      start: 322,
      end: 328,
      text: "De manière générale, la vie ici est paisible, agréable et belle."
    },
    {
      start: 328,
      end: 337,
      text: "Mais l'Ukraine reste ma maison, et j'ai l'impression que mon cœur est resté à Kyiv."
    },
    {
      start: 337,
      end: 351,
      text: "Entre les concerts, quand j'ai de la chance, j'ai quelques jours de libre. Je passe la plupart de mon temps à faire de la musique."
    },
    {
      start: 351,
      end: 359,
      text: "Parfois, en studio, tout semble parfaitement à sa place, mais il manque quelque chose au morceau."
    },
    {
      start: 359,
      end: 368,
      text: "Un jour, je jouais dans un festival dont je ne me souviens plus. Mon tempo était plus rapide que d'habitude, autour de 129 BPM."
    },
    {
      start: 368,
      end: 377,
      text: "Le public a explosé. Nous nous sommes donc dit qu'il fallait immédiatement changer le tempo."
    },
    {
      start: 377,
      end: 387,
      text: "De temps en temps, j'aime réécouter les premières versions d'un morceau pour réaliser à quel point la version finale est différente."
    },
    {
      start: 387,
      end: 398,
      text: "Le plus beau compliment, c'est que les gens aiment notre musique et me demandent de jouer certains morceaux lorsqu'ils viennent à mes sets."
    },

// -----------------------------------------------------------------------------------------------------
    // Olav's Photography career
  {
      start: 416,
      end: 426,
      text: "Je travaille dans la musique depuis presque quinze ans, je crois. Mais je fais de la photographie depuis plus de vingt ans."
    },
        {
      start: 426,
      end: 429,
      text: "Je m'appelle Olav. Olav Stubberud."
    },
    {
      start: 429,
      end: 437,
      text: "Je viens de Norvège, mais je vis aux États-Unis depuis quatre ans, dont trois à New York."
    },
    {
      start: 437,
      end: 444,
      text: "C'est chez moi, maintenant. J'ai passé presque toute ma carrière à voyager."
    },
    {
      start: 444,
      end: 451,
      text: "Dix-sept ans de voyages, pratiquement sans interruption. J'ai grandi en Norvège."
    },
    {
      start: 451,
      end: 460,
      text: "J'ai eu une enfance formidable. J'ai pratiqué tous les sports possibles. J'avais deux voisins qui s'appelaient Stoll et Alec."
    },
    {
      start: 460,
      end: 468,
      text: "Ils ont commencé très tôt le snowboard et le skateboard. Tout le monde se filmait et se photographiait en train de faire des choses."
    },
    {
      start: 468,
      end: 475,
      text: "Je suis finalement devenu celui qui adorait tenir la caméra. C'était peut-être une réaction en chaîne..."
    },
    {
      start: 475,
      end: 484,
      text: "Quand j'essayais beaucoup de choses, je finissais généralement par me blesser. Mais les soins sont gratuits en Norvège, donc ce n'était pas grave."
    },
    {
      start: 484,
      end: 495,
      text: "À treize ans, j'ai économisé pour acheter mon premier appareil photo. La seule chose que je voulais vraiment faire, c'était de la photographie."
    },
    {
      start: 495,
      end: 504,
      text: "Le grand tournant, c'est quand j'ai quitté l'école. C'est l'une des décisions les plus importantes qu'on puisse prendre quand on est jeune."
    },
    {
      start: 504,
      end: 511,
      text: "Dire : « J'arrête. Je ne veux plus faire ça. » C'était l'une des meilleures décisions de ma vie."
    },
    {
      start: 511,
      end: 519,
      text: "À dix-huit ans, j'avais déjà passé 250 jours en voyage, car je saisissais toutes les occasions possibles."
    },
    {
      start: 519,
      end: 528,
      text: "Mes amis me demandaient : « Tu fais quoi aujourd'hui ? » Je répondais : « Je suis en Nouvelle-Zélande » ou « au Japon », pendant qu'eux étaient encore sur les bancs de l'école."
    },
    {
      start: 528,
      end: 537,
      text: "Enchanté de te rencontrer. — Moi aussi. C'était un set incroyable. Je peux te prendre en photo ? Bien sûr. — Génial, regarde l'objectif."
    },
    {
      start: 537,
      end: 543,
      text: "Juste là. Très bien. Prêt ? Un, deux. Parfait."
    },
    {
      start: 543,
      end: 549,
      text: "Après les sports d'action, la première grande catégorie dans laquelle je me suis spécialisé a été la musique."
    },
    {
      start: 549,
      end: 558,
      text: "J'ai été engagé pour photographier un nouvel artiste norvégien appelé Kygo, qui commençait à se faire connaître sur SoundCloud."
    },
    {
      start: 558,
      end: 562,
      text: "Le courant est bien passé entre nous et il devait jouer dans un festival peu après."
    },
    {
      start: 562,
      end: 572,
      text: "Je lui ai proposé de venir photographier le festival. Il a accepté et j'ai passé la journée avec lui."
    },
    {
      start: 572,
      end: 579,
      text: "Son manager m'a pratiquement dit : « Oui, tu viens avec nous. »"
    },
    {
      start: 579,
      end: 587,
      text: "Après Kygo, tout est allé très vite. J'ai commencé à partir en tournée avec Martin Garrix, Justin Bieber..."
    },
    {
      start: 587,
      end: 597,
      text: "Axwell & Ingrosso, Swedish House Mafia, Post Malone, The Chainsmokers, G-Eazy, PartyNextDoor, Halsey, Skrillex et Fred again.."
    },
    {
      start: 597,
      end: 606,
      text: "Oui, beaucoup d'artistes différents. Ça a été une aventure folle : sept années de tournées très intenses."
    },
    {
      start: 606,
      end: 611,
      text: "Il était très difficile de ralentir le rythme et de freiner tout ce qui se passait."
    },
    {
      start: 611,
      end: 622,
      text: "Quand on roule à 160 km/h, il faut plus de temps pour freiner. C'est exactement ce qui m'est arrivé."
    },
    {
      start: 622,
      end: 624,
      text: "En 2018..."
    },
    {
      start: 624,
      end: 634,
      text: "J'ai perdu mon père, soudainement. Et il y avait tous ces..."
    },
    {
      start: 634,
      end: 643,
      text: "Tous ces signes qui me disaient de ralentir. Mais je ne voulais pas vraiment..."
    },
    {
      start: 643,
      end: 646,
      text: "Je ne voulais pas ralentir."
    },
    {
      start: 646,
      end: 663,
      text: "Aujourd'hui, je me dis que j'aurais dû ralentir et passer davantage de temps avec mes proches. Mais au fond, c'est ce qu'il voulait que je fasse."
    },
    {
      start: 663,
      end: 670,
      text: "Ces signes m'ont obligé à ralentir, mais ils m'en ont aussi donné la possibilité."
    },
    {
      start: 670,
      end: 677,
      text: "C'était beau et douloureux de comprendre que je ne vivais peut-être pas la vie dont j'étais capable."
    },
    {
      start: 677,
      end: 684,
      text: "J'ai fini par avoir l'impression de produire des photos à la chaîne. Je ne ressentais plus rien en appuyant sur le déclencheur."
    },
    {
      start: 684,
      end: 690,
      text: "Il n'y avait plus rien. Ce n'était plus un instant particulier. Je ne ressentais rien, je n'étais même plus nerveux."
    },
    {
      start: 690,
      end: 699,
      text: "C'était triste, car j'avais la chance de photographier de grands artistes dans leur domaine..."
    },
    {
      start: 699,
      end: 705,
      text: "Mais je n'avais pas l'impression de réussir à capturer leur grandeur."
    },
    {
      start: 705,
      end: 709,
      text: "J'ai regardé tous ces fichiers et je me suis dit..."
    },
    {
      start: 709,
      end: 718,
      text: "« Je déteste ces photos. » J'ai eu une réaction complètement opposée et j'ai commencé à utiliser beaucoup d'appareils argentiques."
    },
    {
      start: 718,
      end: 722,
      text: "Je crois qu'après ça, je ne suis presque jamais revenu en arrière."
    },
    {
      start: 722,
      end: 730,
      text: "Venir à Tomorrowland et pouvoir photographier avec les formats que j'ai toujours admirés, c'est incroyable."
    },
    {
      start: 730,
      end: 737,
      text: "J'ai participé à beaucoup de festivals, même si je ne les ai pas tous vus."
    },
    {
      start: 737,
      end: 740,
      text: "Très peu de festivals ont la même atmosphère que Tomorrowland."
    },
    {
      start: 740,
      end: 746,
      text: "Pouvoir installer son appareil photo et passer une demi-heure sur une seule prise..."
    },
    {
      start: 746,
      end: 755,
      text: "Cela oblige à ralentir, à ressentir les choses, à réfléchir à ce que l'on fait, à pourquoi on le fait et à donner un sens à ses actions."
    },
    {
      start: 755,
      end: 760,
      text: "Et au bout du compte, c'est la vie que je veux mener."
    },
    // Victor experience ---------------------------------------------------------------------------------------
      {
    start: 776,
    end: 785,
    text: "Chaque jour, je me réveille avec joie, car je vais chez les gens pour leur apporter des fleurs."
  },
  {
    start: 785,
    end: 798,
    text: "Beaucoup de gens ne savent même pas qu'ils vont recevoir des fleurs. Quand je les vois sourire, être heureux, dire qu'ils sont choqués ou qu'ils ne s'y attendaient pas..."
  },
  {
    start: 798,
    end: 807,
    text: "Cela me procure énormément de joie. J'ai toujours appris que..."
  },
  {
    start: 807,
    end: 815,
    text: "Les bonnes actions se font en silence, tandis que le mal... crie et détruit."
  },
  {
    start: 815,
    end: 822,
    text: "Au revoir. Passe une bonne journée."
  },
  {
    start: 822,
    end: 833,
    text: "Ma vie a commencé dans la douleur, d'une certaine manière."
  },
  {
    start: 833,
    end: 842,
    text: "La femme qui m'a donné naissance m'a mis au monde dans le grenier d'une école... puis..."
  },
  {
    start: 842,
    end: 853,
    text: "Elle m'a abandonné."
  },
  {
    start: 853,
    end: 860,
    text: "J'ai été placé dans un établissement appelé une pouponnière, destiné aux enfants."
  },
  {
    start: 860,
    end: 869,
    text: "Jusqu'à mes quatorze ans, elle a refusé de me reconnaître comme son fils. Mais elle a été obligée de le faire..."
  },
  {
    start: 869,
    end: 874,
    text: "Car on lui avait dit que, si elle refusait, elle devrait se soumettre à un test ADN."
  },
  {
    start: 874,
    end: 885,
    text: "J'ai donc reçu un document officiel indiquant que je devais rentrer chez moi et qu'ils étaient obligés de m'accueillir."
  },
  {
    start: 885,
    end: 892,
    text: "C'était la première fois que je la voyais."
  },
  {
    start: 892,
    end: 900,
    text: "On m'a dit que si je n'allais pas travailler, je ne pourrais pas manger et qu'on ne me donnerait rien à manger."
  },
  {
    start: 900,
    end: 909,
    text: "Un week-end, nous étions assis à table et... j'ai eu l'idée de demander qui était mon père."
  },
  {
    start: 909,
    end: 919,
    text: "À ce moment-là, son mari a crié très fort : « Je vais chercher une batte et le tuer ! » J'ai réussi à sauter par-dessus la clôture."
  },
  {
    start: 919,
    end: 929,
    text: "Je n'avais nulle part où dormir ni personne vers qui me tourner. À ce moment-là, j'ai décidé que la vie ne valait plus la peine d'être vécue."
  },
  {
    start: 929,
    end: 932,
    text: "Je me suis réveillé à l'hôpital."
  },
  {
    start: 932,
    end: 940,
    text: "Plus tard, j'ai compris que si Dieu m'avait donné une seconde chance, je devais faire quelque chose de ma vie."
  },
  {
    start: 940,
    end: 948,
    text: "Petit à petit, je me suis adapté, j'ai laissé les traumatismes derrière moi..."
  },
  {
    start: 948,
    end: 955,
    text: "Et j'ai commencé à découvrir la musique et des personnes bonnes et formidables."
  },
  {
    start: 955,
    end: 962,
    text: "Pas à pas. En 2017..."
  },
  {
    start: 962,
    end: 972,
    text: "Une station de radio roumaine a organisé un concours..."
  },
  {
    start: 972,
    end: 978,
    text: "Pour gagner des billets pour Tomorrowland."
  },
  {
    start: 978,
    end: 987,
    text: "Pendant toute une semaine, j'ai écouté jour et nuit, en laissant mon ordinateur allumé en permanence : j'écoutais, je cliquais et je cumulais des points."
  },
  {
    start: 987,
    end: 996,
    text: "Puis le téléphone a sonné. « Luca, reste en ligne pour parler du kit du festival. » « Oui, bien sûr. » — « Parfait. En fait, Luca ? »"
  },
  {
    start: 996,
    end: 1007,
    text: "« Oui ? » — « Tu vas à Tomorrowland ! » Tomorrowland a complètement changé ma vie."
  },
  {
    start: 1007,
    end: 1019,
    text: "Je n'avais jamais ressenti une telle joie auparavant. Y aller était mon rêve ultime."
  },
  {
    start: 1019,
    end: 1028,
    text: "Cela m'a fait découvrir un tout nouveau monde. J'ai rencontré..."
  },
  {
    start: 1028,
    end: 1042,
    text: "Des personnes formidables, et environ 80 % de mes amis actuels viennent de Tomorrowland."
  },
  {
    start: 1042,
    end: 1054,
    text: "Se dire que l'avenir ira bien, qu'on peut continuer à avancer et se faire de nouveaux amis, c'est quelque chose d'extraordinaire."
  },
  {
    start: 1054,
    end: 1077,
    text: "C'est presque quelque chose de pur."
  },
  // Passion and community
  {
    start: 1077,
    end: 1090,
    text: "Pour me présenter, je m'appelle Fahbeer Suchada Sopajaree. Je suis principalement propriétaire d'un bar à Bangkok."
  },
    {
    start: 1086,
    end: 1097,
    text: "Cela s'appelle « Lost in Thaislation ». Être là-bas, c'est comme être au cœur de la cuisine thaïlandaise."
  },
  {
    start: 1097,
    end: 1102,
    text: "J'ai donc l'impression que la vie à Bangkok est un peu comme des montagnes russes."
  },
  {
    start: 1102,
    end: 1110,
    text: "J'aime prendre des ingrédients qui semblent impossibles à utiliser et rendre cela possible. Je transforme le solide en liquide."
  },
  {
    start: 1110,
    end: 1120,
    text: "L'idée est de faire se demander aux gens s'ils sont sur le point de manger ou de boire. C'est probablement ce que j'aime faire le plus."
  },
  {
    start: 1120,
    end: 1123,
    text: "J'ai grandi avec ma grand-mère."
  },
  {
    start: 1123,
    end: 1132,
    text: "Je vivais seul dans notre maison, alors j'ai commencé à faire cuire du riz et à préparer mes repas moi-même quand j'étais enfant."
  },
  {
    start: 1132,
    end: 1137,
    text: "Oui, parce que j'avais faim. Tout a commencé par la faim. Alors, j'ai appris à cuisiner."
  },
  {
    start: 1137,
    end: 1144,
    text: "Depuis l'enfance, j'avais l'impression de savoir cuisiner et comprendre les saveurs."
  },
  {
    start: 1144,
    end: 1151,
    text: "À l'adolescence, je ne savais pas ce que je voulais devenir."
  },
  {
    start: 1151,
    end: 1158,
    text: "Jusqu'au jour où je me suis demandé : « Est-ce que je vais vraiment vivre sans connaître plus de dix personnes ? »"
  },
  {
    start: 1158,
    end: 1169,
    text: "Je me suis dit : « Qu'est-ce que je peux faire pour changer ça ? » Alors j'ai décidé de devenir barman."
  },
  {
    start: 1169,
    end: 1180,
    text: "Je servais les clients comme d'habitude, vous voyez ? Cela faisait partie de notre prestation, et quelqu'un de Tomorrowland m'a dit..."
  },
  {
    start: 1180,
    end: 1192,
    text: "« Hé, je t'aime beaucoup. Je pense qu'on va t'emmener en Belgique. » J'ai répondu : « En Belgique ? » Il a dit : « Tu vas faire partie de Tomorrowland. »"
  },
  {
    start: 1192,
    end: 1200,
    text: "« Nous allons emmener ton bar là-bas. » Je me suis dit : « Waouh ! » Mais au fond de moi, je pensais..."
  },
  {
    start: 1200,
    end: 1210,
    text: "Je n'étais jamais allé en Europe. Ce serait ma première fois. Ce n'est pas toujours une vie facile, mais elle est passionnante."
  },
  {
    start: 1210,
    end: 1219,
    text: "Et aujourd'hui, je suis ici. Quand nous utilisons des aliments pour préparer des cocktails, les gens sont assez surpris."
  },
  {
    start: 1219,
    end: 1226,
    text: "« Attends, c'est vraiment délicieux ! » Ce n'est pas seulement une question de gagner sa vie ou quoi que ce soit de ce genre."
  },
  {
    start: 1226,
    end: 1234,
    text: "C'est quelque chose que j'aime sincèrement. Ce dont je suis le plus fier, c'est..."
  },
  {
    start: 1234,
    end: 1247,
    text: "De pouvoir être ici aujourd'hui en tant que mixologue, le premier Thaïlandais à y avoir organisé un bar éphémère."
  },
  {
    start: 1247,
    end: 1256,
    text: "Je suis vraiment fier que « Lost in Thaislation » soit présent à Tomorrowland."
  },
  {
    start: 1256,
    end: 1265,
    text: "Je n'aurais jamais imaginé être là où j'en suis aujourd'hui. Nous ne pensions même pas pouvoir voyager un jour."
  },
  {
    start: 1265,
    end: 1269,
    text: "En réalité, nous n'avions pratiquement jamais pris l'avion."
  },
  {
    start: 1269,
    end: 1279,
    text: "À cette époque, mon objectif était au moins de visiter Tomorrowland, simplement comme spectateur, pour ressentir cette ambiance."
  },
  {
    start: 1279,
    end: 1291,
    text: "Si quelqu'un m'avait dit cette année-là que je jouerais sur la MainStage de Tomorrowland, j'aurais pensé que cette personne était folle."
  },
  {
    start: 1291,
    end: 1303,
    text: "Je savais que je voulais venir, bien sûr, mais faire partie de cette histoire, c'était irréel pour moi."
  },
  {
    start: 1303,
    end: 1317,
    text: "À chaque fois, je ne vais pas le cacher, je suis nerveux. Je me souviens que tout mon corps tremblait."
  },
  {
    start: 1317,
    end: 1360,
    text: "Mais une fois sur scène, quand on franchit cette limite et qu'on appuie sur lecture, une sorte de magie se produit."
  },
  {
    start: 1360,
    end: 1367,
    text: "Je trouve cela magnifique de pouvoir créer et immortaliser un instant."
  },
  {
    start: 1367,
    end: 1376,
    text: "Et de pouvoir en garder un souvenir personnel. J'espère m'en souvenir toute ma vie."
  },
  {
    start: 1376,
    end: 1387,
    text: "Plus on tombe bas, plus il est difficile de remonter. Mais on finira par remonter encore plus haut qu'avant."
  },
  {
    start: 1387,
    end: 1392,
    text: "Je suis bien dans ma vie actuelle. Je n'ai besoin de rien de plus."
  },
  {
    start: 1392,
    end: 1398,
    text: "Je suis fier, car j'ai le sentiment d'avoir changé quelque chose dans ma vie."
  },
  {
    start: 1398,
    end: 1406,
    text: "Je suis très fier de la communauté que nous avons créée. Je ne voudrais rien d'autre."
  },
  {
    start: 1406,
    end: 1409,
    text: "Mais cette marque reste gravée dans nos cœurs."
  },
  {
    start: 1409,
    end: 1417,
    text: "Tant que nous n'aurons pas trouvé cette paix, je ne pense pas pouvoir profiter pleinement de cette vie."
  },
  {
    start: 1417,
    end: 1425,
    text: "Je suis quelqu'un d'heureux, quoi qu'il arrive."
  },



];

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: VIDEO_ID,
    playerVars: {
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onError: onPlayerError
    }
  });
}

function onPlayerReady() {
  subtitleElement.textContent =
    "Lance la vidéo pour découvrir le lecteur.";
  subtitleTimer = window.setInterval(updateSubtitle, 250);
}

function updateSubtitle() {
  if (!player || typeof player.getCurrentTime !== "function") {
    return;
  }

  const currentTime = player.getCurrentTime();

  const currentSubtitle = subtitles.find((subtitle) =>
    currentTime >= subtitle.start && currentTime < subtitle.end
  );

  subtitleElement.textContent = currentSubtitle
    ? currentSubtitle.text
    : "Les sous-titres français apparaîtront ici.";
}

function onPlayerError(event) {
  subtitleElement.textContent =
    "La vidéo ne peut pas être chargée. Vérifie sa disponibilité sur YouTube.";
  console.error("Erreur du lecteur YouTube :", event.data);
}

window.addEventListener("beforeunload", () => {
  if (subtitleTimer) {
    window.clearInterval(subtitleTimer);
  }
});
