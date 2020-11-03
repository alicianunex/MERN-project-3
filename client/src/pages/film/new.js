import { useState } from 'react';
import { createFilm } from '../../lib/api.js';
import { useHistory } from 'react-router-dom';

const NewFilm = () => {
  const history = useHistory();
  const [film, setFilm] = useState({
    title: '',
    year: '',
    director: '',
    image: '',
  });

  const handleOnChange = (event) => {
    const {
      currentTarget: { name, value },
    } = event;
    setFilm({ ...film, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await createFilm(film);
    history.push('/');
  };

  return (
    <main>
      <h2 id="title">Add new film</h2>
      <section>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" onChange={handleOnChange} />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input id="year" name="year" onChange={handleOnChange} />
          </div>
          <div>
            <label htmlFor="director">Director</label>
            <input id="director" name="director" onChange={handleOnChange} />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input id="image" name="image" onChange={handleOnChange} />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </main>
  );
};

export default NewFilm;
