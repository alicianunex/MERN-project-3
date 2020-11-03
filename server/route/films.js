import express from 'express';
import {
  listFilm,
  getFilmById,
  createFilm,
  updateFilmById,
} from '../controllers/films.js';
import {
  listDirector,
  getDirectorsById,
  createDirectors,
  updateDirectorsById,
} from '../controllers/directors.js';

const filmRouter = express.Router();

//List all films
filmRouter.get('/film', listFilm);
// List film resource
filmRouter.get('/film/:id', getFilmById);
// Create
filmRouter.post('/film', createFilm);
// Update
filmRouter.put('/film/:id', updateFilmById);
// Delete
// filmRouter.delete('/film/:id', deleteFilmById);

//// Directors
// List of directors
filmRouter.get('/director', listDirector);
// List directors by id
filmRouter.get('/director/:id', getDirectorsById);
// Create
filmRouter.post('/director', createDirectors);
// Update
filmRouter.put('/director/:id', updateDirectorsById);
// Delete
// filmRouter.delete('/director/:id', deleteDirectorsById);

export default filmRouter;
