import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/projects";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
