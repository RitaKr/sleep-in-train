let urlInput = document.getElementById('url-input');
let playTrainDiv = document.getElementById('play-train');
let playBtn = document.querySelector('#play-train button');
let playTitle = document.querySelector('#play-train h2');
let submitBtn = document.getElementById('submit-url');
let spotifyFrame = document.querySelector('#spotify-player iframe')
submitBtn.addEventListener('click', embendUserPlaylist);
urlInput.addEventListener("keyup", (e)=> {
    if (e.keyCode === 13) {
     e.preventDefault();
     embendUserPlaylist()
    }
  });
//urlInput.addEventListener('change', getUrl, urlInput)
//urlInput.onchange=getUrl(urlInput)
function getUrl(input) {
    console.log(input);
    console.log(input.value)
    return input.value
}
function sortUrl(val) {
    let url = val;
    console.log(url)
    let endIndex = url.indexOf("?");
    console.log(url[endIndex]);
    url = url.slice(25, endIndex);
    console.log(url);
    if (url.includes('embed')) {
        console.log('true')
        url = url.slice(6)
    }
    console.log(url);
    return url
}
function embendUserPlaylist(){
    let url = sortUrl(getUrl(urlInput));
    if (url.includes('playlist') || url.includes('album')){
        spotifyFrame.src = `https://open.spotify.com/embed/${url}?utm_source=generator`;
    } else {
        alert('Not a Spotify album/playlist link!')
    }
    urlInput.value=""
}

let audio = new Audio('mp3/train-sound.mp3');
audio.volume = 1;
playBtn.addEventListener('click', ()=>{
    /*audio.addEventListener("canplaythrough", event => {
        // the audio is now playable; play it if permissions allow 
        audio.play();
        console.log(audio.paused)
      });*/
      if (audio.paused) {
          audio.play();
          playBtn.classList.remove('play');
          playBtn.classList.add('pause');
          playTitle.innerHTML = 'Pause train sound'
      } else {
        audio.pause();
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
        playTitle.innerHTML = 'Play train sound'
      }
      
    console.log(audio.paused)
})
