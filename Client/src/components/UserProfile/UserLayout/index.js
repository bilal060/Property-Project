import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default UserLayout