export const getAllFilm = async () => {
  try {
    const response = await fetch('http://localhost:5000/film');
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
  //   const getFilm = async (id) => {
  //     try {
  //       const response = await fetch(`/films${URL}`);
  //       const { data } = await response.json();
  //       return data;
  //     } finally {
  //     }
  //   };
  // };
};
export const getAllDirectors = async () => {
  try {
    const response = await fetch('http://localhost:5000/director');
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {}
};

export const createFilm = async (film) => {
  const response = await fetch('http://localhost:5000/film', {
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
  await fetch(`http://localhost:5000/film/${id}`, {
    method: 'DELETE',
  });
};
