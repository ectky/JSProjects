function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
    });
    
    let shoppingCart = [];

	function clickEvent(e){
        let products = [
            {
                'name': 'Milk',
                'price': 1.09
            },
            {
                'name': 'Bread',
                'price': 0.80
            },
            {
                'name': 'Tomatoes',
                'price': 0.99
            },
        ];
        let btns = [];
        btns = document.getElementsByTagName('button');

        let textareaElemet = document.querySelector('textarea');
        let product;

        if (btns[0] == e.target) {
            product = products[0];
            shoppingCart.push(product);
            textareaElemet.textContent += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;
        }else if (btns[1] == e.target) {
            product = products[1];
            shoppingCart.push(product);
            textareaElemet.textContent += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;            
        } else if (btns[2] == e.target) {
            product = products[2];
            shoppingCart.push(product);
            textareaElemet.textContent += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.\n`;           
        } else if (btns[3] == e.target) {
            console.log(shoppingCart);
            let price = getSum();
            let result = shoppingCart.map(p => p.name).filter((v, i, a) => a.indexOf(v) === i).join(', ');
            textareaElemet.textContent += `You bought ${result} for ${price.toFixed(2)}.\n`;
            shoppingCart = [];                       
        }
    }

    function getSum() {
        let sum = 0;
        for (const p of shoppingCart) {
            sum += p.price;
        }
        return sum;
    }
}