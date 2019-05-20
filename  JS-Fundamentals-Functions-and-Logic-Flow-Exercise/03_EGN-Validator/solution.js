function validate() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
        let yearElement = document.querySelector('#year');
        let regionElement = document.querySelector('#region');
        let monthElement = document.querySelector('#month');
        let dateElement = document.querySelector('#date');

        let yearInput = yearElement.value;
        let regionInput = regionElement.value;
        
        if(validateYear(yearInput) && validateRegion(regionInput)){
            let year = getDigits(getYear(yearInput));
            let month = getDigits(monthElement.selectedIndex);
            let date = getDigits(dateElement.value);
            let region = getRegion(regionInput);
            let gender = getGender();

            let currentNumer = `${year}${month}${date}${region}${gender}`;
            let finalDigit = getFinalDigit(currentNumer);
            let finalNumber = currentNumer + finalDigit;

            let resultElement = document.querySelector('#egn');
            resultElement.textContent = 'Your EGN is: '+finalNumber;
        }

        yearElement.value = '';
        regionElement.value = '';
        monthElement.selectedIndex = 0;
        dateElement.value = '';
    }

    function getFinalDigit(number) {
        let numbers = number.split('').map((n) => +n);
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let expectedLastDigit = 0;

            for (let i = 0; i < numbers.length; i++) {
                const num = numbers[i];
                const weight = weights[i];

                expectedLastDigit += num * weight;
            }

            expectedLastDigit %= 11;
            expectedLastDigit %= 10;
            return expectedLastDigit;
    }

    function getGender() {
        let maleGElement = document.querySelector('#male');
        let femaleGElement = document.querySelector('#female');
        if (maleGElement.checked) {
            maleGElement.checked = '';
            return 2;
        }
femaleGElement.checked = '';
        return 1;
    }

    function getRegion(region) {
        return region.toString().slice(0, 2);
    }

    function getDigits(number) {
        if (number < 10) {
            return `0${number}`;
        } 

        return number;
    }

    function getYear(year) {
        return year % 100;
    }

    function validateRegion(region) {
        return region >= 43 && region <= 999;
    }

    function validateYear(year) {
        return year >= 1900 && year <= 2100;
    }
}