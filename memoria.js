const cards = document.querySelectorAll('.Jogo da memoria');

let hasFlippedCard = false;
let lockBoard = false; 
let flipCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

    this.clasList.add('flip');

 iff (!hasFlippedCard) }
    //first click
    hasFlippedCard= true;
    firstCard = this;

   return;
{
// second click
 secondCard = this;

    checkForMartch();
}
{
}
function checkForMartch(){
let isMatch = firstCard.dataset.Framework ===
secondCard.dataset.Framework

isMatch ? disableCards() : unflipCards();

}
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click',flipCard);

     resetBoard();
}

function unflipCards(){ 
lockBoard = true;

    setTimeout(() => {
    firstCard.clasList.remove('flip')
    secondCard.clasList.remove('flip')

resetBoard();
}, 1500);
}

function resetBoard() {
[hasFlippedCard, lockBoard] = [false,false]
[firstCard, secondCard] = [null, null]
}

(function shufleeee  () 
{card.forEach })
 let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;

cards.forEach(card.addEventListener('click',flipCard));
