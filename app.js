const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://gabs:yepjln001@upx4.u9sef.mongodb.net/?retryWrites=true&w=majority&appName=upx4";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB Atlas'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));

// Definir um modelo de Usuário
// Definir um modelo de Usuário
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String,
    data_criacao: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Rota para cadastro de usuário
app.post('/cadastro', (req, res) => {
    const { nome, email, senha, tipo } = req.body;
    
    const novoUsuario = new Usuario({ nome, email, senha, tipo });
    
    novoUsuario.save()
        .then(() => res.send('Usuário cadastrado com sucesso!'))
        .catch(err => res.status(400).send('Erro ao cadastrar usuário: ' + err));
});

// Rota para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
