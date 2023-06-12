import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom';
import HouseDetail from './pages/HouseDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/house-list/:id' element={ <HouseDetail/> } />
      </Routes>
    </>
  )
}

export default App