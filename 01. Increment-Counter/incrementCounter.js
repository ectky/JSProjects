function increment(selector) {
    $(selector)
        .append($('<textarea class="counter" value="0" disabled>0</textarea>'))
        .append($('<button class="btn" id="incrementBtn">Increment</button>'))
        .append($('<button class="btn" id="addBtn">Add</button>'))
        .append($('<ul class="results"></ul>'))

    $('#incrementBtn')
        .click(function () {
            $('textarea').val(Number($('textarea').val()) + 1); 
        });

    $('#addBtn')
        .click(function () {
            $('ul').append($(`<li>${$('textarea').val()}</li>`)); 
        });
}


