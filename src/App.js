import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Places from './components/Places';
import PlaceDetails from './components/PlaceDetails';
import PlaceForm from './components/PlaceForm';
import AttrList from './components/AttrList';
import PageNotFound from './components/PageNotFound';
import AttractionDetails from './components/AttractionDetails';
import NewAttraction from './components/NewAttraction';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route exact path="/attractions" element={<AttrList/>} />
          <Route path="/attractions/:id" element={<AttractionDetails/>} />
          <Route exact path="/places/:placeId/attractions/new" element={<NewAttraction/>} />
          <Route exact path="/places" element= {<Places/>} />
          <Route path="/places/:id" element= {<PlaceDetails/>} />
          <Route exact path="/places/new" element={<PlaceForm/>} />
          <Route path="*" element= {<PageNotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
