function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
        let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        let suitValues = ['&hearts;', '&spades;', '&diamond;', '&clubs;'];

        let fromElement = document.querySelector('#from');
        let toElement = document.querySelector('#to');
        let selectElement = document.querySelector('select');

        let fromValue = fromElement.value.toLowerCase();
        let toValue = toElement.value.toLowerCase();
        let suit = suitValues[selectElement.selectedIndex];

        let fromIndex = cardValues.indexOf(fromValue);
        let toIndex = cardValues.indexOf(toValue);

        if (fromIndex <= toIndex) {
            let sectionElement = document.querySelector('#cards');

            for (let i = fromIndex; i <= toIndex; i++) {
                const el = cardValues[i].toUpperCase();

                let cardElement = document.createElement('div');
                cardElement.setAttribute('class', 'card');

                let p1 = document.createElement('p');
                p1.innerHTML = suit;
                cardElement.appendChild(p1);

                let p2 = document.createElement('p');
                p2.innerHTML = el;
                cardElement.appendChild(p2);

                let p3 = document.createElement('p');
                p3.innerHTML = suit;
                cardElement.appendChild(p3);

                sectionElement.appendChild(cardElement);
            }
        }

        fromElement.value = '';
        toElement.value = '';
        selectElement.selectedIndex = 0;
    }
}