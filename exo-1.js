/***********
 * exo-1
 */
let page1 = document.getElementById('exo-1')


const changeColor = document.getElementById("changeColor");
let trois =()=>{
const text = document.querySelector("h1");

//text.style.backgroundColor = "red";
text.classList.remove("bg-danger");
text.classList.add("bg-warning", "text-white");
}

changeColor.addEventListener('click', trois)





let exo=document.getElementById('exo-1')
let okay=document.getElementById('exo1')

let exo1=()=>{
    okay.classList.remove('d-none')
}
exo.addEventListener('click',exo1);