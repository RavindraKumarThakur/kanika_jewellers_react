import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Term_and_condition from './pages/Terms_and_condition';
import Privacy_policy from './pages/Privacy_policy';
import Return_policy from './pages/Return_policy';
import Shipping_policy from './pages/Shipping_policy';
import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Success from './pages/Success';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/policy'>
          <Route path='terms_and_condition' element={<Term_and_condition />} />
          <Route path='privacy_policy' element={<Privacy_policy />} />
          <Route path='return_policy' element={<Return_policy />} />
          <Route path='shipping_policy' element={<Shipping_policy />} />
        </Route>
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} /> */}
      </Routes>
      <Footer />  
    </>
  );
}

export default App;