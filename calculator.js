var number1 = "";
var number2 = "";
var isPlusClicked = false;
var isSubClicked = false;

function buttonClick(number) {
		number = String(number);
	
	if (isPlusClicked) {
		number2 += number;
		document.title = number2;
		
	} else {
		number1 += number;
		document.title = number1;
	} 

	if (isSubClicked) {
		 number1 += number;
		 document.title = number1;
	} else {
		 number2 += number;
		 document.title = number2;	
	}

}


function buttonPlusClick() {
	document.title = "+";
	isPlusClicked = true;
}

function buttonSubClick() {
	document.title = "-";
	isSubClicked = true;
}

function buttonEQClick() {
	if (isPlusClicked == true) {
		number1 = Number(number1);
		number2 = Number(number2);
		var result = number1 + number2; 
		console.log(result);
		document.title = number1 + number2;
	
	} 
	else if (isSubClicked == true) {
		number2 = Number(number2);
		number1 = Number(number1);
		var result = number2 - number1;
		console.log(result);
		document.title = number2 - number1;
	}

}

