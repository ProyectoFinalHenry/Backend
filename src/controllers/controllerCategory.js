import sequelize from "../db.js";

const getAll = async (category) => {
  const model = sequelize.models[category];
  const data = await model.findAll();
  if (!data.length) throw new Error(`No se encontró ${category}`);

  return data;
};

export default getAll;
