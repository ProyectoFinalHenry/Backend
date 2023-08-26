const data = ["admin", "user"];

const seedRole = async (sequelize) => {
  const { Role } = sequelize.models;

  for (let roles of data) {
    const [, created] = await Role.findOrCreate({ where: { role: roles } });
    if (!created) continue;
  }
};

export default seedRole;
