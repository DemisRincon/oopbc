import React from 'react'
import ArbitraryNumber from '../src/frontend/pageComponents/ArbitraryNumber/components'

import Explanation from '../src/frontend/pageComponents/Explanation/components'
import Foooter from '../src/frontend/pageComponents/Footer/components'
import Layout from '../src/frontend/pageComponents/Layout/components'
import Presentation from '../src/frontend/pageComponents/Presentation/components'

const Home = () => {
    return (


        <Layout>
            <Presentation />
            <ArbitraryNumber
                title="First Part of the Exercise"
                legend="In this part you requested that you can write a number and 
                then it should be written on the command line, so I display it in 
                two different ways."
            />
            <Explanation/>
            <ArbitraryNumber
                mod
                title="Second Part of the Exercise"
                legend="In this part you requested that you can change the size of a number."
            />
            <Foooter/>
        </Layout>
    )
}

export default Home
