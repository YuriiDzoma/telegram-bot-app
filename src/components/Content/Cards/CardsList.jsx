import React from "react";
import {getCards} from "../../../store/selectors";
import {useSelector} from "react-redux";
import Card from "./Card";

const CardsList = () => {

    const allCards = useSelector(getCards);

    return (
        <div>
            {allCards && (
                // <Swiper
                //     spaceBetween={50}
                //     slidesPerView={1.2}
                // >
                //     {allCards && (
                //         <>
                //             {/*{allCards.map((card, index) => <SwiperSlide key={index}><Card card={card} /></SwiperSlide>)}*/}
                //             <SwiperSlide>TEST</SwiperSlide>)
                //         </>
                //     )}
                // </Swiper>
                <div>TEST</div>
            )}
        </div>
    )
}

export default CardsList;