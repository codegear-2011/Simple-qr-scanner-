function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    function onScanSuccess(decodeText, decodeResult) {
        // Check if the scanned text is a valid URL
        if (decodeText.startsWith("http://") || decodeText.startsWith("https://")) {
            window.location.href = decodeText; // Redirect to the URL
        } else {
            alert("Scanned QR Code: " + decodeText); // Show an alert if it's not a URL
        }
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess);
});