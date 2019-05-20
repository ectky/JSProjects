function addDestination() {
    let $city = $('input').eq(0);
    let $country = $('input').eq(1);
    let $season = $('select');

    if ($city.val() && $country.val()) {
        let $tableBody = $('#destinationsList');
        let $tr = $('<tr>');
        $tr.append($(`<td>${$city.val()}, ${$country.val()}</td>`));
        $tr.append($(`<td>${$("select option:selected").text()}</td>`));
        $tableBody.append($tr);

        $(`#${$season.val()}`).val(+$(`#${$season.val()}`).val() + 1);
    }

    $city.val('');
    $country.val('');
    $season.val('summer');
}