let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false 
let isAlive = true 
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function  getRandomCard() {

      let randomNumer = Math.floor(  Math.random()*13 ) + 1// 0 - 12
      if (randomNumer > 10 )  {
          return 10 
      } else if (randomNumer === 1) {
        return 11 
      } else {

         return randomNumer
      }
}



function startGame(){
      
    renderGame()

}

function renderGame() {

cardsEl.textContent = "Cards: " 


for(let i = 0; i < cards.length; i++ ) {
   
    cardsEl.textContent += cards[i] + " "

}


sumEl.textContent = "Sum: " + sum


    if(sum <= 20 ) {
 
        message = "Do you want to draw a new card ?"
      } 
       else if ( sum === 21 ){  
          message = "wow! bitch Blackjack!"
       hasBlackJack = true 
      
      } else {  
          message = "Fuck off you are out!"
          
          isAlive = false
      } 


messageEl.textContent = message

}

function newCard() {

let card = getRandomCard()

sum += card 

cards.push(card)
console.log(cards)
renderGame()


}



