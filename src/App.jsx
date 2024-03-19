import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About";
import { Reserve } from "./pages/Reserve";
import { Contact } from "./pages/Contact";
import NavbarMenu from "./component/NavbarMenu";
import { Food } from "./pages/Food";  
import Footer from "./component/Footer.jsx";



function App() {
  return (
    <>
      <NavbarMenu />
      
      <Routes>
        <Route path="/appRestaurant/" element={<Home />}></Route>
        <Route path="/appRestaurant/About" element={<About />}></Route>
        <Route path="/appRestaurant/Reserve" element={<Reserve />}></Route>
        <Route path="/appRestaurant/Contact" element={<Contact />}></Route>
        <Route path="/appRestaurant/Food" element={<Food />}></Route>
        <Route path="/appRestaurant/*" element={<Navigate to={"/appRestaurant/"} />} ></Route>
      </Routes>
    <Footer />
   </>
  );
}

export default App;
