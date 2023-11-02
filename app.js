document.addEventListener("DOMContentLoaded", function() {
    const recommendationsContainer = document.getElementById("recommendations-container");

    // Fetch the JSON data
    fetch('discover_data.json')
        .then(response => response.json())
        .then(data => {
            data.recommendations.forEach(item => {
                let newElement;
                if (item.playlist) {
                    newElement = createPlaylistElement(item.playlist);
                } else if (item.album) {
                    newElement = createAlbumElement(item.album);
                } else if (item.track) {
                    newElement = createTrackElement(item.track);
                }

                recommendationsContainer.appendChild(newElement);
            });
        })

    // Function to create HTML elements for playlist
    function createPlaylistElement(playlist) {
        const playlistElement = document.createElement("div");
        playlistElement.classList.add("playlist");
        playlistElement.innerHTML = `
            <img src="${playlist.cover}" alt="${playlist.title}">
            <h3>${playlist.title}</h3>
            <p>${playlist.description}</p>
        `;
        return playlistElement;
    }

    // Function to create HTML elements for album
    function createAlbumElement(album) {
        const albumElement = document.createElement("div");
        albumElement.classList.add("album");
        albumElement.innerHTML = `
            <img src="${album.cover}" alt="${album.title}">
            <h3>${album.title} by ${album.artist}</h3>
        `;
        return albumElement;
    }

    // Function to create HTML elements for track
    function createTrackElement(track) {
        const trackElement = document.createElement("div");
        trackElement.classList.add("track");
        trackElement.innerHTML = `
            <img src="${track.cover}" alt="${track.title}">
            <h3>${track.title} by ${track.artist}</h3>
        `;
        return trackElement;
    }
});

