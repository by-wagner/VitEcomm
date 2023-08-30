import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import HomePage from './HomePage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <ItemListContainer greeting="Bem-vindo à nossa loja!" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
