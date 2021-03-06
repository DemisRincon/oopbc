import React from 'react'
import Link from 'next/link';
import styles from '../styles/index.scss'
import data from '../constants/data.json'
const Foooter = () => {
    return (
        <footer>
            <div className={styles.Frameworks}>
                <h4>{data.frameworks.name}</h4>
                <ul>
                    {data.frameworks.list.map((item,index) => {
                        return (
                            <li  key={String(item)+index}>
                                <img src={item} alt=""  />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.ContactContainer}>
                <h4>{data.contact.name}</h4>
                <ul>


                    {
                        data.contact.list.map(
                            (item ,index) => {
                                return (
                                    <li key={String(item)+index}>
                                        <Link href={item.link} passHref={true}>
                                            <>
                                                <img src={item.img} alt="" />
                                                <span>
                                                    {item.name}
                                                </span>
                                            </>
                                        </Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
            <div className={styles.Legal}>
                <ul>
                    {
                        data.legal.map((item,index) => <li  key={String(item)+index}> {item}</li>)
                    }

                </ul>
            </div>
        </footer>
    )
}

export default Foooter
