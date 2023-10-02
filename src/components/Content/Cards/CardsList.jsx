import React from "react";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {getCards} from "../../../store/selectors";
import styles from './CardList.module.scss'

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
                {allCards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card}>
                            <div className={styles.cardSettings}>
                                <button>O</button>
                            </div>
                            <p className={styles.cardValue}>
                                <span className={styles.cardValue__current}>{card.value} </span>
                                /
                                <span className={styles.cardValue__limit}> 5000</span>
                            </p>
                            <div className={styles.cardNumber}>
                                <p>{card.number}</p>
                                <p>{card.code}</p>
                            </div>
                            <div className={styles.cardDate}>
                                <p>{card.date}</p>
                                <p>{card.type}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    )
}

export default CardsList;