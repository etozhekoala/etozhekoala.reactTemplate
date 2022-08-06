import React from 'react'
import { Typography, Button } from 'antd'
import searchFilter from '../../assets/image/Header/searchFilter.png'
import styles from './Header.module.scss'

const { Title } = Typography;


const Header = () => {
    return (
    <div className={styles.header}>
        <div className={styles.container}>
            <Title className={styles.header__title + ' ' + styles['header__title--margin-top']}>
                Поиск по новостройкам
            </Title>
            <div className={styles.header__buttons}>
                <Button className={styles.buttons__btnClassic + ' ' + styles['buttons--active']} type="default" shape="round">Классический поиск</Button>
                <Button className={styles.buttons__btnSmart + ' ' + styles['buttons__btnSmart--margin-left']} type="default" shape="round">Умная строка</Button>
            </div>
            <div className={styles.buttons__searchContent + ' ' + styles['searchContent--margin-top']}>
                <div className={styles.content__btnClassic}>
                    <input className={styles.searchInput} placeholder="Район, мкр, метро или ЖК"></input>
                    <div class={styles.searchBar_wrapper}>
                   <select className={styles.searchBar} name="searchBar">
                   <option className={styles.searchBar__item} value="1">Класс ЖК</option>
                   </select>
                    </div>
                    <div class={styles.searchBar_wrapper}>
                   <select className={styles.searchBar} name="searchBar">
                   <option className={styles.searchBar__item} value="1">Цена</option>
                   </select>
                    </div>
                    <div class={styles.searchBar_wrapper}>
                   <select className={styles.searchBar} name="searchBar">
                   <option className={styles.searchBar__item} value="1">Комнат</option>
                   </select>
                    </div>
                    <div class={styles.searchBar_wrapper}>
                   <select className={styles.searchBarEnd} name="searchBar">
                   <option className={styles.searchBar__item} value="1">Срок сдачи</option>
                   </select>
                    </div>
                    <div className={styles['btn-filters'] + ' ' + styles['btn-filters--margin']}>
                        <img className={styles['btn-filters__icon']} src={searchFilter} />
                    </div>
                    <Button className={styles['button-search'] + ' ' + styles['button-search--custom'] + ' ' + styles['button-search--margin']}  type="primary" shape="round">
                                    Найти
                    </Button>
                </div>
                </div>
                <div className={styles.content__btnSmart}>
                    
                </div>
            </div>
    </div>  

)
}

export default Header