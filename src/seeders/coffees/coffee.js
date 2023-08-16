import data from "./data.js";

const seedCoffee = async (sequelize) => {
  const { Coffee, Origin, RoastingProfile, TypeOfCoffee } = sequelize.models;
  for (const coffeeData of data) {
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

    if (!created) continue;

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
  }
};

export default seedCoffee;
