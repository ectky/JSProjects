function solve() {
    document.querySelector('button').addEventListener('click', clickEvent);

    function clickEvent(e) {
        let input = document.querySelector('#input').value;
        let number = Number(input.match('[0-9]+')[0]);
        input = input.replace(number, '');
        input = input.substring(0, number);
        let delimiter = input[input.length - 1];
        let arr = input.split(delimiter).filter(x => x);
        let result = arr[1].split(new RegExp(`[${arr[0]}]`)).join('').split('#').join(' ');

        document.querySelector('#output').value = result;
    }
}