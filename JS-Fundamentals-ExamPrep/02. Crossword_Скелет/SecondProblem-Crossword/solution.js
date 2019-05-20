function solve() {
   let btns = document.getElementsByTagName('button');

   btns[0].addEventListener('click', filter);
   btns[1].addEventListener('click', sort);
   btns[2].addEventListener('click', rotate);
   btns[3].addEventListener('click', get);

   function get() {
      let input = Array.from(document.querySelector('#input').value);
      let position = Number(document.querySelector('#getPosition').value) - 1;

      document.querySelector('#output').children[0].innerHTML += input[position];
   }

   function rotate() {
      let input = Array.from(document.querySelector('#input').value);
      let rotate = document.querySelector('#rotateSecondaryCmd').value;
      let position = Number(document.querySelector('#rotatePosition').value) - 1;
      let result; 

      result = rotateArr(input, rotate);

      document.querySelector('#output').children[0].innerHTML += result[position];
   }

   function rotateArr(arr, step) {
      step %= arr.length;
      for (let i = 0; i < step; i++) {
         let el = arr.pop();
         arr.unshift(el);
      }

      return arr;
   }

   function sort() {
      let input = Array.from(document.querySelector('#input').value);
      let filterSecondaryCmd = document.querySelector('#sortSecondaryCmd').value;
      let position = Number(document.querySelector('#sortPosition').value) - 1;
      let result; 

      if (filterSecondaryCmd === 'A') {
         result = input.sort(function(a, b){
            var nameA=a.toLowerCase(), nameB=b.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
      } else {
         result = input.sort(function(a, b){
            var nameA=a.toLowerCase(), nameB=b.toLowerCase();
            if (nameA > nameB) //sort string ascending
             return -1;
            if (nameA < nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
      }

      document.querySelector('#output').children[0].innerHTML += result[position];
   }

   function filter(e) {
      let input = Array.from(document.querySelector('#input').value);
      let filterSecondaryCmd = document.querySelector('#filterSecondaryCmd').value;
      let position = Number(document.querySelector('#filterPosition').value) - 1;
      let result; 

      if (filterSecondaryCmd === 'uppercase') {
         result = input.filter(x => x.toUpperCase() === x && !(x >= '0' && x <= '9'));
      } else if(filterSecondaryCmd === 'lowercase') {
         result = input.filter(x => x.toLowerCase() === x);
      } else {
         result = input.filter(x => x >= '0' && x <= '9');
      }

      document.querySelector('#output').children[0].innerHTML += result[position];
   }
}