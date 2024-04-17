document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

// Funcionalidad para mostrar secciones al hacer clic en el menú
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let targetSection = document.querySelector(this.getAttribute('href'));
        document.querySelectorAll('section').forEach(section => {
            if (section.id === targetSection.id) {
                section.classList.remove('hidden');
                section.classList.add('active');
            } else {
                section.classList.add('hidden');
                section.classList.remove('active');
            }
        });
    });
});