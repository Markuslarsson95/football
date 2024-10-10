const positions = ["Goal Keeper", "Defender", "Midfielder", "Forward"];
const stadiums = [
  {
    name: "Emirates Stadium",
    address: "Hornsey Rd, London N7 7AJ",
    club: "Arsenal",
  },
  {
    name: "Villa Park",
    address: "Trinity Rd, Birmingham B6 6HE",
    club: "Aston Villa",
  },
  {
    name: "Dean Court",
    address: "Kings Park, Bournemouth BH7 7AF",
    club: "Bournemouth",
  },
  {
    name: "Brentford Community Stadium",
    address: "Lionel Rd N, Brentford TW8 0QE",
    club: "Brentford",
  },
  {
    name: "Falmer Stadium",
    address: "Village Way, Brighton BN1 9BL",
    club: "Brighton & Hove Albion",
  },
  {
    name: "Stamford Bridge",
    address: "Fulham Rd, London SW6 1HS",
    club: "Chelsea",
  },
  {
    name: "Selhurst Park",
    address: "Selhurst Park, London SE25 6PU",
    club: "Crystal Palace",
  },
  {
    name: "Goodison Park",
    address: "Goodison Rd, Liverpool L4 4EL",
    club: "Everton",
  },
  {
    name: "Craven Cottage",
    address: "Stevenage Rd, London SW6 6HH",
    club: "Fulham",
  },
  {
    name: "Portman Road",
    address: "Portman Rd, Ipswich IP1 2DA",
    club: "Ipswich Town",
  },
  {
    name: "King Power Stadium",
    address: "Filbert Way, Leicester LE2 7FL",
    club: "Leicester City",
  },
  {
    name: "Anfield",
    address: "Anfield Rd, Liverpool L4 0TH",
    club: "Liverpool",
  },
  {
    name: "Etihad Stadium",
    address: "Ashton New Rd, Manchester M11 3FF",
    club: "Manchester City",
  },
  {
    name: "Old Trafford",
    address: "Sir Matt Busby Way, Stretford, Manchester M16 0RA",
    club: "Manchester United",
  },
  {
    name: "St James' Park",
    address: "St. James' Pk, Newcastle upon Tyne NE1 4ST",
    club: "Newcastle United",
  },
  {
    name: "City Ground",
    address: "Nottingham NG2 5FJ",
    club: "Nottingham Forest",
  },
  {
    name: "St Mary's Stadium",
    address: "Britannia Rd, Southampton SO14 5FP",
    club: "Southampton",
  },
  {
    name: "Tottenham Hotspur Stadium",
    address: "782 High Rd, London N17 0BX",
    club: "Tottenham Hotspur",
  },
  {
    name: "London Stadium",
    address: "Marshgate Ln, London E20 2ST",
    club: "West Ham United",
  },
  {
    name: "Molineux Stadium",
    address: "Wolverhampton WV1 4QR",
    club: "Wolverhampton Wanderers",
  },
];
const clubs = [
  { name: "Arsenal", established: 1886, stadium: stadiums[0] },
  { name: "Aston Villa", established: 1887, stadium: stadiums[1] },
  { name: "Bournemouth", established: 1899, stadium: stadiums[2] },
  { name: "Brentford", established: 1889, stadium: stadiums[3] },
  { name: "Brighton & Hove Albion", established: 1901, stadium: stadiums[4] },
  { name: "Chelsea", established: 1905, stadium: stadiums[5] },
  { name: "Crystal Palace", established: 1905, stadium: stadiums[6] },
  { name: "Everton", established: 1878, stadium: stadiums[7] },
  { name: "Fulham", established: 1879, stadium: stadiums[8] },
  { name: "Ipswich Town", established: 1878, stadium: stadiums[9] },
  { name: "Leicester City", established: 1884, stadium: stadiums[10] },
  { name: "Liverpool", established: 1892, stadium: stadiums[11] },
  { name: "Manchester City", established: 1880, stadium: stadiums[12] },
  { name: "Manchester United", established: 1878, stadium: stadiums[13] },
  { name: "Newcastle United", established: 1892, stadium: stadiums[14] },
  { name: "Nottingham Forest", established: 1865, stadium: stadiums[15] },
  { name: "Southampton", established: 1885, stadium: stadiums[16] },
  { name: "Tottenham Hotspur", established: 1882, stadium: stadiums[17] },
  { name: "West Ham United", established: 1895, stadium: stadiums[18] },
  {
    name: "Wolverhampton Wanderers",
    established: 1877,
    stadium: stadiums[19],
  },
];
const players = [
  {
    name: "Bernd Leno",
    club: clubs[0],
    position: positions[0],
  },
  {
    name: "Rob Holding",
    club: clubs[0],
    position: positions[1],
  },
  { name: "Pablo Mari", club: clubs[0], position: positions[1] },
  { name: "Shkodran Mustafi", club: clubs[0], position: positions[1] },
  {
    name: "Sokratis Papastathopoulos",
    club: clubs[0],
    position: positions[1],
  },
  {
    name: "Hector Bellerin",
    club: clubs[0],
    position: positions[1],
  },
  {
    name: "Kieran Tierney",
    club: clubs[0],
    position: positions[1],
  },
  {
    name: "Granit Xhaka",
    club: clubs[0],
    position: positions[2],
  },
  { name: "Dani Ceballos", club: clubs[0], position: positions[2] },
  { name: "Mesut Ozil", club: clubs[0], position: positions[2] },
  {
    name: "Pierre-Emerick Aubameyang",
    club: clubs[0],
    position: positions[3],
  },
  {
    name: "David de Gea",
    club: clubs[13],
    position: positions[0],
  },
  {
    name: "Victor Lindelof",
    club: clubs[13],
    position: positions[1],
  },
  { name: "Harry Maguire", club: clubs[13], position: positions[1] },
  { name: "Luke Shaw", club: clubs[13], position: positions[1] },
  {
    name: "Aaron Wan-Bissaka",
    club: clubs[13],
    position: positions[1],
  },
  {
    name: "Nemanja Matic",
    club: clubs[13],
    position: positions[2],
  },
  { name: "Paul Pogba", club: clubs[13], position: positions[2] },
  { name: "Fred", club: clubs[13], position: positions[2] },
  {
    name: "Scott McTominay",
    club: clubs[13],
    position: positions[2],
  },
  {
    name: "Bruno Fernandes",
    club: clubs[13],
    position: positions[2],
  },
  { name: "Jadon Sancho", club: clubs[13], position: positions[3] },
  {
    name: "Cristiano Ronaldo",
    club: clubs[13],
    position: positions[3],
  },
  { name: "Marcus Rashford", club: clubs[13], position: positions[3] },
  { name: "Anthony Martial", club: clubs[13], position: positions[3] },
  { name: "Edinson Cavani", club: clubs[13], position: positions[3] },
];

function renderSelect(clubs) {
  const clubSelect = document.querySelector("#club-select");
  clubs.forEach((club) => {
    const option = document.createElement("option");
    option.value = club.name;
    option.textContent = club.name;
    clubSelect.appendChild(option);
  });
}

function renderPlayerCards(players) {
  const playerCardsContainer = document.querySelector(".player-cards");
  playerCardsContainer.innerHTML = "";
  for (const player of players) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent = player.name;

    const playerClub = document.createElement("p");
    playerClub.textContent = `Club: ${player.club.name}`;

    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;

    playerCard.appendChild(playerName);
    playerCard.appendChild(playerClub);
    playerCard.appendChild(playerPosition);

    playerCardsContainer.appendChild(playerCard);
  }
}
renderSelect(clubs);
renderPlayerCards(players.filter((player) => player.club === clubs[0]));

document.querySelector("#club-select").addEventListener("change", (event) => {
  const clubName = event.target.value;
  const players = players.filter((player) => player.club.name === clubName);
  renderPlayerCards(players);
});
