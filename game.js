const container = document.getElementById("container")

// array
let array = [
    "Q",
    "Q",
    "W",
    "W",
    "E",
    "E",
    "R",
    "R",
    "T",
    "T",
    "Y",
    "Y",
    "U",
    "U",
    "I",
    "I"
]


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
shuffle(array);
console.log(array)

function div() {
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `<span class="hidden" >` + array[i] + `</span>`
        card.addEventListener('click', clicked);
        document.getElementById("container").appendChild(card)
    }
}
div();


// const cards = document.querySelectorAll()
let firstCard = null;
let secondCard = null;
let lock = false;

function clicked(event) {
    if(lock) return
    
    // console.log(event.target)
    const clickedCard = event.target;
    if(clickedCard == firstCard) return
    
    // clickedCard.querySelector("span").classList.add('flipped')
    clickedCard.classList.add("flipped")
    clickedCard.querySelector("span").classList.remove('hidden')
    if (!firstCard) {
        firstCard = clickedCard
    } else if (!secondCard) {
        secondCard = clickedCard
        isMatch();
    }
}

function isMatch() {
    if (firstCard.innerHTML === secondCard.innerHTML) {
        // console.log("matched");
        
        disableCard();
    } else {
        // console.log("not matched");
        unflip();
    }
}
function disableCard() {
    firstCard.removeEventListener('click', clicked)
    secondCard.removeEventListener('click', clicked)
    reset();
}

function unflip() {
    lock = true;
    setTimeout(() => {
        // console.log("settimeout inside");
        
      firstCard.classList.remove("flipped");
      firstCard.querySelector("span").classList.add("hidden");
      secondCard.classList.remove("flipped");
      secondCard.querySelector("span").classList.add("hidden");
      reset();
    }, 1000);
  }

function reset() {
    firstCard = null;
    secondCard = null;
    lock = false;
}

// document.querySelectorAll(".card").forEach((card) => {
//     card.addEventListener("click", clicked);
//   });