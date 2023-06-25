import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SubCategory from './component/SubCategory';


import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';


function App() {
  return (

    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/subcategory' element={<SubCategory />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/:catName' element={<SubCategory />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourite' element={<Favourite />} />
          {/* <HomePage /> */}
          {/* <SubCategory /> */}
          {/* <ElectronicsPage /> */}
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
