// Menangani halaman loading
window.addEventListener("load", () => {
    setTimeout(() => {
        // Menghilangkan loading screen setelah 3 detik
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('invitation').classList.remove('hidden');
    }, 3000);
});

// Fungsi untuk unmute/mematikan suara musik
function unmuteAudio() {
    var audio = document.getElementById("wedding-song");
    audio.muted = !audio.muted;
    audio.play();
}

// Fungsi untuk menambahkan RSVP dan ucapan ke komentar
function postRSVP(event) {
    event.preventDefault();  // Mencegah form dari reload halaman

    var name = document.getElementById('name').value;
    var attendance = document.getElementById('attendance').value;
    var message = document.getElementById('message').value;
    var currentDate = new Date();
    var timeString = currentDate.toLocaleString();  // Mendapatkan waktu dan tanggal saat ini

    // Pastikan ada nama dan ucapan/ doa yang diisi
    if (name && attendance && message) {
        var commentList = document.getElementById('comments-list');

        // Membuat elemen komentar baru untuk RSVP
        var newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <p><strong>${name}</strong> <span style="font-weight: bold; color: green;">(RSVP: ${attendance === 'yes' ? 'Hadir' : 'Tidak Hadir'})</span></p>
            <p><em>Dikirim pada: ${timeString}</em></p>
            <p><strong>Ucapan/Doa:</strong></p>
            <p>${message}</p>
        `;

        // Menambahkan komentar baru ke daftar komentar
        commentList.appendChild(newComment);

        // Mengosongkan form RSVP setelah dikirim
        document.getElementById('rsvp-form').reset();
    } else {
        alert("Nama, Konfirmasi Kehadiran, dan Ucapan/Doa harus diisi!");
    }
}



