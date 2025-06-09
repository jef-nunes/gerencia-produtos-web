import './css/App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';
import { useEffect, useState } from 'react';

function App() {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produto, setProduto] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno=retorno.json)
    .then(retorno_convertido=>setProduto(retorno_convertido));
  })

  return (
    <div>
    <p>{JSON.stringify(produto)}</p>
    <Formulario botao={btnCadastrar}/>
    <Tabela/>
    </div>
  );
}

export default App;
