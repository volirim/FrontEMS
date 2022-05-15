import { useState } from 'react';
import JoinDocks from '../../components/join/JoinDocks/JoinDocks';
import JoinText from '../../components/join/JoinText';
import styles from './Join.module.css'

const Join = () => {
    const [buttonActive, setbuttonActive] = useState(true);

    const handleButtonClick = (bool: boolean) => {
        setbuttonActive(bool)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src="./static/pictures/joining/main.png" className={styles.image} alt="Вступление в союз"></img>
            </div>
            <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Вступление в союз</h3>
                <div className={styles.buttons}>
                    <button className={buttonActive ? styles.infoButtonClicked : styles.infoButton} type="button" onClick={() => handleButtonClick(true)}>Описание</button>
                    <button className={!buttonActive ? styles.infoButtonClicked : styles.infoButton} type="button" onClick={() => handleButtonClick(false)}>Документы</button>
                </div>
                {buttonActive ? <JoinText /> : <JoinDocks />}
            </div>
        </div>
    )
}

export default Join;