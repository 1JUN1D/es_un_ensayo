console.log("El JavaScript se está cargando correctamente");

document.addEventListener('DOMContentLoaded', (event) => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var geocoder = L.Control.geocoder().addTo(map);
    document.getElementById('ubicacion').appendChild(geocoder.getContainer());

    const formContainerElec = document.querySelector('#form_container_elec');
    const formContainerMec = document.querySelector('#form_container_mec');
    const continueBtn = document.getElementById('continue-btn');
    let optionSelected = false;
    let locationSet = false;

    const checkContinue = () => {
        if (optionSelected && locationSet) {
            continueBtn.style.display = 'block';
        } else {
            continueBtn.style.display = 'none';
        }
    };

    const toggleFormContainerElectricista = () => {
        if (formContainerElec.style.display === 'none' || formContainerElec.style.display === '') {
            formContainerElec.style.display = 'block';
        } else {
            formContainerElec.style.display = 'none';
        }
        formContainerMec.style.display = 'none';
    };

    const toggleFormContainerMecanico = () => {
        if (formContainerMec.style.display === 'none' || formContainerMec.style.display === '') {
            formContainerMec.style.display = 'block';
        } else {
            formContainerMec.style.display = 'none';
        }
        formContainerElec.style.display = 'none';
    };

    document.querySelector('#boton1').addEventListener('click', toggleFormContainerElectricista);
    document.querySelector('#boton2').addEventListener('click', toggleFormContainerMecanico);

    document.querySelectorAll('#opciones_form_elec input[type="radio"], #opciones_form_mec input[type="radio"]').forEach(option => {
        option.addEventListener('change', () => {
            optionSelected = true;
            checkContinue();
        });
    });

    geocoder.on('markgeocode', function(e) {
        locationSet = true;
        checkContinue();
    });

    let serviceText = document.querySelector('#elegir_servicio h2');
    let originalText = serviceText.textContent;

    document.querySelector('#opciones button:nth-child(1)').addEventListener('click', () => {
        if (serviceText.textContent === 'Servicio eléctrico') {
            serviceText.textContent = originalText;
        } else {
            serviceText.textContent = 'Servicio eléctrico';
        }
    });

    document.querySelector('#opciones button:nth-child(2)').addEventListener('click', () => {
        if (serviceText.textContent === 'Servicio mecánico') {
            serviceText.textContent = originalText;
        } else {
            serviceText.textContent = 'Servicio mecánico';
        }
    });
});
