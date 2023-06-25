document.addEventListener('DOMContentLoaded', (event) => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Agregamos el geocoder
    var geocoder = L.Control.geocoder().addTo(map);

    // Movemos el geocoder al div #ubicacion
    document.getElementById('ubicacion').appendChild(geocoder.getContainer());

    document.querySelector('#boton1').addEventListener('click', () => {
        const formContainer = document.querySelector('#form_container');
        if (formContainer.style.display === 'none' || formContainer.style.display === '') {
            formContainer.style.display = 'block';
        } else {
            formContainer.style.display = 'none';
        }
    });



    document.querySelectorAll('#opciones_form .form_option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('#opciones_form .form_option').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
        });
    });
});
