// Ambil elemen tombol
const linkPembelianBtn = document.getElementById('linkPembelianBtn');
const socialMediaBtn = document.getElementById('socialMediaBtn');
const contactUsBtn = document.getElementById('contactUsBtn');

// Ambil elemen popup
const linkPembelianPopup = document.getElementById('linkPembelianPopup');
const socialMediaPopup = document.getElementById('socialMediaPopup');
const contactUsPopup = document.getElementById('contactUsPopup');

// Ambil tombol close di popup
const closeLinkPembelianPopup = document.getElementById('closeLinkPembelianPopup');
const closeSocialMediaPopup = document.getElementById('closeSocialMediaPopup');
const closeContactUsPopup = document.getElementById('closeContactUsPopup');
const closeLinkPembelianBtn = document.getElementById('closeLinkPembelianBtn');
const closeSocialMediaBtn = document.getElementById('closeSocialMediaBtn');
const closeContactUsBtn = document.getElementById('closeContactUsBtn');

// Ambil elemen tombol "Yakin"
const yakinLinkPembelianBtn = document.getElementById('yakinLinkPembelianBtn');

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
contactUsBtn.addEventListener('click', () => openPopup(contactUsPopup));

// Event listener untuk menutup popup ketika klik tombol close (baik span atau button)
closeLinkPembelianPopup.addEventListener('click', () => closePopup(linkPembelianPopup));
closeSocialMediaPopup.addEventListener('click', () => closePopup(socialMediaPopup));
closeContactUsPopup.addEventListener('click', () => closePopup(contactUsPopup));
closeLinkPembelianBtn.addEventListener('click', () => closePopup(linkPembelianPopup));
closeSocialMediaBtn.addEventListener('click', () => closePopup(socialMediaPopup));
closeContactUsBtn.addEventListener('click', () => closePopup(contactUsPopup));

// Event listener untuk tombol "Yakin"
yakinLinkPembelianBtn.addEventListener('click', () => {
  // Arahkan ke link tujuan
  window.location.href = 'https://maps.app.goo.gl/iwZPH4EFwhpFtcbe9';
});

// Menutup popup jika area di luar konten popup diklik
window.addEventListener('click', (event) => {
  if (event.target === linkPembelianPopup) {
    closePopup(linkPembelianPopup);
  }
  if (event.target === socialMediaPopup) {
    closePopup(socialMediaPopup);
  }
  if (event.target === contactUsPopup) {
    closePopup(contactUsPopup);
  }
});
