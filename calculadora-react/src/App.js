
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Column } from './styles';

const App = () => {
  return (
    <Container>
      <Content>
        <h1>Calculadora React</h1>
        <p>npx create-react-app calculadora-react </p>
        <p>cd calculadora-react </p>
        <p>npm install styled-components </p>
        <p>yarn add styled-components </p>
        <p>npm start </p>
        <Input> </Input>
        <Row>
          <Button label="7"/>  
          <Button label="8"/> 
          <Button label="9"/> 
          <Button label="-"/> 
        </Row>
        <Row>
          <Button label="4"/>  
          <Button label="5"/> 
          <Button label="6"/> 
          <Button label="+"/> 
        </Row>
        <Row>
          <Button label="1"/>  
          <Button label="2"/> 
          <Button label="3"/> 
          <Button label="="/> 
        </Row>
         
      </Content>
    </Container>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <p>Criar o Projeto React:  npx create-react-app calculadora-react </p>

      <p>Diretório do Projeto:  cd calculadora-react </p>
      
      <p>Instalar styled-components:  npm install styled-components / yarn add styled-components </p>
      <p>Iniciar o Projeto:  npm start </p>
 
    </div>
  );
}
  
export default App;

*/

