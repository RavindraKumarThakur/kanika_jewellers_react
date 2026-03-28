import styles from "../styles/components/Hero.module.css"
import { banner1, banner2, banner3 } from "../assets/images/pages/export_banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Hero() {
    const banners = [banner1, banner2, banner3];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className={styles.heroContainer}>
            {/* Custom Buttons */}
            <button ref={prevRef} className={styles.prevBtn}>Prev</button>
            <button ref={nextRef} className={styles.nextBtn}>Next</button>
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
                {banners.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.slide} style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                            <img src={img} alt={`banner-${index}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default Hero;