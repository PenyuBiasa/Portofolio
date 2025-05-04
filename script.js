window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 200); // muncul satu per satu
    });
  });

  const footer = document.getElementById('pageFooter');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;
  
    const atBottom = scrollTop + windowHeight >= documentHeight - 5;
  
    if (atBottom) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
  

  

 