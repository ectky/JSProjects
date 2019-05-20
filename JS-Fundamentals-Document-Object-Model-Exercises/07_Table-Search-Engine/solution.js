function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
        let tdElements = Array.from(document.getElementsByTagName('td')).slice(1);

        for (let tdElement of tdElements) {
            tdElement.parentNode.removeAttribute('class');
        }

        let searchedStr = document.querySelector('#searchField').value.toLowerCase();

        if(searchedStr){
            for (let tdElement of tdElements) {
                if (tdElement.textContent.toLowerCase().includes(searchedStr)) {
                    tdElement.parentNode.setAttribute('class', 'select');
                }
            }
        }

        document.querySelector('#searchField').value = '';
    }
}