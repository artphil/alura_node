import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';

import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';

function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path='cardapio' element={<Cardapio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;