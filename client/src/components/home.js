import React from 'react';
import { getAllFilm } from '../lib/api';

// const Home = () => {
//   return (
//     <div>
//       <h1>HOLA</h1>
//       <p>soy el home </p>
//     </div>
//   );
// };
//

class Home extends React.Component {
  state = { film: [] };

  async componentDidMount() {
    try {
      const res = await getAllFilm();
      console.log({ res });
      this.setState({ film: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <h2>hola</h2>
        <div>
          {this.state.film.map((film) => (
            <h1>{film.title}</h1>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
