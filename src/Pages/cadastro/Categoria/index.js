import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import './styles.css';
import useForm from '../../../hooks/useForm';

// function useForm(valoresIniciais) {
//   const [valores, setValores] = useState(valoresIniciais);

//   function setValue(chave, valor) {
//     // chave: nome, descricao, bla, bli
//     setValores({
//       ...valores,
//       [chave]: valor, // nome: 'valor'
//     });
//   }

//   function handleChange(infosDoEvento) {
//     setValue(
//       infosDoEvento.target.getAttribute('name'),
//       infosDoEvento.target.value,
//     );
//   }

//   function clearForm() {
//     setValores(valoresIniciais);
//   }

//   return {
//     valores,
//     handleChange,
//     clearForm,
//   };
// }

function Categoria() {
  // eslint-disable-next-line
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  // const [valores, setValores] = useState(valoresIniciais);

  // function handleChange(e) {
  //   setValores({
  //     ...valores,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  function handleOnSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);
    clearForm();
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
      <form onSubmit={handleOnSubmit}>
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

      {/* <div className="group-table">
        <table>
          <tr>
            <th>Categoria</th>
            <th>Cor</th>
          </tr>
          {categorias.map((categoria, indice) => (
            <tr key={indice}>
              <td>{categoria.titulo}</td>
              <td>{categoria.cor}</td>
            </tr>
          ))}
        </table>
      </div> */}

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default Categoria;
