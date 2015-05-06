$(document).ready(function () {
	 var myInput = prompt("Please enter a value to count to:"); 
	 myInputAsInteger = parseInt(myInput);

	$('#submit').click(function () {
		if( $('input#number').val().trim().length == 0 ) {
			alert('Whoops, please type a number');
		} else 
		 {
			$('ul').append('<li>' + myInputAsInteger + '</li>');
			$('input#number').val("");
		}
	})

	//var inputted = parseInt($("#number").val());

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
});