
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


// Modal açma ve kapatma işlemleri
const modal = document.getElementById('productModal');
const closeModalBtn = document.querySelector('.close');
const reviewButtons = document.querySelectorAll('.review-button');

// İncele butonuna tıklandığında modal gösterilecek
reviewButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productImage = this.getAttribute('data-image');
        const productDescription = this.getAttribute('data-description');

        // Resim ve açıklama modal içerisine yerleştiriliyor
        modal.querySelector('img').src = productImage;
        modal.querySelector('.description').innerText = productDescription;

        // Modal görünür yapılıyor
        modal.style.display = 'flex';
    });
});

// Modalı kapatmak için close butonuna tıklandığında
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Modal dışına tıklandığında da modal kapatılsın
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
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



