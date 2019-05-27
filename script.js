let mijnKnoppen = document.querySelectorAll(".scroldown");
mijnKnoppen[0].addEventListener("click",button1)
function button1() {
  console.log("het werkt");
  window.scroll({
    top: 975,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}
mijnKnoppen[1].addEventListener("click",button2)
function button2() {
  console.log("het werkt");
  window.scroll({
    top: 1775,
    left: 0,
    behavior: 'smooth'
   });
  event.preventDefault();
}
