// ========================================
// MAIN APPLICATION LOGIC
// ========================================

// Sort memories by date for timeline (exclude future memories)
const sortedMemories = [...memories].filter(m => m.date !== "The Future");

// Initialize the map
const map = L.map('map').setView([memories[0].lat, memories[0].lng], 12);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let userLocation = null;

// Initial distance calculation for the first memory
const distanceDiv = document.getElementById('memoryDistance');
distanceDiv.textContent = 'Calculating distance...';

if (userLocation) {
    const memLatLng = new L.LatLng(mem.lat, mem.lng);
    const dist = memLatLng.distanceTo(userLocation) / 1000;
    distanceDiv.textContent = `Distance from your approximate location (via IP): ${dist.toFixed(2)} km`;
} else {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data.latitude && data.longitude) {
                userLocation = new L.LatLng(data.latitude, data.longitude);
                const memLatLng = new L.LatLng(mem.lat, mem.lng);
                const dist = memLatLng.distanceTo(userLocation) / 1000;
                distanceDiv.textContent = `Distance from your approximate location (via IP): ${dist.toFixed(2)} km`;
            } else {
                distanceDiv.textContent = 'Unable to get location data.';
            }
        })
        .catch(error => {
            distanceDiv.textContent = 'Error fetching location: ' + error.message;
        });
}

// Create custom heart icons
const heartIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-map-pin fa-3x" style="color: var(--primary-color);"></i>',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
});

const goldenHeartIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-map-pin fa-3x" style="color: var(--golden-color);"></i>',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
});

let markers = [];

// ========================================
// MARKER CREATION
// ========================================

function createMarkers() {
    // Remove existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    // Add markers for each memory
    memories.forEach((mem) => {
        const marker = L.marker([mem.lat, mem.lng], {
            icon: mem.isGolden ? goldenHeartIcon : heartIcon
        }).addTo(map);

        marker.on('click', () => showMemory(mem));
        markers.push(marker);
    });
}

createMarkers();

// ========================================
// MEMORY CARD DISPLAY
// ========================================

function showMemory(mem) {
    document.getElementById('memoryImg').src = mem.photo;
    document.getElementById('memoryTitle').textContent = mem.name;
    document.getElementById('memoryDate').textContent = mem.date;
    document.getElementById('memoryText').textContent = mem.memory;

    // Zoom button functionality
    const zoomBtn = document.getElementById('zoomBtn');
    const img = document.getElementById('memoryImg');
    zoomBtn.onclick = () => openFullImage(mem.photo);
    img.onclick = () => openFullImage(mem.photo);
    // Handle distance
    const distanceDiv = document.getElementById('memoryDistance');
    distanceDiv.textContent = 'Calculating distance...';
    if (navigator.geolocation) {
        if (userLocation) {
            const memLatLng = new L.LatLng(mem.lat, mem.lng);
            const dist = memLatLng.distanceTo(userLocation) / 1000;
            distanceDiv.textContent = `Distance from your current location: ${dist.toFixed(2)} km`;
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                userLocation = new L.LatLng(position.coords.latitude, position.coords.longitude);
                const memLatLng = new L.LatLng(mem.lat, mem.lng);
                const dist = memLatLng.distanceTo(userLocation) / 1000;
                distanceDiv.textContent = `Distance from your current location: ${dist.toFixed(2)} km`;
            }, (error) => {
                distanceDiv.textContent = 'Unable to get current location.';
            });
        }
    } else {
        distanceDiv.textContent = 'Geolocation not supported.';
    }

    const card = document.getElementById('memoryCard');
    card.style.display = 'block';
    card.classList.remove('hide');
    card.classList.add('show');
    // pointer-events auto is handled via CSS    

    document.getElementById('memoryCard').classList.add('show');
    // Center map on the memory
    map.setView([mem.lat, mem.lng], 15, {
        animate: true
    });

// Shift map so the marker does NOT sit under the memory card
    setTimeout(() => {
        const isMobile = window.innerWidth <= 768;

        map.panBy(
            isMobile
                ? [0, -200]   // Mobile: push marker upward
                : [-280, 0],  // Desktop: push marker right
            { animate: true }
        );
    }, 300);
}

function closeCard() {
    const card = document.getElementById('memoryCard');
    card.classList.add('hide');
    card.classList.remove('show');

    card.addEventListener('transitionend', function handler() {
        card.style.display = 'none'; // hide completely
        card.removeEventListener('transitionend', handler);
    });
}
function openFullImage(src) {
    document.getElementById('fullMemoryImg').src = src;
    document.getElementById('fullImageModal').classList.add('show');
}

function closeFullImage() {
    document.getElementById('fullImageModal').classList.remove('show');
}


// ========================================
// TIMELINE FUNCTIONALITY
// ========================================

function toggleTimeline() {
    const container = document.getElementById('timelineContainer');
    container.classList.toggle('show');
    
    if (container.classList.contains('show')) {
        const slider = document.getElementById('timelineSlider');
        slider.max = sortedMemories.length - 1;
        slider.value = 0;
        updateTimelineDisplay(0);
    }
}

document.getElementById('timelineSlider').addEventListener('input', (e) => {
    updateTimelineDisplay(parseInt(e.target.value));
});

function updateTimelineDisplay(index) {
    const mem = sortedMemories[index];
    document.getElementById('currentMemoryName').textContent = mem.name;
    showMemory(mem);
}

// ========================================
// ADD MEMORY FUNCTIONALITY
// ========================================

function openAddMemory() {
    document.getElementById('addMemoryModal').classList.add('show');
}

function closeAddMemory() {
    document.getElementById('addMemoryModal').classList.remove('show');
    // Clear form
    document.getElementById('newMemoryName').value = '';
    document.getElementById('newMemoryDate').value = '';
    document.getElementById('newMemoryText').value = '';
    document.getElementById('newMemoryPhoto').value = '';
}

function saveNewMemory() {
    const name = document.getElementById('newMemoryName').value;
    const date = document.getElementById('newMemoryDate').value;
    const text = document.getElementById('newMemoryText').value;
    const photo = document.getElementById('newMemoryPhoto').value || 
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800';

    if (!name || !text) {
        alert('Please fill in at least the place name and your memory!');
        return;
    }

    // Get center of current map view as location
    const center = map.getCenter();

    const newMemory = {
        name: name,
        lat: center.lat,
        lng: center.lng,
        date: date || 'Recently',
        memory: text,
        photo: photo,
        audio: '',
        isGolden: false
    };

    memories.push(newMemory);
    createMarkers();
    closeAddMemory();
    showMemory(newMemory);
    
    alert('Memory added! ❤️ You can adjust the location by dragging the map and re-adding if needed.');
}

// ========================================
// MAP CLICK HANDLER
// ========================================

map.on('click', (e) => {
    // Close memory card when clicking on map (not on markers)
    if (!document.getElementById('memoryCard').classList.contains('show')) {
        closeCard();
    }
});

// Toggle Map Day/Night Mode
const dayLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?api_key=27dc7981-4074-4b7c-9b0b-0a957ea9cec5', { maxZoom: 19 });
const nightLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=27dc7981-4074-4b7c-9b0b-0a957ea9cec5', { maxZoom: 20 });

let currentLayer = dayLayer;
map.addLayer(currentLayer);

function toggleMapTheme() {
    map.removeLayer(currentLayer);
    currentLayer = currentLayer === dayLayer ? nightLayer : dayLayer;
    map.addLayer(currentLayer);
}

//Surprise Button Functionality
function showRandomMemory() {
    const randomMem = memories[Math.floor(Math.random() * memories.length)];
    showMemory(randomMem);
}

