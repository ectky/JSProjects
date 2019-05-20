function solve() {
  Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
  });
  
  let furnitureList = [];

	function clickEvent(e){
    if (e.target.innerHTML === 'Generate') {
      let textArea = document.querySelector('textarea');
     furnitureList = JSON.parse(textArea.value);
      
      generateContent();
    } else {
      let result = generateResult();
      let textArea = document.getElementsByTagName('textarea')[1];
      textArea.value = result;
    }
  }

  function generateResult() {
    let resultList = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      if (checkbox.checked) {
        resultList.push(furnitureList[i]);
      }
    }

    let names = resultList.map(p => p.name).join(' ');
    let price = getSum(resultList);
    let decFactor = getAvg(resultList);
    let result = `Bought furniture: ${names}\n`;
    result += `Total price: ${price.toFixed(2)}\n`;
    result += `Average decoration factor: ${decFactor}`;

    return result;
  }

  function getAvg(result) {
    let sum = 0;
    for (const p of result) {
        sum += p.decFactor;
    }
    return sum / result.length;
}

  function getSum(result) {
    let sum = 0;
    for (const p of result) {
        sum += p.price;
    }
    return sum;
}

  function generateContent() {
    let divColl = document.querySelector('#furniture-list');

    for (const furniture of furnitureList) {
      let div = document.createElement('div');
      div.setAttribute('class', 'furniture');

      let pName = document.createElement('p');
      pName.textContent = `Name: ${furniture.name}`;
      div.appendChild(pName);

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', furniture.img);
      div.appendChild(imgEl);

      let pPrice = document.createElement('p');
      pPrice.textContent = `Price: ${furniture.price}`;
      div.appendChild(pPrice);

      let pDec = document.createElement('p');
      pDec.textContent = `Decoration factor: ${furniture.decFactor}`;
      div.appendChild(pDec);

      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      div.appendChild(input);

      divColl.appendChild(div);
    }
  }
}