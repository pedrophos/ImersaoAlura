import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './Pages/cadastro/Video';
import CadastroCategoria from './Pages/cadastro/Categoria';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/" component={Home} exact/>
      {/* <Route component={Pagina404}/> */}
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);