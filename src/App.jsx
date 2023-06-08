import { useContext } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import HouseList from './components/HouseList'
import ReviewList from './components/ReviewList'
import SideBar from './components/SideBar'
import { HeaderContext } from './context/HeaderContext'
import Footer from './components/Footer'

const App = () => {
  const { isShow } = useContext(HeaderContext)
  return (
    <>
      <Header />
      <SideBar />
      <Home />
      <HouseList />
      <ReviewList />
      <Footer/>
    </>
  )
}

export default App