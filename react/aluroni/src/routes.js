import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import NotFound from 'pages/NotFound';


import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';

function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='cardapio' element={<Cardapio />} />
          <Route path='sobre' element={<Sobre />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;