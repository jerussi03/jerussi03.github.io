const images = document.querySelectorAll('.banner-img');
let currentIndex = 0;

images[currentIndex].classList.add('active');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 4000); // Cambia cada 4 segundos


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    const btnBack = document.getElementById('btnBack');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const modalImg = document.getElementById('modalImg');

    const albums = {
        'Trabajo 1': [
            'IMG_2249.jpg',
            'IMG_2311.jpg',
            '../img/IMG_2356.jpg',
            '../img/IMG_2377.jpg',
            '../img/IMG_4753.jpg'
        ],
        'Trabajo 2': [
            '../img/album2/img1.jpg',
            '../img/album2/img2.jpg',
            '../img/album2/img3.jpg'
        ],
        'Trabajo 3': [
            '../img/album3/img1.jpg',
            '../img/album3/img2.jpg',
            '../img/album3/img3.jpg'
        ],
        'Trabajo 4': [
            '../img/album4/img1.jpg',
            '../img/album4/img2.jpg',
            '../img/album4/img3.jpg'
        ],
        'Trabajo 5': [
            '../img/album5/img1.jpg',
            '../img/album5/img2.jpg',
            '../img/album5/img3.jpg'
        ],
        // Agrega más álbumes según sea necesario
    };

    let currentAlbum = [];
    let currentIndex = 0;

    function openModal(albumKey) {
        modal.style.display = 'block';
        currentAlbum = albums[albumKey] || []; // Asegúrate de que el álbum exista
        currentIndex = 0;
        updateModalImage();
    }

    function updateModalImage() {
        if (currentAlbum.length > 0) {
            modalImg.src = currentAlbum[currentIndex];
        }
    }

    prevBtn.onclick = function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateModalImage();
        }
    }

    nextBtn.onclick = function() {
        if (currentIndex < currentAlbum.length - 1) {
            currentIndex++;
            updateModalImage();
        }
    }

    // Agrega eventos a las imágenes del portafolio
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const albumKey = item.querySelector('p').textContent;
        item.addEventListener('click', () => {
            openModal(albumKey.trim()); // Abre el modal con el álbum correspondiente
        });
    });

    // Función para cerrar el modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    btnBack.onclick = function() {
        modal.style.display = 'none';
    }

    // Cierra el modal si se hace clic fuera del contenido
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});
