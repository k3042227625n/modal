'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
//モダールを開く
    btnOpenModal[i].addEventListener('click', openModal);
//モダールを×で閉じる
btnCloseModal.addEventListener('click', closeModal);
//モダールをウィンドウの外で閉じる
overlay.addEventListener('click', closeModal);
