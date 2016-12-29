

var onCheckoutPage = document.getElementById('credit_card_number');

// only execute code on checkout page
(function (state, fx) {
	if (state) {
		fx();
	}
})(onCheckoutPage, function() {
	
	// field which accepts user cc number
	var credit = $('credit_card_number');
	
	// form container for validation classes
	var creditContainer = document.getElementById('credit_card_number_field');

	// for disabling checkout on invalid cc input
	var checkoutButton = document.getElementById('place_order');
	var checkoutButtonContainer = $('#payment');
	
	// create custom error message, hide until triggered
	var errorMessage = '<h2 id="credit_card_error_message" style="">Please Enter a valid Visa or MasterCard number to proceed with checkout</h2>';		
	checkoutButtonContainer.prepend(errorMessage);	
	var checkoutError = document.getElementById('credit_card_error_message');
  checkoutError.style.display = 'none';

	// check cc fields upon clicking out
	credit.focusout(function() {

		 // length of cc number string
		 var creditLength = credit.value.length;

		 if (creditLength === 13 || creditLength === 16) { // If Valid
				checkoutButton.disabled = false;
			  checkoutError.style.display = 'none';
		 } 
		 else { // If not valid, don't allow checkout
				checkoutButton.disabled = true;
			 	checkoutError.style.display = 'block';
		 }

	});
	
	
});