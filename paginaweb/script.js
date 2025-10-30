// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Referencia al elemento del año en el footer
    const currentYearSpan = document.getElementById('current-year');

    /**
     * Actualiza el año en el pie de página automáticamente.
     */
    function actualizarAnio() {
        if (currentYearSpan) {
            const anioActual = new Date().getFullYear();
            currentYearSpan.textContent = anioActual;
        }
    }

    // Llama a la función para establecer el año actual al cargar la página
    actualizarAnio();
});