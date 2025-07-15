window.addEventListener('keydown', playSound)


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!audio) return // stops function from running. 
 audio.currentTime= 0
 audio.play();
 key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if it's not a transform. 
    this.classList.remove('playing')
}

 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removeTransition))
