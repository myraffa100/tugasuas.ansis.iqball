document.getElementById('prediksiForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Ambil nilai produksi dan kebutuhan dari form
    const produksi = document.getElementById('produksi').value;
    const kebutuhan = document.getElementById('kebutuhan').value;

    try {
        // Lakukan permintaan fetch ke endpoint /predict
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ produksi, kebutuhan }),
        });

        // Periksa status respons HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Ambil data JSON dari respons
        const data = await response.json();

        // Tampilkan hasil estimasi harga di elemen dengan id 'hasil'
        document.getElementById('hasil').innerText = `Estimasi Harga: Rp ${data.harga}`;
    } catch (error) {
        // Tangkap dan tampilkan kesalahan jika ada
        console.error('Ada masalah dengan permintaan fetch:', error);
    }
});
