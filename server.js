const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Fungsi untuk memformat teks menjadi paragraf
const formatParagraph = (text) => {
    if (!text) return "Tidak ada jawaban.";
    return text.replace(/\.\s+/g, ".\n\n");
};

// Endpoint root untuk mengecek API berjalan
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "API is running!",
        creator: "WANZOFC TECH"
    });
});

// Endpoint API Dukun
app.get('/api/dukun', async (req, res) => {
    const text = req.query.content;
    if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Tolong tambahkan parameter 'content'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "sebut nama kamu", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Dukun sedang bermeditasi." });
    }
});

// Endpoint Meta AI
app.get('/api/metaai', async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Tolong tambahkan parameter 'query'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "metaai", data: formatParagraph(data?.result) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Meta AI bermasalah." });
    }
});

// Endpoint DeepSeek LLM
app.get('/api/deepseek', async (req, res) => {
    const text = req.query.content;
    if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Tolong tambahkan parameter 'content'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "deepseek-llm", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "DeepSeek bermasalah." });
    }
});

// Endpoint Image to Text
app.get('/api/image2text', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/image2text?url=https://cataas.com/cat`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "image2text", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Image to Text bermasalah." });
    }
});

// Endpoint Gemini Pro
app.get('/api/gemini', async (req, res) => {
    const text = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "gemini-pro", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gemini Pro bermasalah." });
    }
});

// Endpoint Meta Llama 33B-70B
app.get('/api/meta-llama', async (req, res) => {
    const text = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "meta-llama", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Meta Llama bermasalah." });
    }
});

// Endpoint DBRX Instruct
app.get('/api/dbrx', async (req, res) => {
    const text = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "dbrx-instruct", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "DBRX bermasalah." });
    }
});

// Endpoint DeepSeek R1
app.get('/api/deepseek-r1', async (req, res) => {
    const text = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/deepseek-r1?content=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "deepseek-r1", data: formatParagraph(data?.data) });
    } catch (error) {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "DeepSeek R1 bermasalah." });
    }
});

// Jalankan server di port 8080
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
