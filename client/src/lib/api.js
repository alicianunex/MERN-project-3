const { REACT_APP_SERVER_URL } = process.env;

export const getAllFilm = async () => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/film`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllDirectors = async () => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/director`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {}
};

export const createFilm = async (film) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/film`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(film),
  });
  const newFilm = await response.json();
  return newFilm;
};

export const deleteFilm = async (id) => {
  await fetch(`${REACT_APP_SERVER_URL}/film/${id}`, {
    method: 'DELETE',
  });
};
