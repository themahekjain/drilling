import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Parent } from './component/passing/parent.jsx';
import { App } from './component/drilling/Main.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/parent' element={<Parent/>} />
          <Route path='/drill' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
