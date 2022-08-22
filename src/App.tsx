import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import pageLoader from './components/common/pageLoader';

const ProductPage = pageLoader(lazy(() => import('./pages/ProductPage')));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='*' element={<div>page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
