import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBlock}>
                    <h2 className={styles.textTitle}>Контакты</h2>
                    <p>
                        119331, г. Москва, пр-т Вернадского, д. 29, этаж 19, <br></br>
                        помещение I, комната 10 <br></br>
                        ИНН 7736329164 
                        КПП 773601001 <br></br> 
                        ОГРН 1207700270810 <br></br>
                        Тел.: +7 903 649-15-37 <br></br>
                        адрес электронной почты: <br></br>
                        elmech.union@gmail.com
                    </p>
                </div>
                <img src='./static/pictures/contacts/main.png' alt='Контакты' className={styles.image}></img>
            </div>
        </div>
    )
}

export default Contacts;