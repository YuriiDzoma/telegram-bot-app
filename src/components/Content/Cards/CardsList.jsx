import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {getCards} from "../../../store/selectors";
import CardBox from "./Card/Card";
import './CardList.css';

const CardsList = () => {

    const allCards = useSelector(getCards);

    return (
        <div className='swiperWrapper'>
            <Swiper
                spaceBetween={-24}
                slidesPerView={1.22}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
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