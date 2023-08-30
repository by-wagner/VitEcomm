import { useCart } from '../Cart/CartContext';

function CartWidget() {
    const { cart } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (totalItems === 0) return null;

    return (
        <div>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            {totalItems}
        </div>
    );
}

export default CartWidget;
