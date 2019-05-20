const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // movies routes
    this.get('#/cinema', handlers.getCinema);

    this.get('#/myMovies', handlers.getMyMovies);

    this.get('#/buyTicket/:id', handlers.buyTicket);

    this.get('#/details/:id', handlers.getMovieDetails);

    this.get('#/edit/:id', handlers.getEditMovie);
    this.post('#/edit/:id', handlers.editMovie);

    this.get('#/delete/:id', handlers.getDeleteMovie);
    this.post('#/delete/:id', handlers.deleteMovie);

    this.get('#/addMovie', handlers.getAddMovie);
    this.post('#/addMovie', handlers.addMovie);
  });
  app.run();
});