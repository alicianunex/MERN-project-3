import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
///Models
import Director from '../models/directors.js';
import Film from '../models/films.js';
///Data
import films from './films.js';
import directors from './directors.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  films.map(async (filmItem) => {
    const filmResource = await Film.create({ ...filmItem });
    console.log(
      `The resource ${JSON.stringify(filmResource)} has been created`,
    );
  }),
);

Promise.all(
  directors.map(async (directorItem) => {
    const directorResource = await Director.create({ ...directorItem });
    console.log(
      `The resource ${JSON.stringify(directorResource)} has been created`,
    );
  }),
);
