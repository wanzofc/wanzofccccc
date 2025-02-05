const express = require('express');
const axios = require('axios');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname)); 
const formatParagraph = (text) => text ? text.replace(/\.\s+/g, ".\n\n") : "Tidak ada jawaban.";
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API WANZOFC TECH',
            version: '1.0.0',
            description: 'Kumpulan API dari WanzoFC Tech. Temukan berbagai endpoint untuk AI, anime, dan lain-lain.',
        },
        servers: [
            {
                url: 'https://wanzofc.us.kg', // Ganti dengan URL server Anda jika perlu
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                ApiResponse: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            description: 'Status dari response',
                        },
                        message: {
                            type: 'string',
                            description: 'Pesan response',
                        },
                        data: {
                            type: 'object', // Atau 'array', sesuai struktur data Anda
                            description: 'Data yang dikembalikan oleh API',
                        },
                    },
                },
                ErrorResponse: {
                    type: 'object',
                    properties: {
                        error: {
                            type: 'string',
                            description: 'Pesan error',
                        },
                    },
                },
            },
        },
    },
    apis: [__filename], // Use the current file to find API comments
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/ai/deepseek-chat:
 *   get:
 *     summary: AI - Deepseek Chat
 *     description: Menghasilkan teks dengan model Deepseek Chat.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Deepseek Chat.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/deepseek-chat', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Deepseek Chat response', data: { response: 'Sample text' } });
});

