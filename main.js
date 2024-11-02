
        // Simple JavaScript for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Basic form validation (you can expand this as needed)
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Add your form validation logic here
                alert('Form submitted successfully!');
            });
        }

        // Responsive navigation menu toggle
        const navToggle = document.createElement('button');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navToggle.classList.add('nav-toggle');
        document.querySelector('.header-content').prepend(navToggle);

        navToggle.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        });
