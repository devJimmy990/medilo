onload = () => {
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');

    close.addEventListener('click', () => {
        modal.classList.replace('flex', 'hidden');
    })

    menu.addEventListener('click', () => {
        modal.classList.replace('hidden', 'flex');
    })
}