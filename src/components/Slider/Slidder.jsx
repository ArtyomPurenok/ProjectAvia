
import React, {useState,useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {CardPopularDestinations} from'../CardPopularDestinations/CardPopularDestinations';
import "swiper/css";
import "swiper/css/navigation";
import {popularQuery} from '../../utils/popularQuery';
import "./Slider.scss";
import { Autoplay, Navigation } from "swiper";

export const Slidder = () => {
    const [card, setCard] = useState([]);
    const url = 'https://api.tequila.kiwi.com/locations/topdestinations?term=MSQ&locale=ru-RU&limit=5&sort=name&active_only=true&source_popularity=bookings';

    useEffect(() => {
      (async function(){const data = await popularQuery(url);
        setCard(data.locations);})();
   }, []);
 
  return (
    <div  className="wrapper">
        <h2>Popular destinations</h2>
      <Swiper 
      slidesPerView={5}
      spaceBetween={0}
        // rewind={true}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="wrapper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      >
{card && card.map((card, index) => (
                <SwiperSlide key={card.id}>
                    <CardPopularDestinations  caption={card.name} countryName={card.country.name} />
                </SwiperSlide>))} 
      </Swiper>
    </div>
  );
};
