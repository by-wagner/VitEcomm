import { useCart } from '../Cart/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    const { cart } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems === 0) return null;

    return (
        <div>
            <FaShoppingCart />
            {totalItems}
        </div>
    );
}

export default CartWidget;
