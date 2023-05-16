import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducers.jsx'
import './styles/global.scss'
import { BrowserRouter } from 'react-router-dom'

const reduxStore = createStore(rootReducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
