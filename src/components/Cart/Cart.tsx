import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <p>Não há itens no seu carrinho.</p>
        <Link to="/">Voltar para a loja</Link>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Preço Total: ${totalPrice}</p>
    </div>
  );
}

export default Cart;
