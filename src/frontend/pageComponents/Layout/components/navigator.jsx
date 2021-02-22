import React from 'react'
import styles from '../styles/navigator.scss'
import { useIsScrolling } from '../../../library/hooks/Scroll'

const Navigator = () => {
    const [scrolling] = useIsScrolling()
    return (
        <header className={`${styles.Header} ${scrolling.value && styles.Scrolling}`}>
            <div className={styles.ImageContainer}>
                <img src="/logo-bc.png" alt="" />
            </div>
            <div className={styles.NavContainer}>
                <nav>
                    <ul>
                        <li>
                            <h4>
                            Developed by Demis Rincón 
                            </h4>
                            <img src="/photo.jpg" alt=""/>
                        </li>            
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigator
