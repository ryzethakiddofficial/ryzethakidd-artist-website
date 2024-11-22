document.addEventListener('DOMContentLoaded', function()
{
	let secretCode = 'ryze';
	let input = '';
        
	// Listen for key presses
	window.addEventListener('keydown', function(event)
	{
		input += event.key.toLowerCase();
                
		// Check if the input matches the secret code
		if (input.includes(secretCode))
		{
			// Redirect to the secret page
			window.location.href = 'secret.html'; // Replace with your secret page URL
		}
        
		// Prevent input from growing indefinitely
		if (input.length > secretCode.length)
		{
			input = input.slice(-secretCode.length);
		}
	});
});