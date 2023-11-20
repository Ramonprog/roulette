import styles from './styles.module.css';
import BwLogo from '../../assets/bw.png'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <img src={BwLogo} className={styles.logo} />
            <p className={styles.p} >BW Tecnologia</p>
        </div>
    )
}

export default NavBar