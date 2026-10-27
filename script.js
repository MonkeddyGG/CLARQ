document.addEventListener('DOMContentLoaded', () => {

    /* 1. Navbar Effect on Scroll */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* 2. Menú Móvil Moderno */
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al tocar un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* 3. Intersection Observer (Scroll Animations - Lo Nuevo) */
    // Esto hace que los elementos aparezcan suavemente conforme bajas en la pantalla
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // Activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // Margen de activación
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Dejamos de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* 4. Prevención de Envío de Formulario */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lógica para enviar backend (Ej. Fetch API / PHP)
            alert('¡Gracias! Tu mensaje ha sido enviado. CLARQ Arquitectos te contactará pronto.');
            contactForm.reset();

            // Forzar a los labels flotantes a bajar (remover el estado :valid)
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.blur());
        });
    }
});