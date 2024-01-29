import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/about/About';
import { Work } from './components/Work/Work';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return <div className ={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
  </div>;     
}

export default App
