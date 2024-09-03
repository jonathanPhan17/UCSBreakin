import { Route, Routes } from "react-router-dom";

// components
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

// Pages
import AboutUs from "./Pages/AboutUs/AboutUs";
import Events from "./Pages/Events";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
