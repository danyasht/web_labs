import './App.css';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Footer from './Components/Footer/Footer';
import { Product } from './Pages/Product';

function App() {
  return (
    <Provider store={store}> {/* Wrapping the component tree with Provider */}
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog category="Catalog" />} />
            <Route path="cart" element={<Cart category="Cart" />} />
            <Route path="/product" element={<Product />}>
              <Route path="/product/:productId" element={<Product />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
