import React from 'react'
import styles from './Popular.module.scss'
import metroImg from '../../assets/image/Popular/Slider/Metro/metro.png'
import walkman from '../../assets/image/Popular/Slider/Metro/walkman.png'






const SlideItem = (props) => {
    return (
        <div>
           <div className={styles['slide-card']}>
                <div className={styles['slide-card__top-card']}>
                    <img className={styles['top-card__image']} src={props.cardImage} />
                    <div className={styles['top-card__offer']}>
                    <span className={styles['offer__left-offer']}>
                        {props.leftOffer}
                    </span>
                    <span className={styles['offer__left-offer-other']}>
                        {props.leftOfferOther}
                    </span>
                    <span className={styles['offer__right-offer']}>
                        {props.rightOffer}
                    </span>
                    </div>
                    </div>
                    <div className={styles['slide-card__content-card']}>
                            <h3 className={styles['content-card__title']}>
                                {props.title}
                            </h3>
                            <p className={styles['content-card__location']}>
                                {props.location}
                            </p>
                            <div className={styles['content-card__metro']}>
                                <img className={styles['metro__icon']} src={metroImg} />
                                <p className={styles['metro__title']}>
                                    {props.metroTitle}
                                </p>
                                <img src={walkman} className={styles['metro__walkman']} />
                            </div>
                            <div className={styles['slide-card__price-form']}>
                                <div className={styles['price-form--wrapper']}>
                                <div className={styles['price-form__appartments'] + ' ' + styles['appartments--wrapper']}>
                                    <p className={styles['appartments__title']}>
                                        Квартир:
                                    </p>
                                    <p className={styles['appartments__sum']}>
                                        {props.appartSum}
                                    </p>
                                </div>
                                <div className={styles['slide-card__price-tabs']}>
                                    <ul className={styles['price-tabs__tab-items']}>
                                        <li className={styles['price-tabs__item'] + ' ' + styles['item--active']}>
                                            С
                                        </li>
                                        <li className={styles['price-tabs__item']}>
                                            1К
                                        </li>
                                        <li className={styles['price-tabs__item']}>
                                            2К
                                        </li>
                                        <li className={styles['price-tabs__item']}>
                                            3К
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles['price-form__form-price'] + ' ' + styles['form-price--wrapper']}>
                                    <p className={styles['form-price__area']}>
                                        от {props.area} м<sup>2</sup>
                                    </p>
                                    <p className={styles['form-price__price']}>
                                        от {props.price} ₽
                                    </p>
                            </div>
                            <p className={styles['slide-card__company'] + ' ' + styles['company--margin']}>
                                    {props.company}
                            </p>
                            </div>
                    </div>
                </div> 
        </div>
        
    );
};

export default SlideItem

