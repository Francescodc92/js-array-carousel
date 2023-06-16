/*
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"

MILESTONE 2
- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
- Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
    Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

RAGIONAMENTO :
1.eliminare le img nell'html
2. creare un array che conterrà gli src delle img 
3. creare un ciclo nel quale aggiungiamo solo le img all'interno dell'contenitore cone la classe che le rende display none
    - creo l'elemento con la template 
    - lo aggiungo all'html dando 

*/

const imgElement = [
  "./img/01.webp",
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp",
]

const carouselContainer = document.querySelector(".carousel-container")

imgElement.forEach((img, i) => {
  let imgElement = `
    <img src="${img}" class="img
  `

  if (i == 0) {
    imgElement += " active"
  }

  imgElement += `" id="img_${i + 1}" alt="img" />`

  console.log(imgElement)
  carouselContainer.innerHTML += imgElement
})

let activeImg = 1
const leftArrow = document.getElementById("left")
const rightArrow = document.getElementById("right")

rightArrow.addEventListener("click", () => {
  const activeImgBox = document.getElementById("img_" + activeImg)
  activeImgBox.classList.remove("active")
  // inpedisce l'errore di superare il numero di img
  if (activeImg == imgElement.length) {
    activeImg = imgElement.length //nel bonus del ciclo infinito verrà cambiato nel activeImg = 1 in maniera da avere il ciclo infinito
  } else {
    activeImg++
  }
  const nextImgBox = document.getElementById("img_" + activeImg)
  nextImgBox.classList.add("active")
})
leftArrow.addEventListener("click", () => {
  const activeImgBox = document.getElementById("img_" + activeImg)
  activeImgBox.classList.remove("active")
  // inpedisce l'errore di superare il numero di img
  if (activeImg == 1) {
    activeImg = 1 //nel bonus del ciclo infinito verrà cambiato nel activeImg = imgElement.length in maniera da avere il ciclo infinito
  } else {
    activeImg--
  }

  const previousImgBox = document.getElementById("img_" + activeImg)
  previousImgBox.classList.add("active")
})
