import sequelize from "../db.js";
const { Cart, User, Coffee } = sequelize.models;

export const addProduct = async (userId, { coffeeId, quantity }) => {
  const [cart, created] = await Cart.findOrCreate({
    where: { UserId: userId, CoffeeId: coffeeId },
    defaults: {
      quantity,
    },
  });
  if (!created && cart.quantity !== quantity) {
    await cart.update({ quantity });
  }
  await cart.setCoffee(coffeeId);
  await cart.setUser(userId);

  return {
    status: "Producto agregado al carrito con éxito",
  };
};

export const deleteProduct = async (userId, { coffeeId }) => {
  const cart = await Cart.findOne({
    where: { UserId: userId, CoffeeId: coffeeId },
  });
  if (!cart) throw new Error("El producto no se encontró en el carrito");

  await cart.destroy();

  return {
    status: "Producto eliminado del carrito con éxito",
  };
};

export const getProducts = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const cart = await Cart.findAll({
    where: { UserId: id },
    include: [
      { model: Coffee, attributes: ["id", "name", "image", "price", "stock"] },
    ],
    attributes: {
      exclude: ["UserId", "CoffeeId"],
    },
  });
  if (!cart.length) throw new Error("El carrito esta vacio");

  return cart;
};
