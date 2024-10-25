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



 //ürünler kısmının güncel hali

const productDataIndex = {
    1: {
        title: "Çalışma Masası",
        image: "../images/urun1.jpg",
        features: [
            "Boyutlar: 120x60x75 cm",
            "Malzeme: 1. Sınıf MDF",
            "Çekmece Sayısı: 3 Adet",
            "Renk: Antrasit",
            "Özel Kablo Geçiş Sistemli"
        ],
        description: "Modern tasarımı ve fonksiyonel özellikleriyle öne çıkan çalışma masamız, home-office çalışanlar için ideal bir seçimdir.",
        
    },
    2: {
        title: "Makyaj Masası",
        image: "/images/urun2.jpg",
        features: [
            "Boyutlar: 100x40x140 cm",
            "LED Aydınlatmalı Ayna",
            "5 Çekmeceli",
            "Renk: Beyaz",
            "Oval Tasarım Ayna"
        ],
        description: "Şık tasarımı ve LED aydınlatmalı aynası ile makyaj rutininizi keyifli hale getirecek makyaj masamız.",
        
    },
    3: {
        title: "Orta Sehpa",
        image: "/images/urun3.jpg",
        features: [
            "Boyutlar: 90x90x45 cm",
            "Malzeme: Masif Ahşap",
            "Alt Raf Mevcut",
            "Renk: Ceviz",
            "Doğal Ahşap Doku"
        ],
        description: "Doğal ahşap dokusu ve modern tasarımıyla evinize şıklık katacak orta sehpamız.",
        
    },
    4: {
        title: "Yatak Odası",
        image: "/images/urun4.jpg",
        features: [
            "Boyutlar: 90x90x45 cm",
            "Malzeme: Masif Ahşap",
            "Alt Raf Mevcut",
            "Renk: Ceviz",
            "Doğal Ahşap Doku"
        ],
        description: "Doğal ahşap dokusu ve modern tasarımıyla evinize şıklık katacak orta sehpamız.",
        
    },
    5: {
        title: "Koltuk Takımı",
        image: "/images/urun5.jpg",
        features: [
            "Boyutlar: 90x90x45 cm",
            "Malzeme: Masif Ahşap",
            "Alt Raf Mevcut",
            "Renk: Ceviz",
            "Doğal Ahşap Doku"
        ],
        description: "Doğal ahşap dokusu ve modern tasarımıyla evinize şıklık katacak orta sehpamız.",
        
    },
    6: {
        title: "Zarif Yatak Odası",
        image: "/images/urun6.jpg",
        features: [
            "Boyutlar: 90x90x45 cm",
            "Malzeme: Masif Ahşap",
            "Alt Raf Mevcut",
            "Renk: Ceviz",
            "Doğal Ahşap Doku"
        ],
        description: "Doğal ahşap dokusu ve modern tasarımıyla evinize şıklık katacak orta sehpamız.",
        
    },
};


// Ürün kartlarını oluştur
function createProductCards() {
    const container = document.getElementById('productsContainerIndex');
    
    for (let id in productDataIndex) {
        const product = productDataIndex[id];
        const card = `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm position-relative overflow-hidden" style="cursor: pointer;" onclick="openModal(${id})">
                    <img src="${product.image}" class="card-img-top h-100 object-fit-cover" alt="${product.title}" style="transition: transform 0.3s ease;">
                    <div class="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-50 opacity-0 h-100" 
                             style="transition: opacity 0.3s ease;">
                        <h5 class="card-title text-white">${product.title}</h5>
                        <h7 class="card-title text-white">Ayrıntılar için tıklayınız..</h7>
                        
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    }
}

// Modal'ı aç ve içeriği güncelle
function openModal(productId) {
    const modal = document.getElementById('productModalIndex');
    const product = productData[productId];
    
    // Modal başlığını güncelle
    modal.querySelector('.modal-title').textContent = product.title;
    
    // Modal resmini güncelle
    const modalImg = modal.querySelector('.modal-image');
    modalImg.src = product.image;
    modalImg.alt = product.title;
    
    // Özellikleri güncelle
    const featuresList = modal.querySelector('.features-list ul');
    featuresList.innerHTML = product.features.map(feature => `
        <li class="list-group-item">
            <i class="fas fa-check text-success me-2"></i>${feature}
        </li>
    `).join('');
    
    // Açıklamayı güncelle
    modal.querySelector('.product-description').textContent = product.description;
    
    
    
    // Modal'ı aç
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Sayfa yüklendiğinde ürün kartlarını oluştur
document.addEventListener('DOMContentLoaded', createProductCards);