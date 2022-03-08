import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navb from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutMe from './components/about-me/About-me';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import './App.css'

function App() {
    const [currentSection, setCurrentSection] = useState('Home');
  
    const handleSectionChange = (section) => {
      setCurrentSection(section)
    }

    return (
      <Router>
        <Navb handleSectionChange={handleSectionChange}/>
        <main>
          <Routes>
            {/* About Me Route */}
            <Route 
            path="/"
            element={<AboutMe />}
            />
            {/* Contact Route */}
            <Route 
            path="/contact"
            element={<Contact />}
            />
            {/* Portfolio Route */}
            <Route 
            path="/portfolio"
            element={<Portfolio />}
            />
            {/* Resume */}
            <Route 
            path="/resume"
            element={<Resume />}
            />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
  
  export default App;