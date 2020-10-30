import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Footer from './footer.js';
import Header from './header.js';
import Directors from './directors';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/directors">Directors</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/directors" component={Directors} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
