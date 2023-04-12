import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Naviation";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Resume from "./components/Resume/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  function renderPage() {
    // if else conditions here
    if (currentPage == "About") {
      return <About />;
    }

    if (currentPage == "Contact") {
      return <Contact />;
    }

    if (currentPage == "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage == "Resume") {
      return <Resume />;
    }
  }
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {/* // function call  */}
      {renderPage()}
    </>
  );
}

export default App;
