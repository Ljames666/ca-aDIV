"use strict";
let div = document.getElementById('isDiv');
let btn = document.getElementById('btn-start');
btn.addEventListener('click', start);
function start() {
    div.style.display = 'flex';
    btn.innerText = 'Stop';
    btn.style.top = '105%';
    btn.onclick = () => stop();
}
function stop() {
    window.location.reload();
}
div.addEventListener('mouseover', game);
function game() {
    let top = Math.floor(Math.random() * (95 - 5) + 5);
    let left = Math.floor(Math.random() * (97 - 3) + 3);
    div.style.left = `${left}%`;
    div.style.top = `${top}%`;
}
