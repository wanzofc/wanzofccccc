const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const BASE_URL = "https://api.siputzx.my.id/api/ai";

// Fungsi untuk meneruskan request ke API eksternal dan mengemas respons
const forwardRequest = async (req, res, endpoint, queryParam) => {
    try {
        const queryValue = req.query[queryParam] || req.body[queryParam];
        if (!queryValue) return res.status(400).json({ status: false, data: `${queryParam} is required` });

        const url = `${BASE_URL}/${endpoint}?${queryParam}=${encodeURIComponent(queryValue)}`;
        const response = await axios.get(url);

        // Debugging: Cetak respons API eksternal di console
        console.log("API Response:", response.data);

        // Coba ambil jawaban AI dengan berbagai kemungkinan format
        const aiResponse =
            response.data.data?.message || // Jika API eksternal mengembalikan { "data": { "message": "Jawaban AI" } }
            response.data.data || // Jika API eksternal mengembalikan { "data": "Jawaban AI" }
            response.data || // Jika API eksternal langsung mengembalikan "Jawaban AI"
            "No response from AI";

        res.json({
            status: true,
            data: aiResponse
        });
    } catch (error) {
        console.error("Error fetching AI response:", error.message);
        res.status(500).json({
            status: false,
            data: "Server error"
        });
    }
};

// Endpoint API
app.get("/api/ai/metaai", (req, res) => forwardRequest(req, res, "metaai", "query"));
app.get("/api/ai/nous-hermes", (req, res) => forwardRequest(req, res, "nous-hermes", "content"));
app.get("/api/ai/meta-llama-33-70B-instruct-turbo", (req, res) => forwardRequest(req, res, "meta-llama-33-70B-instruct-turbo", "content"));
app.get("/api/ai/llama33", async (req, res) => {
    const prompt = req.query.prompt || req.body.prompt;
    const text = req.query.text || req.body.text;
    if (!prompt || !text) return res.status(400).json({ status: false, data: "Both prompt and text are required" });

    try {
        const url = `${BASE_URL}/llama33?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(text)}`;
        const response = await axios.get(url);

        // Debugging: Cetak respons API eksternal di console
        console.log("API Response:", response.data);

        // Coba ambil jawaban AI dengan berbagai kemungkinan format
        const aiResponse =
            response.data.data?.message || 
            response.data.data || 
            response.data || 
            "No response from AI";

        res.json({
            status: true,
            data: aiResponse
        });
    } catch (error) {
        console.error("Error fetching AI response:", error.message);
        res.status(500).json({
            status: false,
            data: "Server error"
        });
    }
});

// Root route
app.get("/", (req, res) => {
    res.json({
        status: true,
        data: "REST API is running!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
