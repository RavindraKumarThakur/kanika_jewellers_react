import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/ProductCard.module.css';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <div className={styles.actions}>
        <Link to={`/product/${product.id}`} className={styles.viewBtn}>
          View Details
        </Link>
        <button
          onClick={() => addItem(product)}
          className={styles.addBtn}
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;