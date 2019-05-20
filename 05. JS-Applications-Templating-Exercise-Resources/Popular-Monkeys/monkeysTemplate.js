$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let catsTemplate = await $.ajax({
            url: './monkeyTemplate.html'
        });
        let compiledTemplate = Handlebars.compile(catsTemplate);
        let context = {
            monkeys
        };
        $('.monkeys').html(compiledTemplate(context));
    }
})

function showInfo(id) {
    $(`#${id}`).toggle();
}