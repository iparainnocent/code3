fetch('https://innocentio.vercel.app/films/1')

  .then(response => response.json())

  .then(movies => {

    const filmsList = document.getElementById('films/1');

    movies.forEach(movie => {

      const filmItem = document.createElement('li');

      filmItem.classList.add('film', 'item');

      filmItem.textContent = movie.title;

      filmItem.addEventListener('click', () => showMovieDetails(movie));

      filmsList.appendChild(filmItem);
    });


    showMovieDetails(movies[0]);
  });

function showMovieDetails(movie) {
  const moviePoster = document.getElementById('movie-poster');

  const movieTitle = document.getElementById('movie-title');

  const movieRuntime = document.getElementById('movie-runtime');

  const movieShowtime = document.getElementById('movie-showtime');

  const availableTickets = document.getElementById('available-tickets');

  const buyTicketButton = document.getElementById('buy-ticket');

  moviePoster.src = movie.poster;

  movieTitle.textContent = movie.title;

  movieRuntime.textContent = movie.runtime;

  movieShowtime.textContent = movie.showtime;

  const availableTicketsCount = movie.capacity - movie.tickets_sold;

  availableTickets.textContent = availableTicketsCount;

  buyTicketButton.disabled = availableTicketsCount === 0;

  buyTicketButton.textContent = availableTicketsCount === 0 ? 'Sold Out' : 'Buy Ticket';

  buyTicketButton.addEventListener('click', () => buyTicket(movie));
}

function buyTicket(movie) {

  movie.tickets_sold++;

  const availableTicketsCount = movie.capacity - movie.tickets_sold;

  const availableTickets = document.getElementById('available-tickets');

  const buyTicketButton = document.getElementById('buy-ticket');

  availableTickets.textContent = availableTicketsCount;

  buyTicketButton.disabled = availableTicketsCount === 0;

  buyTicketButton.textContent = availableTicketsCount === 0 ? 'Sold Out' : 'Buy Ticket';
}
