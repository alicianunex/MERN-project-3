import React from 'react';
import { getAllFilm } from '../lib/api';

class Home extends React.Component {
  state = {
    films: [],
    clicked: false,
  };
  onclicked = () => {
    this.setState({ clicked: true });
    console.log('helloitsme');
  };
  async componentDidMount() {
    try {
      const res = await getAllFilm();
      console.log({ res });
      this.setState({ films: res });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.films.map((film) => (
            <div onClick={this.onclicked}>
              {this.state.clicked === true && (
                <div>
                  <h1>{film.title}</h1>
                  <h2>{film.director}</h2>
                  <h3>{film.year}</h3>
                  <h4>{film.awards}</h4>
                  <h5>{film.nominations}</h5>
                </div>
              )}
              <img alt={film.title} className="filmsphoto" src={film.image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
