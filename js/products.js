function openModal(productId) {
    const modal = document.getElementById('productModal');
    const modalImages = modal.getElementsByClassName('modal-image');
    
    // Tüm resimleri gizle
    for (let img of modalImages) {
        img.style.display = 'none';
    }
    
    // Seçilen ürünün resmini göster
    modalImages[productId - 1].style.display = 'block';
    
    // Bootstrap modal'ı aç
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}