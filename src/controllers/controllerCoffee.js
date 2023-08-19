import sequelize from "../db.js";
import { Op } from "sequelize";

const { Coffee, Origin, Review, RoastingProfile, TypeOfCoffee, User } =
  sequelize.models;

export const getAll = async ({
  typeOfCoffee,
  origin,
  roastingProfile,
  name,
}) => {
  let optionsDB = {
    include: [
      { model: TypeOfCoffee, attributes: ["type"] },
      { model: Origin, attributes: ["origin"] },
      { model: RoastingProfile, attributes: ["profile"] },
      { model: Review, attributes: ["rating"] },
    ],
    attributes: {
      exclude: ["TypeOfCoffeeId", "RoastingProfileId", "OriginId"],
    },
  };

  const where = {};

  if (name) {
    where.name = { [Op.iLike]: `%${name}%` };
  }

  if (typeOfCoffee) {
    where.TypeOfCoffeeId = typeOfCoffee;
  }

  if (origin) {
    where.OriginId = origin;
  }

  if (roastingProfile) {
    where.RoastingProfileId = roastingProfile;
  }

  if (Object.keys(where).length > 0) {
    optionsDB.where = where;
  }

  const dataDB = await Coffee.findAll(optionsDB);
  if (!dataDB.length)
    throw new Error("Lo siento, no se encontraron cafés, solo tasas vacias :(, intente hacer otra búsqueda");

  return dataDB;
};

export const getById = async (id) => {
  let data = await Coffee.findOne({
    where: { id },
    include: [
      { model: TypeOfCoffee, attributes: ["type"] },
      { model: Origin, attributes: ["origin"] },
      { model: RoastingProfile, attributes: ["profile"] },
      {
        model: Review,
        attributes: ["date", "rating", "comments"],
        include: { model: User, attributes: ["name", "image"] },
      },
    ],
    attributes: {
      exclude: ["TypeOfCoffeeId", "RoastingProfileId", "OriginId"],
    },
  });
  if (!data)
    throw new Error(
      "No se encontró ese café, pero pronto prepararemos más ;)"
    );

  return data;
};

export const post = async (coffeeData) => {
  const {
    name,
    description,
    image,
    price,
    stock,
    typeOfCoffee,
    origin,
    roastingProfile,
  } = coffeeData;

  const [coffee, created] = await Coffee.findOrCreate({
    where: { name },
    defaults: {
      name,
      description,
      image,
      price,
      stock,
    },
  });

  if (!created) throw new Error("Este café ya existe dentro del sistema :o");

  const currentRoasting = await RoastingProfile.findOrCreate({
    where: { profile: roastingProfile },
  });
  const currentType = await TypeOfCoffee.findOrCreate({
    where: { type: typeOfCoffee },
  });
  const currentOrigin = await Origin.findOrCreate({ where: { origin } });

  await coffee.setRoastingProfile(currentRoasting[0]);
  await coffee.setTypeOfCoffee(currentType[0]);
  await coffee.setOrigin(currentOrigin[0]);

  return {
    status: "Creado con éxito :D",
  };
};

export const update = async (id, coffeeData) => {
  const { defaultCoffee, categoryCoffee } = coffeeData;
  if (!defaultCoffee && !categoryCoffee)
    throw new Error("El formato de los valores recibidos es incorrecto.");

  const coffee = await Coffee.findByPk(id);

  if (defaultCoffee) {
    await coffee.update(defaultCoffee);
  }
  if (categoryCoffee) {
    const { roastingProfile, typeOfCoffee, origin } = categoryCoffee;

    if (roastingProfile) {
      const currentRoasting = await RoastingProfile.findOrCreate({
        where: { profile: roastingProfile },
      });
      await coffee.setRoastingProfile(currentRoasting[0]);
    }
    if (typeOfCoffee) {
      const currentType = await TypeOfCoffee.findOrCreate({
        where: { type: typeOfCoffee },
      });
      await coffee.setTypeOfCoffee(currentType[0]);
    }
    if (origin) {
      const currentOrigin = await Origin.findOrCreate({ where: { origin } });
      await coffee.setOrigin(currentOrigin[0]);
    }
  }
  return {
    status: "Actualizado con éxito :)",
  };
};

export const remove = async (id) => {
  const coffee = await Coffee.findByPk(id);
  if (!coffee) {
    throw new Error("Este cafe no existe");
  }
  await coffee.destroy();
  return {
    status: "Eliminado con éxito :v",
  };
};
