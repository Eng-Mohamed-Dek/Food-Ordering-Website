import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FoodContextProvider from './context/FoodContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </FoodContextProvider>
  </StrictMode>,
)
