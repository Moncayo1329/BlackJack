let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard 
let hasBlackJack = false 
let isAlive = true 
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {

cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

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




    
}



