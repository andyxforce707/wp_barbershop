const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    hamburger.src = 'icon/icon-back.png';
  } else {
    hamburger.src = 'icon/icon-hamburger.png';
  }
});

const register = document.querySelector('.navbar #register');
const login = document.querySelector('.navbar #register .register');

register.addEventListener('click', () => {
  login.classList.toggle('active');
});

const servicesInside = document.querySelectorAll('.services .services-wrapper .services-inside');
const modal = document.querySelector('.modal');
const modalShave = document.querySelector('.modal-shave');
const modalCreambath = document.querySelector('.modal-creambath');

servicesInside[0].addEventListener('click', () => {
  modal.classList.toggle('active');
});

servicesInside[1].addEventListener('click', () => {
  modalShave.classList.toggle('active');
});

servicesInside[2].addEventListener('click', () => {
  modalCreambath.classList.toggle('active');
});

const close = document.querySelector('.modal .box .close');
const closeShave = document.querySelector('.modal-shave .box .close');
const closeCreambath = document.querySelector('.modal-creambath .box .close');
close.addEventListener('click', () => {
  modal.classList.remove('active');
});
closeShave.addEventListener('click', () => {
  modalShave.classList.remove('active');
});
closeCreambath.addEventListener('click', () => {
  modalCreambath.classList.remove('active');
});
