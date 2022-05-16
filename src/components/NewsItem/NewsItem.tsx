import { NavLink } from "react-router-dom";
import styles from './NewsItem.module.css'

interface INewsItem {
    isOnMainPage: boolean;
}

const NewsItem = ({isOnMainPage}: INewsItem) => {
    return (
        <NavLink to={'/'} className={isOnMainPage ? styles.container : styles.containerForNews}>
            <span className={styles.date}>31 марта 2022</span>
            <h4 className={isOnMainPage ? styles.title : styles.titleForNews}>Новая межотраслевая программа поможет развитию ТЭК и тяжелого машиностроения</h4>
            <p className={isOnMainPage ? styles.text : styles.textForNews}>В ЦНИИчермет им. И.П. Бардина прошло совещание по актуализации Межотраслевой программы работ по освоению новых видов и улучшению качества металлопродукции для топливно-энергетического комплекса и тяжелого машиностроения на период 2022-2025 гг.</p>
        </NavLink>
    )
}

export default NewsItem;