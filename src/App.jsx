import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About";
import { Reserve } from "./pages/Reserve";
import { Contact } from "./pages/Contact";
import NavbarMenu from "./component/NavbarMenu";
import { Food } from "./pages/Food";  



function App() {
  return (
    <>
      <NavbarMenu />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Reserve" element={<Reserve />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/*" element={<Navigate to={"/"} />} ></Route>
      </Routes>
 
    </>
  );
}

export default App;
