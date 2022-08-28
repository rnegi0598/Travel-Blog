const containerEl=document.querySelector(".head-container");
const dropdownEl=document.querySelector('.dropdown');
const toggleEl=document.querySelector('.toggle');

function showMenu(){
    containerEl.classList.toggle('head-c-active');
    dropdownEl.classList.toggle('toggle-active');
    
}
 toggleEl.addEventListener('click',showMenu);