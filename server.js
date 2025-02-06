const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname)); 
const formatParagraph = (text) => text ? text.replace(/\.\s+/g, ".\n\n") : "Tidak ada jawaban.";
app.get("/kebijakan", (req, res) => {
    res.sendFile(path.join(__dirname, "kebijakan.html"));
});
app.get("/docs", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/daftar', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
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
        res.json
           ({ creator: "WANZOFC TECH",
             result: true, message: "Gemini Pro AI",
             data: formatParagraph(data?.data) });
    } catch {
        res.status(500).json
            ({ creator: "WANZOFC TECH",
              result: false, 
              message: "Gemini Pro bermasalah." });
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
app.get('/api/info/jadwaltv', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/info/jadwaltv`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Informasi - Jadwal TV", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Informasi - Jadwal TV bermasalah." });
    }
});
app.get('/api/info/liburnasional', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/info/liburnasional`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Informasi - Hari Libur Nasional", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Informasi - Hari Libur Nasional bermasalah." });
    }
});
app.get('/api/info/bmkg', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/info/bmkg`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Informasi - BMKG", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Informasi - BMKG bermasalah." });
    }
});
app.get('/api/info/cuaca', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/info/cuaca`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Informasi - Cuaca", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Informasi - Cuaca bermasalah." });
    }
});
app.get('/api/s/gitagram', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/gitagram`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Search - Gitagram", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Search - Gitagram bermasalah." });
    }
});
app.get('/api/s/duckduckgo', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/duckduckgo`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Search - DuckDuckGo", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Search - DuckDuckGo bermasalah." });
    }
});
app.get('/api/s/combot', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/combot`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Search - Combot", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Search - Combot bermasalah." });
    }
});
app.get('/api/s/bukalapak', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/bukalapak`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Search - Bukalapak", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Search - Bukalapak bermasalah." });
    }
});
app.get('/api/s/brave', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/brave`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Search - Brave", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Search - Brave bermasalah." });
    }
});
app.get('/api/berita/kompas', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/kompas`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Kompas", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Kompas bermasalah." });
    }
});
app.get('/api/berita/jkt48', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/jkt48`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - JKT48", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - JKT48 bermasalah." });
    }
});
app.get('/api/berita/cnn', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/cnn`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - CNN", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - CNN bermasalah." });
    }
});
app.get('/api/berita/cnbcindonesia', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/cnbcindonesia`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - CNBC Indonesia", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - CNBC Indonesia bermasalah." });
    }
});
app.get('/api/berita/antara', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/antara`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Antara", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Antara bermasalah." });
    }
});
app.get('/api/berita/tribunnews', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/tribunnews`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Tribunnews", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Tribunnews bermasalah." });
    }
});
app.get('/api/berita/suara', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/suara`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Suara", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Suara bermasalah." });
    }
});
app.get('/api/berita/merdeka', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/merdeka`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Merdeka", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Merdeka bermasalah." });
    }
});
app.get('/api/berita/sindonews', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/sindonews`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Sindonews", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Sindonews bermasalah." });
    }
});
app.get('/api/berita/liputan6', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/berita/liputan6`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Berita - Liputan6", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Berita - Liputan6 bermasalah." });
    }
});
app.get('/api/apk/playstore', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/apk/playstore`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "APK - Play Store", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data dari Play Store." });
    }
});
app.get('/api/apk/happymod', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/apk/happymod`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "APK - HappyMod", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data dari HappyMod." });
    }
});
app.get('/api/apk/appstore', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/apk/appstore`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "APK - App Store", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data dari App Store." });
    }
});
app.get('/api/apk/apkpure', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/apk/apkpure`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "APK - APKPure", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data dari APKPure." });
    }
});
app.get('/api/apk/apkmody', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.siputzx.my.id/api/apk/apkmody`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "APK - APKMody", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data dari APKMody." });
    }
});
app.get('/api/tools/subdomains', async (req, res) => {
    try {
        const domain = req.query.domain;
        if (!domain) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter domain!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/subdomains?domain=${encodeURIComponent(domain)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: `Subdomain Scanner untuk ${domain}`, data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan data subdomain." });
    }
});
app.get('/api/tools/text2base64', async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan teks untuk dikonversi!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/text2base64?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Text to Base64", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengonversi teks ke Base64." });
    }
});
app.get('/api/tools/text2qr', async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan teks untuk dikonversi!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Text to QR Code", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengonversi teks ke QR Code." });
    }
});
app.get('/api/tools/translate', async (req, res) => {
    try {
        const text = req.query.text;
        const lang = req.query.lang || "en"; // Default English jika tidak ada parameter lang
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan teks untuk diterjemahkan!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/translate?text=${encodeURIComponent(text)}&lang=${lang}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Text Translation", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal menerjemahkan teks." });
    }
});
app.get('/api/ai/lepton', async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter text!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/lepton?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Lepton AI Response", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan respons dari Lepton AI." });
    }
});
app.get('/api/ai/gpt3', async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const content = req.query.content;
        if (!prompt || !content) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter prompt dan content!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(prompt)}&content=${encodeURIComponent(content)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "GPT-3 AI Response", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan respons dari GPT-3 AI." });
    }
});
app.get('/api/r/waifu', async (req, res) => {
    try {
        const { data } = await axios.get("https://api.siputzx.my.id/api/r/waifu");
        res.json({ creator: "WANZOFC TECH", result: true, message: "Random Waifu Image", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan waifu random." });
    }
});
app.get('/api/cf/sentiment', async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter text!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/cf/sentiment?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Sentiment Analysis Result", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan hasil analisis sentimen." });
    }
});
app.get('/api/cf/image-classification', async (req, res) => {
    try {
        const imageUrl = req.query.imageUrl;
        if (!imageUrl) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter imageUrl!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/cf/image-classification?imageUrl=${encodeURIComponent(imageUrl)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Image Classification Result", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengklasifikasikan gambar." });
    }
});
app.get('/api/cf/embedding', async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter text!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/cf/embedding?text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Text Embedding Result", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan embedding teks." });
    }
});
app.get('/api/cf/chat', async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const system = req.query.system;
        if (!prompt || !system) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter prompt dan system!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/cf/chat?prompt=${encodeURIComponent(prompt)}&system=${encodeURIComponent(system)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Cloudflare AI Chat Response", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan respons dari chatbot AI." });
    }
});
app.get('/api/ai/qwen257b', async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const text = req.query.text;
        if (!prompt || !text) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter prompt dan text!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/qwen257b?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(text)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Qwen 257B AI Response", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan respons dari AI Qwen 257B." });
    }
});
app.get('/api/ai/qwq-32b-preview', async (req, res) => {
    try {
        const content = req.query.content;
        if (!content) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter content!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/qwq-32b-preview?content=${encodeURIComponent(content)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "QWQ 32B AI Response", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan respons dari AI QWQ 32B." });
    }
});
app.get('/api/s/pinterest', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Hasil pencarian Pinterest", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan hasil dari Pinterest." });
    }
});
app.get('/api/s/soundcloud', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/soundcloud?query=${encodeURIComponent(query)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Hasil pencarian SoundCloud", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan hasil dari SoundCloud." });
    }
});
app.get('/api/stalk/npm', async (req, res) => {
    try {
        const packageName = req.query.packageName;
        if (!packageName) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter packageName!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/stalk/npm?packageName=${encodeURIComponent(packageName)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Informasi NPM Package", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan informasi dari NPM." });
    }
});
app.get('/api/ai/stabilityai', async (req, res) => {
    try {
        const prompt = req.query.prompt;
        if (!prompt) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter prompt!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(prompt)}`);
        res.json({ creator: "WANZOFC TECH", result: true, message: "Gambar dari Stability AI", data: data });
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mendapatkan gambar dari Stability AI." });
    }
});
app.get('/api/s/wikipedia', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/wikipedia?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Wikipedia." });
    }
});
app.get('/api/s/spotify', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/s/spotify?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Spotify." });
    }
});
app.get('/api/tools/fake-data', async (req, res) => {
    try {
        const type = req.query.type || "person";
        const count = req.query.count || 5;

        const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/fake-data?type=${type}&count=${count}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil fake data." });
    }
});
app.get('/api/primbon/cek_potensi_penyakit', async (req, res) => {
    try {
        const { tgl, bln, thn } = req.query;
        if (!tgl || !bln || !thn) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter tgl, bln, dan thn!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/cek_potensi_penyakit?tgl=${tgl}&bln=${bln}&thn=${thn}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Primbon Penyakit." });
    }
});
app.get('/api/primbon/ramalanjodoh', async (req, res) => {
    try {
        const { nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2 } = req.query;
        if (!nama1 || !tgl1 || !bln1 || !thn1 || !nama2 || !tgl2 || !bln2 || !thn2)
            return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan semua parameter yang diperlukan!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/ramalanjodoh?nama1=${encodeURIComponent(nama1)}&tgl1=${tgl1}&bln1=${bln1}&thn1=${thn1}&nama2=${encodeURIComponent(nama2)}&tgl2=${tgl2}&bln2=${bln2}&thn2=${thn2}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Ramalan Jodoh." });
    }
});
app.get('/api/primbon/rejeki_hoki_weton', async (req, res) => {
    try {
        const { tgl, bln, thn } = req.query;
        if (!tgl || !bln || !thn) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter tgl, bln, dan thn!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/rejeki_hoki_weton?tgl=${tgl}&bln=${bln}&thn=${thn}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Rejeki Weton." });
    }
});
app.get('/api/primbon/sifat_usaha_bisnis', async (req, res) => {
    try {
        const { tgl, bln, thn } = req.query;
        if (!tgl || !bln || !thn) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter tgl, bln, dan thn!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/sifat_usaha_bisnis?tgl=${tgl}&bln=${bln}&thn=${thn}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Sifat Usaha." });
    }
});
app.get('/api/primbon/tafsirmimpi', async (req, res) => {
    try {
        const mimpi = req.query.mimpi;
        if (!mimpi) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter mimpi!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/tafsirmimpi?mimpi=${encodeURIComponent(mimpi)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Tafsir Mimpi." });
    }
});
app.get('/api/primbon/artinama', async (req, res) => {
    try {
        const nama = req.query.nama;
        if (!nama) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter nama!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/artinama?nama=${encodeURIComponent(nama)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Arti Nama." });
    }
});

app.get('/api/primbon/kecocokan_nama_pasangan', async (req, res) => {
    try {
        const { nama1, nama2 } = req.query;
        if (!nama1 || !nama2) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter nama1 dan nama2!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/kecocokan_nama_pasangan?nama1=${encodeURIComponent(nama1)}&nama2=${encodeURIComponent(nama2)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Kecocokan Nama Pasangan." });
    }
});

app.get('/api/primbon/nomorhoki', async (req, res) => {
    try {
        const phoneNumber = req.query.phoneNumber;
        if (!phoneNumber) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter phoneNumber!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/nomorhoki?phoneNumber=${phoneNumber}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Nomor Hoki." });
    }
});

app.get('/api/primbon/zodiak', async (req, res) => {
    try {
        const zodiak = req.query.zodiak;
        if (!zodiak) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter zodiak!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/primbon/zodiak?zodiak=${encodeURIComponent(zodiak)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Zodiak." });
    }
});
app.get('/api/ai/metaai', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Meta AI." });
    }
});

app.get('/api/ai/ustadz', async (req, res) => {
    try {
        const query = req.query.query;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter query!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/muslimai?query=${encodeURIComponent(query)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data USTADZ AI." });
    }
});

app.get('/api/ai/khodam', async (req, res) => {
    try {
        const content = req.query.content;
        if (!content) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter content!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/dukun?content=${encodeURIComponent(content)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data Khodam AI." });
    }
});
app.get('/api/ai/wanzofc-you', async (req, res) => {
    try {
        const q = req.query.q;
        if (!q) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter q!" });
        const { data } = await axios.get(`https://api.neoxr.eu/api/you?q=${encodeURIComponent(q)}&apikey=PJaLJu`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data dari wanzofc You." });
    }
});
app.get('/api/ai/wanzofc-llama', async (req, res) => {
    try {
        const q = req.query.q;
        if (!q) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter q!" });
        const { data } = await axios.get(`https://api.neoxr.eu/api/llama?q=${encodeURIComponent(q)}&apikey=PJaLJu`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data dari wanzofc Llama." });
    }
});
app.get('/api/ai/meta-llama', async (req, res) => {
    try {
        const content = req.query.content;
        if (!content) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter content!" });

        const { data } = await axios.get(`https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(content)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data dari Meta LLaMA." });
    }
});
app.get('/api/search/xnxx', async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ creator: "WANZOFC TECH", result: false, message: "Harap masukkan parameter q!" });

        const { data } = await axios.get(`https://archive-ui.tanakadomp.biz.id/search/xnxx?q=${encodeURIComponent(query)}`);
        res.json(data);
    } catch {
        res.status(500).json({ creator: "WANZOFC TECH", result: false, message: "Gagal mengambil data dari XNXX." });
    }
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});
app.use((req, res) => {
  res.status(500).json(path.join(__dirname, '404.html'));
});
        
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
