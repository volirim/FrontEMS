import styles from './JoinDocks.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
const anketa =  require("../../../docs/anketa.docx");
const zayavlenie =  require("../../../docs/zayavlenie.docx");

const JoinDocks = () => {
    return (
        <div className={styles.container}>
            <Link to={anketa} download="анкета на вступление в союз.docx" target='_blank' className={styles.link}>
                <FontAwesomeIcon icon={faFileWord} fontSize="40px" color="#034C82" />
                <div className={styles.iconText}>Анкета</div>
            </Link>
            <Link to={zayavlenie}  download="заявление на вступление в союз.docx" rel="noopener noreferrer" target='_blank' className={styles.link}>
                <FontAwesomeIcon icon={faFileWord} fontSize="40px" color="#034C82" />
                <div className={styles.iconText}>Заявление</div>
            </Link>
        </div>
    )
}

export default JoinDocks;