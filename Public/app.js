const positions = ["Goal Keeper", "Defender", "Midfielder", "Forward"];

const state = {
  clubs: [
    {
      name: "Arsenal",
      established: 1886,
      stadium: {
        name: "Emirates Stadium",
        address: "Hornsey Rd, London N7 7AJ, United Kingdom",
        capacity: 60704,
      },
      players: [
        {
          name: "Bernd Leno",
          position: positions[0],
        },
        {
          name: "Rob Holding",
          position: positions[1],
        },
        { name: "Pablo Mari", position: positions[1] },
        { name: "Shkodran Mustafi", position: positions[1] },
        {
          name: "Sokratis Papastathopoulos",
          position: positions[1],
        },
        {
          name: "Hector Bellerin",
          position: positions[1],
        },
        {
          name: "Kieran Tierney",
          position: positions[1],
        },
        {
          name: "Granit Xhaka",
          position: positions[2],
        },
        { name: "Dani Ceballos", position: positions[2] },
        { name: "Mesut Ozil", position: positions[2] },
        {
          name: "Pierre-Emerick Aubameyang",
          position: positions[3],
        },
      ],
    },
    {
      name: "Aston Villa",
      established: 1887,
      stadium: {
        name: "Villa Park",
        address: "Trinity Rd, Birmingham B6 6HE, United Kingdom",
        capacity: 42640,
      },
      players: [
        {
          name: "Tom Heaton",
          position: positions[0],
        },
        {
          name: "Tyrone Mings",
          position: positions[1],
        },
        { name: "Bjorn Engels", position: positions[1] },
        { name: "Kortney Hause", position: positions[1] },
        {
          name: "Matt Targett",
          position: positions[1],
        },
        {
          name: "John McGinn",
          position: positions[2],
        },
        { name: "Douglas Luiz", position: positions[2] },
        { name: "Ross Barkley", position: positions[2] },
        {
          name: "Jack Grealish",
          position: positions[2],
        },
        {
          name: "Wesley Moraes",
          position: positions[3],
        },
      ],
    },
    {
      name: "Bournemouth",
      established: 1899,
      stadium: {
        name: "Vitality Stadium",
        address: "Kings Park, Bournemouth BH7 7AF, United Kingdom",
        capacity: 11379,
      },
      players: [
        {
          name: "Aaron Ramsdale",
          position: positions[0],
        },
        {
          name: "Steve Cook",
          position: positions[1],
        },
        { name: "Nathan Ake", position: positions[1] },
        { name: "Chris Mepham", position: positions[1] },
        {
          name: "Diego Rico",
          position: positions[1],
        },
        {
          name: "Jefferson Lerma",
          position: positions[2],
        },
        { name: "Lewis Cook", position: positions[2] },
        { name: "Philip Billing", position: positions[2] },
        {
          name: "Ryan Fraser",
          position: positions[2],
        },
        {
          name: "Callum Wilson",
          position: positions[3],
        },
      ],
    },
    {
      name: "Brentford",
      established: 1889,
      stadium: {
        name: "Gtech Community Stadium",
        address: "Lionel Rd S, Brentford TW8 0RU, United Kingdom",
        capacity: 17250,
      },
      players: [
        {
          name: "David Raya",
          position: positions[0],
        },
        {
          name: "Ethan Pinnock",
          position: positions[1],
        },
        { name: "Pontus Jansson", position: positions[1] },
        { name: "Reece James", position: positions[1] },
        {
          name: "Henrik Dalsgaard",
          position: positions[1],
        },
        {
          name: "Christian Norgaard",
          position: positions[2],
        },
        { name: "Mathias Jensen", position: positions[2] },
        { name: "Josh Dasilva", position: positions[2] },
        {
          name: "Bryan Mbeumo",
          position: positions[2],
        },
        {
          name: "Ollie Watkins",
          position: positions[3],
        },
      ],
    },
    {
      name: "Brighton & Hove Albion",
      established: 1901,
      stadium: {
        name: "American Express Stadium",
        address:
          "Village Way, Brighton and Hove, Brighton BN1 9BL, United Kingdom",
        capacity: 31876,
      },
      players: [
        {
          name: "Robert Sanchez",
          position: positions[0],
        },
        {
          name: "Lewis Dunk",
          position: positions[1],
        },
        { name: "Adam Webster", position: positions[1] },
        { name: "Joel Veltman", position: positions[1] },
        {
          name: "Tariq Lamptey",
          position: positions[1],
        },
        {
          name: "Yves Bissouma",
          position: positions[2],
        },
        { name: "Pascal Gross", position: positions[2] },
        { name: "Davy Propper", position: positions[2] },
        {
          name: "Solly March",
          position: positions[2],
        },
        {
          name: "Leandro Trossard",
          position: positions[3],
        },
      ],
    },
    {
      name: "Chelsea",
      established: 1905,
      stadium: {
        name: "Stamford Bridge",
        address: "Fulham Rd., London SW6 1HS, United Kingdom",
        capacity: 40341,
      },
      players: [
        {
          name: "Edouard Mendy",
          position: positions[0],
        },
        {
          name: "Thiago Silva",
          position: positions[1],
        },
        { name: "Antonio Rudiger", position: positions[1] },
        { name: "Reece James", position: positions[1] },
        {
          name: "Cesar Azpilicueta",
          position: positions[1],
        },
        {
          name: "N'Golo Kante",
          position: positions[2],
        },
        { name: "Jorginho", position: positions[2] },
        { name: "Mason Mount", position: positions[2] },
        {
          name: "Christian Pulisic",
          position: positions[2],
        },
        {
          name: "Olivier Giroud",
          position: positions[3],
        },
      ],
    },
    {
      name: "Crystal Palace",
      established: 1905,
      stadium: {
        name: "Selhurst Park Stadium",
        address: "Selhurst, London, SE25 England",
        capacity: 25486,
      },
      players: [
        {
          name: "Vicente Guaita",
          position: positions[0],
        },
        {
          name: "Mamadou Sakho",
          position: positions[1],
        },
        { name: "Gary Cahill", position: positions[1] },
        { name: "Patrick van Aanholt", position: positions[1] },
        {
          name: "Tyrick Mitchell",
          position: positions[1],
        },
        {
          name: "Luka Milivojevic",
          position: positions[2],
        },
        { name: "James McArthur", position: positions[2] },
        { name: "Cheikhou Kouyate", position: positions[2] },
        {
          name: "Eberechi Eze",
          position: positions[2],
        },
        {
          name: "Wilfried Zaha",
          position: positions[3],
        },
      ],
    },
    {
      name: "Everton",
      established: 1878,
      stadium: {
        name: "Goodison Park",
        address: "Goodison Park, London, SE10 England",
        capacity: 39432,
      },
      players: [
        {
          name: "Jordan Pickford",
          position: positions[0],
        },
        {
          name: "Michael Keane",
          position: positions[1],
        },
        { name: "Yerry Mina", position: positions[1] },
        { name: "Lucas Digne", position: positions[1] },
        {
          name: "Seamus Coleman",
          position: positions[1],
        },
        {
          name: "Andre Gomes",
          position: positions[2],
        },
        { name: "Gylfi Sigurdsson", position: positions[2] },
        { name: "James Rodriguez", position: positions[2] },
        {
          name: "Richarlison",
          position: positions[2],
        },
        {
          name: "Dominic Calvert-Lewin",
          position: positions[3],
        },
      ],
    },
    {
      name: "Fulham",
      established: 1879,
      stadium: {
        name: "Craven Cottage",
        address: "Stevenage Rd, London SW6 6HH, United Kingdom",
        capacity: 25100,
      },
      players: [
        {
          name: "Alphonse Areola",
          position: positions[0],
        },
        {
          name: "Joachim Andersen",
          position: positions[1],
        },
        { name: "Tosin Adarabioyo", position: positions[1] },
        { name: "Antonee Robinson", position: positions[1] },
        {
          name: "Kenny Tete",
          position: positions[1],
        },
        {
          name: "Andreas Pereira",
          position: positions[2],
        },
        { name: "Harrison Reed", position: positions[2] },
        { name: "Ademola Lookman", position: positions[2] },
        {
          name: "Ivan Cavaleiro",
          position: positions[2],
        },
        {
          name: "Aleksandar Mitrovic",
          position: positions[3],
        },
      ],
    },
    {
      name: "Ipswich Town",
      established: 1878,
      stadium: {
        name: "Portman Road",
        address: "Portman Rd, Ipswich IP1 2DA, United Kingdom",
        capacity: 30000,
      },
      players: [
        {
          name: "Bartosz Bialkowski",
          position: positions[0],
        },
        {
          name: "Luke Chambers",
          position: positions[1],
        },
        { name: "James Wilson", position: positions[1] },
        { name: "Stephen Ward", position: positions[1] },
        {
          name: "Myles Kenlock",
          position: positions[1],
        },
        {
          name: "Flynn Downes",
          position: positions[2],
        },
        { name: "Andre Dozzell", position: positions[2] },
        { name: "Teddy Bishop", position: positions[2] },
        {
          name: "Alan Judge",
          position: positions[2],
        },
        {
          name: "James Norwood",
          position: positions[3],
        },
      ],
    },
    {
      name: "Leicester City",
      established: 1884,
      stadium: {
        name: "King Power Stadium",
        address: "Filbert Way, Leicester LE2 7FL, United Kingdom",
        capacity: 32327,
      },
      players: [
        {
          name: "Kasper Schmeichel",
          position: positions[0],
        },
        {
          name: "Caglar Soyuncu",
          position: positions[1],
        },
        { name: "Jonny Evans", position: positions[1] },
        { name: "Ben Chilwell", position: positions[1] },
        {
          name: "Ricardo Pereira",
          position: positions[1],
        },
        {
          name: "Wilfred Ndidi",
          position: positions[2],
        },
        { name: "Youri Tielemans", position: positions[2] },
        { name: "Dennis Praet", position: positions[2] },
        {
          name: "James Maddison",
          position: positions[2],
        },
        {
          name: "Jamie Vardy",
          position: positions[3],
        },
      ],
    },
    {
      name: "Liverpool",
      established: 1892,
      stadium: {
        name: "Anfield",
        address: "Anfield Rd, Liverpool L4 0TH, United Kingdom",
        capacity: 54462,
      },
      players: [
        {
          name: "Alisson Becker",
          position: positions[0],
        },
        {
          name: "Virgil van Dijk",
          position: positions[1],
        },
        { name: "Joe Gomez", position: positions[1] },
        { name: "Trent Alexander-Arnold", position: positions[1] },
        {
          name: "Andrew Robertson",
          position: positions[1],
        },
        {
          name: "Fabinho",
          position: positions[2],
        },
        { name: "Jordan Henderson", position: positions[2] },
        { name: "Georginio Wijnaldum", position: positions[2] },
        {
          name: "Sadio Mane",
          position: positions[2],
        },
        {
          name: "Mohamed Salah",
          position: positions[3],
        },
      ],
    },
    {
      name: "Manchester City",
      established: 1880,
      stadium: {
        name: "Etihad Stadium",
        address: "Etihad Campus, Manchester M11 3FF, United Kingdom",
        capacity: 55097,
      },
      players: [
        {
          name: "Ederson",
          position: positions[0],
        },
        {
          name: "Aymeric Laporte",
          position: positions[1],
        },
        { name: "John Stones", position: positions[1] },
        { name: "Kyle Walker", position: positions[1] },
        {
          name: "Oleksandr Zinchenko",
          position: positions[1],
        },
        {
          name: "Rodri",
          position: positions[2],
        },
        { name: "Kevin De Bruyne", position: positions[2] },
        { name: "Ilkay Gundogan", position: positions[2] },
        {
          name: "Bernardo Silva",
          position: positions[2],
        },
        {
          name: "Sergio Aguero",
          position: positions[3],
        },
      ],
    },
    {
      name: "Manchester United",
      established: 1878,
      stadium: {
        name: "Old Trafford",
        address: "Sir Matt Busby Way, Manchester M16 0RA, United Kingdom",
        capacity: 74400,
      },
      players: [
        {
          name: "David de Gea",
          position: positions[0],
        },
        {
          name: "Victor Lindelof",
          position: positions[1],
        },
        { name: "Harry Maguire", position: positions[1] },
        { name: "Luke Shaw", position: positions[1] },
        {
          name: "Aaron Wan-Bissaka",
          position: positions[1],
        },
        {
          name: "Nemanja Matic",
          position: positions[2],
        },
        { name: "Paul Pogba", position: positions[2] },
        { name: "Fred", position: positions[2] },
        {
          name: "Scott McTominay",
          position: positions[2],
        },
        {
          name: "Bruno Fernandes",
          position: positions[2],
        },
        { name: "Jadon Sancho", position: positions[3] },
        {
          name: "Cristiano Ronaldo",
          position: positions[3],
        },
        { name: "Marcus Rashford", position: positions[3] },
        { name: "Anthony Martial", position: positions[3] },
        { name: "Edinson Cavani", position: positions[3] },
      ],
    },
    {
      name: "Newcastle United",
      established: 1892,
      stadium: {
        name: "St. James' Park",
        address: "Barrack Rd, Newcastle upon Tyne NE1 4ST, United Kingdom",
        capacity: 52387,
      },
      players: [
        {
          name: "Martin Dubravka",
          position: positions[0],
        },
        {
          name: "Fabian Schar",
          position: positions[1],
        },
        { name: "Jamaal Lascelles", position: positions[1] },
        { name: "Paul Dummett", position: positions[1] },
        {
          name: "Jetro Willems",
          position: positions[1],
        },
        {
          name: "Isaac Hayden",
          position: positions[2],
        },
        { name: "Sean Longstaff", position: positions[2] },
        { name: "Miguel Almiron", position: positions[2] },
        {
          name: "Jonjo Shelvey",
          position: positions[2],
        },
        {
          name: "Joelinton",
          position: positions[3],
        },
        { name: "Callum Wilson", position: positions[3] },
        { name: "Allan Saint-Maximin", position: positions[3] },
      ],
    },
    {
      name: "Nottingham Forest",
      established: 1865,
      stadium: {
        name: "City Ground",
        address: "West Bridgford, Nottingham NG2 5FJ, United Kingdom",
        capacity: 30488,
      },
      players: [
        {
          name: "Brice Samba",
          position: positions[0],
        },
        {
          name: "Joe Worrall",
          position: positions[1],
        },
        { name: "Tobias Figueiredo", position: positions[1] },
        { name: "Matt Cash", position: positions[1] },
        {
          name: "Jack Robinson",
          position: positions[1],
        },
        {
          name: "Samba Sow",
          position: positions[2],
        },
        { name: "Joao Carvalho", position: positions[2] },
        { name: "Alfa Semedo", position: positions[2] },
        {
          name: "Joe Lolley",
          position: positions[2],
        },
        {
          name: "Lewis Grabban",
          position: positions[3],
        },
        { name: "Nuno Da Costa", position: positions[3] },
      ],
    },
    {
      name: "Southampton",
      established: 1885,
      stadium: {
        name: "St. Mary's Stadium",
        address: "Britannia Rd, Southampton SO14 5FP, United Kingdom",
        capacity: 32505,
      },
      players: [
        {
          name: "Alex McCarthy",
          position: positions[0],
        },
        {
          name: "Jan Bednarek",
          position: positions[1],
        },
        { name: "Jack Stephens", position: positions[1] },
        { name: "Ryan Bertrand", position: positions[1] },
        {
          name: "Kyle Walker-Peters",
          position: positions[1],
        },
        {
          name: "Oriol Romeu",
          position: positions[2],
        },
        { name: "James Ward-Prowse", position: positions[2] },
        { name: "Stuart Armstrong", position: positions[2] },
        {
          name: "Nathan Redmond",
          position: positions[2],
        },
        {
          name: "Che Adams",
          position: positions[3],
        },
        { name: "Danny Ings", position: positions[3] },
      ],
    },
    {
      name: "Tottenham Hotspur",
      established: 1882,
      stadium: {
        name: "Tottenham Hotspur Stadium",
        address: "782 High Rd, London N17 0BX, United Kingdom",
        capacity: 62434,
      },
      players: [
        {
          name: "Hugo Lloris",
          position: positions[0],
        },
        {
          name: "Toby Alderweireld",
          position: positions[1],
        },
        { name: "Davinson Sanchez", position: positions[1] },
        { name: "Serge Aurier", position: positions[1] },
        {
          name: "Ben Davies",
          position: positions[1],
        },
        {
          name: "Moussa Sissoko",
          position: positions[2],
        },
        { name: "Harry Winks", position: positions[2] },
        { name: "Christian Eriksen", position: positions[2] },
        {
          name: "Dele Alli",
          position: positions[2],
        },
        {
          name: "Harry Kane",
          position: positions[3],
        },
        { name: "Son Heung-Min", position: positions[3] },
      ],
    },
    {
      name: "West Ham United",
      established: 1895,
      stadium: {
        name: "London Stadium",
        address: "Marshgate Ln, London E20 2ST, United Kingdom",
        capacity: 60000,
      },
      players: [
        {
          name: "Lukasz Fabianski",
          position: positions[0],
        },
        {
          name: "Angelo Ogbonna",
          position: positions[1],
        },
        { name: "Issa Diop", position: positions[1] },
        { name: "Arthur Masuaku", position: positions[1] },
        {
          name: "Ryan Fredericks",
          position: positions[1],
        },
        {
          name: "Declan Rice",
          position: positions[2],
        },
        { name: "Mark Noble", position: positions[2] },
        { name: "Jack Wilshere", position: positions[2] },
        {
          name: "Felipe Anderson",
          position: positions[2],
        },
        {
          name: "Michail Antonio",
          position: positions[3],
        },
        { name: "Javier Hernandez", position: positions[3] },
      ],
    },
    {
      name: "Wolverhampton Wanderers",
      established: 1877,
      stadium: {
        name: "Molineux Stadium",
        address: "Wolverhampton WV1 4QR, United Kingdom",
        capacity: 32050,
      },
      players: [
        {
          name: "Rui Patricio",
          position: positions[0],
        },
        {
          name: "Conor Coady",
          position: positions[1],
        },
        { name: "Willy Boly", position: positions[1] },
        { name: "Ryan Bennett", position: positions[1] },
        {
          name: "Matt Doherty",
          position: positions[1],
        },
        {
          name: "Ruben Neves",
          position: positions[2],
        },
        { name: "Joao Moutinho", position: positions[2] },
        { name: "Leander Dendoncker", position: positions[2] },
        {
          name: "Adama Traore",
          position: positions[2],
        },
        {
          name: "Raul Jimenez",
          position: positions[3],
        },
        { name: "Diogo Jota", position: positions[3] },
      ],
    },
  ],
};
const clubSelect = document.querySelector("#club-select");

function renderSelect(clubs) {
  clubs.forEach((club) => {
    const option = document.createElement("option");
    option.value = club.name;
    option.textContent = club.name;
    clubSelect.appendChild(option);
  });
}

function renderPlayerCards(clubName) {
  const playerCardsContainer = document.querySelector(".player-cards");
  playerCardsContainer.innerHTML = "";
  const selectedClub = state.clubs.find((club) => club.name === clubName);
  if (selectedClub) {
    selectedClub.players.forEach((player) => {
      const playerCard = document.createElement("div");
      playerCard.classList.add("player-card");

      const playerName = document.createElement("h2");
      const playerClub = document.createElement("p");
      const playerPosition = document.createElement("p");
      playerName.textContent = player.name;
      playerClub.textContent = `Club: ${clubName}`;
      playerPosition.textContent = `Position: ${player.position}`;

      playerCard.appendChild(playerName);
      playerCard.appendChild(playerClub);
      playerCard.appendChild(playerPosition);

      playerCardsContainer.appendChild(playerCard);
    });
  }
}

renderSelect(state.clubs);
renderPlayerCards(clubSelect.value);

document.querySelector("#club-select").addEventListener("change", () => {
  renderPlayerCards(clubSelect.value);
});
