import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./Components/List"
import Header from "./Components/Header"
import Pgae from "./Components/Pgae";
import Detail from "./Components/Detail";
import Footer from "./Components/Footer";


function App() {
 

  return (
    <Router>
      <Header />
      <div className="pt-18">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/cart" element={<Pgae />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
