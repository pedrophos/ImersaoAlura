import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Categoria() {
  // eslint-disable-next-line
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const [valores, setValores] = useState(valoresIniciais);

  function handleChange(e) {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);
    setValores(valoresIniciais);
  }

  useEffect(() => {
    const url = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://aluraflixphos.herokuapp.com/categorias';

    fetch(url)
      .then(async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([...resposta]);
      });
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {valores.nome}
      </h1>
      <form onSubmit={(e) => { handleOnSubmit(e); }}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default Categoria;
