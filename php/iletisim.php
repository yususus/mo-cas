<?php
// Form gönderildiğinde işlemi başlat
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);  // Kullanıcının e-posta adresi
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Verilerin boş olup olmadığını ve e-posta adresinin geçerli olup olmadığını kontrol et
    if (!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($subject) && !empty($message)) {
        // Gönderilecek e-posta adresi
        $to = "yusiletisim@gmail.com"; // Buraya kendi e-posta adresinizi yazın

        // E-posta başlığı
        $email_subject = "Yeni İletişim Mesajı: $subject";

        // E-posta içeriği
        $email_body = "İsim Soyisim: $name\n";
        $email_body .= "E-posta: $email\n";
        $email_body .= "Mesaj:\n$message";

        // E-posta başlıkları
        $headers = "From: no-reply@yourdomain.com\r\n"; // Gönderici e-posta adresi
        $headers .= "Reply-To: $email\r\n";  // Yanıt gönderilecek e-posta adresi

        // E-posta gönderme
        if (mail($to, $email_subject, $email_body, $headers)) {
            // Başarı durumu
            $response = "Mesajınız başarıyla gönderildi.";
            $status = "success";
        } else {
            // Hata durumu
            $response = "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.";
            $status = "error";
        }
    } else {
        // Form alanları boşsa veya e-posta geçersizse hata döndür
        $response = "Lütfen tüm alanları doldurun ve geçerli bir e-posta adresi girin.";
        $status = "error";
    }
    
    // Yanıtı JSON olarak döndür
    echo json_encode(['status' => $status, 'message' => $response]);
}
?>
