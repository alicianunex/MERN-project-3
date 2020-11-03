import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Header from './header.js';
import Directors from './directors';
import Footer from './footer.js';
import '../styles/App.css';

// pages

import NewFilm from '../pages/film/new.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <nav>
            <Link to="/" id="one">
              INDEX
            </Link>
            <Link to="/directors" id="two">
              DIRECTORS
            </Link>
            <Link to="/film/new" id="three">
              ADD FILM
            </Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/directors" component={Directors} />
          <Route path="/film/new" component={NewFilm} />
        </div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
