$(document).ready(function () {
	prompt("Please enter a value to count to:");
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
			$('ul').append('<li>' + "FizzBuzz" + '</li>');
		} else if (i % 3 == 0) {
			console.log("Fizz");
			$('ul').append('<li>' + "Fizz" + '</li>');
		} else if (i % 5 == 0) {
			console.log("Buzz");
			$('ul').append('<li>' + "Buzz" + '</li>');
		} else {
			console.log (i);
			$('ul').append('<li>' + i + '</li>');
		}
	};	
});