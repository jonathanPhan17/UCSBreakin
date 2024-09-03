import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

// Pages
import AboutUs from "./Pages/AboutUs";
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
    </>
  );
}

export default App;
