const movieService = (() => {
    function createMovie(movie) {
        return kinvey.post('appdata', 'movies', 'kinvey', movie)
    }

    function getMovieById(id) {
        return kinvey.get('appdata', 'movies/' + id, 'kinvey');
    }

    function removeMovie(id) {
        return kinvey.remove('appdata', 'movies/' + id, 'kinvey');
    }

    function editMovie(movie, id) {
        return kinvey.update('appdata', 'movies/' + id, 'kinvey', movie);
    }

    function getAllMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey');
    }

    return {
        createMovie,
        getAllMovies,
        editMovie,
        getMovieById,
        removeMovie
    };
})();