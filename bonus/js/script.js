/*
Bonus 1
- 1 Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, dovrà comparire l'ultima immagine dell'array e viceversa.

cambiare la variabile activeImg quando arriviamo alla fine e all'inizio della lista con il valore iniziale nel caso del next e il valore finale nel caso del previous

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
    activeImg = 1
    //activeImg = imgElement.length nel bonus del ciclo infinito verrà cambiato nel activeImg = 1 in maniera da avere il ciclo infinito
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
    activeImg = imgElement.length
    // activeImg = 1 nel bonus del ciclo infinito verrà cambiato nel activeImg = imgElement.length in maniera da avere il ciclo infinito
  } else {
    activeImg--
  }

  const previousImgBox = document.getElementById("img_" + activeImg)
  previousImgBox.classList.add("active")
})
