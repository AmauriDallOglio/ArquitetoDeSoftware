// App.js
import githubLogo from '../assets/github.png';
import { Container } from './styles';
import { useState } from 'react';
import Input from '../components/Input/Index';
import Button from '../components/Button/Index';
import ItemRepo from '../components/ItemRepo/index';
import { api } from '../services/api';

 



function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

 

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      setRepos(prev => [...prev, data]);
 

      const isExist = repos.find(repo => repo.id === data.id);

    

    }
    alert('Repositório não encontrado')

  }

  return (
    <Container>
      <img src={githubLogo} width={100} height={100} alt="github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
      <ItemRepo />
 

    </Container>
 

  );
}

export default App;
