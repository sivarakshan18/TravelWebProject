const destinationData = {
    "paris": ["./assets/destination1.jpg", "Paris, FRANCE", "The Eiffel Tower, Louvre Museum, and more!", "Europe/Paris", "city"],
    "bali": ["./assets/destination2.jpg", "Bali, Indonesia", "Explore beaches, temples, and vibrant culture.", "Asia/Makassar", "beach"],
    "new york": ["./assets/destination3.jpg", "New York, USA", "Empire State Building, Central Park, and Times Square.", "America/New_York", "city"],
    "dubai": ["./assets/package1.jpg", "Dubai, UAE", "Luxury, desert safaris, and iconic landmarks.", "Asia/Dubai", "city"],
    "maldives": ["./assets/package2.jpg", "Maldives", "Crystal clear waters, overwater bungalows, and paradise beaches.", "Indian/Maldives", "beach"],
    "kyoto": ["./assets/destination4.jpg", "Kyoto, Japan", "Home to Fushimi Inari Shrine and ancient temples.", "Asia/Tokyo", "temple"],
    "rome": ["./assets/destination5.jpg", "Rome, Italy", "Colosseum, Vatican City, and historical landmarks.", "Europe/Rome", "city"],
    "sydney": ["./assets/destination6.jpg", "Sydney, Australia", "Sydney Opera House, Bondi Beach, and Harbour Bridge.", "Australia/Sydney", "beach"],
    "varanasi": ["./assets/destination7.jpg", "Varanasi, India", "Spiritual city on the Ganges, famous for Kashi Vishwanath Temple.", "Asia/Kolkata", "temple"],
    "bora bora": ["./assets/destination8.jpg", "Bora Bora, French Polynesia", "Stunning turquoise lagoons, luxury resorts, and coral reefs.", "Pacific/Tahiti", "beach"],
    "maui": ["./assets/destination9.jpg", "Maui, Hawaii, USA", "Golden beaches, scenic Road to Hana, and Haleakalā National Park.", "Pacific/Honolulu", "beach"]
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
            const category = imageData[4]; // Get category (temple, beach, city)

            // Check if search query matches the key or category
            if (key.includes(query) || (query === "temple" && category === "temple") || (query === "beach" && category === "beach")) {
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
