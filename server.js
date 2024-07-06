const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/predict', (req, res) => {
    const { produksi, kebutuhan } = req.body;

    const prediksiHarga = fuzzyInferenceSystem(produksi, kebutuhan);

    res.json({ harga: prediksiHarga });
});

function fuzzyInferenceSystem(produksi, kebutuhan) {
    // Implementasi logika fuzzy sederhana
    let harga;
    if (produksi < 50 && kebutuhan < 50) {
        harga = 5000;
    } else if (produksi < 50 && kebutuhan >= 50) {
        harga = 10000;
    } else if (produksi >= 50 && kebutuhan < 50) {
        harga = 8000;
    } else {
        harga = 15000;
    }
    return harga;
}

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
