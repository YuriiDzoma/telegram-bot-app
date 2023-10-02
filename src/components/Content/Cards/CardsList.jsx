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
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1.2}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {allCards && (
                        <>
                            {allCards.map((card, index) => <SwiperSlide><Card key={index} card={card} /></SwiperSlide>)}
                        </>
                    )}
                </Swiper>
            )}
        </div>
    )
}

export default CardsList;