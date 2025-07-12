const events = [
    {
        id: 1,
        name: "Kigali Music Festival",
        date: "2025-08-10",
        location: "BK Arena, Kigali",
        category: "music",
        description: "An amazing music festival featuring top Rwandan artists"
    },

    {
        id: 2,
        name: "Tech Expo Rwanda",
        date: "2025-08-15",
        location: "Kigali Mariott Hotel",
        category: "tech",
        description: "Showcasing the latest innovations in tech and AI"
    },

    {
        id: 3,
        name: "Inema Art Exhibition",
        date: "2025-08-12",
        location: "Inema Arts Center, Kigali",
        category: "art",
        description: "Discover beautiful works by talented Rwandan artists"
    },

    {
        id: 4,
        name: "Kigali Startup Pitch Night",
        date: "2025-08-18",
        location: "Norrsken House Kigali",
        category: "tech",
        description: "Startups pitch their ideas to investors and the tech community"
    },

    {
        id: 5,
        name: "Umuganda Community Day",
        date: "2025-08-31",
        location: "Various Locations, Rwanda",
        category: "community",
        description: "Nationwide monthly community work event promoting unity and cleanliness"
    },

    {
        id: 6,
        name: "Rwanda Fashion Show",
        date: "2025-08-20",
        location: "Kigali Conference and Exhibition Village",
        category: "art",
        description: "A showcase of the latest in Rwandan fashion and design"
    },

    {
        id: 7,
        name: "Gorilla Marathon",
        date: "2025-08-25",
        location: "Musanze",
        category: "sports",
        description: "Annual marathon to promote gorilla conservation and tourism"
    },

    {
        id: 8,
        name: "Rwanda Gospel Night Live",
        date: "2025-08-14",
        location: "Camp Kigali",
        category: "music",
        description: "An evening of praise and worship with popular Rwandan gospel artists"
    },

    {
        id: 9,
        name: "Kigali International Book Fair",
        date: "2025-08-22",
        location: "Kigali Public Library",
        category: "art",
        description: "Celebrating Rwandan and African literature with local authors, publishers, and readers"
    },

    {
        id: 10,
        name: "Basketball Friendship Tournament",
        date: "2025-08-27",
        location: "BK Arena, Kigali",
        category: "sports",
        description: "A friendly regional basketball tournament promoting youth development through sports"
    },

    {
        id: 11,
        name: "Green Future Summit",
        date: "2025-08-21",
        location: "Kigali Serena Hotel",
        category: "tech",
        description: "A sustainability and innovation summit focused on green technology in Africa"
    },

    {
    id: 12,
    name: "Traditional Dance Festival",
    date: "2025-08-29",
    location: "Rwanda Cultural Village, Nyanza",
    category: "music",
    description: "A colorful celebration of Rwandan traditional dances and music performances from across the country"
    }

];


function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    search: params.get('search')?.toLowerCase() || '',
    date: params.get('date') || '',
    category: params.get('category') || ''
  };
}


function filterEvents({ search, date, category }) {
  return events.filter(event => {
    const matchSearch = event.name.toLowerCase().includes(search) || event.description.toLowerCase().includes(search);
    const matchDate = !date || event.date === date;
    const matchCategory = !category || event.category === category;
    return matchSearch && matchDate && matchCategory;
  });
}


function displayEvents(filtered) {
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';

  if (filtered.length === 0) {
    eventList.innerHTML = '<p class="text-muted">No events found for your criteria.</p>';
    return;
  }

  filtered.forEach(event => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text"><strong>Date:</strong> ${event.date}</p>
          <p class="card-text"><strong>Location:</strong> ${event.location}</p>
          <p class="card-text">${event.description}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-outline-primary">View Details</a>
        </div>
      </div>
    `;
    eventList.appendChild(col);
  });
}


const filters = getQueryParams();
const filteredEvents = filterEvents(filters);
displayEvents(filteredEvents);