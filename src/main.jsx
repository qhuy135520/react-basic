import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
