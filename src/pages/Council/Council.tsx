import styles from './Council.module.css'

const Council = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src='./static/pictures/council/main.png' className={styles.image}></img>
            </div>
            <div className={styles.textBlock}>
                Coming soon...
            </div>

        </div>
    )
}

export default Council;