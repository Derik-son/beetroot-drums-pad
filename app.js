const drums = new Howl({
   "src": [
     "./drums/drums.webm",
     "./drums/drums.mp3"
   ],
   "sprite": {
     "Clap": [
       0,
       1365.578231292517
     ],
     "ClosehiHat": [
       3000,
       817.845804988662
     ],
     "Crash": [
       5000,
       1803.2199546485258
     ],
     "Kick": [
       8000,
       887.777777777778
     ],
     "OpenhiHat": [
       10000,
       1115.0340136054417
     ],
     "Snare": [
       13000,
       1191.519274376418
     ]
   }
 });

 const  drumpad = document.querySelector('.drumpad');

 drumpad.addEventListener('click', () =>{
    if (Event.target.classList.contains('pad')) {
      let soundToPlay = Event.target.dataset.sound;
      drums.play(soundToPlay);
    }
 });
