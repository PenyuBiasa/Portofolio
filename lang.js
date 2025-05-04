 const translations = {
    id: {
      title: "Halo, Saya Farrel Andika",
      subtitle: "Seorang Frontend Web Developer",
      aboutTitle: "Tentang Saya",
      aboutText: "Saya adalah seorang Frontend Web Developer pemula dengan keahlian dasar dalam HTML, CSS, dan JavaScript. Saya siap membantu membuat berbagai jenis website sederhana seperti landing page, portofolio pribadi, dan lainnya. Saya merupakan lulusan dari SMKN 2 Cikarang Barat dengan jurusan Multimedia, yang memperkuat pemahaman saya dalam desain visual dan teknologi digital.",
      projectTitle: "Projek",
      project1Title: "Landing Page Produk",
      project1Desc: "Website sederhana untuk promosi produk.",
      project2Title: "Website CV",
      project2Desc: "Website untuk menampilkan CV/Resume online.",
      serviceTitle: "Layanan",
      service1Title: "Landing Page",
      service1Desc: "Membuat landing page statis dengan desain responsif.",
      service2Title: "Convert Desain ke HTML",
      service2Desc: "Mengubah desain dari Figma ke HTML/CSS.",
      service3Title: "Website Portofolio",
      service3Desc: "Membuat halaman portofolio pribadi yang menarik.",
      contactTitle: "Kontak",
      contactText: "Hubungi saya via:",
      footerText: "© 2025 Farrel Andika. All rights reserved."
    },
    en: {
      title: "Hello, I'm Farrel Andika",
      subtitle: "A Beginner Frontend Web Developer",
      aboutTitle: "About Me",
      aboutText: "I am a beginner Frontend Web Developer skilled in basic HTML, CSS, and JavaScript. I am ready to help create simple websites like landing pages, personal portfolios, and more. I graduated from SMKN 2 Cikarang Barat majoring in Multimedia, which enhanced my understanding of visual design and digital technology.",
      projectTitle: "Projects",
      project1Title: "Product Landing Page",
      project1Desc: "A simple website for product promotion.",
      project2Title: "CV Website",
      project2Desc: "A website to showcase your resume online.",
      serviceTitle: "Services",
      service1Title: "Landing Page",
      service1Desc: "Create a static landing page with responsive design.",
      service2Title: "Design to HTML",
      service2Desc: "Convert a design from Figma to HTML/CSS.",
      service3Title: "Portfolio Website",
      service3Desc: "Build a personal portfolio page.",
      contactTitle: "Contact",
      contactText: "Contact me via:",
      footerText: "© 2025 Farrel Andika. All rights reserved."
    }
  };
  
  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  }
  
  

  