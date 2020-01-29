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
