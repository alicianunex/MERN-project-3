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
        <div className="box2">
          {this.state.directors.map((director) => (
            <div>
              <h1 className="dinfo">{director.name}</h1>
              <h2 className="dinfo">{director.born}</h2>
              <h3 className="dinfo">{director.notableWork}</h3>
              <img
                alt={director.name}
                className="directorphoto"
                src={director.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Directors;
