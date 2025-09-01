const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk melayani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Endpoint untuk login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Di sini, Anda akan memverifikasi email dan kata sandi dari database Anda.
    // Untuk contoh ini, kita anggap berhasil.
    if (email && password) {
        // Contoh sederhana, asumsikan login berhasil
        res.status(200).json({ message: 'Login berhasil!' });
    } else {
        res.status(401).json({ message: 'Email atau kata sandi salah.' });
    }
});

// Endpoint untuk top up game
app.post('/api/topup', (req, res) => {
    const { gameId, userId, itemId } = req.body;

    // TODO: Di sini, Anda akan mengintegrasikan API pihak ketiga.
    // Contoh: Mengirim data ke API top up (Codashop, Itemku, dll.)
    // fetch('https://api-topup-pihak-ketiga.com/v1/purchase', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer YOUR_API_KEY'
    //     },
    //     body: JSON.stringify({ gameId, userId, itemId })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.status === 'success') {
    //         res.status(200).json({ message: 'Top up berhasil!', data });
    //     } else {
    //         res.status(400).json({ message: 'Top up gagal.', data });
    //     }
    // })
    // .catch(error => {
    //     res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    // });
    
    // Placeholder respons untuk contoh ini
    console.log(`Menerima permintaan top up untuk ${gameId} - ID: ${userId}`);
    res.status(200).json({ message: 'Permintaan top up berhasil diterima. Menunggu pemrosesan API.' });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
