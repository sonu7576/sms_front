import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>


    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/Edit/:id' element={<Edit/>}/>
      <Route path='/single/:id' element={<Single/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      

    </Routes>
   


      
    </>
  );
}

export default App;
