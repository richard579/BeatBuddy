document.addEventListener("DOMContentLoaded", function() {
    // Mock JSON data (replace this with your actual API call or data source)
    const mockData = {
        "recommendations": [
            {
                "playlist": {
                    "id": 1,
                    "title": "Chill Vibes",
                    "description": "Relaxing tunes for a laid-back day.",
                    "cover": "https://example.com/covers/chill_vibes.jpg"
                }
            },
            {
                "album": {
                    "id": 1,
                    "title": "Rhythmic Beats",
                    "artist": "The Melody Makers",
                    "cover": "https://example.com/covers/rhythmic_beats.jpg"
                }
            },
            {
                "track": {
                    "id": 1,
                    "title": "Sunset Serenade",
                    "artist": "Acoustic Ensemble",
                    "album": "Sounds of Nature",
                    "cover": "https://example.com/covers/sunset_serenade.jpg"
                }
            },
            // Include more items as needed...
        ]
    };

    // Access the recommendations container in the HTML
    const recommendationsContainer = document.getElementById("recommendations-container");

    // Function to create HTML elements based on item type
    function createHTML(item) {
        let newElement = document.createElement("div");
        if (item.playlist) {
            newElement.innerHTML = `
                <div class="playlist">
                    <img src="${item.playlist.cover}" alt="${item.playlist.title}">
                    <h3>${item.playlist.title}</h3>
                    <p>${item.playlist.description}</p>
                </div>
            `;
        } else if (item.album) {
            newElement.innerHTML = `
                <div class="album">
                    <img src="${item.album.cover}" alt="${item.album.title}">
                    <h3>${item.album.title} by ${item.album.artist}</h3>
                </div>
            `;
        } else if (item.track) {
            newElement.innerHTML = `
                <div class="track">
                    <img src="${item.track.cover}" alt="${item.track.title}">
                    <h3>${item.track.title} by ${item.track.artist}</h3>
                </div>
            `;
        }
        return newElement;
    }

    // Iterate through the recommendations and append HTML elements to the container
    mockData.recommendations.forEach(item => {
        const newElement = createHTML(item);
        recommendationsContainer.appendChild(newElement);
    });
});
