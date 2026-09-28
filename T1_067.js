document.getElementById("btnMulai").addEventListener("click", function () {
    let angka = document.getElementById("angka").value;
    let jenis = document.getElementById("jenis").value;

    // Validasi
    if (angka === "" || jenis === "Semua Konversi") {
        alert("Masukkan Angka Terlebih Dahulu!");
        return;
    }

    angka = parseFloat(angka);
    let hasil;

    switch (jenis) {
        case "Celsius ke Fahrenheit":
            hasil = (9 / 5 * angka) + 32;
            break;
         case "Celsius ke Reamur":
            hasil = (4 / 5 * angka);
            break;
        case "Fahrenheit ke Celsius":
            hasil = (5 / 9 * (angka - 32));
            break;
        case "Fahrenheit ke Reamur":
            hasil = (4 / 9 * (angka - 32));
            break;
        case "Reamur ke Celsius":
            hasil = (5 / 4 * angka);
            break;
        case "Reamur ke Farenheit":
            hasil = (9 / 4 * angka) + 32;
            break;
        default:
            alert("Pilihan tidak valid!");
            return;
    }

    alert("Hasil: " + hasil + "°");
});