import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// context
import HeaderProvider from './context/HeaderContext.jsx'
import HouseContext from './context/HouseContext.jsx'

import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <HeaderProvider>
      <HouseContext>
        <App />
      </HouseContext>
    </HeaderProvider>
  </Router>
)
