document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('nav ul');

    // Smooth scroll logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Allow default behavior if it's not a section link
            if (!targetId.startsWith('#')) return;
            
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if(navUl.classList.contains('show')) {
                navUl.classList.remove('show');
            }
        });
    });

    // Auto-update active link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.tab-content');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Gallery item click toggle logic for mobile viewing
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove 'clicked' class from all other items to only show one at a time (optional nice feature)
            galleryItems.forEach(otherItem => {
                if(otherItem !== item) otherItem.classList.remove('clicked');
            });
            item.classList.toggle('clicked');
        });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
});
