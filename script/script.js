
function playLoop(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // choosing audio [element = event] 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
};



function removeTransition(e){
    if(e.propertyName !=='transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playLoop);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('transitionend', playLoop));
