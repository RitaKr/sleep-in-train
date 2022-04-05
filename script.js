let SpotifyInput = document.getElementById('SpotifyInput');
let youtubeInput = document.getElementById('youtubeInput');
let playTrainDiv = document.getElementById('play-train');
let playBtn = document.querySelector('#play-train button');
let playTitle = document.querySelector('#play-train h2');
let submitBtn = document.getElementById('submit-url');
let submitBtn1 = document.getElementById('submit-url1');
let spotifyFrame = document.querySelector('#spotify iframe');
let youtubeFrame = document.querySelector('#youtube iframe')
submitBtn.addEventListener('click', embendUserPlaylistSpotify);
submitBtn1.addEventListener('click', embendUserPlaylistYoutube);
SpotifyInput.addEventListener("keyup", (e)=> {
    if (e.keyCode === 13) {
     e.preventDefault();
     embendUserPlaylist()
    }
  });
youtubeInput.addEventListener("keyup", (e)=> {
    if (e.keyCode === 13) {
     e.preventDefault();
     embendUserPlaylist()
    }
  });
//SpotifyInput.addEventListener('change', getUrl, SpotifyInput)
//SpotifyInput.onchange=getUrl(SpotifyInput)
function getUrl(input) {
    console.log(input);
    console.log(input.value)
    return input.value
}
function sortUrlSpotify(val) {
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
function sortUrlYoutube(val) {
    let url = val;
    console.log(url)
    let i = url.indexOf("=");
    console.log(url[i]);
    url = url.slice(i+1);
    console.log(url);
    
    return url
}
function embendUserPlaylistSpotify(){
    let url = sortUrlSpotify(getUrl(SpotifyInput));
    if (url.includes('playlist') || url.includes('album')){
        spotifyFrame.src = `https://open.spotify.com/embed/${url}?utm_source=generator`;
    } else {
        alert('Not a Spotify album/playlist link!')
    }
    SpotifyInput.value=""
}
function embendUserPlaylistYoutube(){
    let url = sortUrlYoutube(getUrl(youtubeInput));
    if (url.length>15){
        youtubeFrame.src = `https://www.youtube.com/embed/videoseries?list=${url}`;
    } else {
        alert('Not a YouTube playlist link!')
    }
    youtubeInput.value=""
}

let audio = new Audio('mp3/train-sound.mp3');
audio.volume = 1;
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
    console.log(audio.volume, e.currentTarget.value);
    audio.volume = e.currentTarget.value / 100;
    })
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
      
    //console.log(audio.paused)
})
