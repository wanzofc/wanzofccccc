const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Endpoint API Dukun
app.get('/api/dukun', async (req, res) => {
    const text = req.query.content;

    if (!text || text.trim() === "") {
        return res.status(400).json({
            creator: "TANIA X WANZOFC",
            result: false,
            message: "Tolong tambahkan pertanyaan setelah parameter 'content'.",
            data: null
        });
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);
        const botResponse = apiResponse.data?.data || "Maaf, saya tidak bisa menjawab saat ini.";
        res.json({
            creator: "WANZOFC X TANIA",
            result: true,
            message: "sebut nama kamu",
            data: botResponse
        });
    } catch (error) {
        console.error("Error wanz:", error.message);
        res.status(500).json({
            creator: "WANZOFC X TANIA",
            result: false,
            message: "Maaf, dukun sedang bermeditasi. Coba lagi nanti.",
            data: null
        });
    }
});

// Endpoint untuk Meta AI
app.get('/api/metaai', async (req, res) => {
    const query = req.query.query;

    if (!query || query.trim() === "") {
        return res.status(400).json({
            creator: "TANIA X WANZOFC",
            result: false,
            message: "Tolong tambahkan pertanyaan setelah parameter 'query'.",
            data: null
        });
    }

    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(query)}`;
        const apiResponse = await axios.get(apiUrl);
        const botResponse = apiResponse.data?.result || "Maaf, saya tidak bisa menjawab saat ini.";
        res.json({
            creator: "WANZOFC X TANIA",
            result: true,
            message: "metaai",
            data: botResponse
        });
    } catch (error) {
        console.error("Error metaai:", error.message);
        res.status(500).json({
            creator: "WANZOFC X TANIA",
            result: false,
            message: "Maaf, Meta AI sedang bermasalah. Coba lagi nanti.",
            data: null
        });
    }
});

// Server listen
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
