import React from 'react'
import styles from '../styles/index.scss'
const NumberList = ({children}) => {
    return (  <div className={styles.NumberList}>

        {children}
    </div>
    )
}

export default NumberList
