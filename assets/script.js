const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Les variables
const arrowRight = document.querySelector(".arrow_right")
const arrowLeft = document.querySelector(".arrow_left")
const dots = document.querySelector(".dots")
let index = 0
const img = document.querySelector(".banner-img")
const p = document.querySelector("#banner p")

// Afficher les points
function dotDisplay() {
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
		if (i === 0) {
			dot.classList.add("dot_selected")
		}
	}
}
dotDisplay()

// Clic flèche droite
function clickRight() {
	arrowRight.addEventListener("click", () => {
		const dotslist = document.querySelectorAll(".dots .dot")
		dotslist[index].classList.remove("dot_selected")
		index++
		if (index > slides.length -1) {
			index = 0
		}
		img.src = slides[index].image
		p.innerHTML = slides[index].tagLine
		dotslist[index].classList.add("dot_selected")
	})
}
clickRight()

// Clic flèche Gauche
function clickLeft() {
	arrowLeft.addEventListener("click", () => {
		const dotslist = document.querySelectorAll(".dots .dot")
		dotslist[index].classList.remove("dot_selected")
		index--
		if (index < 0 ) {
			index = slides.length -1
		}
		img.src = slides[index].image
		p.innerHTML = slides[index].tagLine
		dotslist[index].classList.add("dot_selected")
	})
}
clickLeft()
