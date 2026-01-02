import Container from "react-bootstrap/esm/Container";
import { useCart } from "../context/Cartcontext";
import "./Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <section className="bg-success py-5">
      <Container>
        {cartItems.length === 0 ? <h1 className="text-white">Your cart is empty</h1>  : <div className="cart-page p-5 rounded-2">
          <h2>Shopping Cart</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="80" />
              <div>
                <p>{item.title}</p>
                <p>₦{item.price.toLocaleString()}</p>
                <p>Qty: {item.quantity}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>
            Total: ₦
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toLocaleString()}
          </h3>

          <button onClick={clearCart}>Clear Cart</button>
        </div>}
      </Container>
    </section>
  );
};

export default Cart;
