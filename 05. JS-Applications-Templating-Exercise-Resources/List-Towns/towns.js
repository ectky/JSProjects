function attachEvents(){
    $('#btnLoadTowns').click(getTowns);

    function getTowns() {
        let towns = $('#towns').val().split(', ');
        let template = $('#towns-template').html();
        let compiledTemplate = Handlebars.compile(template);
        let context = {
            towns
        };
        $('#root').html(compiledTemplate(context));
    }
}