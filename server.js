const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const BASE_URL = "https://api.siputzx.my.id/api/ai";

// Fungsi untuk meneruskan request ke API eksternal
const forwardRequest = async (req, res, endpoint, queryParam) => {
    try {
        const queryValue = req.query[queryParam] || req.body[queryParam];
        if (!queryValue) return res.status(400).json({ error: `${queryParam} is required` });

        const url = `${BASE_URL}/${endpoint}?${queryParam}=${encodeURIComponent(queryValue)}`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
};

// Endpoint API
app.get("/api/ai/metaai", (req, res) => forwardRequest(req, res, "metaai", "query"));
app.get("/api/ai/nous-hermes", (req, res) => forwardRequest(req, res, "nous-hermes", "content"));
app.get("/api/ai/meta-llama-33-70B-instruct-turbo", (req, res) => forwardRequest(req, res, "meta-llama-33-70B-instruct-turbo", "content"));
app.get("/api/ai/llama33", (req, res) => {
    const prompt = req.query.prompt || req.body.prompt;
    const text = req.query.text || req.body.text;
    if (!prompt || !text) return res.status(400).json({ error: "Both prompt and text are required" });

    const url = `${BASE_URL}/llama33?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(text)}`;
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).json({ error: "Server error", details: error.message }));
});

// Root route
app.get("/", (req, res) => {
    res.send("REST API is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
