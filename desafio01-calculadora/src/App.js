
import './App.css';


/*
import { Container } from './styles';
function App() {
  return (
    <Container>
      OK, djddjjdjkd
    </Container>
  )
}
  */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    
        <p>
            npm config get prefix 
        </p>
        <p>
        Instalar dependências: npm install
        </p>
        <p>
        Verificar Caminhos do npm: npm config set prefix "C:\Users\amaur\AppData\Roaming\npm"
        </p>
        <p>
        Limpar Cache do npm: npm cache clean --force
        </p>
        <p>
        Criar um novo projeto: npx create-react-app desafio01-calculadora
        </p>
        <p>
        Navegar para o diretório do projeto: cd desafio01-calculadora
        </p>
        <p>
        Compilar o projeto para produção: npm run build
     
        </p>
        <p>
        Iniciar o servidor de desenvolvimento: npm start
     
        </p>
       
        <p>
        Verifique a política de execução atual: Get-ExecutionPolicy
     
        </p>
        <p>
        Altere a política de execução: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     
        </p>
        <p>
        Execute o comando do Yarn: yarn add styled-components
     
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
  

export default App;
