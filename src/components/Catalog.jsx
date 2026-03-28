import styles from "../styles/components/Catalog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { 
    collection1,
    collection2,
    collection3,
    collection4,
    collection5,
    collection6,
    collection7,
    collection8,
    collection9,
    collection10,
    collection11,
    collection12
 } from "../assets/images/collections/collection_export";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";

function Catalog() {

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
        {
            name: "Ring",
            image: collection5
        },
        {
            name: "Necklace",
            image: collection6
        },
        {
            name: "Earring",
            image: collection7
        },
        {
            name: "Ring",
            image: collection8
        },
        {
            name: "Necklace",
            image: collection9
        },
        {
            name: "Earring",
            image: collection10
        },
        {
            name: "Ring",
            image: collection11
        },
        {
            name: "Necklace",
            image: collection12
        },
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
        {
            name: "Ring",
            image: collection5
        },
        {
            name: "Necklace",
            image: collection6
        },

    ]
    console.log(catalog)
    return (
        <section className={styles['catalog']}>
            <p>Jewellery catalog</p>
            <div className={styles['swiper-component']}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    loop={true}
                    speed={800}
                    observer={true}
                    observeParents={true}
                    init={false}
                    onInit={(swiper) => swiper.init()}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.autoplay?.start();
                        }, 100);
                    }}
                >
                    {catalog.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slide}>
                                <img src={slide.image} alt="#"/>
                                {slide.name}
                                <div className={styles['shop-button']}>
                                    <Link to={''}>
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Catalog