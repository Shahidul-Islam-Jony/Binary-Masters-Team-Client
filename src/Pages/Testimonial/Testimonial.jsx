import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
const Testimonial = () => {
  const datas = [1, 2, 3, 4];
  return (
    <div className="px-5">
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leadi text-center">
            What our customers are saying about us
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {datas.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center mx-12 lg:mx-0 p-5 border border-red-500 rounded-md">
                <div className="relative text-center">
                  <FaQuoteLeft />
                  <p className="px-6 py-1 text-lg italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quibusdam, eligendi exercitationem molestias
                    possimus facere.
                  </p>
                  <FaQuoteRight className="float-right" />
                </div>
                <span className="w-12 h-1 my-2 rounded-lg bg-red-400"></span>
                <p>Leroy Jenkins</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
