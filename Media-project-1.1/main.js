const playMove = document.querySelector('.button')
const audio = new Audio();
let res = `./assets/audio/forest.mp3`

playMove.addEventListener('click', playAudio)
let isPLay = false;

function playAudio() {
    if (!isPLay) {
        audio.src = res;
        audio.currentTime = 0;
        audio.play();
        isPLay = true;
        playMove.classList.add('pause')
    }
    else {
        audio.pause();
        isPLay = false;
        playMove.classList.remove('pause')
    }
}
// Change img 
const allBird = document.querySelector('.items')
const imageM = document.querySelector('.player-img')

allBird.addEventListener('click', changeImage)
const colorB = document.querySelectorAll('.nav-item')

function changeImage(event) {

    if (event.target.classList.contains('nav-item')) {
        imageM.src = `./assets/img/${event.target.dataset.item}.jpg`
        audio.src = `./assets/audio/${event.target.dataset.item}.mp3`
        res = audio.src
        isPLay = false;
        playAudio(res)
        colorB.forEach((elem) => elem.classList.remove('active'))
        event.target.classList.toggle('active')
    }

    playMove.classList.toggle('pause')
    isPLay = false
    playAudio(res)
}
