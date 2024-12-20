import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UtilsContextProvider } from './context/utilsConstext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsContextProvider>
        <App />
      </UtilsContextProvider>
    </AuthProvider>
  </BrowserRouter>
)
