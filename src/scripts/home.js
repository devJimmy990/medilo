window.addEventListener('load', () => {

    document.getElementById('btn-contact')
        .addEventListener('click', () => { window.location.assign('contact-us.html'); });


    document.getElementById('btn-discover')
        .addEventListener('click', () => { window.location.assign('blogs.html'); });

    document.querySelectorAll('.book-appointment')
        .forEach(btn => { btn.addEventListener('click', () => { window.location.assign('appointment.html'); }); });

});