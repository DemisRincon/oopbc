import React from 'react'
import styles from '../styles/index.module.scss'
import {string,bool} from 'prop-types'
const Number = ({ nameNumber}) => {
    return (
        <div className={styles.NumberContainer}>
            <Row first nameNumber={nameNumber} />
            <Row nameNumber={nameNumber} />
            <Row nameNumber={nameNumber}/>
        </div>
    )
}
Number.propTypes={
    nameNumber:string
}

const Row = ({ first ,nameNumber}) => {
    return (
        <div className={`${styles.BoxContainer} ${styles[nameNumber]}`}>
            <div className={styles.RowBox}>
                {
                    !first &&
                    <>
                        <div className={styles.Vertical1}></div>
                        <div className={styles.Box}></div>
                        <div className={styles.Vertical2}></div>
                    </>
                }
            </div>
            <div className={styles.SmallRowBox}>
                <div className={styles.Square}></div>
                <div className={styles.Horizontal}></div>
                <div className={styles.Square}></div>
            </div>
        </div>
    )

}

Row.propTypes={
    first:bool,
    nameNumber:string
}


export default Number