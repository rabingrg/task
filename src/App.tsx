import {Routes,Route} from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import SearchList from './components/pages/UserLists'

export const App = () => {
  return (
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/userList' element={<SearchList/>}/>
    </Routes>
  )
}
