function solve() {
	Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});
	
	function clickEvent(e){
		let btnText = e.target.textContent;
		
		if (btnText.includes('Encode')) {
			let encodeElement = document.getElementsByTagName('textarea')[0];
			let textToEncode = encodeElement.value;


			if (textToEncode) {
				let encodedText = encode(textToEncode);
				let decodeElement = document.getElementsByTagName('textarea')[1];
				decodeElement.value = encodedText;
				encodeElement.value = '';
			}
		} else {
			let decodeElement = document.getElementsByTagName('textarea')[1];
			let textToDecode = decodeElement.value;

			if (textToDecode) {
				let decodedText = decode(textToDecode);
				decodeElement.value = decodedText;
			}
		}
	}

	function decode(textToDecode) {
		let codes = textToDecode.split('').map((p) => p.charCodeAt());
		let encodedCodes = codes.map((c) => c -= 1);
		let letters = encodedCodes.map((c) => String.fromCharCode(c));
		let encodedText = letters.join("");
		return encodedText;
	}

	function encode(textToEncode) {
		let codes = textToEncode.split('').map((p) => p.charCodeAt());
		let encodedCodes = codes.map((c) => c += 1);
		let letters = encodedCodes.map((c) => String.fromCharCode(c));
		let encodedText = letters.join("");
		return encodedText;
	}
}