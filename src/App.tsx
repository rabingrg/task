// import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import UserList from './components/pages/UserList'

export const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/userList' element={<UserList/>}/>
    </Routes>
  )
}
