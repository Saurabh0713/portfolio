
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <MyProjects/>
      <Contact/>
    </div>
  );
}

export default App;
