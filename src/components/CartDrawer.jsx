import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/CartDrawer.module.css';

function CartDrawer() {
  const { items, total, removeItem, updateQty } = useCart();

  return (
    <div className={styles.drawer}>
      <h3>Cart</h3>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.title} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h4>{item.title}</h4>
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
          <Link to="/cart" className={styles.checkoutBtn}>
            View Cart
          </Link>
        </>
      )}
    </div>
  );
}

export default CartDrawer;