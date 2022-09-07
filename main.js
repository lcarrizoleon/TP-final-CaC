// MENU ANIMATIONS
const hamburger = document.querySelector(".hamburger");
const navMenu=document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.menu-link').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//SEARCHBAR ANIMATIONS

const searchInput=document.querySelector('.searchbar-input');
const searchButton=document.querySelector('.searchbar-box');
const searchCancel=document.querySelector('.searchbar-cancel-box');

searchButton.addEventListener('click', ()=>{
  searchInput.classList.toggle('active');
  searchButton.classList.toggle('active');
  searchCancel.classList.toggle('active');  
})

searchCancel.addEventListener('click', ()=>{
    searchInput.classList.remove('active');
    searchButton.classList.remove('active');
    searchCancel.classList.remove('active');

    searchInput.querySelector('input').value='';
})