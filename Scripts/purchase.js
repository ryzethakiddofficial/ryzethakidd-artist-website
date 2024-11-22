paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' // Replace with the actual price
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    },
    onError: function(err) {
        console.error(err);
        // Handle errors here
    }
}).render('#paypal-button-container'); // Display the PayPal button