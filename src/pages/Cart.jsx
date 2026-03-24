import { useCart } from '../context/CartContext';
import styles from '../styles/pages/Cart.module.css';

function Cart() {
  const { items, total, removeItem, updateQty, clearCart } = useCart();

  return (
    <main className={styles.cart}>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.details}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                  min="1"
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button onClick={clearCart} className={styles.clearBtn}>
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}

export default Cart;