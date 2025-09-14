import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whiteboard from "./pages/Whiteboard";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Whiteboard/>}/>
        <Route path = "/auth" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
