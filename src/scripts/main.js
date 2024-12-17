onload = () => {
    const backTop = document.getElementById('back-top')

    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');

    close.addEventListener('click', () => {
        modal.classList.replace('flex', 'hidden');
    })

    menu.addEventListener('click', () => {
        modal.classList.replace('hidden', 'flex');
    })

    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}