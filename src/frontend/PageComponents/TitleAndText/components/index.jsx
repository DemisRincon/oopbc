import React from 'react'
import styles from '../styles/index.scss'

const TitleAndText = ({title}) => {
    return (
        <div  className={styles.MaiTitleAndText}>
            <h1>{title}</h1>
            <p>
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
            </p>
        </div>
    )
}

export default TitleAndText
