import styles from "../styles/components/Hero.module.css"
import { banner1, banner2, banner3 } from "../assets/images/pages/export_banner";
import { ArrowLeft, ArrowRight } from "../assets/images/icons/icons_export";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Hero() {
    const banners = [
        {
            img: banner1,
            text1: "Big discount only for 20%",
            text2: "Premium necklace"
        },
        {
            img: banner2,
            text1: "Get upto 10% off",
            text2: "Diamond Ring 18KT"
        },
        {
            img: banner3,
            text1: "Starting from &29.00",
            text2: "A Drops Earrings"
        }
    ];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className={styles.heroContainer}>
            {/* Custom Buttons */}
            <button ref={prevRef} className={styles.prevBtn}><img src={ArrowLeft} alt="#" /></button>
            <button ref={nextRef} className={styles.nextBtn}><img src={ArrowRight} alt="#" /></button>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles['slide']} style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                            <div className={styles['Animated-text-banner']}>
                                <div className={styles['percentage-text']}>
                                    {item.text1}
                                </div>
                                <div className={styles['identification-text']}>
                                    {item.text2}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles['marquee']}>
                <p>
                    All our diamond jewelry is crafted with natural diamonds, certified by internationally recognized laboratories, and set in hallmark-certified gold for assured purity and quality.
                </p>
            </div>
        </div>

    )
}

export default Hero;