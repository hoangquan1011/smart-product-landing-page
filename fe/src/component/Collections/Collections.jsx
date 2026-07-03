import "./Collections.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../img/logo.png";
import img2 from "../../img/logo.png";
import img3 from "../../img/logo.png";
import img4 from "../../img/logo.png";
import img5 from "../../img/logo.png";
import img6 from "../../img/logo.png";

const data = [
  {
    image: img1,
    title: "Camera Drones",
  },
  {
    image: img2,
    title: "FPV Racing",
  },
  {
    image: img3,
    title: "Professional",
  },
  {
    image: img4,
    title: "Mini Drones",
  },
  {
    image: img5,
    title: "Industrial",
  },
  {
    image: img6,
    title: "Accessories",
  },
];

function Collections() {
  return (
    <section className="collections">

      <h2>OUR <span>COLLECTIONS</span></h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={35}
        centeredSlides={false}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        loop={true}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <button>Explore</button>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Collections;