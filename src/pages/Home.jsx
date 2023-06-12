import { useContext } from 'react'
import Header from '../components/Header'
import HouseList from '../components/HouseList'
import ReviewList from '../components/ReviewList'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

import { HeaderContext } from '../context/HeaderContext'
import SubscribeForm from '../components/SubscribeForm'
import Banner from '../components/Banner'

const Home = () => {
    const { isShow } = useContext(HeaderContext)
    return (
        <>
            <SideBar />
            <div className={`${isShow ? "opacity-50" : "opacity-100"}`}>
                <Header />
                <Banner />
                <HouseList />
                <ReviewList />
                <Blog />
                <SubscribeForm />
                <Footer />
            </div>
        </>
    )
}

export default Home