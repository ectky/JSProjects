function leapYear() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {
        let year = +document.querySelector('input').value;
        let divElement = document.querySelector('#year');
        let divYearElement = divElement.childNodes[3];
        let h2Element = divElement.childNodes[1];

        divYearElement.textContent = year;
        if(isLeapYear(year)){
            h2Element.textContent = 'Leap Year';
        } else {
            h2Element.textContent = 'Not Leap Year';
        }
        document.querySelector('input').value = '';
    }
    
    function isLeapYear(year)
    {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
}