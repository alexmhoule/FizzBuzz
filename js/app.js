$(document).ready(function () {
	 var myInput = prompt("Please enter a value to count to:"); 
	 myInputAsInteger = parseInt(myInput);

	// isNaN check

	if(isNaN(myInputAsInteger)==true) {

		alert("please enter a number");}

	else {

	for (var i = 1; i <= myInputAsInteger; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			$('ul').append('<li>' + "FizzBuzz" + '</li>');
		} else if (i % 3 == 0) {
			$('ul').append('<li>' + "Fizz" + '</li>');
		} else if (i % 5 == 0) {
			$('ul').append('<li>' + "Buzz" + '</li>');
		} else {
			$('ul').append('<li>' + i + '</li>');
		}
	};

	}	
});