const events = [
    { title: "Tech Fest", type: "Event", date: "5 Dec 2026", details: "Coding contests and expo" },
    { title: "Python Workshop", type: "Workshop", date: "10 Dec 2026", details: "Hands-on data science" },
    { title: "AI Seminar", type: "Seminar", date: "15 Dec 2026", details: "Guest lecture on AI" }
];

events.forEach(e => {
    document.getElementById("events").innerHTML +=
        `<div class="card"><h3>${e.title} (${e.type})</h3><p>${e.date}</p><p>${e.details}</p></div>`;
});