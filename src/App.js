import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navb from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutMe from './components/about-me/About-me';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import './App.css'

function App() {

    return (
      <Router>
        <Navb/>
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

        <Footer />
      </Router>
    );
  }
  
  export default App;