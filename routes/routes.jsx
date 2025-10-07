import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../src/containers/Home';
import Movies from '../src/containers/Movies';
import Series from '../src/containers/Series';

function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/series" element={<Series />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Routers;
