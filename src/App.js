import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/index";
import Footer from "./components/footer/Footer";

function App() {
    const [currentSection, setCurrentSection] = useState('Home');
  
    const handleSectionChange = (section) => {
      setCurrentSection(section)
    }

    return (
      <main>
        <Navbar handleSectionChange={handleSectionChange}/>
        <Section currentSection={currentSection}/>
        <Footer />
      </main>
    );
  }
  
  export default App;