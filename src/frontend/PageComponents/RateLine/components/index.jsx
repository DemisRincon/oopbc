import React, { useEffect, useState } from 'react'
import styles from "../styles/index.scss";
const RateLine = ({ text, stars,position }) => {
    const [Stars, setStars] = useState([])
    useEffect(() => {

        let starsArr = []
        for (let index = 0; index < stars; index++) {
            starsArr = [...starsArr, "x"]

        }
        setStars(starsArr);


    }, [])

    return (
        <div className={`${styles.MainRateLine} ${styles[position]}`} >
            <div className={styles.InnerContaienr}>
                <div className={styles.StarsContainer}>
                    {
                        Stars.map((item,index) =>                       
                            <img key={index} src="/images/icon-star.svg"/>
                            )
                    }
                </div>
                <div className={styles.TextContainer}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default RateLine
