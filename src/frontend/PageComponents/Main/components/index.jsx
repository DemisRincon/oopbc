import React from 'react'
import TitleAndText from '../../TitleAndText/components'
import styles from '../styles/index.scss'
import data from '../constants/dataOfPage.json'
import RateLine from '../../RateLine/components'
import OpinionBox from '../../OpinionBox/components'
import { useDeviceInfo } from '../../../library/hooks/useWindowSize'

const Main = () => {

 const [mobile]=useDeviceInfo()
    return (
        <main  >

            <div className={styles.BgContianer}>
                <div className={styles.Top} />
                <div className={styles.Bottom} />
            </div>
            <div className={`${styles.FirstPatrt}`}>
                <div className={styles.TitleTextContainer}>
                    <TitleAndText {...data.titleAndText} />
                </div>
                <div className={styles.RateContainer}>
                    {
                        data.ratelines.map(
                            (element, index) => <RateLine key={String(element) + index} {...element} />
                        )
                    }
                </div>
            </div>
            <div className={`${styles.SecondPart}`}>
                {
                    data.OpinionBox.map(
                        (element, index) => <OpinionBox key={String(element) + index} {...element
                        } />
                    )
                }
            </div>
        </main>

    )
}

export default Main
