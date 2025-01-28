const destinationData = {
    "paris": ["./assets/destination1.jpg", "Paris, FRANCE", "The Eiffel Tower, Louvre Museum, and more!", "Europe/Paris"],
    "bali": ["./assets/destination2.jpg", "Bali, Indonesia", "Explore beaches, temples, and vibrant culture.", "Asia/Makassar"],
    "new york": ["./assets/destination3.jpg", "New York, USA", "Empire State Building, Central Park, and Times Square.", "America/New_York"],
    "dubai": ["./assets/package1.jpg", "Dubai, UAE", "Luxury, desert safaris, and iconic landmarks.", "Asia/Dubai"],
    "maldives": ["./assets/package2.jpg", "Maldives", "Crystal clear waters, overwater bungalows, and paradise beaches.", "Indian/Maldives"]
};
const searchInput = document.getElementById('searchInput');
const destinationImages = document.getElementById('destinationImages');

// Get Time
function getCurrentTime(timezone) {
    const now = new Date();
    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        timeStyle: "short",
        hourCycle: "h23"
    }).format(now);
}
function search() {
    const query = searchInput.value.trim().toLowerCase();
    destinationImages.innerHTML = '';
    if (query) {
        let found = false;
        for (const [key, imageData] of Object.entries(destinationData)) {
            if (key.includes(query)) {
                found = true;
                const imageContainer = document.createElement('div');
                imageContainer.style.position = 'relative';
                imageContainer.style.marginBottom = '20px'; 

                const imageElement = document.createElement('img');
                imageElement.src = imageData[0]; 
                imageElement.alt = key;
                imageElement.classList.add('destination-image');
                imageElement.style.width = '100%'; 
                imageElement.style.height = 'auto'; 
                imageContainer.appendChild(imageElement);

                const timeElement = document.createElement('div');
                timeElement.textContent = `${imageData[1]} | Current Time: ${getCurrentTime(imageData[3])}`;
                timeElement.style.position = 'absolute';
                timeElement.style.top = '10px';
                timeElement.style.left = '10px';
                timeElement.style.color = 'white';
                timeElement.style.background = 'rgba(0, 0, 0, 0.7)';
                timeElement.style.padding = '5px';
                timeElement.style.borderRadius = '5px';
                timeElement.style.fontSize = '12px';
                imageContainer.appendChild(timeElement);

                const textContainer = document.createElement('div');
                textContainer.style.position = 'absolute';
                textContainer.style.bottom = '10px';
                textContainer.style.left = '10px';
                textContainer.style.color = 'white';
                textContainer.style.background = 'rgba(0, 0, 0, 0.6)'; 
                textContainer.style.padding = '10px';
                textContainer.style.borderRadius = '5px';

                const countryElement = document.createElement('h3');
                countryElement.textContent = imageData[1]; 
                countryElement.style.margin = '0';
                countryElement.style.fontSize = '16px';

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = imageData[2]; 
                descriptionElement.style.margin = '5px 0 0';
                descriptionElement.style.fontSize = '14px';

                textContainer.appendChild(countryElement);
                textContainer.appendChild(descriptionElement);
                imageContainer.appendChild(textContainer);

                destinationImages.appendChild(imageContainer);
            }
        }
        if (!found) {
            destinationImages.innerHTML = `<p>No results found for "${searchInput.value}".</p>`;
        }
    } else {
        destinationImages.innerHTML = `<h1>Please enter a destination.</h1>`;
    }
}

function clearSearch() {
    searchInput.value = '';
    destinationImages.innerHTML = '';
}
searchInput.addEventListener('input', search);
