import React from 'react';
import { getAllFilm, deleteFilm } from '../lib/api';

class Home extends React.Component {
  state = {
    films: [],
    clicked: false,
  };
  onclicked = () => {
    this.setState({ clicked: true });
  };

  componentDidMount = async () => {
    try {
      const res = await getAllFilm();

      this.setState({ films: res });
    } catch (err) {
      console.log(err);
    }
  };

  async handleDeleteFilm(event) {
    event.preventDefault();
    const {
      currentTarget: { id },
    } = event;
    await deleteFilm(id);
  }

  render() {
    return (
      <div>
        <div>
          {this.state.films.map((film) => (
            <div onClick={this.onclicked} key={film._id}>
              {this.state.clicked === true && (
                <div className="boxinfo">
                  <h1 className="info">{film.title}</h1>
                  <h2 className="info">{film.director}</h2>
                  <h3 className="info">{film.year}</h3>
                  <h4 className="info">{film.awards}</h4>
                  <h5 className="info">{film.nominations}</h5>
                </div>
              )}
              <img alt={film.title} className="filmsphoto" src={film.image} />
              <button onClick={this.handleDeleteFilm} id={film._id}>
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
