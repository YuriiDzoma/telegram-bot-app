import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {getCards} from "../../../store/selectors";

const CardsList = () => {

    const allCards = useSelector(getCards);


    return (
        <div>
            {/*{allCards.map((card, index) => <p key={index}>{card.cardValue}</p> )}*/}

            <Swiper
                spaceBetween={50}
                slidesPerView={1.2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardsList;