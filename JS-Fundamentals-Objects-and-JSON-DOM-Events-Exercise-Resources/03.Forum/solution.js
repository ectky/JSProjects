function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
        e.preventDefault();
        let table = document.querySelector('tbody');

        if (e.target.innerHTML === 'Submit') {
            let username = document.createElement('td');
            username.textContent = document.querySelector('input[placeholder="username"]').value;
            let email = document.createElement('td');
            email.textContent = document.querySelector('input[placeholder="email"]').value;
            let topics = document.createElement('td');
            topics.textContent = getTopics();

            let tr = document.createElement('tr');
            tr.appendChild(username);
            tr.appendChild(email);
            tr.appendChild(topics);

            table.appendChild(tr);
        } else {
            let tdElements = Array.from(document.getElementsByTagName('td'));

            for (let tdElement of tdElements) {
                tdElement.parentNode.style.visibility = 'hidden';
            }
    
            let searchedStr = document.querySelector('input[placeholder="Search..."]').value.toLowerCase();
    
            if(searchedStr){
                for (let tdElement of tdElements) {
                    if (tdElement.textContent.toLowerCase().includes(searchedStr)) {
                        tdElement.parentNode.style.visibility = 'visible';
                    }
                }
            }
    
        }
    }

    function getTopics() {
        let resultList = [];
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        for (let i = 0; i < checkboxes.length; i++) {
            const checkbox = checkboxes[i];
            if (checkbox.checked) {
                resultList.push(checkbox.value);
            }
        }

        return resultList.join(' ');
    }
}