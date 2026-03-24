import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/Header.module.css';

function Header() {
  const { count } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Kanika Diamonds
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart ({count})</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;