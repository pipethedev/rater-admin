import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { store } from '../src/store/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider {...{ store }}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
