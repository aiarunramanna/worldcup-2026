function renderNewsFlash() {
  const dateEl = document.getElementById("today-date");
  const today = new Date();
  dateEl.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const list = document.getElementById("recap-list");
  matches.forEach((match) => {
    const item = document.createElement("li");
    item.textContent = `${match.round}: ${match.recap}`;
    list.appendChild(item);
  });
}

function renderMatches() {
  const container = document.getElementById("matches");

  matches.forEach((match) => {
    const card = document.createElement("article");
    card.className = "match-card";

    card.innerHTML = `
      <h2 class="match-round">${match.round}</h2>
      <div class="match-teams">
        <span class="team">${match.teamA}</span>
        <span class="vs">vs</span>
        <span class="team">${match.teamB}</span>
      </div>
      <p class="match-detail">${match.day} &middot; ${match.time}</p>
      <p class="match-detail">${match.venue}</p>
    `;

    container.appendChild(card);
  });
}

renderNewsFlash();
renderMatches();
