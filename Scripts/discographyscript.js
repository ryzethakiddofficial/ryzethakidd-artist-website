document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        document.querySelectorAll('.release-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});