// Efecto de Cursor Personalizado
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Efecto de crecimiento al hacer hover en enlaces
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.5';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });
});

// Efecto de Partículas (Particles.js)
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00f0ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Efecto de Escritura Automática (Typing)
    const typedTextSpan = document.querySelector('.typed-text');
    if (typedTextSpan) {
        const textArray = ["ALBERT RODRIGUEZ", "A DEVELOPER", "A FUTURIST"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        setTimeout(type, newTextDelay + 250);
    }

    // Cargar Proyectos Dinámicamente
    const projects = [
        { title: "AI Predictor", desc: "Machine Learning model for stock predictions.", tags: ["Python", "TensorFlow"] },
        { title: "E-commerce", desc: "Full-stack e-commerce app with React & Node.", tags: ["React", "Node.js"] },
        { title: "Portfolio v1", desc: "My first portfolio design.", tags: ["HTML/CSS"] }
    ];

    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.desc}</p>
                <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    // Smooth Scrolling para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Animación de aparición para la sección About
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

aboutSection.style.opacity = '0';
aboutSection.style.transform = 'translateY(50px)';
aboutSection.style.transition = 'all 0.6s ease-out';
observer.observe(aboutSection);

// Filtrado de proyectos
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir 'active' al botón clickeado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

