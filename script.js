function getMovie(apiUrl) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieRow = document.getElementById('movie-row');
      movieRow.innerHTML = '';
      for (let i = 0; i < data.items.length; i++) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.classList.add('movie-image');
        movieImage.src = data.items[i].image;

        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = data.items[i].title;

        const movieDescription = document.createElement('div');
        movieDescription.classList.add('movie-description');
        movieDescription.textContent = data.items[i].description;

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieDescription);
        movieRow.appendChild(movieCard);
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

function searchMovie() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();
  const movieCards = document.querySelectorAll('.movie-card');

  movieCards.forEach((movieCard) => {
    const movieTitle = movieCard.querySelector('.movie-title').textContent.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
      movieCard.style.display = 'block';
    } else {
      movieCard.style.display = 'none';
    }
  });
}

const MoviesButton = document.getElementById('Movies');
MoviesButton.addEventListener('click', () => {
  const apiUrl = 'https://imdb-api.com/en/API/Top250Movies/k_6lhii0n1';
  getMovie(apiUrl);
});

const listSeriesButton = document.getElementById('series');
listSeriesButton.addEventListener('click', () => {
  const apiUrl = 'https://imdb-api.com/en/API/MostPopularTVs/k_6lhii0n1';
  getMovie(apiUrl);
});

const boxOfficeButton = document.getElementById('box-office');
boxOfficeButton.addEventListener('click', () => {
  const apiUrl = 'https://imdb-api.com/en/API/BoxOffice/k_6lhii0n1';
  getMovie(apiUrl);
});

const ComingSoonButton = document.getElementById('coming-soon');
ComingSoonButton.addEventListener('click', () => {
  const apiUrl = 'https://imdb-api.com/en/API/ComingSoon/k_6lhii0n1';
  getMovie(apiUrl);
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchMovie);

const clearButton = document.getElementById('clear-button');
const searchInput = document.getElementById('search-input');

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  getMovie();
});

// Append the new buttons to the document
const buttonContainer = document.getElementById('button-container');
buttonContainer.appendChild(listSeriesButton);
buttonContainer.appendChild(boxOfficeButton);
buttonContainer.appendChild(boxOfficeButton);