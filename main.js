const audio = document.getElementById('main-audio');
const playButton = document.getElementById('playtwo');

function updateButtonColor() {
    if (audio.paused) {
        playButton.style.borderColor = 'transparent transparent transparent white';
    } else {
        playButton.style.borderColor = 'transparent transparent transparent rgb(255, 72, 0)';
        playButton.style.transition = '0.5s'
    }
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', updateButtonColor);
audio.addEventListener('pause', updateButtonColor);
audio.addEventListener('ended', updateButtonColor);

updateButtonColor();


const audio2 = document.getElementById('eier-audio');
const playButton2 = document.getElementById('playthree');

function updateButtonColor2() {
    if (audio2.paused) {
        playButton2.style.borderColor = 'transparent transparent transparent white';
    } else {
        playButton2.style.borderColor = 'transparent transparent transparent rgb(255, 72, 0)';
        playButton2.style.transition = '0.5s'
    }
}

playButton2.addEventListener('click', () => {
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }
});

audio2.addEventListener('play', updateButtonColor2);
audio2.addEventListener('pause', updateButtonColor2);
audio2.addEventListener('ended', updateButtonColor2);

updateButtonColor2();

const audio3 = document.getElementById('weg-audio');
const playButton3 = document.getElementById('playone');

function updateButtonColor3() {
    if (audio3.paused) {
        playButton3.style.borderColor = 'transparent transparent transparent white';
    } else {
        playButton3.style.borderColor = 'transparent transparent transparent rgb(39, 39, 39)';
        playButton3.style.transition = '0.5s'
    }
}

playButton3.addEventListener('click', () => {
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
    }
});

audio3.addEventListener('play', updateButtonColor3);
audio3.addEventListener('pause', updateButtonColor3);
audio3.addEventListener('ended', updateButtonColor3);

updateButtonColor3();
