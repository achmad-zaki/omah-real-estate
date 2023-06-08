import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// context
import HeaderProvider from './context/HeaderContext.jsx'
import HouseContext from './context/HouseContext.jsx'
import ReviewContext from './context/ReviewContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderProvider>
    <HouseContext>
      <ReviewContext>
        <App />
      </ReviewContext>
    </HouseContext>
  </HeaderProvider>
)
