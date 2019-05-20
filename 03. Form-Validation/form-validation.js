function validate() {
	$('#company').change(function() {
		if(this.checked) {
			$('#companyInfo').show();
		} else {
			$('#companyInfo').hide();
		}
	});

	$('#submit').click(function (event) {
		event.preventDefault();

		let username = isUsernameCorrect();
		let email = isEmailCorrect();
		let passwords = isPasswordAndConfirmPasswordCorrect();
		let company = true;

		if ($('#company').prop('checked') == true) {
			company = isCompanyNumberValid();
		}

		if (username && email && passwords && company) {
			$('#valid').show();
		} else {
			$('#valid').hide();
		}
	})

	function isCompanyNumberValid() {
		let companyNumber = $('#companyNumber').val();

		if (companyNumber >= 1000 && companyNumber <= 9999){
			$('#companyNumber').css('border','none');
		} else {
			$('#companyNumber').css("border-color","red");
		}

		return companyNumber >= 1000 && companyNumber <= 9999;
	}

	function isPasswordAndConfirmPasswordCorrect() {
		let password = $('#password').val();
		let confirmPassword = $('#confirm-password').val();

		if (password.length >= 5 && password.length <= 15 && password === confirmPassword) {
			$('#password').css('border','none');
			$('#confirm-password').css('border','none');
		} else {
			$('#password').css("border-color","red");
			$('#confirm-password').css("border-color","red");
		}

		return (password.length >= 5 && password.length <= 15 && password === confirmPassword);
	}

	function isEmailCorrect() {
		let email = $('#email').val();
		let indexOfAt = email.indexOf('@');

		if (indexOfAt > 0 && email.slice(indexOfAt).includes('.')) {
			$('#email').css('border','none');
		} else {
			$('#email').css("border-color","red");
		}

		return indexOfAt > 0 && email.slice(indexOfAt).includes('.');
	}

	function isUsernameCorrect() {
		let username = $('#username').val();
		const regex = /[A-Za-z0-9]+/gm;
		
		if (username.match(regex) !== null && username.length >= 3 && username.length <= 20){
			$('#username').css('border','none');
		} else {
			$('#username').css("border-color","red");
		}

		return username.match(regex) !== null && username.length >= 3 && username.length <= 20;
	}
}
