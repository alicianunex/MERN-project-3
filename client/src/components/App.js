import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Header from './header.js';
import Directors from './directors';
import Footer from './footer.js';
import '../styles/App.css';

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
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/directors" component={Directors} />
        </div>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
