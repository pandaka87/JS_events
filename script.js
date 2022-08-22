// Ex 1 - Lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// let footerEl = document.getElementsByTagName("footer")[0];

// footerEl.addEventListener("click", function () {
//   console.log(`clique`)
// });

// Ex 1 bis - Lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
let footerEl = document.getElementsByTagName("footer")[0];
let x = 0;

footerEl.addEventListener("click", function () {
  x += 1;
  console.log(`clic numéro ${x}`)
});

// Ex 2 - Tu vas faire que si quelqu'un clique sur ce bouton (hamburger), l'élément HTML portant l'Id "navbarHeader" perde sa classe collapse. 
// Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader.
let navbarEl = document.getElementById('navbarHeader');
let hamburger = document.getElementsByClassName('navbar-toggler')[0];

function collapse_apparition() {
  navbarEl.classList.toggle("collapse");
};

hamburger.addEventListener("click", collapse_apparition);

// Ex 3 - Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).
let firstCard = document.getElementsByClassName("col-md-4")[0];
let firstEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

function change_color1() {
  firstCard.style.color = 'red'
};
firstEdit.addEventListener("click", change_color1);

// Ex 4 - Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !
let secondCard = document.getElementsByClassName("col-md-4")[1];
let secondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

function change_color2() {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;}
    else {
      secondCard.style.color = 'green' ;}
};
secondEdit.addEventListener("click", change_color2);

// Ex 5 - Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let bootstrap = document.querySelectorAll("head > link")[0].href;
console.log(bootstrap)
