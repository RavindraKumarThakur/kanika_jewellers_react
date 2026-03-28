import styles from '../styles/pages/Home.module.css';
import Hero from '../components/Hero';
import Home_about from '../components/Home-about';
import Catalog from '../components/Catalog';
import New_products from '../components/New_products';

function Home() {
  return (
    <main className={styles.home}>
      <Hero/>
      <Home_about/>
      <Catalog />
      <New_products/>
    </main>
  );
}

export default Home;