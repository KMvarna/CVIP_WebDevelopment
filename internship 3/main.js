document.addEventListener('DOMContentLoaded', function () {
   
    function searchMovies() {
        const searchInput = document.getElementById('movie-search');
        const searchTerm = searchInput.value.toLowerCase();
        const moviePosters = document.querySelectorAll('.row_poster');

        moviePosters.forEach((poster) => {
            const altText = poster.getAttribute('alt').toLowerCase();
            if (altText.includes(searchTerm)) {
                poster.style.display = 'block';
            } else {
                poster.style.display = 'none';
            }
        });
    }

    
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchMovies);

    
    const searchInput = document.getElementById('movie-search');
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchMovies();
        }
    });

    // Your existing code for changing the background color when scrolling
    const showcaseTop = document.querySelector('.showcase-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            showcaseTop.classList.add('black');
        } else {
            showcaseTop.classList.remove('black');
        }
    });
});