import bcrypt from "bcryptjs";

const userAdmin = async (sequelize) => {
  const { User, Role } = sequelize.models;
  const name = "pepeAdmin";
  const image =
    "https://i.pinimg.com/564x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg";
  const email = "teamCoffee777@outlook.com";
  const password = "HEnryF32-f";
  const validated = true;
  const hashedPassword = await bcrypt.hash(password, 8)
  
  const [admin, created] = await User.findOrCreate({
    where: { name },
    defaults: {
      name,
      image,
      email,
      password: hashedPassword,
      validated,
    },
  });

  if (created) {
    const role = await Role.findOne({ where: { role: "admin" } });
    await admin.setRole(role);
  }
};

export default userAdmin;
