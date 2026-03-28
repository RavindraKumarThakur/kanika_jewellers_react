import styles from "../styles/components/Home-about.module.css";
import { Icon_since } from "../assets/images/icons/icons_export";
import { home_about_banner } from "../assets/images/pages/export_banner";
import { Link } from "react-router-dom";

function Home_about() {
    return (
        <div className={styles['home_about']}>
            <div className={styles['inner-section']} >
                <div className={styles.banner}>
                    <div
                        className={styles.bannerBg}
                        style={{ backgroundImage: `url(${home_about_banner})` }}
                    />
                </div>
                <div className={styles['content']}>
                    <div className={styles['titles']}>
                        You’re the one who on jewellery shine & love.
                    </div>
                    <div className={styles['description']}>
                        <div>
                            <p>GOLD JEWELLERY</p>
                            <span>
                                Premium gold jewellery crafted with purity, elegance, and timeless design.
                            </span>
                        </div>
                        <div>
                            <p>SILVER JEWELLERY</p>
                            <span>
                                Stylish and durable silver jewellery designed for everyday elegance.                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles['button-section']}>
                    <div className={styles['icon-section']}>
                        <img src={Icon_since} alt="#" />
                    </div>
                    <div className={styles['button-section']}>
                        <Link to={'/'}>
                            ABOUT STORY
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_about