const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');
const menuOverlay = document.querySelector('.toggled-menu');

openBtn.addEventListener('click', ()=>{
    menuOverlay.classList.toggle('active');
    openBtn.classList.toggle('disappear');
})

closeBtn.addEventListener('click', ()=>{
    menuOverlay.classList.toggle('active');
    openBtn.classList.toggle('disappear');
})