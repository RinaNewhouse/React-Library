import './index.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Highlights from './components/Highlights'
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Features />
    </div>
  );
}

export default App;
