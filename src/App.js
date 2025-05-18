import './index.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
