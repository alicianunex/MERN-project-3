import React from 'react';
import { getAllDirectors } from '../lib/api';

class Directors extends React.Component {
  state = {
    directors: [],
    clicked: false,
  };
  onclicked = () => {
    this.setState({ clicked: true });
    console.log('helloitsme');
  };
  async componentDidMount() {
    try {
      const res = await getAllDirectors();
      this.setState({ directors: res });
      console.log(res);
    } catch (err) {}
  }
  render() {
    return (
      <div>
        <div>
          {this.state.directors.map((director) => (
            <div>
              <h1>{director.name}</h1>
              <h2>{director.born}</h2>
              <h3>{director.year}</h3>
              <h4>{director.awards}</h4>
              <h5>{director.image}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Directors;
