const drums = new Howl({
   "src": [
     "./drums/drums.webm",
     "./drums/drums.mp3"
   ],
   "sprite": {
     "clap": [
       0,
       1365.578231292517
     ],
     "closehihat": [
       3000,
       817.845804988662
     ],
     "crash": [
       5000,
       1803.2199546485258
     ],
     "kick": [
       8000,
       887.777777777778
     ],
     "openhihat": [
       10000,
       1115.0340136054417
     ],
     "snare": [
       13000,
       1191.519274376418
     ]
   }
 });

 const drumpad = document.querySelector('.drumpad');
  function playDrum(event) {
    if (event.target.classList.contains('pad')) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      drums.play(soundToPlay);
    }
    function setViewportHeight() {
      let vh = window.innerHeight * 0.01;
      console.log(vh);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  
    
    setViewportHeight();
    window.addEventListener('resize', () => {
      setTimeout(setViewportHeight, 100);
    }); 
  }

  drumpad.addEventListener('click', playDrum);
  drumpad.addEventListener('touchstart', playDrum);