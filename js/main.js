'use strict';

//  Toggle Button Mobile Navigation

const mobileNav = document.querySelector('.navbar__aside');
const toggleBtn = document.querySelector('.nav__toggle');
const deleteBtn = document.querySelector('.nav__times__toggle');

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.add('visible');
});

deleteBtn.addEventListener('click', ()=> {
    mobileNav.classList.remove('visible');
});

// Layer Pop-up

const layerPopUpBox = document.querySelector('.layerPopUp');
const layerPopUpBtn = document.querySelector('.detail');
const layerPopUpCloseBtn = document.querySelector('.layerPopUp__times');

layerPopUpBtn.addEventListener('click',  () => {
    layerPopUpBox.classList.add('layer__event');
});

layerPopUpCloseBtn.addEventListener('click', () => {
    layerPopUpBox.classList.remove('layer__event');
});