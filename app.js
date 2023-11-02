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
            // ... (other mock data)
        ]
    };

    // Access the recommendations container in the HTML
    const recommendationsContainer = document.getElementById("recommendations-container");

    // Iterate through the recommendations and create HTML elements
    mockData.recommendations.forEach(item => {
        let newElement;
        if (item.playlist) {
            newElement = document.createElement("div");
            newElement.innerHTML = `
                <div class="playlist">
                    <img src="${item.playlist.cover}" alt="${item.playlist.title}">
                    <h3>${item.playlist.title}</h3>
                    <p>${item.playlist.description}</p>
                </div>
            `;
        } else if (item.album) {
            newElement = document.createElement("div");
            newElement.innerHTML = `
                <div class="album">
                    <img src="${item.album.cover}" alt="${item.album.title}">
                    <h3>${item.album.title} by ${item.album.artist}</h3>
                </div>
            `;
        } else if (item.track) {
            newElement = document.createElement("div");
            newElement.innerHTML = `
                <div class="track">
                    <img src="${item.track.cover}" alt="${item.track.title}">
                    <h3>${item.track.title} by ${item.track.artist}</h3>
                </div>
            `;
        }
        recommendationsContainer.appendChild(newElement);
    });
});

