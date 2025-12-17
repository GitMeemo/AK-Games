import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Library from "./components/Library";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Admin from "./components/Admin";
import Registration from "./components/Registration";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Registration/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Library' element={<Library/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  );
}
export default App;