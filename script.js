window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 200); // muncul satu per satu
    });
  });

  let lastScrollY = window.scrollY;  // Menyimpan posisi scroll terakhir
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah: tampilkan footer
    footer.classList.add('show');
  } else {
    // Scroll ke atas: sembunyikan footer
    footer.classList.remove('show');
  }
  lastScrollY = window.scrollY;  // Update posisi scroll terakhir
});


  