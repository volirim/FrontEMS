import styles from './FooterLink.module.css'

export interface IFooterLink {
    link: string;
    text: string;
}

const FooterLink = ({link, text}: IFooterLink) => {
    return (
        <a href={link} target='_blank' rel="noreferrer" className={styles.link}>
            {text}
        </a>
    )
}

export default FooterLink;