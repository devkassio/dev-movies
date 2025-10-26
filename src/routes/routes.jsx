import { Route, Routes } from 'react-router-dom';

import Detail from '../containers/Detalhes';
import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';

export default function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/serie/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}
