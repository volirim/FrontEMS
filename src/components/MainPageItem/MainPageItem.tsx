import styles from "./MainPageItem.module.css"

interface IMainPageItem {
    img: string;
    title: string;
    text: string;
    id: number;
} 

const MainPageItem = ({img, title, text, id}: IMainPageItem) => {
    let gridArea = ''  
    if(id === 0) {
        gridArea = 'first'
    } else if(id === 1) {
        gridArea = 'second'
    } else if(id === 2){
        gridArea = 'third'
    }
    
    return(
        <div className={styles.container} style={{gridArea}}>
            <div className={styles.imageWrapper}>
                <img src={img} alt={title} className={styles.image}></img>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default MainPageItem;