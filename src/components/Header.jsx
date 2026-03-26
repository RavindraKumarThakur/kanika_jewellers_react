import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/Header.module.css';
import { Search, Kanika_logo, Hamburger } from '../assets/images/icons/icons_export.js';
import { Swiper, SwiperSlide } from 'swiper/react';

function Header() {
  const { count } = useCart();

  return (
    <header className={styles.header}>

      {/* upper part */}
      <div className={styles.container}>

        {/* Laptop view */}
        <div className={styles['laptop-view']}>
          <div></div>
          <p>Free shipping from above <span>AUD 400!</span></p>
          <div className={styles["input-container"]}>
            <input type="text" placeholder='Find our product' />
            <span className={styles.search}><img src={Search} alt='#' /></span>
          </div>
        </div>

        {/* Mobile view */}
        <div className={styles.marquee}>
          <p>
            All our diamond jewelry is crafted with natural diamonds, certified by internationally recognized laboratories, and set in hallmark-certified gold for assured purity and quality.
          </p>
        </div>
      </div>

      {/* Lower part */}

      <div className={styles.container}>

        <div className={styles['navigation']}>

          {/* Navigation section */}
          <div className={styles['navigation-section']}>
            <div className={styles['logo']}>
              <Link to={'/'}>
                <img src={Kanika_logo} alt='#' />
              </Link>

            </div>
          </div>

          {/* Profile section */}
          <div>
            <div className={styles['profile-section']}>
              <div className={styles['search']}>
                <span>
                  <img src={Hamburger} alt='#' />
                </span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div>

              </div>
            </div>
            <div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;