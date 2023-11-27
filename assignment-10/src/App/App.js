import "./App.css";
import Nav from "../Components/Nav";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "../Landing";
import Forecast from "../Forecast";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weather/:day/:datestring" element={<Forecast />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
