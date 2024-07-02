import './Telalogin.css'; // Importa o arquivo de estilos CSS específico para este componente
import { Link, useNavigate } from 'react-router-dom'; // Importa os componentes Link e useNavigate do React Router
import insta from '../../image/instagram2.png'; // Importa a imagem do Instagram
import face from '../../image/facebook2.png'; // Importa a imagem do Facebook
import gmail from '../../image/gmail.png'; // Importa a imagem do Gmail
import logo from '../../image/logoatu.png'; // Importa a imagem do logotipo da aplicação
import axios from 'axios'; // Importa o Axios para fazer requisições HTTP
import { useState, useContext } from 'react'; // Importa o useState e useContext do React
import { UserContext } from '../../components/Contextogeral/UserGeral.js'; // Importa o contexto de usuário global

function Telalogin() {
    const navigate = useNavigate(); // Inicializa o hook useNavigate do React Router para navegação programática
    const [email, setEmail] = useState(''); // Estado para armazenar o email do usuário
    const [senha, setSenha] = useState(''); // Estado para armazenar a senha do usuário
    const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
    const { setUser } = useContext(UserContext); // Acessa o contexto global de usuário para armazenar dados após o login

    // Função assíncrona para lidar com o processo de login
    const handleLogin = async () => {
        try {
            // Faz uma requisição POST para o endpoint de login, passando email e senha como dados
            const response = await axios.post('http://localhost:3000/usuario/login', { email, senha });
            if (response.data.user) {
                // Se a resposta contém dados de usuário, atualiza o contexto global com setUser
                setUser(response.data.user);
                // Navega para a página '/areadocliente' após o login bem-sucedido
                navigate('/areadocliente');
            } else {
                // Se não há dados de usuário na resposta, exibe mensagem de credenciais inválidas
                setError('Credenciais inválidas.');
            }
        } catch (error) {
            // Em caso de erro na requisição, exibe mensagem de erro específica ou genérica
            setError(error.response?.data?.message || 'Erro ao fazer login');
        }
    };

    return (
        <>
            <div className='logo'>
                {/* Link para a página inicial, exibindo o logotipo da aplicação */}
                <Link to='/'>
                    <img id='logotl' src={logo} alt='Logo' />
                </Link>
            </div>
            <div className='container-login'>
                {/* Título da seção de login */}
                <p id='txtlogin'>Login</p>
                <div className='login'>
                    {/* Campos de entrada para email e senha */}
                    <input
                        className='email'
                        type="text"
                        name="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado 'email' conforme o usuário digita
                    />
                    <input
                        className='senha'
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder='Senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} // Atualiza o estado 'senha' conforme o usuário digita
                    />
                </div>
                {error && <p className='error'>{error}</p>} {/* Exibe mensagem de erro se houver algum */}
                <div className='botaologin'>
                    {/* Link para a página de registro */}
                    <Link to='/teladeregistro'>
                        <button id='criar' type="button">Criar conta</button>
                    </Link>
                    {/* Botão para iniciar o processo de login */}
                    <button id='entrar' type="button" onClick={handleLogin}>Entrar</button>
                </div>
                <div className='redeslogin'>
                    {/* Opções para login com redes sociais */}
                    <p>Login com:</p>
                    <img id='instatl' src={insta} alt='Instagram' />
                    <img id='facetl' src={face} alt='Facebook' />
                    <img id='gmailtl' src={gmail} alt='Gmail' />
                </div>
            </div>
        </>
    );
}

export default Telalogin;
