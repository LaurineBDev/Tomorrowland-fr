
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
