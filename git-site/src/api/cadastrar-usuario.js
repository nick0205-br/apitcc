
import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrarUsuario(nome, email, senha) {
    const resposta = await api.post('/cadastrar/usuario', {
        nome:nome,
        email:email,
        senha:senha
});
return resposta.data;
}