/**
 * 🛠️ TUTORIAL PARA SUBIR UN NUEVO PROYECTO (PARA TU AMIGO):
 * * 1. Busca la sección que dice "const JUEGOS = [...]".
 * 2. Copia un bloque completo de llaves { ... } incluyendo la coma al final.
 * 3. Pégalo justo debajo del anterior.
 * 4. Cambia los datos:
 * - titulo: El nombre del juego.
 * - imagen: El link de la portada (puedes usar una URL de internet).
 * - link: El enlace de descarga.
 * 5. ¡Guarda el archivo y listo! La página se actualizará sola.
 */

const JUEGOS = [
    {
        titulo: "Cyber-Adventure 2077",
        imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500",
        link: "#",
        version: "v1.0.4"
    },
    {
        titulo: "Space Explorer",
        imagen: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=500",
        link: "#",
        version: "Deluxe Edition"
    },
    // <-- PEGA EL NUEVO JUEGO AQUÍ ABAJO siguiendo el formato
];

// Lógica de Renderizado (No tocar a menos que sepas programar)
const container = document.getElementById('app-container');

function renderGames() {
    JUEGOS.forEach((juego, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`; // Animación escalonada
        
        card.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.titulo}">
            <h3>${juego.titulo}</h3>
            <p style="color: #888; font-size: 0.8rem;">${juego.version}</p>
            <a href="${juego.link}" class="btn-download">Obtener Contenido</a>
        `;
        
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderGames);
