import { cadastrarLogin, login } from '../repository/usuarioRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/login/usuario', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await login(email, senha);
        
        if (!novoLogin.email.trim())
            throw new Error('O seu Email é Obrigatório!');
        
        if (!novoLogin.senha.trim())
            throw new Error('A sua Senha é Obrigatório!');

        if (!resposta) {
            throw new Error('Ops, Ocorreu um Erro Inesperado. Tente Novamente!');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

server.post('/cadastrar/usuario', async (req, resp) => {
    try {
        const novoLogin = req.body;
        
        if (!novoLogin.usuario.trim())
            throw new Error('O seu Nome é Obrigatório!');
        
        if (!novoLogin.email.trim())
            throw new Error('O seu Email é Obrigatório!');
        
        if (!novoLogin.senha.trim())
            throw new Error('A sua Senha é Obrigatório!');

        const novo = await cadastrarLogin (novoLogin);
        resp.send(novo)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;