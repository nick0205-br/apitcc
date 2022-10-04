import { loginAdmin } from '../repository/adminRepository.js'
import { Router } from 'express';

const server = Router();

server.post('/admin/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const resposta = await loginAdmin(email, senha);
        
        if (!novoLogin.email.trim())
            throw new Error('O seu Email é Obrigatório!');
        
        if (!novoLogin.senha.trim())
            throw new Error('A sua Senha é Obrigatório!');

        if (!resposta) {
            throw new Error('Ops, Ocorreu um Erro Inesperado. Tente Novamente!');
        }

        if (!resposta) {
            throw new Error('Opps ocorreu um erro inesperado. Tente novamente');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

export default server;