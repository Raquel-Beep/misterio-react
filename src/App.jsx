import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [Email, setEmail] = useState("");
  const [EmailSalvo, setEmailSalvo]= useState("");
  const [Senha, setSenha] = useState("");
  const [SenhaSalva, setSenhaSalva] = useState("");
  const [Mensagem, setMensagem] = useState("");

  const salvarEmail = () => {
    setEmailSalvo(Email)
  };
  const salvarSenha = ()=> {
    setSenhaSalva(Senha);
    
    setTimeout(() => {
    setSenhaSalva("");
  }, 5000);
};

useEffect(() => {
  if (!EmailSalvo || !SenhaSalva) return;

  if (
    EmailSalvo === "raquel.taveira26@gmail.com" &&
    SenhaSalva === "1234"
  ) {
    setMensagem("✅ Login realizado com sucesso!");
  } else {
    setMensagem("❌ E-mail ou senha incorretos!");
  }
}, [EmailSalvo, SenhaSalva]);


  return(
    
  <>
    <div className='container'>
      <div className='login-card'>

        <div className='e-painel'>
          <div className='titulo-area'>
             <img
            src="/trem.png"
            alt="Logo Trem"
            className="logo"
            />
            <h1 className='canto'>Login</h1>
          </div>

        <h3 className='texto'>
          Solicite acesso ao Vagão Secreto da Ferrovia.
        </h3>
        <h5 className='contexto'>
           Os registros desta viagem permanecem ocultos nos arquivos da estação.
        </h5>

        </div>

        <div className='d-painel'>

          <div className='email'>
          <h4>Identificação do Passageiro</h4>

          <input
            type='email'
            placeholder='Digite aqui seu e-mail'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button
            type='button'
            className='Enviar'
            onClick={salvarEmail}
            >
              Enviar
            </button>
            <p>E-mail digitado: {EmailSalvo}</p>
        </div>


        <div className='senha'>
          <h4>Chave de Acesso ao Vagão</h4>

          <input
          type='password'
          placeholder='Digite aqui sua senha'
          value={Senha}
          onChange={(e) => setSenha(e.target.value)}
          />
          <button
          type='button'
          className='Enviar'
          onClick={salvarSenha}
          >
            Enviar
          </button>

          <p>Senha digitada: {SenhaSalva}</p>
        </div>
        
        <p>{Mensagem}</p>

        <h3 className='contexto'>Fique tranquilo somente eu e você sabemos quem és todo o resto é matido em sigilo...</h3>
        
        </div>

        
      </div>
    </div>
  </>
  
  );
}

export default App