/**
 * @swagger
 * /api/ai/image2text:
 *   get:
 *     summary: AI - Image to Text
 *     description: Mengubah gambar menjadi teks.
 *     responses:
 *       200:
 *         description: Teks berhasil diekstrak dari gambar.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/image2text', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Image to Text response', data: { text: 'Sample text from image' } });
});

/**
 * @swagger
 * /api/ai/gemini-pro:
 *   get:
 *     summary: AI - Gemini Pro
 *     description: Menghasilkan teks dengan model Gemini Pro.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Gemini Pro.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/gemini-pro', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Gemini Pro response', data: { response: 'Sample text from Gemini' } });
});

/**
 * @swagger
 * /api/ai/meta-llama:
 *   get:
 *     summary: AI - Meta Llama
 *     description: Menghasilkan teks dengan model Meta Llama.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Meta Llama.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/meta-llama', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Meta Llama response', data: { response: 'Sample text from Meta Llama' } });
});

/**
 * @swagger
 * /api/ai/dbrx-instruct:
 *   get:
 *     summary: AI - DBRX Instruct
 *     description: Menghasilkan teks dengan model DBRX Instruct.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model DBRX Instruct.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/dbrx-instruct', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'DBRX Instruct response', data: { response: 'Sample text from DBRX' } });
});

/**
 * @swagger
 * /api/ai/deepseek-r1:
 *   get:
 *     summary: AI - Deepseek R1
 *     description: Menghasilkan teks dengan model Deepseek R1.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Deepseek R1.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/deepseek-r1', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Deepseek R1 response', data: { response: 'Sample text from R1' } });
});

/**
 * @swagger
 * /api/gita:
 *   get:
 *     summary: AI - Gita
 *     description: Menghasilkan teks dari Gita.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk Gita.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/gita', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Gita response', data: { response: 'Sample text from Gita' } });
});

/**
 * @swagger
 * /api/ai/uncovr:
 *   get:
 *     summary: AI - Uncovr Chat
 *     description: Menghasilkan teks dengan model Uncovr.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Uncovr.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/uncovr', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Uncovr Chat response', data: { response: 'Sample text from Uncovr' } });
});

/**
 * @swagger
 * /api/ai/wanzofc:
 *   get:
 *     summary: AI - wanzofc
 *     description: Menghasilkan teks dengan model wanzofc.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model wanzofc.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/wanzofc', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Wanzofc response', data: { response: 'Sample text from Wanzofc' } });
});

/**
 * @swagger
 * /api/ai/lepton:
 *   get:
 *     summary: AI - Lepton
 *     description: Menghasilkan teks dengan model Lepton.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Lepton.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/lepton', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Lepton response', data: { response: 'Sample text from Lepton' } });
});

/**
 * @swagger
 * /api/ai/gpt3:
 *   get:
 *     summary: AI - GPT-3
 *     description: Menghasilkan teks dengan model GPT-3.
 *     parameters:
 *       - in: query
 *         name: prompt
 *         schema:
 *           type: string
 *         description: Prompt utama untuk GPT-3.
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Isi konten untuk GPT-3.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/gpt3', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'GPT-3 response', data: { response: 'Sample text from GPT-3' } });
});

/**
 * @swagger
 * /api/ai/qwen257b:
 *   get:
 *     summary: AI - Qwen 257B
 *     description: Menghasilkan teks dengan model Qwen 257B.
 *     parameters:
 *       - in: query
 *         name: prompt
 *         schema:
 *           type: string
 *         description: Prompt utama untuk Qwen 257B.
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Isi konten untuk Qwen 257B.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/qwen257b', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Qwen 257B response', data: { response: 'Sample text from Qwen' } });
});

/**
 * @swagger
 * /api/ai/qwq-32b-preview:
 *   get:
 *     summary: AI - QWQ 32B
 *     description: Menghasilkan teks dengan model QWQ 32B.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model QWQ 32B.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/qwq-32b-preview', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'QWQ 32B response', data: { response: 'Sample text from QWQ' } });
});

/**
 * @swagger
 * /api/ai/stabilityai:
 *   get:
 *     summary: AI - Stability AI (Image Generation)
 *     description: Menghasilkan gambar dengan model Stability AI.
 *     parameters:
 *       - in: query
 *         name: prompt
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk menghasilkan gambar.
 *     responses:
 *       200:
 *         description: Gambar berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/stabilityai', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Stability AI response', data: { image_url: 'URL to generated image' } });
});

/**
 * @swagger
 * /api/ai/metaai:
 *   get:
 *     summary: AI - Meta AI
 *     description: Menghasilkan teks dengan model Meta AI.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Meta AI.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/metaai', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Meta AI response', data: { response: 'Sample text from Meta AI' } });
});

/**
 * @swagger
 * /api/ai/ustadz:
 *   get:
 *     summary: AI - Ustadz AI
 *     description: Menghasilkan teks dengan model Ustadz AI.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Ustadz AI.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/ustadz', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Ustadz AI response', data: { response: 'Sample text from Ustadz AI' } });
});

/**
 * @swagger
 * /api/ai/khodam:
 *   get:
 *     summary: AI - Cekhodam
 *     description: Cek khodam kamu.
 *     parameters:
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama yang ingin dicek khodamnya.
 *     responses:
 *       200:
 *         description: Hasil cek khodam berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/khodam', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Cek Khodam response', data: { khodam: 'Sample Khodam Name' } });
});

/**
 * @swagger
 * /api/ai/wanzofc-llama:
 *   get:
 *     summary: AI - Llama
 *     description: Menghasilkan teks dengan model Llama AI.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model Llama AI.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/wanzofc-llama', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Llama AI response', data: { response: 'Sample text from Llama' } });
});

/**
 * @swagger
 * /api/ai/wanzofc-you:
 *   get:
 *     summary: AI - YOU
 *     description: Menghasilkan teks dengan model You AI.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks prompt untuk model You AI.
 *     responses:
 *       200:
 *         description: Teks berhasil dihasilkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/ai/wanzofc-you', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'You AI response', data: { response: 'Sample text from You AI' } });
});

/**
 * @swagger
 * /api/anime/latest:
 *   get:
 *     summary: Anime - Terbaru
 *     description: Mendapatkan daftar anime terbaru.
 *     responses:
 *       200:
 *         description: Daftar anime terbaru berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/anime/latest', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Latest Anime response', data: { animeList: ['Anime 1', 'Anime 2'] } });
});

/**
 * @swagger
 * /api/anime/anichin-episode:
 *   get:
 *     summary: Anime - Anichin Episode
 *     description: Mendapatkan episode dari Anichin.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL dari halaman episode Anichin.
 *     responses:
 *       200:
 *         description: Episode dari Anichin berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/anime/anichin-episode', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Anichin Episode response', data: { episode_url: 'URL to episode' } });
});

/**
 * @swagger
 * /api/anime/otakudesu/search:
 *   get:
 *     summary: Anime - Otakudesu Search
 *     description: Mencari anime di Otakudesu.
 *     parameters:
 *       - in: query
 *         name: s
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian anime.
 *     responses:
 *       200:
 *         description: Hasil pencarian anime dari Otakudesu berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/anime/otakudesu/search', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Otakudesu Search response', data: { search_results: ['Anime Result 1', 'Anime Result 2'] } });
});

/**
 * @swagger
 * /api/berita/kompas:
 *   get:
 *     summary: Berita - Kompas
 *     description: Mendapatkan berita dari Kompas.
 *     responses:
 *       200:
 *         description: Berita dari Kompas berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/kompas', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Kompas News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/jkt48:
 *   get:
 *     summary: Berita - JKT48
 *     description: Mendapatkan berita tentang JKT48.
 *     responses:
 *       200:
 *         description: Berita tentang JKT48 berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/jkt48', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'JKT48 News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/cnn:
 *   get:
 *     summary: Berita - CNN
 *     description: Mendapatkan berita dari CNN.
 *     responses:
 *       200:
 *         description: Berita dari CNN berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/cnn', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'CNN News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/cnbcindonesia:
 *   get:
 *     summary: Berita - CNBC Indonesia
 *     description: Mendapatkan berita dari CNBC Indonesia.
 *     responses:
 *       200:
 *         description: Berita dari CNBC Indonesia berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/cnbcindonesia', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'CNBC Indonesia News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/antara:
 *   get:
 *     summary: Berita - Antara
 *     description: Mendapatkan berita dari Antara.
 *     responses:
 *       200:
 *         description: Berita dari Antara berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/antara', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Antara News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/tribunnews:
 *   get:
 *     summary: Berita - Tribunnews
 *     description: Mendapatkan berita dari Tribunnews.
 *     responses:
 *       200:
 *         description: Berita dari Tribunnews berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/tribunnews', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Tribunnews response', data: { articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/suara:
 *   get:
 *     summary: Berita - Suara
 *     description: Mendapatkan berita dari Suara.
 *     responses:
 *       200:
 *         description: Berita dari Suara berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/suara', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Suara News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/merdeka:
 *   get:
 *     summary: Berita - Merdeka
 *     description: Mendapatkan berita dari Merdeka.
 *     responses:
 *       200:
 *         description: Berita dari Merdeka berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/merdeka', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Merdeka News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/sindonews:
 *   get:
 *     summary: Berita - Sindonews
 *     description: Mendapatkan berita dari Sindonews.
 *     responses:
 *       200:
 *         description: Berita dari Sindonews berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/sindonews', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Sindonews response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/berita/liputan6:
 *   get:
 *     summary: Berita - Liputan6
 *     description: Mendapatkan berita dari Liputan6.
 *     responses:
 *       200:
 *         description: Berita dari Liputan6 berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/berita/liputan6', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Liputan6 News response', data: { news_articles: ['Article 1', 'Article 2'] } });
});

/**
 * @swagger
 * /api/d/mediafire:
 *   get:
 *     summary: Downloader - Mediafire
 *     description: Mengunduh file dari Mediafire.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL file Mediafire yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi unduhan Mediafire berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/mediafire', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Mediafire Download response', data: { file_url: 'URL to downloaded file' } });
});

/**
 * @swagger
 * /api/d/tiktok:
 *   get:
 *     summary: Downloader - TikTok
 *     description: Mengunduh video dari TikTok.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL video TikTok yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi video TikTok berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/tiktok', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'TikTok Download response', data: { video_url: 'URL to downloaded video' } });
});

/**
 * @swagger
 * /api/d/igdl:
 *   get:
 *     summary: Downloader - Instagram
 *     description: Mengunduh gambar/video dari Instagram.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL postingan Instagram yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi media Instagram berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/igdl', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Instagram Download response', data: { media_url: 'URL to downloaded media' } });
});

/**
 * @swagger
 * /api/d/snackvideo:
 *   get:
 *     summary: Downloader - SnackVideo
 *     description: Mengunduh video dari SnackVideo.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL video SnackVideo yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi video SnackVideo berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/snackvideo', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'SnackVideo Download response', data: { video_url: 'URL to downloaded video' } });
});

/**
 * @swagger
 * /api/d/capcut:
 *   get:
 *     summary: Downloader - CapCut Template
 *     description: Mengunduh template dari CapCut.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL template CapCut yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi template CapCut berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/capcut', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'CapCut Template Download response', data: { template_url: 'URL to downloaded template' } });
});

/**
 * @swagger
 * /api/d/savefrom:
 *   get:
 *     summary: Downloader - SaveFrom
 *     description: Mengunduh dari SaveFrom.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL yang akan diunduh menggunakan SaveFrom.
 *     responses:
 *       200:
 *         description: Informasi unduhan dari SaveFrom berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/savefrom', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'SaveFrom Download response', data: { download_url: 'URL to downloaded resource' } });
});

/**
 * @swagger
 * /api/d/github:
 *   get:
 *     summary: Downloader - GitHub Repository
 *     description: Mengunduh repository GitHub.
 *     parameters:
 *       - in: query
 *         name: url
 *         schema:
 *           type: string
 *         required: true
 *         description: URL repository GitHub yang akan diunduh.
 *     responses:
 *       200:
 *         description: Informasi unduhan repository GitHub berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/d/github', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'GitHub Download response', data: { repository_url: 'URL to downloaded repository' } });
});

/**
 * @swagger
 * /api/r/blue-archive:
 *   get:
 *     summary: Random - Blue Archive Image
 *     description: Mendapatkan gambar acak Blue Archive.
 *     responses:
 *       200:
 *         description: Gambar acak Blue Archive berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/r/blue-archive', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Random Blue Archive Image response', data: { image_url: 'URL to random image' } });
});

/**
 * @swagger
 * /api/r/waifu:
 *   get:
 *     summary: Random - Waifu
 *     description: Mendapatkan gambar acak waifu.
 *     responses:
 *       200:
 *         description: Gambar acak waifu berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/r/waifu', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Random Waifu Image response', data: { image_url: 'URL to random waifu image' } });
});

/**
 * @swagger
 * /api/r/quotesanime:
 *   get:
 *     summary: Random - Anime Quotes
 *     description: Mendapatkan quotes anime acak.
 *     responses:
 *       200:
 *         description: Quotes anime acak berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/r/quotesanime', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Random Anime Quote response', data: { quote: 'Sample anime quote' } });
});

/**
 * @swagger
 * /api/stalk/youtube:
 *   get:
 *     summary: Stalker - YouTube
 *     description: Mendapatkan info profil YouTube.
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username YouTube yang ingin distalk.
 *     responses:
 *       200:
 *         description: Info profil YouTube berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/stalk/youtube', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'YouTube Profile response', data: { profile_info: { username: 'Sample YouTube Username' } } });
});

/**
 * @swagger
 * /api/stalk/tiktok:
 *   get:
 *     summary: Stalker - TikTok
 *     description: Mendapatkan info profil TikTok.
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: Username TikTok yang ingin distalk.
 *     responses:
 *       200:
 *         description: Info profil TikTok berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/stalk/tiktok', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'TikTok Profile response', data: { profile_info: { username: 'Sample TikTok Username' } } });
});

/**
 * @swagger
 * /api/stalk/github:
 *   get:
 *     summary: Stalker - GitHub
 *     description: Mendapatkan info profil GitHub.
 *     parameters:
 *       - in: query
 *         name: user
 *         schema:
 *           type: string
 *         required: true
 *         description: Username GitHub yang ingin distalk.
 *     responses:
 *       200:
 *         description: Info profil GitHub berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/stalk/github', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'GitHub Profile response', data: { profile_info: { username: 'Sample GitHub Username' } } });
});

/**
 * @swagger
 * /api/stalk/npm:
 *   get:
 *     summary: Stalk - NPM
 *     description: Mendapatkan info paket NPM.
 *     parameters:
 *       - in: query
 *         name: packageName
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama paket NPM yang ingin distalk.
 *     responses:
 *       200:
 *         description: Info paket NPM berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/stalk/npm', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'NPM Package response', data: { package_info: { package_name: 'Sample NPM Package' } } });
});

/**
 * @swagger
 * /api/s/pinterest:
 *   get:
 *     summary: Search - Pinterest
 *     description: Mencari gambar di Pinterest.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian di Pinterest.
 *     responses:
 *       200:
 *         description: Hasil pencarian Pinterest berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/pinterest', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Pinterest Search response', data: { image_results: ['Image URL 1', 'Image URL 2'] } });
});

/**
 * @swagger
 * /api/s/soundcloud:
 *   get:
 *     summary: Search - SoundCloud
 *     description: Mencari musik di SoundCloud.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian di SoundCloud.
 *     responses:
 *       200:
 *         description: Hasil pencarian SoundCloud berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/soundcloud', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'SoundCloud Search response', data: { song_results: ['Song URL 1', 'Song URL 2'] } });
});

/**
 * @swagger
 * /api/s/gitagram:
 *   get:
 *     summary: Search - Gitagram
 *     description: Mencari di Gitagram.
 *     responses:
 *       200:
 *         description: Hasil pencarian Gitagram berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/gitagram', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Gitagram Search response', data: { search_results: ['Result 1', 'Result 2']}});
});

/**
 * @swagger
 * /api/s/duckduckgo:
 *   get:
 *     summary: Search - DuckDuckGo
 *     description: Mencari di DuckDuckGo.
 *     responses:
 *       200:
 *         description: Hasil pencarian DuckDuckGo berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/duckduckgo', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'DuckDuckGo Search response', data: { search_results: ['Result 1', 'Result 2']}});
});

/**
 * @swagger
 * /api/s/combot:
 *   get:
 *     summary: Search - Combot
 *     description: Mencari di Combot.
 *     responses:
 *       200:
 *         description: Hasil pencarian Combot berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/combot', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Combot Search response', data: { search_results: ['Result 1', 'Result 2']}});
});

/**
 * @swagger
 * /api/s/bukalapak:
 *   get:
 *     summary: Search - Bukalapak
 *     description: Mencari di Bukalapak.
 *     responses:
 *       200:
 *         description: Hasil pencarian Bukalapak berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/bukalapak', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Bukalapak Search response', data: { search_results: ['Product 1', 'Product 2']}});
});

/**
 * @swagger
 * /api/s/brave:
 *   get:
 *     summary: Search - Brave
 *     description: Mencari di Brave.
 *     responses:
 *       200:
 *         description: Hasil pencarian Brave berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/brave', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Brave Search response', data: { search_results: ['Result 1', 'Result 2']}});
});

/**
 * @swagger
 * /api/s/wikipedia:
 *   get:
 *     summary: Search - Wikipedia
 *     description: Mencari di Wikipedia.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian di Wikipedia.
 *     responses:
 *       200:
 *         description: Hasil pencarian Wikipedia berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/wikipedia', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Wikipedia Search response', data: { article_url: 'URL to Wikipedia article' } });
});

/**
 * @swagger
 * /api/s/spotify:
 *   get:
 *     summary: Search - Spotify
 *     description: Mencari di Spotify.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian di Spotify.
 *     responses:
 *       200:
 *         description: Hasil pencarian Spotify berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/spotify', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Spotify Search response', data: { track_url: 'URL to Spotify track' } });
});

/**
 * @swagger
 * /api/s/tiktok:
 *   get:
 *     summary: Search - TikTok
 *     description: Mencari di TikTok.
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian di TikTok.
 *     responses:
 *       200:
 *         description: Hasil pencarian TikTok berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/s/tiktok', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'TikTok Search response', data: { video_url: 'URL to TikTok video' } });
});

/**
 * @swagger
 * /api/info/jadwaltv:
 *   get:
 *     summary: Informasi - Jadwal TV
 *     description: Mendapatkan jadwal TV.
 *     responses:
 *       200:
 *         description: Jadwal TV berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/info/jadwaltv', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'TV Schedule response', data: { schedule: { "channel": "Sample Channel" } } });
});

/**
 * @swagger
 * /api/info/liburnasional:
 *   get:
 *     summary: Informasi - Hari Libur Nasional
 *     description: Mendapatkan daftar hari libur nasional.
 *     responses:
 *       200:
 *         description: Daftar hari libur nasional berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/info/liburnasional', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'National Holidays response', data: { holidays: ['Holiday 1', 'Holiday 2'] } });
});

/**
 * @swagger
 * /api/info/bmkg:
 *   get:
 *     summary: Informasi - BMKG
 *     description: Mendapatkan informasi dari BMKG.
 *     responses:
 *       200:
 *         description: Informasi dari BMKG berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/info/bmkg', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'BMKG Information response', data: { weather: 'Sample weather data' } });
});

/**
 * @swagger
 * /api/info/cuaca:
 *   get:
 *     summary: Informasi - Cuaca
 *     description: Mendapatkan informasi cuaca.
 *     responses:
 *       200:
 *         description: Informasi cuaca berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/info/cuaca', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Weather Information response', data: { temperature: 'Sample temperature' } });
});

/**
 * @swagger
 * /api/apk/playstore:
 *   get:
 *     summary: APK - Play Store
 *     description: Mencari aplikasi di Play Store.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian aplikasi di Play Store.
 *     responses:
 *       200:
 *         description: Hasil pencarian aplikasi di Play Store berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/apk/playstore', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Play Store Search response', data: { app_results: ['App 1', 'App 2'] } });
});

/**
 * @swagger
 * /api/apk/happymod:
 *   get:
 *     summary: APK - HappyMod
 *     description: Mencari aplikasi di HappyMod.
 *     responses:
 *       200:
 *         description: Hasil pencarian aplikasi di HappyMod berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/apk/happymod', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'HappyMod Search response', data: { app_results: ['App 1', 'App 2'] } });
});

/**
 * @swagger
 * /api/apk/appstore:
 *   get:
 *     summary: APK - App Store
 *     description: Mencari aplikasi di App Store.
 *     responses:
 *       200:
 *         description: Hasil pencarian aplikasi di App Store berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/apk/appstore', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'App Store Search response', data: { app_results: ['App 1', 'App 2'] } });
});

/**
 * @swagger
 * /api/apk/apkpure:
 *   get:
 *     summary: APK - APKPure
 *     description: Mencari aplikasi di APKPure.
 *     responses:
 *       200:
 *         description: Hasil pencarian aplikasi di APKPure berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/apk/apkpure', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'APKPure Search response', data: { app_results: ['App 1', 'App 2'] } });
});

/**
 * @swagger
 * /api/apk/apkmody:
 *   get:
 *     summary: APK - APKMody
 *     description: Mencari aplikasi di APKMody.
 *     responses:
 *       200:
 *         description: Hasil pencarian aplikasi di APKMody berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/apk/apkmody', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'APKMody Search response', data: { app_results: ['App 1', 'App 2'] } });
});

/**
 * @swagger
 * /api/tools/subdomains:
 *   get:
 *     summary: Tools - Subdomain Scanner
 *     description: Memindai subdomain.
 *     parameters:
 *       - in: query
 *         name: domain
 *         schema:
 *           type: string
 *         required: true
 *         description: Domain yang akan dipindai subdomainnya.
 *     responses:
 *       200:
 *         description: Hasil pemindaian subdomain berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/tools/subdomains', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Subdomain Scanner response', data: { subdomains: ['subdomain1.example.com', 'subdomain2.example.com'] } });
});

/**
 * @swagger
 * /api/tools/text2base64:
 *   get:
 *     summary: Tools - Text to Base64
 *     description: Mengubah teks ke Base64.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks yang akan diubah ke Base64.
 *     responses:
 *       200:
 *         description: Teks berhasil diubah ke Base64.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/tools/text2base64', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Text to Base64 response', data: { base64_encoded: 'Sample Base64 encoded text' } });
});

/**
 * @swagger
 * /api/tools/text2qr:
 *   get:
 *     summary: Tools - Text to QR Code
 *     description: Membuat QR code dari teks.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks yang akan diubah ke QR code.
 *     responses:
 *       200:
 *         description: QR code berhasil dibuat.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/tools/text2qr', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Text to QR Code response', data: { qr_code_url: 'URL to generated QR code image' } });
});

/**
 * @swagger
 * /api/tools/translate:
 *   get:
 *     summary: Tools - Text Translator
 *     description: Menerjemahkan teks.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks yang akan diterjemahkan.
 *       - in: query
 *         name: lang
 *         schema:
 *           type: string
 *         required: true
 *         description: Kode bahasa tujuan (misalnya, en, es, fr).
 *     responses:
 *       200:
 *         description: Teks berhasil diterjemahkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/tools/translate', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Text Translator response', data: { translated_text: 'Sample translated text' } });
});

/**
 * @swagger
 * /api/tools/fake-data:
 *   get:
 *     summary: Tools - Fake Data
 *     description: Membuat data palsu.
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: Tipe data palsu yang akan dibuat (misalnya, person, address, company).
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *         required: false
 *         description: Jumlah data palsu yang akan dibuat.
 *     responses:
 *       200:
 *         description: Data palsu berhasil dibuat.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/tools/fake-data', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Fake Data response', data: { fake_data: ['Fake Data 1', 'Fake Data 2'] } });
});

/**
 * @swagger
 * /api/cf/sentiment:
 *   get:
 *     summary: CF - Sentiment Analysis
 *     description: Menganalisis sentimen teks.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks yang akan dianalisis sentimennya.
 *     responses:
 *       200:
 *         description: Analisis sentimen berhasil.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/cf/sentiment', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Sentiment Analysis response', data: { sentiment: 'Positive' } });
});

/**
 * @swagger
 * /api/cf/image-classification:
 *   get:
 *     summary: CF - Image Classification
 *     description: Mengklasifikasikan gambar.
 *     parameters:
 *       - in: query
 *         name: imageUrl
 *         schema:
 *           type: string
 *         required: true
 *         description: URL gambar yang akan diklasifikasikan.
 *     responses:
 *       200:
 *         description: Klasifikasi gambar berhasil.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/cf/image-classification', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Image Classification response', data: { classification: 'Cat' } });
});

/**
 * @swagger
 * /api/cf/text-embedding:
 *   get:
 *     summary: CF - Text Embedding
 *     description: Membuat embedding teks.
 *     parameters:
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: true
 *         description: Teks yang akan dibuat embeddingnya.
 *     responses:
 *       200:
 *         description: Embedding teks berhasil dibuat.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/cf/text-embedding', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Text Embedding response', data: { embedding: ['Sample', 'Embedding'] } });
});

/**
 * @swagger
 * /api/cf/chat:
 *   get:
 *     summary: CF - Chatbot
 *     description: Berinteraksi dengan chatbot.
 *     parameters:
 *       - in: query
 *         name: prompt
 *         schema:
 *           type: string
 *         required: true
 *         description: Pesan prompt untuk chatbot.
 *       - in: query
 *         name: system
 *         schema:
 *           type: string
 *         description: Pesan sistem untuk chatbot.
 *     responses:
 *       200:
 *         description: Respons dari chatbot berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/cf/chat', (req, res) => {
    // Implement your logic here
    res.json({ status: 'success', message: 'Chatbot response', data: { response: 'Sample chatbot response' } });
});

/**
 * @swagger
 * /api/primbon/cek_potensi_penyakit:
 *   get:
 *     summary: Primbon - Cek Potensi Penyakit
 *     description: Mengecek potensi penyakit berdasarkan tanggal lahir.
 *     parameters:
 *       - in: query
 *         name: tgl
 *         schema:
 *           type: string
 *         required: true
 *         description: Tanggal lahir.
 *       - in: query
 *         name: bln
 *         schema:
 *           type: string
 *         required: true
 *         description: Bulan lahir.
 *       - in: query
 *         name: thn
 *         schema:
 *           type: string
 *         required: true
 *         description: Tahun lahir.
 *     responses:
 *       200:
 *         description: Potensi penyakit berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/cek_potensi_penyakit', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Cek Potensi Penyakit response', data: {penyakit: ['Penyakit 1', 'Penyakit 2']}});
});

/**
 * @swagger
 * /api/primbon/ramalanjodoh:
 *   get:
 *     summary: Primbon - Ramalan Jodoh
 *     description: Melihat ramalan jodoh berdasarkan tanggal lahir.
 *     parameters:
 *       - in: query
 *         name: nama1
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama orang pertama.
 *       - in: query
 *         name: tgl1
 *         schema:
 *           type: string
 *         required: true
 *         description: Tanggal lahir orang pertama.
 *       - in: query
 *         name: bln1
 *         schema:
 *           type: string
 *         required: true
 *         description: Bulan lahir orang pertama.
 *       - in: query
 *         name: thn1
 *         schema:
 *           type: string
 *         required: true
 *         description: Tahun lahir orang pertama.
 *       - in: query
 *         name: nama2
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama orang kedua.
 *       - in: query
 *         name: tgl2
 *         schema:
 *           type: string
 *         required: true
 *         description: Tanggal lahir orang kedua.
 *       - in: query
 *         name: bln2
 *         schema:
 *           type: string
 *         required: true
 *         description: Bulan lahir orang kedua.
 *       - in: query
 *         name: thn2
 *         schema:
 *           type: string
 *         required: true
 *         description: Tahun lahir orang kedua.
 *     responses:
 *       200:
 *         description: Ramalan jodoh berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/ramalanjodoh', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Ramalan Jodoh response', data: {hasil: 'Cocok'}});
});

/**
 * @swagger
 * /api/primbon/rejeki_hoki_weton:
 *   get:
 *     summary: Primbon - Rejeki & Hoki Weton
 *     description: Melihat rejeki dan hoki berdasarkan weton.
 *     parameters:
 *       - in: query
 *         name: tgl
 *         schema:
 *           type: string
 *         required: true
 *         description: Tanggal lahir.
 *       - in: query
 *         name: bln
 *         schema:
 *           type: string
 *         required: true
 *         description: Bulan lahir.
 *       - in: query
 *         name: thn
 *         schema:
 *           type: string
 *         required: true
 *         description: Tahun lahir.
 *     responses:
 *       200:
 *         description: Rejeki dan hoki berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/rejeki_hoki_weton', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Rejeki & Hoki Weton response', data: {rejeki: 'Lumayan', hoki: 'Baik'}});
});

/**
 * @swagger
 * /api/primbon/sifat_usaha_bisnis:
 *   get:
 *     summary: Primbon - Sifat Usaha & Bisnis
 *     description: Melihat sifat usaha dan bisnis berdasarkan tanggal lahir.
 *     parameters:
 *       - in: query
 *         name: tgl
 *         schema:
 *           type: string
 *         required: true
 *         description: Tanggal lahir.
 *       - in: query
 *         name: bln
 *         schema:
 *           type: string
 *         required: true
 *         description: Bulan lahir.
 *       - in: query
 *         name: thn
 *         schema:
 *           type: string
 *         required: true
 *         description: Tahun lahir.
 *     responses:
 *       200:
 *         description: Sifat usaha dan bisnis berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/sifat_usaha_bisnis', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Sifat Usaha & Bisnis response', data: {sifat: 'Keras', bisnis: 'Cocok'}});
});

/**
 * @swagger
 * /api/primbon/tafsirmimpi:
 *   get:
 *     summary: Primbon - Tafsir Mimpi
 *     description: Mencari tafsir mimpi.
 *     parameters:
 *       - in: query
 *         name: mimpi
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci mimpi yang ingin dicari tafsirnya.
 *     responses:
 *       200:
 *         description: Tafsir mimpi berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/tafsirmimpi', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Tafsir Mimpi response', data: {tafsir: 'Akan ada kebaikan'}});
});

/**
 * @swagger
 * /api/primbon/artinama:
 *   get:
 *     summary: Primbon - Arti Nama
 *     description: Mencari arti nama.
 *     parameters:
 *       - in: query
 *         name: nama
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama yang ingin dicari artinya.
 *     responses:
 *       200:
 *         description: Arti nama berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/artinama', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Arti Nama response', data: {arti: 'Baik'}});
});

/**
 * @swagger
 * /api/primbon/kecocokan_nama_pasangan:
 *   get:
 *     summary: Primbon - Kecocokan Nama Pasangan
 *     description: Melihat kecocokan nama pasangan.
 *     parameters:
 *       - in: query
 *         name: nama1
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama orang pertama.
 *       - in: query
 *         name: nama2
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama orang kedua.
 *     responses:
 *       200:
 *         description: Kecocokan nama pasangan berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/kecocokan_nama_pasangan', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Kecocokan Nama Pasangan response', data: {kecocokan: 'Cocok'}});
});

/**
 * @swagger
 * /api/primbon/nomorhoki:
 *   get:
 *     summary: Primbon - Nomor Hoki
 *     description: Melihat nomor hoki berdasarkan nomor HP.
 *     parameters:
 *       - in: query
 *         name: phoneNumber
 *         schema:
 *           type: string
 *         required: true
 *         description: Nomor HP yang ingin dicek nomor hokinya.
 *     responses:
 *       200:
 *         description: Nomor hoki berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/nomorhoki', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Nomor Hoki response', data: {hoki: 'Baik'}});
});

/**
 * @swagger
 * /api/primbon/zodiak:
 *   get:
 *     summary: Primbon - Zodiak
 *     description: Melihat informasi zodiak.
 *     parameters:
 *       - in: query
 *         name: zodiak
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama zodiak yang ingin dilihat informasinya.
 *     responses:
 *       200:
 *         description: Informasi zodiak berhasil didapatkan.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       500:
 *         description: Terjadi kesalahan server.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/api/primbon/zodiak', (req, res) => {
   //Implement your logic here
   res.json({status: 'success', message: 'Zodiak response', data: {informasi: 'Contoh informasi zodiak'}});
});

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
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});
app.use((req, res) => {
  res.status(500).json(path.join(__dirname, '404.html'));
});
        
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
