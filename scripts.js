const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');

playlist.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const song = e.target.getAttribute('data-src');
        if (song) {
            audio.src = song;
            audio.play();
        }
    }
});

