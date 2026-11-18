import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Projects from "./Components/projects";
import Services from "./Components/Services";
import Process from "./Components/Process";
import Toolkit from "./Components/Toolkit";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ServicesIntro from "./Components/ServicesIntro";
import { profile } from "./data";

const titles = {
  "/": `${profile.name} — ${profile.role}`,
  "/work": `Work: Websites and Web Apps | ${profile.name}`,
  "/services": `Services: Websites, Web Apps and E-commerce | ${profile.name}`,
  "/about": `About ${profile.name} | ${profile.role}`,
  "/contact": `Contact | ${profile.name}, ${profile.role}`,
};

// Scrolls to the #section in the URL (e.g. /#contact), or to the top on a new page,
// and sets the browser-tab title for each page.
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || titles["/"];
    if (hash) {
      const id = hash.slice(1);
      // Wait a frame so the page has rendered before scrolling to the section.
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
};

const HomePage = () => (
  <>
    <Home />
    <Projects />
    <Services />
    <Process />
    <Toolkit />
    <About />
    <Contact />
  </>
);

const WorkPage = () => <Projects asPage />;

const ServicesPage = () => (
  <>
    <ServicesIntro />
    <Services />
    <Process />
  </>
);

const App = () => {
  return (
    <div className="App">
      <ScrollManager />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About asPage />} />
          <Route path="/contact" element={<Contact asPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
