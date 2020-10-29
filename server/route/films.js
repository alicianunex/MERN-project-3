import express from 'express';
import {
  listFilm,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} from '../controllers/films.js';
// import {
//   listDirector,
//   getDirectorById,
//   createDirector,
//   updateDirectorById,
//   deleteDirectorById,
// } from '../controllers/films.js';

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
filmRouter.delete('/film/:id', deleteFilmById);

// //// Directors
// // List of directors
// filmRouter.get('/director', listDirector);
// // List directors by id
// filmRouter.get('/film/:id', getDirectorById);
// // Create
// filmRouter.post('/film', createDirector);
// // Update
// filmRouter.put('/film/:id', updateDirectorById);
// // Delete
// filmRouter.delete('/film/:id', deleteDirectorById);

export default filmRouter;
