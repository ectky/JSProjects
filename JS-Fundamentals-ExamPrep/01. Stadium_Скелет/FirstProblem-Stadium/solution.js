function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
    });
    
    let fans = 0;
    let total = 0;

	function clickEvent(e){
        if(e.target.textContent !== 'Summary:'){
            let levskiSection = document.querySelector('section[class="Levski"]');
            let litexSection = document.querySelector('section[class="Litex"]');
            let index = Array.prototype.indexOf.call(e.target.parentNode.parentNode.children, e.target.parentNode);

            let team = levskiSection.contains(e.target)? 'Levski' : litexSection.contains(e.target)? 'Litex' : 'VIP';
            let seatNumber = e.target.textContent;
            let sector = index === 0? 'A' : index === 1? 'B' : 'C';

            let result = "";

            if(e.target.style.background == 'rgb(255, 0, 0)'){
                result = ` Seat ${seatNumber} in zone ${team} sector ${sector} is unavailable.\n`;
            } else {
                e.target.style.background = 'rgb(255,0,0)';
                result = ` Seat ${seatNumber} in zone ${team} sector ${sector} was taken.\n`;
                let price  = 0;
                if (team === 'Litex' || team === 'Levski') {
                    price = sector === 'A'? 10 : sector === 'B'? 7 : 5;
                } else {
                    price = sector === 'A'? 25 : sector === 'B'? 15 : 10;
                }

                total += price;
                fans++;
            }

            document.querySelector('#output').value += result;
        } else {
            
            document.querySelector('span').textContent = `${total} leva, ${fans} fans.`;
        }
    }
}