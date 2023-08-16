import sequelize from "../db.js";

const getAll = async (category) => {
  const model = sequelize.models[category];
  if (!model) throw new Error(`Model ${category} not found`);

  const data = await model.findAll();
  if (!data.length) throw new Error(`No ${category} found`);

  return data;
};

export default getAll;
