import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <h1>A & S Renovations</h1>
            <div className={styles.links}>
                
                <Link href='/'>Home</Link>
                <Link href='/gallery'>Gallery</Link>
                <a href='tel:555-555-5555'><FontAwesomeIcon icon={faPhoneFlip} className='phone-link' size='3x'/></a>

            </div>
        </div>
    )
}

export default Navbar;