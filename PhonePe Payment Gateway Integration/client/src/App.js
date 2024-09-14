import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Success from './Component/Success';
import Fail from './Component/Fail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/fail' element={<Fail/>} />


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


 