let div = document.getElementById('isDiv') as HTMLDivElement;
let btn = document.getElementById('btn-start') as HTMLButtonElement;
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
