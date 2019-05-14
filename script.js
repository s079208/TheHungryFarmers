let mijnHamburger = document.querySelector('#hamburger')
let mijnNav = document.querySelector('nav')
let mijnClose = document.querySelector("#closeButton")



function clickHamburger() {
  console.log("de knop werkt");
  mijnNav.classList.toggle("verborgen")
}

mijnHamburger.addEventListener("click",clickHamburger)

mijnClose.addEventListener("click",clickHamburger)
