function realEstateAgency () {
	$('button[name="regOffer"]').click(function () {
		let $price = $('input[name="apartmentRent"]');
		let $type = $('input[name="apartmentType"]');
		let $commission = $('input[name="agencyCommission"]');
		let $meessage = $('#message');

		if ($type.val() && !$type.val().includes(':') && $.isNumeric($price.val()) && $.isNumeric($commission.val())
		&& Number($price.val()) > 0 && Number($commission.val()) >= 0 && Number($commission.val()) <= 100) {
			$meessage.text('Your offer was created successfully.');

			let $div = $('<div>');
			$div.attr('class', 'apartment');
			$div.append($(`<p>Rent: ${$price.val()}</p>`));
			$div.append($(`<p>Type: ${$type.val()}</p>`));
			$div.append($(`<p>Commission: ${$commission.val()}</p>`));

			$('#building').append($div);
		} else {
			$meessage.text('Your offer registration went wrong, try again.');
		}

		$price.val('');
		$type.val('');
		$commission.val('');
	});

	$('button[name="findOffer"]').click(function () {
		let $budget = $('input[name="familyBudget"]');
		let $type = $('input[name="familyApartmentType"]');
		let $name = $('input[name="familyName"]');
		let $meessage = $('#message');

		if ($.isNumeric($budget.val()) && Number($budget.val()) > 0 && $type.val() && $name.val()) {
			let $offers = $('div.apartment');

			for (const offer of $offers) {
				let $offer = $(offer);
				let $priceP = $offer.children('p').eq(0);
				let $typeP = $offer.children('p').eq(1);
				let $comP = $offer.children('p').eq(2);

				let price = Number($priceP.text().split(' ')[1]);
				let type = $typeP.text().split(' ')[1];
				let commission = Number($comP.text().split(' ')[1]);

				let totlPrice = price + ((price * commission) / 100);
				if (Number($budget.val()) >= totlPrice && $type.val() === type) {
					$meessage.text('Enjoy your new home! :))');

					let $profit = $('h1');
					let profit = Number($profit.text().split(' ')[2]) + Number(price);
					$profit.text(`Agency profit: ${profit} lv.`);

					$offer.css('border', '2px solid red');
					$priceP.text($name.val());
					$typeP.text('live here now');
					$comP.remove();
					let $button = $('<button>MoveOut</button>');
					$button.click(function () {
						let name = $(this).parent().children('p').eq(0).text();
						$meessage.text(`They had found cockroaches in ${name}\'s apartment`);
						$(this).parent().remove();
					});
					$offer.append($button);
				}
			}
		} else {
			$meessage.text('We were unable to find you a home, so sorry :(');
		}

		$budget.val('');
		$type.val('');
		$name.val('');
	});
}