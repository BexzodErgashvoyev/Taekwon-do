    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    menuBtn?.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          io.unobserve(e.target);
        }
      })
    }, { threshold: .15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

   
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');

    document.querySelectorAll('[data-photo]').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-photo');
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });
    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox();
    });

   
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.textContent = 'Yuborilmoqda...';
      setTimeout(() => {
        form.reset();
        formStatus.textContent = 'Rahmat! Arizangiz qabul qilindi.';
        setTimeout(() => formStatus.textContent = '', 4000);
      }, 900);
    });

    document.getElementById('year').textContent = new Date().getFullYear();


