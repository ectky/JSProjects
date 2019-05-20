function solve() {
    let select = document.getElementById("selectMenuTo"); 
    let options = Array.from(['binary', 'Hexadecimal']); 

    for (let i = 0; i < options.length; i++) {
        const opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    document.querySelector('button').addEventListener('click', clickEvent);

    function clickEvent(e) {
        let resultElement = document.querySelector('#result');
        let inputElement = document.querySelector('#input');
        let inputText = inputElement.value;
        if (inputText) {
            let selectedOption = select.options[select.selectedIndex].value;

            if (selectedOption === options[0]) {
                resultElement.value = (+inputText).toString(2);
            } else {
                resultElement.value = (+inputText).toString(16).toUpperCase();
            }            
        }
        inputElement.value = "";
    }
}