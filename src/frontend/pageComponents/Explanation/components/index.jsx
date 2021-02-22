import React from 'react'
import styles from '../styles/index.scss'
const Explanation = () => {
    return (
        <div className={styles.MainPresentation}>
            <div className={styles.ImageContainer}>

                <div className={styles.PresentationLabels}>
                    <h1>Development of the second part</h1>
                    <h3>For this part just modify some components and functions, the modification for the new requirement was easy because the is developed by components, so just reuse the same component of the first part add some props and conditional rendering, I modified the logic in the par that I define the matrix that conforms the number and add an extra step before to send to print .</h3>
                </div>
                <div className={styles.ImageContainerPres}>
                    <img src="/code.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Explanation
