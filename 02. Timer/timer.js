function timer() {
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours = $('#hours');

   let timer;
   let hasStarted = false;

   $('#start-timer')
      .click(function () {
         if (!hasStarted) {
            hasStarted = true;
            timer = setInterval(stepFunc, 1000);
         }
      })

   function stepFunc() {
      if (+seconds.text() < 9) {
         seconds.text('0' + (+seconds.text() + 1));
      } else {
         seconds.text(+seconds.text() + 1);
      }
      
      if (seconds.text() === '60') {
         seconds.text('00');
         if (+minutes.text() < 9) {
            minutes.text('0' + (+minutes.text() + 1));
         } else {
            minutes.text(+minutes.text() + 1);
         }
      }

      if (minutes.text() === '60') {
         minutes.text('00');
         if (+hours.text() < 9) {
            hours.text('0' + (+hours.text() + 1));
         } else {
            hours.text(+hours.text() + 1);
         }
      }
   }

   $('#stop-timer')
      .click(function () {
         if (hasStarted) {
            hasStarted = false;
            clearInterval(timer);
         }
      })
}