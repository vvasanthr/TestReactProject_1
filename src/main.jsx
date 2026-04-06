import React from 'react'
import ReactDOM from 'react-dom/client'
import StudentList from './components/StudentList.jsx'

import './index.css'
import './styles/StudentListStyle.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentList/>
  </React.StrictMode>,
)
