
import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function LoginAdmin(email, senha){
        const resposta = await api.post('/usuario/login', {
            email: email,
            senha: senha
});

return resposta.data;
}
