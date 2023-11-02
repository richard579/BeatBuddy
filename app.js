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

document.addEventListener("DOMContentLoaded", function() {
    const playlistSection = document.getElementById("playlist");

    // Fetch the JSON data
    fetch('myplaylist_data.json')
        .then(response => response.json())
        .then(data => {
            data.myPlaylists.forEach(playlist => {
                const playlistElement = createPlaylistElement(playlist);
                playlistSection.appendChild(playlistElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
        });

    // Function to create HTML elements for playlist
    function createPlaylistElement(playlist) {
        const playlistContainer = document.createElement("div");
        playlistContainer.classList.add("playlist");

        const playlistTitle = document.createElement("h3");
        playlistTitle.textContent = playlist.title;

        const playlistDescription = document.createElement("p");
        playlistDescription.textContent = playlist.description;

        const playlistCover = document.createElement("img");
        playlistCover.src = playlist.cover;
        playlistCover.alt = playlist.title;

        playlistContainer.appendChild(playlistTitle);
        playlistContainer.appendChild(playlistDescription);
        playlistContainer.appendChild(playlistCover);

        // Creating and appending song list
        const songList = document.createElement("ul");
        playlist.songs.forEach(song => {
            const songItem = document.createElement("li");
            songItem.textContent = `${song.title} by ${song.artist} from ${song.album}`;
            songList.appendChild(songItem);
        });
        playlistContainer.appendChild(songList);

        return playlistContainer;
    }
});

