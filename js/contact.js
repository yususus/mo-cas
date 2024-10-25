
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


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    const formData = new FormData(this); // Form verilerini al

    fetch('/php/iletisim.php', {  // PHP dosyasının yolunu burada ayarlayın
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseMessage = document.getElementById("responseMessage");
        if (data.status === "success") {
            responseMessage.classList.remove("d-none", "alert-danger");
            responseMessage.classList.add("alert", "alert-success");
            responseMessage.textContent = data.message;

            // Formu temizle
            document.getElementById("contactForm").reset();
        } else {
            responseMessage.classList.remove("d-none", "alert-success");
            responseMessage.classList.add("alert", "alert-danger");
            responseMessage.textContent = data.message;
        }
    })
    .catch(error => console.error("Form gönderme hatası:", error));
});


