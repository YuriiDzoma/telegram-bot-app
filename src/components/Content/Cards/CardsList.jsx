import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {getCards} from "../../../store/selectors";
import CardBox from "./CardBox";

const CardsList = () => {

    const allCards = useSelector(getCards);


    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1.2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {allCards.map((card, index) =><SwiperSlide key={index}>
                    <CardBox
                        value={card.cardValue}
                        number={card.cardNumber}
                        code={card.cardCode}
                        date={card.cardDate}
                        type={card.cardType}
                    />
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default CardsList;