import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
};
