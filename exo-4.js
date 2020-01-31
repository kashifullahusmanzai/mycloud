var div1 = document.getElementById('Div1');
var div2 = document.getElementById('Div2');

let second= document.getElementById('second')

let myButton= document.getElementById('Button1')




 let first= document.getElementById('first')

 function switchVisible() {
//  first.classList.add('d-none');
if (div1.innerHTML != "") {
  div2.innerHTML = div1.innerHTML
  div1.innerHTML = ""
} else  {
  div1.innerHTML = div2.innerHTML
 div2.innerHTML = ""
}

}
    
     myButton.addEventListener('click', switchVisible);

     var count = 0;
     var button = document.getElementById("Button1");
     var display = document.getElementById("displayCount");
     // Line commented out as SO does not allow it
     // window.localStorage.setItem("on_load_counter", count);
     button.onclick = function() {
       count++;
       display.innerHTML = count;
     }


     let page4=document.getElementById('exo-4')
     let exo4=document.getElementById('container')
    let fExo4=()=>{
    exo4.classList.remove('d-none')
    }
    
     page4.addEventListener('click',fExo4)