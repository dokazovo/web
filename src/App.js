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
import Search from "./pages/Search";
import Medication from "./pages/Medication";
import ScrollToTop from "./ScrollToTop";
import Ingredient from "./pages/Ingredient";
import Disease from "./pages/Disease";
import MedicationsIndex from "./pages/MedicationsIndex";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medications" element={<Medications />}>
          <Route path="index/:id" element={<MedicationsIndex />} />
        </Route>
        <Route path="/medications/:id" element={<Medication />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:id" element={<Ingredient />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/diseases/:id" element={<Disease />} />
        <Route path="/atc/:id" element={<Atc />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
