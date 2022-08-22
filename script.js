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
let navbarHeader = document.getElementById('navbarHeader');
let hamburger = document.getElementsByClassName('navbar-toggler')[0];

hamburger.addEventListener("click", function(){
  navbarHeader.classList.toggle("collapse");
});

// Ex 3 - Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).
let firstCard = document.getElementsByClassName("col-md-4")[0];
let firstEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

firstEdit.addEventListener("click", function () {
  firstCard.style.color = 'red'
});

// Ex 4 - Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !
let secondCard = document.getElementsByClassName("col-md-4")[1];
let secondEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

secondEdit.addEventListener("click", function () {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;}
    else {
      secondCard.style.color = 'green' ;}
});

// Ex 5 - Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let bootstrap = document.querySelectorAll("head > link")[0];
let navbar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];

navbar.addEventListener('dblclick', function () {
  if (bootstrap.disabled === false) {
    bootstrap.disabled = true;
  } else {
    bootstrap.disabled = false;
  }
});

// Ex 6 - Si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
// Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
// Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale

let viewBtn = document.getElementsByClassName("btn btn-sm btn-success");
let card = document.querySelectorAll("div.card-body");
let text = document.querySelectorAll("div.card-body > p");
let image = document.getElementsByClassName("card-img-top");

for (let x = 0; x < card.length; x++) {
viewBtn[x].addEventListener('mouseover', function(){
  if (text[x].style.display === "") {
    text[x].style.display = "none";
    image[x].style.width = "20%";
  } else {
    text[x].style.display = "";
    image[x].style.width ="";
  }
})};

// Ex 7 - Si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). 
// On va pouvoir faire tourner les cards !
let nextBtn = document.querySelectorAll(".btn-secondary")[0];

nextBtn.addEventListener("click", function(){
    const cardsNode = document.querySelectorAll('.card');
    const lastCard = cardsNode[cardsNode.length - 1].parentNode;
    lastCard.parentNode.insertBefore(lastCard, lastCard.parentNode.firstChild);
  })

  // Ex 8 - Si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.
let previousBtn = document.querySelectorAll(".btn-primary")[0];

previousBtn.addEventListener("click", function(e){
  e.preventDefault();
  const cardsNode = document.querySelectorAll('.card');
  const firstCard = cardsNode[0].parentNode;
  const lastCard = cardsNode[cardsNode.length - 1].parentNode;
  firstCard.parentNode.insertBefore(firstCard, lastCard.nextSibling);
})