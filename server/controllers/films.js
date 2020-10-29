import {
  getAllFilm,
  getFilmResourceById,
  createFilmResource,
  updateFilmResource,
  deleteFilmResource,
} from '../models/films.js';
// From the URL GET /film
export const listFilm = async (request, response, next) => {
  try {
    const FilmList = await getAllFilm();
    return response.status(200).send(FilmList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};

// From the URL GET /Film/:id
export const getFilmById = async (request, response, next) => {
  // URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Call a function that is declared in the resource model
  const FilmResource = await getFilmResourceById(id);

  // If we have a Film resource
  if (FilmResource) {
    // return resource and 200 OK status
    return response.status(200).send(FilmResource);
  } else {
    // if not sent 404 Resource not found
    return response.status(404).send({
      message: 'Error: Film resource not found.',
    });
  }
};

// POST /Film with JSON in the body
export const createFilm = async (request, response) => {
  // get access to the data sent it by the client

  const { body } = request;

  try {
    // Call a function that is declared in the resource model
    const newFilmResource = await createFilmResource(body);
    return response.status(201).send(newFilmResource);
  } catch (error) {
    // Because Daytabases can be in other location can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /Film/:id
export const updateFilmById = async (request, response) => {
  // get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Call a function that is declared in the resource model
    const FilmResource = await updateFilmResource(id, body);
    return response.status(200).send(FilmResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /Film/:id
export const deleteFilmById = async (request, response) => {
  // get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Call a function that is declared in the resource model
    const deleteMessage = await deleteFilmResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
// export const listDirector;
