// Get the playlist and audio elements by their IDs
const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');

// Add a click event listener to the playlist
playlist.addEventListener('click', function(e) {
	// Check if the clicked element is an 'LI' (list item)
    if (e.target.tagName === 'LI') {
	    // Get the data-src attribute of the clicked list item
        const song = e.target.getAttribute('data-src');

	    // Check if the song attribute exists
        if (song) {
		// Set the audio source to the selected song and play it
            audio.src = song;
            audio.play();
        }
    }
});

