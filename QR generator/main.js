// Grab elements
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generate() {

    // Check that input is not empty
    if (qrText.value.length > 0) {

        // encode text so special characters and Arabic work
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

        // Reveal the QR box
        imgBox.classList.add("show");
    }
    else {
        
        // Warn if input is empty
        alert("plz, write text or put an URL!");
    }
}