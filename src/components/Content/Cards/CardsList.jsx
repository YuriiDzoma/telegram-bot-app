import React from "react";
import {getCards} from "../../../store/selectors";
import {useSelector} from "react-redux";
import Card from "./Card";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardsList = () => {

    const allCards = useSelector(getCards);

    return (
        <div>
            {allCards && (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1.2}
                >
                    {allCards && (
                        <>
                            {allCards.map((card, index) => <SwiperSlide key={index}><Card card={card} /></SwiperSlide>)}
                        </>
                    )}
                </Swiper>
            )}
        </div>
    )
}

export default CardsList;