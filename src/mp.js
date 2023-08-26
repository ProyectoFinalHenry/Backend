import mercadopago from 'mercadopago';

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN
});

// var preference = {
//   items: [
//     {
//       title: 'Test',
//       quantity: 1,
//       currency_id: 'ARS',
//       unit_price: 10.5
//     }
//   ]
// };
// mercadopago.preferences.create(preference)

export default mercadopago