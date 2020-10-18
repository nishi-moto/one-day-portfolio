import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Gallery from './Gallery';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';
import Detail from './Detail';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route
            path={'/detail/:id'}
            component={Detail}
          >
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
