let noms = document.getElementById('nom');
let inputs = document.getElementById("input");
let gos = document.getElementById("work");


let work = () =>{
noms.innerHTML = inputs.value;
}

gos.addEventListener('click',work)
inputs.addEventListener('keypress',()=>{
    if (event.keyCode === 13) {
        work()
    }
})



let page3=document.getElementById('exo-3')
let exo3=document.getElementById('exo3')

let third=()=>{
exo3.classList.remove('d-none')
}

page3.addEventListener('click',third)