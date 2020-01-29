var wrapper = document.getElementById('wrapper');
function switchVisible() {
  wrapper.classList.toggle('switched');
}
document.getElementById('Button1').addEventListener('click', switchVisible);