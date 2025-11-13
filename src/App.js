import './App.css';
import Home from './components/Home';
import About from './components/About';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="app" id="app">
      <header className="topnav" role="navigation">
        <nav className="nav-inner">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="page-section"><Home /></section>
    <section id="about" className="page-section"><About /></section>
    <section id="showcase" className="page-section"><Showcase /></section>
    </div>
  );
}

export default App;
