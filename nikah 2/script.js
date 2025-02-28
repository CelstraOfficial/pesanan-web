document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen untuk tombol
    const openButton = document.querySelector(".open-btn");

    // Mengambil elemen body
    const body = document.body;

    // Event listener untuk mendeteksi pergerakan kursor
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;  // Posisi horizontal kursor (0-100)
        const y = (e.clientY / window.innerHeight) * 100;  // Posisi vertikal kursor (0-100)
        const offsetX = 10;
        const offsetY = 10;
        body.style.backgroundPosition = `${x + offsetX}% ${y + offsetY}%`;
    });

    // Event listener untuk tombol "Open"
    openButton.addEventListener("click", function () {
        let circle = document.querySelector(".transition-circle");

        // Memastikan lingkaran mulai dengan ukuran 0
        circle.style.width = "0px";
        circle.style.height = "0px";
        circle.style.opacity = "1"; // Sembunyikan lingkaran awalnya
        circle.style.display = "block"; // Menampilkan lingkaran

        // Membuat timeline GSAP
        const tl = gsap.timeline({
            onComplete: function () {
                // Mengarahkan halaman setelah transisi selesai, delay 1 detik setelah animasi selesai
                setTimeout(function () {
                    window.location.href = "home2.html"; // Ganti dengan URL tujuan setelah transisi selesai
                }, 300);// Delay 1000ms setelah animasi selesai
            }
        });

        // Animasi untuk lingkaran membesar
        tl.to(circle, {
            width: "250vh",  // Ukuran lingkaran menjadi 100% dari lebar layar
            height: "250vh", // Ukuran lingkaran menjadi 100% dari tinggi layar
            opacity: 1,      // Menjadikan lingkaran terlihat
            duration: 2,     // Durasi animasi
            ease: "power2.inOut",  // Ease-in-out, lambat di awal dan akhir
        });
    });
});
