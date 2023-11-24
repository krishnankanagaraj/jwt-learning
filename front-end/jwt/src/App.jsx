import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import './App.css'
import HomePage from './HomePage'
import Dashboard from './Dashboard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'

function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </>
  )
}

export default App
