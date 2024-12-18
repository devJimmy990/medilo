window.addEventListener('load', () => {

    document.querySelectorAll('.service-details')
        .forEach(btn => { btn.addEventListener('click', () => { window.location.assign('service-details.html'); }); });

});