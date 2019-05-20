function solve() {
   Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});
	
	function clickEvent(e){
      const showMore = "Show more";
      const hideId = "Hide it";

      let parentDiv = e.target.parentNode;
      let unlockedInput = parentDiv.childNodes[9];
      if (unlockedInput.checked) {
         if(e.target.textContent === showMore) {
            parentDiv.childNodes[18].removeAttribute("id");
            e.target.textContent = hideId;
         } else {
            let divId = parentDiv.childNodes[16].getAttribute('name').substring(0, 5); 
            parentDiv.childNodes[18].setAttribute("id", divId + "HiddenFields");
            e.target.textContent = showMore;
         }
      }
   }
} 