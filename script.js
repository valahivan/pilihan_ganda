const buttonBars = document.querySelector('.button-bars');
const nav = document.querySelector('.navbar ul');
buttonBars.addEventListener('click', function(){
    nav.classList.toggle('open');
});

const rGaris = document.getElementById('rGaris');
const rMerkurius = document.getElementById('rMerkurius');
const rBintang = document.getElementById('rBintang');
const rMerah = document.getElementById('rMerah');
const rPhobos = document.getElementById('rPhobos');
const rJupiter = document.getElementById('rJupiter');
const btn = document.getElementById('btn');
const nilai = document.getElementById('nilai');
let poin = 0;

btn.addEventListener('click', function(){
    if (rGaris.checked) {
        poin = poin + 20;
    }
    if (rMerkurius.checked) {
        poin = poin + 20;
    }
    if (rBintang.checked) {
        poin = poin + 20;
    }
    if (rMerah.checked) {
        poin = poin + 20;
    }
    if (rPhobos.checked) {
        poin = poin + 16;
    }
    if (rJupiter.checked) {
        poin = poin + 4;
    }
nilai.innerHTML = poin;
});
