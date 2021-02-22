import React from 'react'
import styles from '../styles/index.scss'
const OpinionBox = ({ photo, name, tipeCustomer, opinion, position }) => {
    return (
        <div className={`${styles.MainOpinionBox} ${styles[position]}`}>


            <div className={`${styles.DataBoxContainer}`}>
                <div className={styles.CardHead}>
                    <div className={styles.PhotoContainer}>
                        <img src={photo} alt="photo" />
                    </div>
                    <div className={styles.DataCustomer}>
                        <p>{name}</p>
                        <p className={styles.Type}>{tipeCustomer}</p>
                    </div>
                </div>
                <div className={styles.CardBody}>
                    <p>
                        {`"${opinion}"`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OpinionBox
