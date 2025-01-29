// Selecciona todas las imágenes dentro de .imgfondo
const images = document.querySelectorAll('.imgfondo img');
const body = document.body;

// Asegúrate de que la primera imagen esté activa al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    if (images.length > 0) {
        // Establece el fondo del body a la primera imagen
        const bgImage = images[0].src; // Obtiene la URL de la primera imagen
        body.style.backgroundImage = `url(${bgImage})`; // Cambia el fondo
        images[0].classList.add('active'); // Añade la clase active a la primera imagen (opcional)
    }
});

// Cambia el fondo según la posición del scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Posición del scroll

    images.forEach((img, index) => {
        const sectionTop = window.innerHeight * index; // Calcula el inicio de cada sección
        const sectionBottom = sectionTop + window.innerHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const bgImage = img.src; // Obtiene la URL de la imagen
            body.style.backgroundImage = `url(${bgImage})`; // Cambia el fondo del body
        }
    });
});

// Código JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el contenedor y sus elementos hijos
    const contenedor = document.querySelector('.contenido');
    const elementos = contenedor.children;

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.4 // El 100% del elemento debe ser visible
    });

    // Observa cada elemento hijo
    Array.from(elementos).forEach(elemento => observer.observe(elemento));
});

