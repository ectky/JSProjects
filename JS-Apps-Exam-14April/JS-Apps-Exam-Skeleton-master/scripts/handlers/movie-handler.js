handlers.getCinema = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let movies = await movieService.getAllMovies();
        let search = ctx.params.search;
        if (search !== undefined) {
            movies = movies.filter(x => x.genres.split(' ').indexOf(search) > -1);
        } else {
            movies = movies.sort((a, b) => {
                return +b.tickets - +a.tickets;
            });
        }

        ctx.movies = movies;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            movie: './templates/movie.hbs',
        }).then(function () {
            this.partial('./templates/cinema.hbs');
        }).catch(function (err) {
            console.log(err);
        })
    } catch (e) {
        console.log(e);
    }
}

handlers.getMyMovies = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let movies = await movieService.getAllMovies();
        movies.forEach(x => x.isCreator =
            x._acl.creator === sessionStorage.getItem('id'));
        movies = movies.filter(x => x.isCreator);
        ctx.movies = movies;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            movie: './templates/myMovie.hbs',
        }).then(function () {
            this.partial('./templates/myMovies.hbs');
        }).catch(function (err) {
            console.log(err);
        })
    } catch (e) {
        console.log(e);
    }
}

handlers.getAddMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/addMovie.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}

handlers.addMovie = function (ctx) {
    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageURL = ctx.params.imageUrl;
    let tickets = ctx.params.tickets;
    let genres = ctx.params.genres;

    if (title.length < 6) {
        notifications.showError('The title should be at least 6 characters long.')
        return;
    }
    if (description.length < 10) {
        notifications.showError('The description should be at least 10 characters long.')
        return;
    }
    if (!imageURL.startsWith('http://') && !imageURL.startsWith('https://')) {
        notifications.showError('The image should start with "http://" or "https://"')
        return;
    }
    if (tickets.length == 0 || isNaN(+tickets)) {
        notifications.showError('The available tickets should be a number.')
        return;
    }

    let movie = {
        title, description, imageURL, tickets, genres
    }

    movieService.createMovie(movie).then((res) => {
        notifications.showSuccess('Movie created successfully.');
        ctx.redirect('#/home');
    }).catch(function (err) {
        notifications.showError('Error!');
    });
}

handlers.buyTicket = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.userId = sessionStorage.getItem('id');
    ctx.username = sessionStorage.getItem('username');

    let id = ctx.params.id;

    movieService.getMovieById(id)
        .then(function (res) {
            let data = { ...res };

            if (+data.tickets === 0) {
                notifications.showError('There are no available tickets for this movie.');
                history.back();
                return;
            }

            data.tickets = +data.tickets - 1;

            movieService.editMovie(data, id)
                .then(function () {
                    notifications.showSuccess(`Successfully bought ticket for ${data.title}!`);
                    history.back();
                })
                .catch(function (error) {
                    notifications.showError(error);
                })
        });
};

handlers.getMovieDetails = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let movie = await movieService.getMovieById(ctx.params.id);
        ctx.movie = movie;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/details.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        console.log(e);
    }
}

handlers.getEditMovie = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.userId = sessionStorage.getItem('id');
    ctx.username = sessionStorage.getItem('username');

    try {
        let movie = await movieService.getMovieById(ctx.params.id);
        ctx.movie = movie;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/editMovie.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        console.log(e);
    }
}

handlers.editMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    let title = ctx.params.title;
    let description = ctx.params.description;
    let imageURL = ctx.params.imageUrl;
    let tickets = ctx.params.tickets;
    let genres = ctx.params.genres;
    let id = ctx.params.id;

    if (title.length < 6) {
        notifications.showError('The title should be at least 6 characters long.')
        return;
    }
    if (description.length < 10) {
        notifications.showError('The description should be at least 10 characters long.')
        return;
    }
    if (!imageURL.startsWith('http://') && !imageURL.startsWith('https://')) {
        notifications.showError('The image should start with "http://" or "https://"')
        return;
    }
    if (tickets.length == 0 || isNaN(+tickets)) {
        notifications.showError('The available tickets should be a number.')
        return;
    }
    movieService.getMovieById(id)
        .then(function (res) {
            let data = { ...res };

            data.title = title;
            data.description = description;
            data.imageURL = imageURL;
            data.genres = genres;
            data.tickets = tickets;

            movieService.editMovie(data, id)
                .then(function () {
                    notifications.showSuccess(`Movie ${data.title} updated.`);

                    ctx.redirect('#/myMovies');
                })
                .catch(function (error) {
                    notifications.showError(error);
                })
        }).catch((e) => console.log(e));
};

handlers.getDeleteMovie = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.userId = sessionStorage.getItem('id');
    ctx.username = sessionStorage.getItem('username');

    try {
        let movie = await movieService.getMovieById(ctx.params.id);
        ctx.movie = movie;

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/deleteMovie.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        console.log(e);
    }
}

handlers.deleteMovie = function (ctx) {
    movieService.removeMovie(ctx.params.id).then((res) => {
        notifications.showSuccess('Movie removed successfully!');
        ctx.redirect('#/myMovies');
    }).catch((e) => console.log(e));
}

