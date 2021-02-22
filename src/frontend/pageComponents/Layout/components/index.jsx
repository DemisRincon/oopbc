import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Navigator from './navigator'

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Bright coders exercise</title>
            </Head>
            <main className={styles.MainContainer} >
                <Navigator />
                {children}
            </main>
        </>
    )
}

export default Layout
