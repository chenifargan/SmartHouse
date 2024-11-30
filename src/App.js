import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import AddRoom from "./Pages/AddRoom";
import Home from "./Pages/Home";
import Room from "./Pages/Room";

function App() {
  return (
    <div className="App">
      <h1 className="app-h1">Smart House</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
