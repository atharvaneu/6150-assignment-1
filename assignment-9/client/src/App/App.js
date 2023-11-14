import Nav from "../Components/Nav";
import AboutUs from "./Aboutus";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Contact from "./Contact";
import Jobs from "./Jobs";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
