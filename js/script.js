
// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === "#") {
            e.preventDefault(); // Varsayılan bağlantı davranışını önle
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Yumuşak kaydırma
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    const modal = document.querySelector('.product-modal');
    const modalClose = modal.querySelector('.close-modal');
    const modalBackground = modal.querySelector('.modal-background');

    cards.forEach(card => {
        // Tüm karta tıklama eventi ekle
        card.addEventListener('click', function(e) {
            // Tıklanan kartın pozisyonunu al
            const rect = this.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Modal transform origin'i ayarla
            const transformOriginX = (rect.left + rect.width/2) + 'px';
            const transformOriginY = (rect.top + rect.height/2 - scrollTop) + 'px';
            modal.style.setProperty('--modal-transform-origin', `${transformOriginX} ${transformOriginY}`);
            
            // Modal içeriğini güncelle
            const productId = this.dataset.productId;
            const img = this.querySelector('img').src;
            const title = this.querySelector('.card-title').textContent;
            const description = this.querySelector('.card-text').textContent;
            
            modal.querySelector('.product-image img').src = img;
            modal.querySelector('.product-title').textContent = title;
            modal.querySelector('.product-description').textContent = description;
            
            // Modalı aç
            document.body.style.overflow = 'hidden';
            modal.classList.add('active');
            modal.dataset.activeCard = productId;
        });
    });

    // Modalı kapatma fonksiyonu
    function closeModal() {
        document.body.style.overflow = '';
        modal.classList.remove('active');
        setTimeout(() => {
            delete modal.dataset.activeCard;
        }, 500);
    }

    modalClose.addEventListener('click', closeModal);
    modalBackground.addEventListener('click', closeModal);
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        var navbar = document.querySelector('.custom-navbar');
        const scrollHeight = window.scrollY;

    if (scrollHeight > window.innerHeight * 0.5) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    };
});



