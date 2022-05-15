import styles from './MenuButton.module.css'

interface IMenuButton {
    menuOpened: boolean;
    setMenuOpened: (value: boolean) => void;
}

const MenuButton = ({menuOpened, setMenuOpened}: IMenuButton) => {

    const handleClick = () => {
        setMenuOpened(!menuOpened)
    }

    return (
        <div className={menuOpened ? styles.containerOpened : styles.container} onClick={handleClick}>
            <div className={menuOpened ? styles.line1Opened : styles.line1}></div>
            <div className={menuOpened ? styles.line2Opened : styles.line2}></div>
            <div className={menuOpened ? styles.line3Opened : styles.line3}></div>
        </div>
    )
}

export default MenuButton;