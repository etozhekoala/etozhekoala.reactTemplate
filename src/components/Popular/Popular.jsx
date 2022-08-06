import React from 'react'
import { Typography, Button, Carousel } from 'antd'
import styles from './Popular.module.scss'
import SlideItem from './SlideItem'
import { slideData } from './slideData'
import arrow from '../../assets/image/Popular/Slider/Buttons/arrow.png'

const { Title } = Typography;

const onChange = (currentSlide) => {
  console.log(currentSlide);
};


const Popular = () => {
    return (
        <div className={styles.popular + ' ' + styles['popular--margin-top']}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Title className={styles.popular__title + ' ' + styles['usefulLinks__title--margin-top']} level={2}>
                        Популярные ЖК в Новосибирске
                    </Title>
                    <div className={styles.slider__buttons}>
                        <Button type="default" shape="circle" className={styles.slider__btn + ' ' + styles['slider__btn--margin-right']}>
                            <img src={arrow} className={styles.btn__prev} />
                        </Button>
                        <Button type="default" shape="circle" className={styles.slider__btn}>
                            <img src={arrow} className={styles.btn__next + ' ' + styles['btn--active']} />
                        </Button>
                    </div>
                </div>
                
                <Carousel afterChange={onChange}>
      <div>
      <div className={styles['slides-wrapper']}>
        {slideData.map((obj) => (

            <SlideItem
              cardImage={obj.cardImage}
              leftOffer={obj.leftOffer}
              leftOfferOther={obj.leftOfferOther}
              rightOffer={obj.rightOffer}
              title={obj.title}
              location={obj.location}
              metroTitle={obj.metroTitle}
              appartSum={obj.appartSum}
              area={obj.area}
              price={obj.price}
              company={obj.company}
            />
            
        ))}
        </div>
      </div>

    </Carousel>
                
                </div>
                
              </div>
    )
}

export default Popular