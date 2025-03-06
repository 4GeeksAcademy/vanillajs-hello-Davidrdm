
window.onload = function () {
  const topSuit = document.querySelector(".top-suit");
  const number = document.querySelector(".number");
  const bottomSuit = document.querySelector(".bottom-suit");
  console.log(topSuit)
  console.log(number)
  console.log(bottomSuit)
  let palosPoquer = ['♦', '♥', '♠', '♣'];
  let numerosCarta = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];


  let randomPalos = Math.floor(Math.random() * palosPoquer.length);
  let randomCarta = Math.floor(Math.random() * numerosCarta.length);

  topSuit.innerHTML = palosPoquer[randomPalos];
  bottomSuit.innerHTML = palosPoquer[randomPalos];
  number.innerHTML = numerosCarta[randomCarta];

  if (palosPoquer[randomPalos] === '♦' || palosPoquer[randomPalos] === '♥') {
    topSuit.classList.add('red')
    bottomSuit.classList.add('red')
  }


}