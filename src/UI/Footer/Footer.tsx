import FooterLink from "../../components/FooterLink/FooterLink";
import footerLinks from "../../constants/footerLinks";
import styles from "./Footer.module.css";
const uniqid = require('uniqid');
const classNames = require('classnames');

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactsBlock}>
                <img src='./static/pictures/logo.svg' alt="logo" className={styles.logo}/>
                <div className={styles.contacts}>
                    <div>
                        <h3 className={styles.contactsTitle}>Контакты</h3>
                        <p className={styles.contactsText}>
                            119331, г. Москва, пр-т Вернадского, д. 29
                        </p>
                        <p className={styles.contactsText}>
                            +7 903 649-15-37
                        </p>
                        <p className={styles.contactsText}>
                            elmech.union@gmail.com
                        </p>
                    </div>
                    <div className={styles.links}>
                        {footerLinks.map(link => <FooterLink link={link.link} text={link.text} key={uniqid()}></FooterLink>)}
                    </div>
                </div>
            </div>
            <div className={styles.feedback}>
                <div className={styles.square}></div>
                <div className={styles.feedbackBlock}>
                    <div className={styles.feedbackTitle}>
                        <h3>МЫ НА СВЯЗИ</h3>
                        <p>Оставьте свою заявку и мы свяжемся с Вами</p>
                    </div>
                    <form className={styles.feedbackForm}>
                        <input placeholder='Тема письма' required className={classNames(styles.feedbackFormInput, styles.inputFirst)}></input>
                        <input placeholder='ФИО' required className={classNames(styles.feedbackFormInput, styles.inputSecond)}></input>
                        <input placeholder='Организация' className={classNames(styles.feedbackFormInput, styles.inputThird)}></input>
                        <input placeholder='Должность' className={classNames(styles.feedbackFormInput, styles.inputFourth)}></input>
                        <input placeholder='Телефон' className={classNames(styles.feedbackFormInput, styles.inputFifth)}></input>
                        <input placeholder='Email' required className={classNames(styles.feedbackFormInput, styles.inputSixth)}></input>
                        <textarea placeholder='Текст письма' required className={styles.feedbackFormTextarea}></textarea>        
                        <button type="submit" className={styles.feedbackFormSubmit}>Оставить заявку</button>
                        <div className={styles.feedbackFormAnnotation}>
                            Нажимая кнопку, я принимаю условия Пользовательского <br></br> соглашения и даю своё согласие на обработку моих <br /> персональных данных.
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;