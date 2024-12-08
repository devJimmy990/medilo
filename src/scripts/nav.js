onload = () => {
<<<<<<< HEAD
  const menu = document.getElementById("menu");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");

  close.addEventListener("click", () => {
    modal.classList.replace("flex", "hidden");
  });

  menu.addEventListener("click", () => {
    modal.classList.replace("hidden", "flex");
  });
};
=======
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
>>>>>>> 27e18ffd775d21717411ed30844f779f7d6aea20
