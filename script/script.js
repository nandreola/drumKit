function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // stops the function from running all together
    if (!audio)
        return;

    // rewinds to the start
    audio.currentTime = 0;

    // plays audio when keydown
    audio.play();

    // Adds playing class
    key.classList.add('playing');
}

function removeTransition(e) {
    // skip it of it's not a transform
    if (e.propertyName !== 'transform')
    return;
    // removes playing class
    this.classList.remove('playing');
} 

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
