import {
  getAllDirectors,
  getDirectorsResourceById,
  createDirectorsResource,
  updateDirectorsResource,
  deleteDirectorsResource,
} from '../models/directors.js';
// From the URL GET /Directors
export const listDirector = async (request, response, next) => {
  try {
    const DirectorsList = await getAllDirectors();
    return response.status(200).send(DirectorsList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};

// From the URL GET /Directors/:id
export const getDirectorsById = async (request, response, next) => {
  // URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Call a function that is declared in the resource model
  const DirectorsResource = await getDirectorsResourceById(id);

  // If we have a Directors resource
  if (DirectorsResource) {
    // return resource and 200 OK status
    return response.status(200).send(DirectorsResource);
  } else {
    // if not sent 404 Resource not found
    return response.status(404).send({
      message: 'Error: Directors not found.',
    });
  }
};

// POST /Directors with JSON in the body
export const createDirectors = async (request, response) => {
  // get access to the data sent it by the client

  const { body } = request;

  try {
    // Call a function that is declared in the resource model
    const newDirectorsResource = await createDirectorsResource(body);
    return response.status(201).send(newDirectorsResource);
  } catch (error) {
    // Because Daytabases can be in other location can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /Directors/:id
export const updateDirectorsById = async (request, response) => {
  // get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Call a function that is declared in the resource model
    const DirectorsResource = await updateDirectorsResource(id, body);
    return response.status(200).send(DirectorsResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /Directors/:id
export const deleteDirectorsById = async (request, response) => {
  // get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Call a function that is declared in the resource model
    const deleteMessage = await deleteDirectorsResource(id);
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
