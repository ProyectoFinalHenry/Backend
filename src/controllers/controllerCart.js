import sequelize from "../db.js";
const { Cart } = sequelize.models;

export const addProduct = async ({ userId, productId, quantity }) => {
  const [cart, created] = await Cart.findOrCreate({
    where: { userId, productId },
    default: {
      userId,
      productId,
      quantity,
    },
  });

  if (!created) {
    await cart.update({ quantity });
  }

  return {
    status: "Producto agregado al carrito con éxito",
  };
};

export const deleteProduct = async (cartId) => {
  const cart = await Cart.findByPk(cartId);
  if (!cart) throw new Error("El producto no se encontró en el carrito");

  await cart.destroy();

  return {
    status: "Producto eliminado del carrito con éxito",
  };
};
