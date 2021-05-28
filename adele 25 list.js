// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
let songListContent = ''
const { tracks } = album  // 解構賦值 亦等於const tracks = album.trackes
tracks.forEach(function (item) {
  songListContent += `<li><a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="v-pills-home" aria-selected="true">${item}</a></li>`
})
songList.innerHTML = songListContent

songList.addEventListener('click', event => {
  if (event.target.matches('.nav-link')) {
    const songName = event.target.innerText
    axios.get(BASE_URL + album.artist + '/' + songName)
      .then(function (response) {
        // handle success
        const lyrics = response.data.lyrics
        showLyrics(songName, lyrics)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
})

function showLyrics(songName, lyrics) {
  lyricsPanel.innerHTML = `<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><h3>${songName}</h3><pre>${lyrics}</pre></div>`
}