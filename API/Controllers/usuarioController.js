const express = require('express');
const router = express.Router();
const dbConecta = require('../models/dbConnection');

// Rota GET para obter todos os usuários
router.get('/', (req, res) => {
    dbConecta.query('SELECT * FROM tbUsuario', (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao buscar usuários.' });
        } else {
            res.json(result);
        }
    });
});

// Rota POST para adicionar um novo usuário
router.post('/criar', (req, res) => {
    const { nome, email, senha } = req.body;
    const query = 'INSERT INTO tbUsuario (nome, email, senha) VALUES (?, ?, ?)';

    dbConecta.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao adicionar usuário:', err);
            res.status(500).json({ message: 'Erro ao adicionar usuário.' });
        } else {
            console.log('Usuário adicionado com sucesso:', result);
            res.status(201).json({
                message: 'Usuário adicionado com sucesso!',
                idUsuario: result.insertId,
                user: { nome, email }
            });
        }
    });
});

// Rota POST para login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM tbUsuario WHERE email = ? AND senha = ?';

    dbConecta.query(query, [email, senha], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Erro ao verificar usuário.' });
        } else {
            if (result.length > 0) {
                res.status(200).json({ message: 'Login bem-sucedido!', user: result[0] });
            } else {
                res.status(401).json({ message: 'Credenciais inválidas.' });
            }
        }
    });
});

module.exports = router;
