const data = [
  {
    name: "Tostado medio Colombiano",
    description:
      "Un café de Tostado medio equilibrado y sabroso de las colinas de Colombia.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12000,
    stock: 5,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Intenso Colombiano",
    description:
      "Un café de tueste claro brillante y floral con notas de cítricos y jazmín.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 14000,
    stock: 5,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Ethiopian Yirgacheffe",
    description: "Un café brillante y floral con notas de jazmín y cítricos.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Colombian Supremo",
    description:
      "Un café equilibrado con toques de chocolate y dulzura de caramelo.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 9500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Profundo de Sumatra",
    description:
      "Deléitate con las notas afrutadas y florales del café Ethiopian Yirgacheffe.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 12000,
    stock: 15,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Oro Africano",
    description: "Déjate llevar por los sabores ricos y nueces del café.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 10500,
    stock: 2,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Brazilian Santos",
    description:
      "Experimenta las notas suaves y chocolateadas del café Brazilian Santos.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 9000,
    stock: 18,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Sumatra Mandheling",
    description:
      "Saborea los audaces y terrosos sabores del café Sumatra Mandheling.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13500,
    stock: 12,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Kenyan AA",
    description:
      "Descubre las notas brillantes y afrutadas del café Kenyan AA.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13000,
    stock: 8,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Mezcla de Espresso Italiano",
    description:
      "Experimenta los sabores audaces e intensos de nuestra Mezcla de Espresso Italiano.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15000,
    stock: 10,
    typeOfCoffee: "Café en grano entero",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Guatemala Antigua",
    description:
      "Disfruta de los sabores bien equilibrados y suaves del café Guatemala Antigua.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 11500,
    stock: 14,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Descafeinado Proceso de Agua Suiza",
    description:
      "Experimenta los sabores ricos y suaves de nuestro café Descafeinado Proceso de Agua Suiza.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 9500,
    stock: 25,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Costa Rican Tarrazú",
    description:
      "Déjate llevar por las notas dulces y cítricas del café Costa Rican Tarrazú.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 11000,
    stock: 9,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Mezcla de Tueste Francés",
    description:
      "Experimenta los sabores audaces y ahumados de nuestra Mezcla de Tueste Francés.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 12500,
    stock: 7,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Tostado Ligero de Etiopía Yirgacheffe",
    description:
      "Un café de tostado ligero con notas brillantes y florales de Etiopía Yirgacheffe.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13000,
    stock: 10,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Mezcla Espresso Italiano",
    description:
      "Experimenta los sabores audaces e intensos de nuestra Mezcla Espresso Italiano.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15000,
    stock: 15,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café en cápsula de Colombia Supremo",
    description:
      "Disfruta de la comodidad y el sabor equilibrado de nuestro Café en cápsula de Colombia Supremo.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12000,
    stock: 20,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Instantáneo de Sumatra Mandheling",
    description:
      "Disfruta de los sabores audaces y terrosos de nuestro Café Instantáneo de Sumatra Mandheling.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 11000,
    stock: 25,
    typeOfCoffee: "Café instantáneo",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Aroma de Montaña",
    description:
      "Disfruta del aroma fresco y revitalizante del café de montaña en cada taza.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12500,
    stock: 20,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Energía Matinal",
    description:
      "Obtén un impulso de energía al empezar tu día con este café de Tostado ligero y revitalizante.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13500,
    stock: 18,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Cielo Estrellado",
    description:
      "Deleita tus sentidos con el sabor celestial de este Café de origen único con notas frutales.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Nocturno",
    description:
      "Sumérgete en la riqueza y profundidad del café de Tostado oscuro, perfecto para una velada tranquila.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Cosecha Dorada",
    description:
      "Deleita tus sentidos con la esencia celestial de este café de origen singular, donde las notas frutales danzan en cada sorbo.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Oasis Fragante",
    description:
      "Sumérgete en la opulencia y profundidad del café de Tostado oscuro, ideal para una velada serena y contemplativa.",
    image:
      "https://www.cafedumonde.co.uk/media/1085/showcase-coffe-packs.png?center=0.509090909090909,0.46402877697841727&mode=crop&heightratio=1&width=940&rnd=132331702180000000",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Mañana Fresca",
    description:
      "Empieza tu día con energía y frescura gracias a este café de Tostado ligero y notas frutales.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12500,
    stock: 18,
    typeOfCoffee: "Café en grano entero",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Café Intenso",
    description:
      "Experimenta la intensidad y el cuerpo de este café de Tostado oscuro con notas a chocolate amargo.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15000,
    stock: 12,
    typeOfCoffee: "Café en grano entero",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Aromático Matutino",
    description:
      "Comienza tu día con este café de Tostado ligero y aroma estimulante.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12500,
    stock: 18,
    typeOfCoffee: "Café en grano entero",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Café Intenso Nocturno",
    description:
      "Disfruta de la intensidad y profundidad de este café de Tostado oscuro en tus momentos de relajación.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13000,
    stock: 14,
    typeOfCoffee: "Café molido",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Exótico Bali",
    description:
      "Viaja a Bali a través de los sabores exóticos y únicos de este Café de origen único.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14000,
    stock: 16,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Premium de Montaña",
    description:
      "Disfruta de la calidad premium de este café de montaña con notas excepcionales en cada taza.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15000,
    stock: 20,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Elegante Italiano",
    description:
      "Disfruta de la elegancia y sofisticación de este café estilo italiano con una mezcla única de sabores.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13500,
    stock: 18,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Descafeinado Suave",
    description:
      "Disfruta del sabor suave y agradable de este café descafeinado perfecto para cualquier momento del día.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 9500,
    stock: 25,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Afrutado Kenia",
    description:
      "Explora los sabores afrutados y vibrantes de este café de origen keniano con un toque especial.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 11500,
    stock: 14,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  {
    name: "Café Sedoso Honduras",
    description:
      "Experimenta la sedosidad y suavidad de este café de origen hondureño con un perfil equilibrado.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12000,
    stock: 2,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  // 10
  {
    name: "Café de la Selva Amazónica",
    description:
      "Sumérgete en los sabores exuberantes y silvestres de la selva amazónica con cada sorbo de este café único.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15500,
    stock: 22,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Intenso Francés",
    description:
      "Explora la profundidad y riqueza de los sabores del café francés en cada taza.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Seducción Italiana",
    description:
      "Deleita tus sentidos con este café italiano de sabor seductor y profundo, ideal para los amantes del café fuerte.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14500,
    stock: 18,
    typeOfCoffee: "Café en grano entero",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Elegancia Africana",
    description:
      "Embárcate en un viaje de sabores africanos con este café elegante y vibrante que captura la esencia del continente.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 16000,
    stock: 16,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Místico de Montaña",
    description:
      "Descubre la magia y el misterio de las montañas a través de este café con notas místicas y envolventes.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 15200,
    stock: 14,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Vibrante Kenya",
    description:
      "Experimenta la vibrante energía y los sabores únicos de Kenia en cada sorbo de este café excepcional.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14000,
    stock: 4,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
  // 10
  {
    name: "Café Profundo de Sumatra",
    description:
      "Sumérgete en los sabores profundos y terrosos de Sumatra con este café de Tostado oscuro y carácter intenso.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 14800,
    stock: 12,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado oscuro",
  },
  {
    name: "Café Suave Descafeinado",
    description:
      "Disfruta de la suavidad y sabor delicado de este café descafeinado perfecto para momentos de relajación.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 12500,
    stock: 20,
    typeOfCoffee: "Café molido",
    origin: "Mezcla de Café",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Equilibrado Guatemalteco",
    description:
      "Descubre el equilibrio perfecto de sabores en este café guatemalteco con matices dulces y afrutados.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13000,
    stock: 18,
    typeOfCoffee: "Café en grano entero",
    origin: "Café de origen único",
    roastingProfile: "Tostado medio",
  },
  {
    name: "Café Sutil Etiopía",
    description:
      "Sutilidad y elegancia definen a este café etíope con notas florales y afrutadas que cautivarán tus sentidos.",
    image:
      "https://www.starbucksathome.com/pe/sites/default/files/2021-06/UY_uy_SBUXWebsite_LongShadow_Bag_1842%E2%80%8A%C3%971542px_210414_Pike_M_2_2-2.png",
    price: 13800,
    stock: 16,
    typeOfCoffee: "Café en cápsula",
    origin: "Café de origen único",
    roastingProfile: "Tostado ligero",
  },
];
export default data;
