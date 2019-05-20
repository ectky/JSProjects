function solve() {
	Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
		if (e.target.textContent === "Next question") {
			let nextSectionElement = e.target.parentNode.nextElementSibling;
			nextSectionElement.removeAttribute('class');
		} else {
			let score = 0;
			let firstQRightAnswerElement = document.querySelector('input[value="2013"]');
			let secondQRightAnswerElement = document.querySelector('input[value="Pesho"]');
			let thirdQRightAnswerElement = document.querySelector('input[value="Nakov"]');
			let answerElements = [firstQRightAnswerElement, secondQRightAnswerElement, thirdQRightAnswerElement];
			
			for (let i = 0; i < answerElements.length; i++) {
				const el = answerElements[i];
				
				if (el.checked) {
					score++;
				}
			}

			let resultElement = document.querySelector('#result');
			if (score === 3) {
				resultElement.textContent = 'You are recognized as top SoftUni fan!';
			} else {
				resultElement.textContent = `You have ${score} right answers`;
			}
		}
	}
}