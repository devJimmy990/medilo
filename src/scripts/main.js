window.addEventListener('load', () => {
    const modal = document.getElementById('modal');


    document.getElementById('close')
        .addEventListener('click', () => { modal.classList.replace('flex', 'hidden'); })

    document.getElementById('menu')
        .addEventListener('click', () => { modal.classList.replace('hidden', 'flex'); })

    document.getElementById('back-top')
        .addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    document.querySelectorAll('.main-book-appointment')
        .forEach(btn => { btn.addEventListener('click', () => { window.location.assign('appointment.html'); }); });

});