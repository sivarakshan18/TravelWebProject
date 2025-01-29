const destinationData = {
    "paris": ["./assets/destination1.jpg", "Paris, France", "The Eiffel Tower, Louvre Museum, and more!", "Europe/Paris", "city"],
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
const resultContainer = document.getElementById('destinationImages');

const getCurrentTime = (timezone) => {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        timeStyle: "short",
        hourCycle: "h23"
    }).format(new Date());
};

const showResult = (name, img, info, timezone) => {
    resultContainer.innerHTML = `
        <div class="result">
            <h2 class="title">${name}</h2>
            <img class="search-img" src="${img}" alt="${name}" onerror="this.src='/assets/placeholder.jpg'">
            <p class="description">${info}</p>
            <p class="time">Current Time: ${getCurrentTime(timezone)}</p>
        </div>
    `;
};

const search = () => {
    let query = searchInput.value.trim().toLowerCase();
    let notFound = true;

    if (query) {
        for (const [key, data] of Object.entries(destinationData)) {
            if (key.includes(query) || data[4] === query) {
                showResult(data[1], data[0], data[2], data[3]);
                notFound = false;
                break;
            }
        }
    }
    
    if (notFound) {
        resultContainer.innerHTML = `<p class="notfound">Sorry, we can't find your search.</p>`;
    }
};

// Search as the user types
searchInput.addEventListener("input", search);

// Clear search results
const clearSearch = () => {
    searchInput.value = "";
    resultContainer.innerHTML = "";
};
