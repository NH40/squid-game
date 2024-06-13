import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { ModelProvider } from './components/ModalProvider'
import Admin from './components/screens/admin/Admin'
import Home from './components/screens/home/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModelProvider>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Admin' element={<Admin />} />
      </Routes>
    </Router>
    </ModelProvider>
  </React.StrictMode>
)
