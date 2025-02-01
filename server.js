const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname)); 
const formatParagraph = (text) => text ? text.replace(/\.\s+/g, ".\n\n") : "Tidak ada jawaban.";
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/api/ai/deepseek-chat', async (req, res) => {
    const query = req.query.content || "halo";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Deepseek Chat", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Deepseek Chat bermasalah." });
    }
});
app.get('/api/ai/image2text', async (req, res) => {
    try {
        const { data } = await axios.get("https://api.siputzx.my.id/api/ai/image2text?url=https://cataas.com/cat");
        res.json({ creator: "WANZOFC TECH", result: true, message: "Image to Text", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Image to Text bermasalah." });
    }
});
app.get('/api/ai/gemini-pro', async (req, res) => {
    const query = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/gemini-pro?content=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Gemini Pro AI", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gemini Pro bermasalah." });
    }
});
app.get('/api/ai/meta-llama', async (req, res) => {
    const query = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Meta Llama", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Meta Llama bermasalah." });
    }
});
app.get('/api/ai/dbrx-instruct', async (req, res) => {
    const query = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "DBRX Instruct", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "DBRX Instruct bermasalah." });
    }
});
app.get('/api/ai/deepseek-r1', async (req, res) => {
    const query = req.query.content || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/deepseek-r1?content=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Deepseek R1", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Deepseek R1 bermasalah." });
    }
});
app.get('/api/gita', async (req, res) => {
    const query = req.query.q || "hai";
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/gita?q=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Gita AI", data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gita AI bermasalah." });
    }
});
app.get('/api/anime/latest', async (req, res) => {
    try {
        const { data } = await axios.get("https://api.siputzx.my.id/api/anime/latest");
        res.json({ creator: "WANZOFC TECH", result: true, message: "Anime Terbaru", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Anime Terbaru bermasalah." });
    }
});
app.get('/api/anime/anichin-episode', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Tolong tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/anime/anichin-episode?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Anichin Episode", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Anichin Episode bermasalah." });
    }
});
app.get('/api/d/mediafire', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "MediaFire Downloader", data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "MediaFire Downloader bermasalah." });
    }
});
app.get('/api/r/blue-archive', async (req, res) => {
    try {
        const { data } = await axios.get("https://api.siputzx.my.id/api/r/blue-archive");
        res.json({ creator: "WANZOFC TECH", result: true, message: "Random Blue Archive Image", data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil gambar Blue Archive." });
    }
});
app.get('/api/r/quotesanime', async (req, res) => {
    try {
        const { data } = await axios.get("https://api.siputzx.my.id/api/r/quotesanime");
        res.json({ creator: "WANZOFC TECH", result: true, message: "Random Anime Quotes", data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil quote anime." });
    }
});
app.get('/api/d/tiktok', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/tiktok?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "TikTok Downloader", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "TikTok Downloader bermasalah." });
    }
});
app.get('/api/d/igdl', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/igdl?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Instagram Downloader", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Instagram Downloader bermasalah." });
    }
});
app.get('/api/d/snackvideo', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/snackvideo?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "SnackVideo Downloader", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "SnackVideo Downloader bermasalah." });
    }
});
app.get('/api/d/capcut', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/capcut?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "CapCut Template Downloader", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "CapCut Template Downloader bermasalah." });
    }
});
app.get('/api/stalk/youtube', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ result: false, message: "Tambahkan parameter 'username'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/youtube?username=${encodeURIComponent(username)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "YouTube Stalker", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "YouTube Stalker bermasalah." });
    }
});
app.get('/api/stalk/tiktok', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ result: false, message: "Tambahkan parameter 'username'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${encodeURIComponent(username)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "TikTok Stalker", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "TikTok Stalker bermasalah." });
    }
});
app.get('/api/stalk/github', async (req, res) => {
    const user = req.query.user;
    if (!user) return res.status(400).json({ result: false, message: "Tambahkan parameter 'user'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/github?user=${encodeURIComponent(user)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "GitHub Stalker", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "GitHub Stalker bermasalah." });
    }
});
app.get('/api/s/tiktok', async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ result: false, message: "Tambahkan parameter 'query'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/tiktok?query=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "TikTok Search", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "TikTok Search bermasalah." });
    }
});
app.get('/api/ai/uncovr', async (req, res) => {
    const content = req.query.content;
    if (!content) return res.status(400).json({ result: false, message: "Tambahkan parameter 'content'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/uncovr?content=${encodeURIComponent(content)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "AI - Uncovr Chat", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "AI - Uncovr Chat bermasalah." });
    }
});
app.get('/api/ai/wanzofc', async (req, res) => {
    const text = req.query.text;
    if (!text) return res.status(400).json({ result: false, message: "Tambahkan parameter 'text'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/yousearch?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "AI - wanzofc", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "AI - wanzofc bermasalah." });
    }
});
app.get('/api/anime/otakudesu/search', async (req, res) => {
    const s = req.query.s;
    if (!s) return res.status(400).json({ result: false, message: "Tambahkan parameter 's'." });

    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/anime/otakudesu/search?s=${encodeURIComponent(s)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Anime - Otakudesu Search", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Anime - Otakudesu Search bermasalah." });
    }
});
app.get('/api/d/savefrom', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/savefrom?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Downloader - SaveFrom", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Downloader - SaveFrom bermasalah." });
    }
});
app.get('/api/d/github', async (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ result: false, message: "Tambahkan parameter 'url'." });
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/d/github?url=${encodeURIComponent(url)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Downloader - GitHub Repository", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Downloader - GitHub Repository bermasalah." });
    }
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
