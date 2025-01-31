const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static(__dirname)); // Melayani index.html

app.get("/api/tiktok", async (req, res) => {
    const { url } = req.query;
    const apiUrl = `https://api.awan-attack.my.id/tiktok?url=${url}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json({
        download_url: data.video_url || "",
    });
});

app.get("/api/igdl", async (req, res) => {
    const { url } = req.query;
    const apiUrl = `https://api.awan-attack.my.id/igdl?url=${url}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json({
        download_url: data.media || "",
    });
});

app.get("/api/tiktok-search", async (req, res) => {
    const { query } = req.query;
    const apiUrl = `https://api.awan-attack.my.id/s/tiktok?query=${query}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json({ results: data.results || [] });
});

app.listen(8080, () => console.log("Server berjalan di http://localhost:8080"));
