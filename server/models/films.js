import mongoose from 'mongoose';

const filmBody = new mongoose.Schema(
  {
    title: String,
    year: String,
    director: String,
    awards: [String],
  },
  {
    timestamps: true,
  },
);

const Film = mongoose.model('Film', filmBody);

export const getAllFilm = async () => {
  try {
    return await Film.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getFilmResourceById = async (id) => {
  try {
    return await Film.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createFilmResource = async (data) => {
  try {
    return await Film.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateFilmResource = async (id, data) => {
  try {
    return await Film.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFilmResource = async (id) => {
  try {
    return await Film.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Film;
