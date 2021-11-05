'use strict';

//  Toggle Button Mobile Navigation

const mobileNav = document.querySelector('.navbar__aside');
const toggleBtn = document.querySelector('.nav__toggle');
const deleteBtn = document.querySelector('.nav__times__toggle');

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.add('visible');
    deleteBtn.classList.add('times__visible');
});

deleteBtn.addEventListener('click', ()=> {
    mobileNav.classList.remove('visible');
});