document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        // Get the currently active section
        const activeSection = document.querySelector('.release-section.active');
        
        // Check if there is an active section
        if (activeSection) {
            // Fade out the current section
            activeSection.style.opacity = 0; // Start fading out
            
            // Wait for the fade-out transition to complete
            setTimeout(() => {
                activeSection.classList.remove('active'); // Remove active class
                activeSection.style.display = 'none'; // Hide the section after fade-out
                
                // Change the active button
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                // Fade in the new section
                const newSection = document.getElementById(target);
                newSection.style.display = 'block'; // Show the new section
                setTimeout(() => {
                    newSection.classList.add('active'); // Make it active
                    newSection.style.opacity = 1; // Start fading in
                }, 50); // A slight delay for visibility
            }, 500); // Match this duration with CSS transition duration
        } else {
            // If no section is active, just activate the new section directly
            const newSection = document.getElementById(target);
            newSection.classList.add('active');
            newSection.style.display = 'block';
            newSection.style.opacity = 1; // Make it visible
            button.classList.add('active'); // Add active class to the clicked button
        }
    });
});
