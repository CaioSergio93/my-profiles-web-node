const express = require('express');
const router = express.Router();
const path = require('path');

// Rota principal e Rota de contato
router.get(['/', '/index'], (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Rota do formulário
router.get('/formulario', (req, res) => {
  res.sendFile('formulario.html', { root: 'public' });
});

module.exports = router;
