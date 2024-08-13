document.addEventListener('DOMContentLoaded', () => {
    const showOptionsBtn = document.getElementById('showOptionsBtn');
    const options = document.getElementById('options');
    const buttons = document.querySelectorAll('.package-btn');
    const imageSets = document.querySelectorAll('.image-set');

    // Función para mostrar u ocultar las opciones de paquetes
    showOptionsBtn.addEventListener('click', () => {
        if (options.style.display === 'none' || options.style.display === '') {
            options.style.display = 'block';
        } else {
            options.style.display = 'none';
        }
    });

    // Función para manejar el clic en los botones de paquetes
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const packageType = button.getAttribute('data-package');

            // Ocultar todos los sets de imágenes
            imageSets.forEach(set => {
                set.style.display = 'none';
            });

            // Mostrar el set de imágenes seleccionado
            const selectedSet = document.getElementById(`${packageType}-images`);
            if (selectedSet) {
                selectedSet.style.display = 'flex'; // Cambia 'flex' a 'block' si prefieres
                selectedSet.scrollIntoView({ behavior: 'smooth' });
                
                // Ocultar las opciones después de seleccionar un paquete
                options.style.display = 'none';
            }
        });
    });
});