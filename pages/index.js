import React, { Component } from 'react'
import Layout from '../components/_wrapper/Layout'
import Home from '../components/Home'



class HomeContainer extends Component {
    render() {
        return (
                <Layout >
                    <Home />
                </Layout>
        )
    }
}

export default HomeContainer