import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import NotFoundPage from './pages/NotFoundPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import AllSalePage from './pages/AllSalePage';

function App() {
  return (
    <div className='wrapper'>
      <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:category' element={<ProductsByCategoryPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/allsale' element={<AllSalePage />} />
        <Route path='/products/:product_id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
