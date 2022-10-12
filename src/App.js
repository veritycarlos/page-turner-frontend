import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Readers from './containers/Readers';
import Reader from './containers/Reader';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route exact path="/readers" element= {<Readers/>} />
          <Route path="/readers/:id" element= {<Reader/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
