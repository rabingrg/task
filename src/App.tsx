// import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './components/pages/auth/Login'

export const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login/>}/>
    </Routes>
  )
}
