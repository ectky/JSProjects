function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    
    $('input').eq(0).change(function () {
        let $product = $('input').eq(0);

        if ($product.val()) {
            $('#submit').attr('disabled', false);
        } else {
            $('#submit').attr('disabled', true);
        }
    });

    let capacity = 0;
    let price = 0;

    $('#submit').click(function () {
        let $product = $('input').eq(0);
        let $price = $('#price');
        let $qty = $('#quantity');

        let $ul = $('.display');
        $ul.append(`<li>Product: ${$product.val()} Price: ${$price.val()} Quantity: ${$qty.val()}</li>`)
        capacity += Number($qty.val());
        price += Number($price.val());

        let $cap = $('#capacity');
        let $sum = $('#sum');

        $cap.val(capacity);
        $sum.val(price);

        if (capacity >= 150) {
            $cap.attr('class', 'fullCapacity');
            $cap.val('full');
            $price.attr('disabled', true);
            $product.attr('disabled', true);
            $qty.attr('disabled', true);
        }

        $('#submit').attr('disabled', true);
        $product.val('');
        $price.val('1');
        $qty.val('1');
    })
}
