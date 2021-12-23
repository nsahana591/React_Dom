import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
import Navbar from "./Navbar/Navbar";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/Navbar" element={<Navbar/>}/>
        </Routes>
      </Router>
    </>
  );
};
export default App;