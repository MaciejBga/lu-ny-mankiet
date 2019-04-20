const logoBtn = document.querySelector('.logo');
const infoBtn = document.querySelector('#info');
const membersBtn = document.querySelector('#members');
const galleryBtn = document.querySelector('#gallery');
const faqBtn = document.querySelector('#faq');
const contactBtn = document.querySelector('#contact');

const infoSection = document.querySelector('.info');
const membersSection = document.querySelector('.members');
const gallerySection = document.querySelector('.gallery');
const faqSection = document.querySelector('.faq');
const contactSection = document.querySelector('footer');


function logoClick() {
    window.scrollTo(0, 0);
}

function infoClick() {
    window.scrollTo(0, infoSection.offsetTop);
}

function membersClick() {
    window.scrollTo(0, membersSection.offsetTop);
}

function galleryClick() {
    window.scrollTo(0, gallerySection.offsetTop);
}

function faqClick() {
    window.scrollTo(0, faqSection.offsetTop);
}

function contactClick() {
    window.scrollTo(0, contactSection.offsetTop);
}

logoBtn.addEventListener('click', logoClick);
infoBtn.addEventListener('click', infoClick);
membersBtn.addEventListener('click', membersClick);
galleryBtn.addEventListener('click', galleryClick);
faqBtn.addEventListener('click', faqClick);
contactBtn.addEventListener('click', contactClick);