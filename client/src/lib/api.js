export const getAllFilm = async () => {
  try {
    const response = await fetch('/film');
    const { data } = await response.json();
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
