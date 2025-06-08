import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import Home from "./Pages/Home";
import HomeCate from "./Pages/HomeCate";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
                <Routes>
                  <Route path='/' element ={<Home/>}/>
                  <Route path='/Medicine' element ={<HomeCate/>}/>
                  <Route path='/Lab Test' element ={<HomeCate/>}/>
                  <Route path='Contact/' element ={<HomeCate/>}/>

                </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
