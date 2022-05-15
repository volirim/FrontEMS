import { NavLink } from 'react-router-dom';
import styles from './NavMenuLink.module.css'

interface INavMenuLink {
    link: string;
    name: string;
} 

const NavMenuLink = ({link, name}: INavMenuLink) => {
    return (
    <li className={styles.container}>
        <NavLink to={link} className={styles.link}>
            {name}
        </NavLink>
    </li>
    )
}

export default NavMenuLink;