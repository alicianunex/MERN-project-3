import mongoose from 'mongoose';

const DirectorsBody = new mongoose.Schema(
  {
    name: String,
    born: String,
    occupation: String,
    notableWork: [String],
    image: String,
  },
  {
    timestamps: true,
  },
);

const Directors = mongoose.model('Directors', DirectorsBody);

export const getAllDirectors = async () => {
  try {
    return await Directors.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getDirectorsResourceById = async (id) => {
  try {
    return await Directors.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createDirectorsResource = async (data) => {
  try {
    return await Directors.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateDirectorsResource = async (id, data) => {
  try {
    return await Directors.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteDirectorsResource = async (id) => {
  try {
    return await Directors.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Directors;
