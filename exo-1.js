/***********
 * exo-1
 */
let trois =()=>{
const text = document.querySelector("h1");
const changeColor = document.getElementById("changeColor");

//text.style.backgroundColor = "red";
text.classList.remove("bg-danger");
text.classList.add("bg-warning", "text-white");
}

changeColor.addEventListener('click', trois)