function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");

    // Menambahkan delay pada item menu saat menu dibuka
    if (menu.classList.contains("active")) {
        let items = menu.querySelectorAll("ul li");

        // Menambahkan delay pada item menu sesuai urutan
        items.forEach((item, index) => {
            item.style.animation = 'none';  // Reset animasi
            item.offsetHeight; // Trigger reflow untuk reset animasi
            item.style.animation = `slideIn 0.5s forwards ${0.2 + (index * 0.2)}s`; // Menambahkan animasi dengan delay
        });
    } else {
        // Menghapus delay dan animasi saat menu ditutup
        let items = menu.querySelectorAll("ul li");
        items.forEach((item) => {
            item.style.removeProperty('animation');  // Menghapus animasi saat menu ditutup
        });
    }
}
