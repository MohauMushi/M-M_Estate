import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import AboutUs from "./Components/About";
import Service from "./Components/Services";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <Home />
        <Gallery />
        <AboutUs />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
