import React from 'react'
import styles from '../styles/index.scss'
const Input = ({ inputControl, resetInput,...rest }) => {

    return (

        <div className={styles.InputContainer}>
            <input {...rest} type="number" {...inputControl} />
            <button onClick={resetInput}>Reset</button>
        </div>

    )
}

export default Input
