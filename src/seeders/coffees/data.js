const data = [
  {
    name: "Tueste Medio Colombiano",
    description:
      "Un café de tueste medio equilibrado y sabroso de las colinas de Colombia.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Tueste Claro de Ethiopian Yirgacheffe",
    description:
      "Un café de tueste claro brillante y floral con notas de cítricos y jazmín.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14000,
    stock: 20,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Ethiopian Yirgacheffe",
    description: "Un café brillante y floral con notas de jazmín y cítricos.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Colombian Supremo",
    description:
      "Un café equilibrado con toques de chocolate y dulzura de caramelo.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 9500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Ethiopian Yirgacheffe",
    description:
      "Deléitate con las notas afrutadas y florales del café Ethiopian Yirgacheffe.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Colombian Supremo",
    description:
      "Déjate llevar por los sabores ricos y nueces del café Colombian Supremo.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 10500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Brazilian Santos",
    description:
      "Experimenta las notas suaves y chocolateadas del café Brazilian Santos.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 9000,
    stock: 18,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Sumatra Mandheling",
    description:
      "Saborea los audaces y terrosos sabores del café Sumatra Mandheling.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13500,
    stock: 12,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Kenyan AA",
    description:
      "Descubre las notas brillantes y afrutadas del café Kenyan AA.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 8,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Mezcla de Espresso Italiano",
    description:
      "Experimenta los sabores audaces e intensos de nuestra Mezcla de Espresso Italiano.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15000,
    stock: 10,
    typeOfCoffee: "Café en grano",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Guatemala Antigua",
    description:
      "Disfruta de los sabores bien equilibrados y suaves del café Guatemala Antigua.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 11500,
    stock: 14,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Descafeinado Proceso de Agua Suiza",
    description:
      "Experimenta los sabores ricos y suaves de nuestro café Descafeinado Proceso de Agua Suiza.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 9500,
    stock: 25,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Costa Rican Tarrazú",
    description:
      "Déjate llevar por las notas dulces y cítricas del café Costa Rican Tarrazú.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 11000,
    stock: 9,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Mezcla de Tueste Francés",
    description:
      "Experimenta los sabores audaces y ahumados de nuestra Mezcla de Tueste Francés.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12500,
    stock: 7,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Tostado Ligero de Etiopía Yirgacheffe",
    description:
      "Un café de tostado ligero con notas brillantes y florales de Etiopía Yirgacheffe.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 10,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Mezcla Espresso Italiano",
    description:
      "Experimenta los sabores audaces e intensos de nuestra Mezcla Espresso Italiano.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15000,
    stock: 15,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café en Cápsulas de Colombia Supremo",
    description:
      "Disfruta de la comodidad y el sabor equilibrado de nuestro Café en Cápsulas de Colombia Supremo.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12000,
    stock: 20,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Instantáneo de Sumatra Mandheling",
    description:
      "Disfruta de los sabores audaces y terrosos de nuestro Café Instantáneo de Sumatra Mandheling.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 11000,
    stock: 25,
    typeOfCoffee: "Café instantáneo",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Aroma de Montaña",
    description:
      "Disfruta del aroma fresco y revitalizante del café de montaña en cada taza.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12500,
    stock: 20,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Energía Matinal",
    description:
      "Obtén un impulso de energía al empezar tu día con este café de tueste ligero y revitalizante.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13500,
    stock: 18,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Café Cielo Estrellado",
    description:
      "Deleita tus sentidos con el sabor celestial de este café de origen único con notas frutales.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Nocturno",
    description:
      "Sumérgete en la riqueza y profundidad del café de tueste oscuro, perfecto para una velada tranquila.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Cielo Estrellado",
    description:
      "Deleita tus sentidos con el sabor celestial de este café de origen único con notas frutales.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Nocturno",
    description:
      "Sumérgete en la riqueza y profundidad del café de tueste oscuro, perfecto para una velada tranquila.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Mañana Fresca",
    description:
      "Empieza tu día con energía y frescura gracias a este café de tueste ligero y notas frutales.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12500,
    stock: 18,
    typeOfCoffee: "Café en grano",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Café Intenso",
    description:
      "Experimenta la intensidad y el cuerpo de este café de tueste oscuro con notas a chocolate amargo.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15000,
    stock: 12,
    typeOfCoffee: "Café en grano",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Aromático Matutino",
    description:
      "Comienza tu día con este café de tueste ligero y aroma estimulante.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12500,
    stock: 18,
    typeOfCoffee: "Café en grano",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Café Intenso Nocturno",
    description:
      "Disfruta de la intensidad y profundidad de este café de tueste oscuro en tus momentos de relajación.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Exótico Bali",
    description:
      "Viaja a Bali a través de los sabores exóticos y únicos de este café de origen único.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Premium de Montaña",
    description:
      "Disfruta de la calidad premium de este café de montaña con notas excepcionales en cada taza.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15000,
    stock: 20,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Elegante Italiano",
    description:
      "Disfruta de la elegancia y sofisticación de este café estilo italiano con una mezcla única de sabores.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13500,
    stock: 18,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Descafeinado Suave",
    description:
      "Disfruta del sabor suave y agradable de este café descafeinado perfecto para cualquier momento del día.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 9500,
    stock: 25,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Afrutado Kenia",
    description:
      "Explora los sabores afrutados y vibrantes de este café de origen keniano con un toque especial.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 11500,
    stock: 14,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  {
    name: "Café Sedoso Honduras",
    description:
      "Experimenta la sedosidad y suavidad de este café de origen hondureño con un perfil equilibrado.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  // 10
  {
    name: "Café de la Selva Amazónica",
    description:
      "Sumérgete en los sabores exuberantes y silvestres de la selva amazónica con cada sorbo de este café único.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15500,
    stock: 22,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Intenso Francés",
    description:
      "Explora la profundidad y riqueza de los sabores del café francés en cada taza.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Seducción Italiana",
    description:
      "Deleita tus sentidos con este café italiano de sabor seductor y profundo, ideal para los amantes del café fuerte.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14500,
    stock: 18,
    typeOfCoffee: "Café en grano",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Elegancia Africana",
    description:
      "Embárcate en un viaje de sabores africanos con este café elegante y vibrante que captura la esencia del continente.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 16000,
    stock: 16,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Místico de Montaña",
    description:
      "Descubre la magia y el misterio de las montañas a través de este café con notas místicas y envolventes.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 15200,
    stock: 14,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Vibrante Kenya",
    description:
      "Experimenta la vibrante energía y los sabores únicos de Kenia en cada sorbo de este café excepcional.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14000,
    stock: 15,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
  // 10
  {
    name: "Café Profundo de Sumatra",
    description:
      "Sumérgete en los sabores profundos y terrosos de Sumatra con este café de tueste oscuro y carácter intenso.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 14800,
    stock: 12,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Oscuro",
  },
  {
    name: "Café Suave Descafeinado",
    description:
      "Disfruta de la suavidad y sabor delicado de este café descafeinado perfecto para momentos de relajación.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 12500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Equilibrado Guatemalteco",
    description:
      "Descubre el equilibrio perfecto de sabores en este café guatemalteco con matices dulces y afrutados.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13000,
    stock: 18,
    typeOfCoffee: "Café en grano",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Medio",
  },
  {
    name: "Café Sutil Etiopía",
    description:
      "Sutilidad y elegancia definen a este café etíope con notas florales y afrutadas que cautivarán tus sentidos.",
    image:
      "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
    price: 13800,
    stock: 16,
    typeOfCoffee: "Café en cápsulas",
    origin: "Café de Origen Único",
    roastingProfile: "Tueste Ligero",
  },
];
export default data;
