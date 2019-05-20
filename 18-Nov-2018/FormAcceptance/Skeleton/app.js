function acceptance() {
	let $company = $('input[name="shippingCompany"]');
	let $product = $('input[name="productName"]');
	let $quantity = $('input[name="productQuantity"]');
	let $scrape = $('input[name="productScrape"]');

	if ($company.val() && $product.val() && $.isNumeric($quantity.val()) && $.isNumeric($scrape.val())) {
		let $div = $('<div>');
		let quantity = Number($quantity.val()) - Number($scrape.val());

		if (quantity > 0) {
			$div.append($('<p>').text(`[${$company.val()}] ${$product.val()} - ${quantity} pieces`));
			let $button = $('<button>Out of stock</button>');
			$button.click(function () {
				$(this).parents('div').eq(0).remove();
			});
			$div.append($button);
			$('#warehouse').append($div);
		}
	}

	$company.val('');
	$product.val('');
	$quantity.val('');
	$scrape.val('');
}