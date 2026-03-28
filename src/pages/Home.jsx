import styles from '../styles/pages/Home.module.css';
import Hero from '../components/Hero';

function Home() {
  return (
    <main className={styles.home}>
      <Hero/>
    </main>
  );
}

export default Home;