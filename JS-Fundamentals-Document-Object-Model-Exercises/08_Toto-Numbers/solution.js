function solve() {
	Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
		let inputElement = document.querySelector('input');
		let numbers = inputElement.value.split(' ').map(function(item) {return parseInt(item, 10)});
		let continueNext = "true";
		
		if (numbers.length === 6) {
			for (const n of numbers) {
				if (n < 1 || n > 49) {
					continueNext = false;
				}
			}

			if (continueNext) {
				let allNumbersDiv = document.getElementById('allNumbers');

				for (let i = 1; i <= 49; i++) {
					let div = document.createElement('div');
					div.textContent = i;
					div.setAttribute('class', 'numbers');
					if (numbers.includes(i)) {
						div.style.background = 'orange';
					}

					allNumbersDiv.appendChild(div);
				}

				document.querySelector('button').setAttribute('disabled', 'true');
				inputElement.setAttribute('disabled', 'true');
			}
		}
	}
}