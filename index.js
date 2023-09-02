import server from "./src/app.js";
import sequelize from "./src/db.js";
import dotenv from "dotenv";
import seedCoffee from "./src/seeders/coffees/coffee.js";
import seedRole from "./src/seeders/roles/role.js";
import seedUser from "./src/seeders/users/users.js";
import userAdmin from "./src/seeders/admin/admin.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;

sequelize.sync({ force: true }).then(async () => {
  await seedCoffee(sequelize);
  await seedRole(sequelize);
  await seedUser(sequelize);
  await userAdmin(sequelize);

  server.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
  });
});
