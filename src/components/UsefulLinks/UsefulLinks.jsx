import React from 'react'
import { Typography, Col, Row, Card, Button } from 'antd'

import styles from './UsefulLinks.module.scss'

const { Title } = Typography;

const UsefulLinks = () => {
    return (
        <div className={styles.usefulLinks}>
            <div className={styles.container}>
                <Title className={styles.usefulLinks__title + ' ' + styles['usefulLinks__title--margin-top']} level={2}>
                    Полезные ссылки
                </Title>
                <Row className={styles['userLinks__row--margin-top']} gutter={16}>
                    <Col>
                       <Card className={styles.usefulLinks__card + ' ' + styles['card--collectionsImage']}>
                            <Title className={styles.card__title} level={3}>
                                <a class={styles['card__title--link']}>
                                Подборки новостроек
                                </a>
                            </Title>
                            <ul className={styles['card__list-content'] + ' ' + styles['card__list-content--margin-top'] + ' ' + styles['card__list-content--width']}>
                                <li class={styles['list-content__item']}>
                                    <a className={styles['list-content__link']}>
                                    Рядом с парком
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        17
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Недалеко от метро
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        26
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Близко к центру
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        11
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Рядом с рекой
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        21
                                    </p>
                                </li>
                            </ul>
                       </Card>
                    </Col>
                    <Col>
                    <Card className={styles.usefulLinks__card + ' ' + styles['card--mapCardImage']}>
                            <Title className={styles.card__title} level={3}>
                                <a class={styles['card__title--link']}>
                                    Новостройки на карте
                                </a>
                                <p className={styles.card__text}>
                                    Ищите новостройки рядом с парком, детским садом или работой
                                </p>
                                <Button className={styles.card__button + ' ' + styles['card__button--custom']}  type="primary" shape="round">
                                    Искать на карте
                                </Button>
                            </Title>
                    </Card>
                    </Col>
                </Row>
                <Row className={styles['userLinks__rowTwo--margin-top']} gutter={16}>
                <Col>
                    <Card className={styles.usefulLinks__card + ' ' + styles['card--developImage'] + ' ' + styles['card--small']}>
                            <Title className={styles.card__title} level={3}>
                                <a class={styles['card__title--link']}>
                                    Реестр застройщиков
                                </a>
                                <p className={styles.card__text}>
                                    Выберите жилье среди объектов надежных застройщиков
                                </p>
                                <Button className={styles.card__button + ' ' + styles['card__button--custom']}  type="primary" shape="round">
                                    Смотреть реестр
                                </Button>
                            </Title>
                    </Card>
                    </Col>
                    <Col>
                       <Card className={styles.usefulLinks__card + ' ' + styles['card--buildImage'] + ' ' + styles['card--small'] + ' ' + styles['card__list-content--margin-left']}>
                            <Title className={styles.card__title} level={3}>
                                <a class={styles['card__title--link']}>
                                Строящиеся ЖК
                                </a>
                            </Title>
                            <ul className={styles['card__list-content'] + ' ' + styles['card__list-content--margin-top'] + ' ' + styles['card__list-content--width']}>
                                <li class={styles['list-content__item']}>
                                    <a className={styles['list-content__link']}>
                                    Сдача в этом году
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        12
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    до 2022 года
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        10
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    до 2023 года
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        17
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    до 2024 года
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        5
                                    </p>
                                </li>
                            </ul>
                       </Card>
                    </Col>
                    <Col>
                       <Card className={styles.usefulLinks__card + ' ' + styles['card--saleImage'] + ' ' + styles['card--small'] + ' ' + styles['card__list-content--margin-left']}>
                            <Title className={styles.card__title} level={3}>
                                <a class={styles['card__title--link']}>
                                Сданные ЖК
                                </a>
                            </Title>
                            <ul className={styles['card__list-content'] + ' ' + styles['card__list-content--margin-top'] + ' ' + styles['card__list-content--margin-left'] + ' ' + styles['card__list-content--width']}>
                                <li class={styles['list-content__item']}>
                                    <a className={styles['list-content__link']}>
                                    Эконом
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        22
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Комфорт
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        14
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Бизнес
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        5
                                    </p>
                                </li>
                                <li class={styles['list-content__item']}>
                                <a className={styles['list-content__link']}>
                                    Элит
                                    </a>
                                    <p className={styles['list-content__sum-object']}>
                                        9
                                    </p>
                                </li>
                            </ul>
                       </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UsefulLinks