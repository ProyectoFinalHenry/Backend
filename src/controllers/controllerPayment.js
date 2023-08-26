import axios from "axios";
import { getProductsById } from "./controllerCoffee.js";

export const createOrder = async (req, res) => {
  const { products, user_id } = req.body;

  try {
    const object = await getProductsById(products.map((e)=>e.id))
    console.log("object :>>", object);
    res.send(ok)    
  } catch (error) {
    res.send(error)
  }
};

export const createTransaction = (product) => {
  const products = []
  products?.forEach((element) => {

    products.push()
  });
};

//   // let productIds = [];
//   // let record = [];
//   // let total = 0;
//   // let items = products.map((product) => {
//   //   const { id, name, description, image, price, quantity } = product;
//   //   productIds.push(id);
//   //   record.push({ id, quantity });
//   //   total += price * quantity;
//   //   return {
//   //     id,
//   //     title: name,
//   //     quantity,
//   //     unit_price: Number(price),
//   //     currency_id: "ARS",
//   //     picture_url: image,
//   //     description,
//   //   };
//   // });
//   // //----------Aqui corrobora que los vinos esten disponibles
//   // const inactives = await Products.findAll({
//   //   where: { id: productIds, isActive: false },
//   // });
//   // if (inactives.length > 0) {
//   //   const wineNames = inactives.map((e) => e.name);
//   //   throw new Error(
//   //     `Sorry, the wines ${wineNames.join(", ")} are not available`
//   //   );
//   // }
//-------------Aqui se crea la orden en la db
// const order = await Order.create({
//   date: new Date(),
//   status: "Pending",
//   totalPrice: total,
// });
//   // //-------------Aqui se configura la orden de MP
//   // let preference = {
//   //   items,
//   //   back_urls: {
//   //     success: "https://eclectic-manatee-aca3a5.netlify.app/purchase/success",
//   //     failure: "https://eclectic-manatee-aca3a5.netlify.app/purchase/rejected",
//   //     pending: "https://eclectic-manatee-aca3a5.netlify.app/purchase/pending",
//   //   },
//   //   notification_url:
//   //     "https://cava-ecommerce-production.up.railway.app/payment/webhook" /*En caso de que se caiga el deploy, hay que usar ngrok*/,
//   //   metadata: {
//   //     name: user.name,
//   //     email: user.email,
//   //     record,
//   //     orderId: order.dataValues.id,
//   //   },
//   // };
//   // //------------Aqui se relaciona la orden
//   // for (let data of products) {
//   //   const { id, price, quantity } = data;
//   //   const product = await Products.findByPk(id);
//   //   const detail = await Details.create({ quantity, unitPrice: price });

//   //   await detail.setProduct(product);
//   //   await order.addDetails(detail);
//   // }
//   // await order.setUser(user);
//   // //-----------Finalmente se crea la orden de MP y se envia
//   // const response = await mercadoPago.preferences.create(preference);
//   // return response;
// };

// const notificationOrder = async (id) => {
//   const { status, status_detail, metadata } = (
//     await axios(`https://api.mercadopago.com/v1/payments/${id}`, {
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
//       },
//     })
//   ).data;
//   if (status === "approved" && status_detail === "accredited") {
//     await Orders.update(
//       { status: "Approved" },
//       { where: { id: metadata.order_id } }
//     );

//     for (const { id, quantity } of metadata.record) {
//       const product = await Products.findByPk(id);
//       const stock = product.stock - quantity;
//       const updateData = {
//         stock,
//         isActive: stock > 0,
//       };
//       await Products.update(updateData, { where: { id } });
//     }

//     await approvedPayment(metadata.name, metadata.email);
//   } else if (status === "rejected") {
//     await Orders.update(
//       { status: "Cancelled" },
//       { where: { id: metadata.order_id } }
//     );

//     await declinedPayment(metadata.name, metadata.email);
//   } else if (status === "in_process") {
//     await pendingPayment(metadata.name, metadata.email);
//   }
// };

const getAllOrders = async () => {
  const orders = await Order.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "name", "email"],
      },
      {
        model: Detail,
        attributes: ["id", "quantity", "unitPrice"],
        include: [
          {
            model: Products,
            attributes: ["id", "name", "image"],
          },
        ],
      },
    ],
  });
  return orders;
};

// const getOrderById = async (token) => {
//   const { id } = jwt.verify(token, process.env.SECRET_KEY);
//   const order = await Orders.findAll({
//     where: { UserId: id },
//     include: [
//       {
//         model: Users,
//         attributes: ["id", "name", "email"],
//       },
//       {
//         model: Details,
//         attributes: ["id", "quantity", "unitPrice"],
//         include: [
//           {
//             model: Products,
//             attributes: ["id", "name", "image"],
//           },
//         ],
//       },
//     ],
//   });
//   return order;
// };

// const updateOrderStatus = async({ id }) => {
//   const order = await Orders.update({status: "Cancelled"}, {where: { id }});
//   if(!order) throw new Error("Id invalid");

//   return {
//     Status: "Update successfully"
//   }
// }

// module.exports = {
//   createOrder,
//   notificationOrder,
//   getAllOrders,
//   getOrderById,
//   updateOrderStatus
// };
