// Sayfa içi anchor linkler için smooth scroll
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal açma ve kapatma işlemleri
    const modal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.close');
    const reviewButtons = document.querySelectorAll('.review-button');

    // İncele butonuna tıklandığında modal gösterilecek
    reviewButtons.forEach(button => {
        button.addEventListener('click', function() {
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
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Modal dışına tıklandığında da modal kapatılsın
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
