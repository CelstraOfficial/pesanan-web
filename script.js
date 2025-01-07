// Menambahkan Bintang yang bergerak
document.addEventListener('DOMContentLoaded', () => {
  const starCount = 200; // Jumlah bintang
  const starContainer = document.createElement('div');
  starContainer.classList.add('stars');
  document.body.appendChild(starContainer);

  // Membuat bintang secara acak
  for (let i = 0; i < starCount; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    let size = Math.random() * 3 + 1; // Ukuran bintang acak
    let positionX = Math.random() * 100; // Posisi acak di sumbu X
    let positionY = Math.random() * 100; // Posisi acak di sumbu Y
    let opacity = Math.random() * 0.5 + 0.3; // Opacity acak

    star.style.position = 'absolute';
    star.style.top = `${positionY}vh`;
    star.style.left = `${positionX}vw`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    star.style.borderRadius = '50%';

    starContainer.appendChild(star);
  }
});



// Ambil elemen tombol
const linkPembelianBtn = document.getElementById('linkPembelianBtn');
const socialMediaBtn = document.getElementById('socialMediaBtn');
const comunityBtn = document.getElementById('comunityBtn');
const contactUsBtn = document.getElementById('contactUsBtn');

// Ambil elemen popup
const linkPembelianPopup = document.getElementById('linkPembelianPopup');
const socialMediaPopup = document.getElementById('socialMediaPopup');
const comunityPopup = document.getElementById('comunityPopup');
const contactUsPopup = document.getElementById('contactUsPopup');

// Ambil tombol close di popup
const closeLinkPembelianPopup = document.getElementById('closeLinkPembelianPopup');
const closeSocialMediaPopup = document.getElementById('closeSocialMediaPopup');
const closeComunityPopup = document.getElementById('closeComunityPopup');
const closeContactUsPopup = document.getElementById('closeContactUsPopup');
const closeLinkPembelianBtn = document.getElementById('closeLinkPembelianBtn');
const closeSocialMediaBtn = document.getElementById('closeSocialMediaBtn');
const closeComunityBtn = document.getElementById('closeComunityBtn');
const closeContactUsBtn = document.getElementById('closeContactUsBtn');

// Fungsi untuk membuka popup
function openPopup(popup) {
  popup.style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup(popup) {
  popup.style.display = 'none';
}

// Event listener untuk tombol buka popup
linkPembelianBtn.addEventListener('click', () => openPopup(linkPembelianPopup));
socialMediaBtn.addEventListener('click', () => openPopup(socialMediaPopup));
comunityBtn.addEventListener('click', () => openPopup(comunityPopup));
contactUsBtn.addEventListener('click', () => openPopup(contactUsPopup));

// Event listener untuk menutup popup ketika klik tombol close (baik span atau button)
closeLinkPembelianPopup.addEventListener('click', () => closePopup(linkPembelianPopup));
closeSocialMediaPopup.addEventListener('click', () => closePopup(socialMediaPopup));
closeComunityPopup.addEventListener('click', () => closePopup(comunityPopup));
closeContactUsPopup.addEventListener('click', () => closePopup(contactUsPopup));
closeLinkPembelianBtn.addEventListener('click', () => closePopup(linkPembelianPopup));
closeSocialMediaBtn.addEventListener('click', () => closePopup(socialMediaPopup));
closeComunityBtn.addEventListener('click', () => closePopup(comunityPopup));
closeContactUsBtn.addEventListener('click', () => closePopup(contactUsPopup));

// Menutup popup jika area di luar konten popup diklik
window.addEventListener('click', (event) => {
  if (event.target === linkPembelianPopup) {
    closePopup(linkPembelianPopup);
  }
  if (event.target === socialMediaPopup) {
    closePopup(socialMediaPopup);
  }
  if (event.target === comunityPopup) {
    closePopup(comunityPopup);
  }
  if (event.target === contactUsPopup) {
    closePopup(contactUsPopup);
  }
});
