import NewsItem from "../../components/NewsItem/NewsItem";
import styles from "./News.module.css";

const array = [1,2,3,4,5]

const News = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src='./static/pictures/news/main.png' alt='Новости' className={styles.image}></img>
            </div>
            <div className={styles.newsBlock}>
                {array.map(element => <NewsItem key={element} isOnMainPage={false} />)}
            </div>
        </div>
    )
}

export default News;