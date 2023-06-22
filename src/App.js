import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Agreement from "./pages/Agreement";
import Medications from "./pages/Medications";
import Ingredients from "./pages/Ingredients";
import Diseases from "./pages/Diseases";
import Atc from "./pages/Atc";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResult from "./pages/SearchResult";
import Medication from "./pages/Medication";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/medications/:id" element={<Medication />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/atc" element={<Atc />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/search-result/:query" element={<SearchResult />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
