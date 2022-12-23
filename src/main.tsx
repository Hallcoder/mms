import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  {BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Upload from './pages/Upload';
import Account from './pages/Account';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
        <Route path='/account/*' element={<Account />}></Route>
        <Route path='/' element={<App />} />
        </Routes>   
    </Router>
  </React.StrictMode>,
)
