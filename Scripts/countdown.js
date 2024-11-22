// Set the end date (format: "Month Day, Year HH:MM:SS")
const endDate = new Date("27 December, 2024 00:00:00").getTime();
  
function updateCountdown()
{
	const now = new Date().getTime();
	const timeLeft = endDate - now;
  
	if (timeLeft <= 0)
	{
		document.getElementById("timer").innerHTML = "The wait is over!";
		clearInterval(countdownInterval);
		return;
	}
  
	// Calculate days, hours, minutes, and seconds
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
	// Display the countdown
	document.getElementById("timer").innerHTML = 
	`${days}d ${hours}h ${minutes}m ${seconds}s`;
}
  
// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);