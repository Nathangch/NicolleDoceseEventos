document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    // Tab switching logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active classes
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active-tab'));
            
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Show corresponding tab content
            const targetId = e.target.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active-tab');
            
            // Close mobile menu if open
            if(navUl.classList.contains('show')) {
                navUl.classList.remove('show');
            }
        });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});
