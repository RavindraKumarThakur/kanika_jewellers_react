import styles from "../styles/components/New_products.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { 
    collection1,
    collection2,
    collection3,
    collection4,
 } from "../assets/images/collections/collection_export";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";

function New_products() {

    const catalog = [
        {
            name: "Earring",
            image: collection1
        },
        {
            name: "Ring",
            image: collection2
        },
        {
            name: "Necklace",
            image: collection3
        },
        {
            name: "Earring",
            image: collection4
        },

    ]
    console.log(catalog)
    return (
        <section className={styles['catalog']}>
            <p>New Products</p>
            <div className={styles['swiper-component']}>
                    {catalog.map((slide, index) => (
                            <div className={styles['card']}>
                                <img src={slide.image} alt="#"/>
                                {slide.name}

                            </div>
                    ))}
            </div>
        </section>
    )
}

export default New_products 