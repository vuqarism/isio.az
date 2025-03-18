function sendMessage() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('phoneForm').dataset.message;

    if (!phoneNumber) {
        alert("Telefon nömrənizi daxil edin.");
        return;
    }

    var subject = encodeURIComponent("Yeni Dəstək Tələbi");
    var body = encodeURIComponent(`${message} - Müştərinin Telefon Nömrəsi: ${phoneNumber}`);
    var mailtoLink = `mailto:support@isio.az?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Bildirişi ekrana göstər
    var successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerHTML = `
        <p>İstədiyiniz qeydə alınmışdır. Ən qısa müddətdə sizinlə əlaqə saxlanılacaq.</p>
    `;
    document.body.appendChild(successMessage);

    // 5 saniyə sonra bildirişi gizlət və səhifəni yenilə
    setTimeout(function() {
        successMessage.style.display = 'none';  // Bildirişi gizlət
        location.reload();  // Səhifəni yenilə
    }, 5000);  // 5000ms = 5 saniyə
}
