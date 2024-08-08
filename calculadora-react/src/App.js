
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, SetOpration] = useState('');

  const handleNumber = (num) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${num}`)
  };
  const handOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    SetOpration('')
  };
  const handlerSumNumbers = () => {
    if(firstNumber == '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        SetOpration('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      SetOpration('')
    }
  };

  const handlerMinusNumbers = () => {
    if(firstNumber == '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        SetOpration('-')
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      SetOpration('')
    }
  };

  const handlerEquals = () => {
    if(!firstNumber !== '0' && operation !=='' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handlerSumNumbers();
          break
        case '-':
          handlerMinusNumbers();
          break
        default:
          break;
      }
      
      setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
    } 
  };






  return (
    <Container>
      <Content>
        <h1>Calculadora React</h1>
        <p>npx create-react-app calculadora-react </p>
        <p>cd calculadora-react </p>
        <p>npm install styled-components </p>
        <p>yarn add styled-components </p>
        <p>npm start </p>
        <Input value={currentNumber}/>  
        <Row>
          <Button label="x" onClick={() => handleNumber('')}/>  
          <Button label="/" onClick={() => handleNumber('')}/> 
          <Button label="C" onClick={handOnClear}/> 
          <Button label="X" onClick={() => handleNumber('')}/> 
        </Row>
        <Row>
          <Button label="7" onClick={() => handleNumber('7')}/>  
          <Button label="8" onClick={() => handleNumber('8')}/> 
          <Button label="9" onClick={() => handleNumber('9')}/> 
          <Button label="-" onClick={handlerMinusNumbers}/> 
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumber('4')}/>  
          <Button label="5" onClick={() => handleNumber('5')}/> 
          <Button label="6" onClick={() => handleNumber('6')}/> 
          <Button label="+" onClick={handlerSumNumbers}/> 
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumber('1')}/>  
          <Button label="2" onClick={() => handleNumber('2')}/> 
          <Button label="3" onClick={() => handleNumber('3')}/> 
          <Button label="=" onClick={handlerEquals}/> 
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

