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

renderMatches();
