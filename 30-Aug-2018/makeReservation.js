function makeReservation(input){
    $('#submit').click(function () {
        let $fullName = $('#fullName');
        let $emial = $('#email');
        let $phoneNumber = $('#phoneNumber');
        let $address = $('#address');
        let $postalCode = $('#postalCode');

        if ($fullName.val() && $emial.val()) {
            let $ul = $('#infoPreview');
            $ul.append(`<li>Name: ${$fullName.val()}</li>`);
            $ul.append(`<li>E-mail: ${$emial.val()}</li>`);
            $ul.append(`<li>Phone: ${$phoneNumber.val()}</li>`);
            $ul.append(`<li>Address: ${$address.val()}</li>`);
            $ul.append(`<li>Postal Code: ${$postalCode.val()}</li>`);

            $(this).attr('disabled', true);
            $('#edit').removeAttr('disabled');
            $('#continue').removeAttr('disabled');
        }


        $fullName.val('');
        $emial.val('');
        $phoneNumber.val('');
        $address.val('');
        $postalCode.val('');
    });

    $('#edit').click(function () {
        let $fullName = $('#fullName');
        let $emial = $('#email');
        let $phoneNumber = $('#phoneNumber');
        let $address = $('#address');
        let $postalCode = $('#postalCode');
        let $list = [$fullName, $emial, $phoneNumber, $address, $postalCode];
        let $ul = $('#infoPreview').children('li');

        for (let i = 0; i < $list.length; i++) {
            let val = $ul.eq(i).text().split(':')[$ul.eq(i).text().split(':').length - 1].slice(1);
            $list[i].val(val);
            $ul.eq(i).remove();
        }

        $('#submit').removeAttr('disabled');
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
    })

    $('#continue').click(function () {
        let $container = $('#container');
        $container.append('<h2>Payment details</h2>');
        let $select = $('<select>');
        $select.attr('id', 'paymentOptions');
        $select.attr('class', 'custom-select');
        $select.append('<option selected disabled hidden>Choose</option>');
        $select.append('<option value="creditCard">Credit Card</option>');
        $select.append('<option value="bankTransfer">Bank Transfer</option>');
        $select.change(changeSelect)
        $container.append($select);
        $container.append('<div id="extraDetails"></div>');

        $('#submit').attr('disabled', true);
        $('#edit').attr('disabled', true);
        $('#continue').attr('disabled', true);
    })

    function changeSelect() {
        let $select = $('#paymentOptions');
        let $div = $('#extraDetails');
        $div.empty();
        let $button = $('<button id="checkOut">Check Out</button>')
        $button.click(finishUp);

        if ($select.val() === 'creditCard') {
            $div.append($(`<div class="inputLabel">Card Number<input></div><br>`));
            $div.append($(`<div class="inputLabel">Expiration Date<input></div><br>`));
            $div.append($(`<div class="inputLabel">Security Numbers<input></div><br>`));
            $div.append($button);
        } else if($select.val() === 'bankTransfer'){
            $div.append($('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>'));
            $div.append($button);
        }
    }

    function finishUp() {
        let $div = $('#wrapper');
        $div.empty();
        $div.append('<h4>Thank you for your reservation!</h4>');
    }
}