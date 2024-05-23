document.addEventListener("DOMContentLoaded", function () {
  
    // Menghitung luas dan keliling
    // Fungsi untuk menghitung Luas Segitiga
    function hitungLuasSegitiga(alas, tinggi) {
      return 0.5 * alas * tinggi;
    }
  
    // Fungsi untuk menghitung Keliling Segitiga
    function hitungKelilingSegitiga(sisi1, sisi2, sisi3) {
      return sisi1 + sisi2 + sisi3;
    }
  
    // Event listener untuk submit luas
    document
      .getElementById("luas-segitiga")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);
        const hasil = hitungLuasSegitiga(alas, tinggi);
        document.getElementById(
          "result-luas-segitiga"
        ).innerText = `L = 1/2 x a x t
L = 1/2 x ${alas} x ${tinggi}
L = ${hasil}`;
      });
  
    // Event listener untuk submit keliling
    document
      .getElementById("keliling-segitiga")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const sisi1 = parseFloat(document.getElementById("sisi1").value);
        const sisi2 = parseFloat(document.getElementById("sisi2").value);
        const sisi3 = parseFloat(document.getElementById("sisi3").value);
        const hasil = hitungKelilingSegitiga(sisi1, sisi2, sisi3);
        document.getElementById(
          "result-keliling-segitiga"
        ).innerText = `K = S1 + S2 + S3
K = ${sisi1} + ${sisi2} + ${sisi3}
K = ${hasil}`;
      });

});

// Reset element ID hasil luas segitiga
function showluassegitiga(flag) {
    document.getElementById('result-luas-segitiga').style.display = flag === 1 ? 'block' : 'none';
}

// Reset element ID hasil keliling segitiga
function showkelilingsegitiga(flag) {
    document.getElementById('result-keliling-segitiga').style.display = flag === 1 ? 'block' : 'none';
}