function getNext() {
    let inputElement = document.querySelector('input');
    let num = inputElement.value;
    let seq = hailStoneSeq(num);

    let resultElement = document.querySelector('#result');
    resultElement.textContent = seq + ' ';

    function hailStoneSeq(n){
        var seq=[n]
    
        while(n!=1){
            if(n%2==0) n/=2
            else n=(n*3)+1
    
            seq.push(n)
        }
    
        return seq.join(' ')
    }
    
}