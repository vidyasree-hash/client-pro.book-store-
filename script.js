// Sample Events Data
const events = [
    {
        title: "Book Reading Session",
        date: "20 Aug 2026",
        location: "Main Hall"
    },
    {
        title: "Author Meet & Greet",
        date: "25 Aug 2026",
        location: "Conference Room"
    },
    {
        title: "Children Story Time",
        date: "30 Aug 2026",
        location: "Kids Corner"
    },
    {
        title: "Poetry Evening",
        date: "05 Sep 2026",
        location: "Open Stage"
    }
];

const container = document.getElementById("eventsContainer");
const loading = document.getElementById("loading");
const noData = document.getElementById("noData");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Prevent XSS
function sanitizeInput(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// Display Events
function displayEvents(list) {
    container.innerHTML = "";

    if (list.length === 0) {
        noData.classList.remove("hidden");
        return;
    }

    noData.classList.add("hidden");

    list.forEach(event => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${sanitizeInput(event.title)}</h3>
            <p><strong>Date:</strong> ${sanitizeInput(event.date)}</p>
            <p><strong>Location:</strong> ${sanitizeInput(event.location)}</p>
        `;

        container.appendChild(card);
    });
}

// Simulate Loading
setTimeout(() => {
    loading.style.display = "none";
    displayEvents(events);
}, 1500);

// Search
searchBtn.addEventListener("click", () => {

    const keyword = searchInput.value.toLowerCase().trim();

    const filtered = events.filter(event =>
        event.title.toLowerCase().includes(keyword)
    );

    displayEvents(filtered);

    console.log("[Analytics] User interacted with Independent Bookstore Events Page");
});

// Form Validation
const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.prevent