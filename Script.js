console.log("welcome to spotify");


// initialize the variables
let songIndex = o;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = {

    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
    { "salam-e-ishq", filePath; "songs/1.mp3", coverPath; "covers/1.jpg" };
}
    
// audioElement.play();

// handle play/puase click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {

//   update to seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = 
})
