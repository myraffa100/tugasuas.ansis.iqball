document.getElementById('prediksiForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const produksi = document.getElementById('produksi').value;
    const kebutuhan = document.getElementById('kebutuhan').value;

    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ produksi, kebutuhan }),
    });

    const data = await response.json();
    document.getElementById('hasil').innerText = `Estimasi Harga: Rp ${data.harga}`;
});


const response = await fetch('/predict', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ produksi, kebutuhan }),
});

if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();
document.getElementById('hasil').innerText = `Estimasi Harga: Rp ${data.harga}`;
