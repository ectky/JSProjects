function solution() {
	let $toyType = $('#toyType');
		let $toyPrice = $('#toyPrice');
		let $toyDesc = $('#toyDescription');

		if ($toyType.val() && $.isNumeric($toyPrice.val()) && $toyDesc.val()) {
			let $div = $('<div>');
			$div.addClass('gift');
			let $img = $('<img>');
			$img.attr('src', 'gift.png');
			$div.append($img);
			$div.append($('<h2>').text($toyType.val()));
			$div.append(`<p>${$toyDesc.val()}</p>`);
			let $button = $(`<button>Buy it for $${$toyPrice.val()}</button>`);
			$button.click(function () {
				$(this).parent().remove();
			});
			$div.append($button);

			$('#christmasGiftShop').append($div);
		}

		$toyType.val('');
		$toyDesc.val('');
		$toyPrice.val('');
}