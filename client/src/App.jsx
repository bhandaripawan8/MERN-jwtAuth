import './App.css'
import './index.css'
import {Route, Routes} from 'react-router-dom';
import {Home, Login, SignUp} from './Pages/Index';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signup' element = {<SignUp/>}></Route>
      </Routes>
    </>
  )
}
export default App
