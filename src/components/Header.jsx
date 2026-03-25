import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/Header.module.css';

function Header() {
  const { count } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container + ' ' + styles.inner}>
        <div className={styles['laptop-container']}>
          <div>hello</div>
          <p>Free shipping from above AUD 400!</p>
          <div>hello</div>
        </div>
        <div className={styles['mobile-container'] + ' ' + styles.marquee}>
          <p>
            All our diamond jewelry is crafted with natural diamonds, certified by internationally recognized laboratories, and set in hallmark-certified gold for assured purity and quality.
          </p>
        </div>
      </div>
      {/* <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Kanika Diamonds
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart ({count})</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div> */}
    </header>
  );
}

export default Header;