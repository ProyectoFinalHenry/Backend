const data = [
    {
      name: "Tueste Medio Colombiano",
      description: "Un café equilibrado y sabroso de tueste medio de las montañas de Colombia.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 12000,
      stock: 15,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile: "Tostado medio",
    },
    {
      name: "Ethiopian Yirgacheffe Light Roast",
      description: "Un café de tueste claro brillante y floral con notas de cítricos y jazmín.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 14000,
      stock: 20,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile: "Tostado ligero"
    },
    {

      name: "Ethiopian Yirgacheffe",
      description: "Un café brillante y floral con notas de jazmín y cítricos.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 12000,
      stock: 15,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile: "Tostado ligero"
    },
    {
      name: "Colombian Supremo",
      description: "Un café equilibrado con toques de chocolate y dulzura de caramelo.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 9500,
      stock: 20,
      typeOfCoffee: "Café molido",
      origin: "Café de origen único",
      roastingProfile: "Tostado medio"
    },
    {
      name: "Ethiopian Yirgacheffe",
      description: "Deléitese con las notas afrutadas y florales del café etíope Yirgacheffe.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 12000,
      stock: 15,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile: "Tostado ligero"
    },
    {
      name: "Colombian Supremo",
      description: "Deléitese con los sabores ricos y a nuez del café Supremo colombiano.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 10500,
      stock: 20,
      typeOfCoffee: "Café molido",
      origin: "Café de origen único",
      roastingProfile:"Tostado medio"
    },
    {
      name: "Brazilian Santos",
      description: "Experimente las notas suaves y achocolatadas del café brasileño Santos.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 9000,
      stock: 18,
      typeOfCoffee: "Café en cápsula",
      origin: "Café de origen único",
      roastingProfile:"Tostado medio"
    },
    {
      name: "Sumatra Mandheling",
      description: "Saboree los sabores atrevidos y terrosos del café Sumatra Mandheling.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 13500,
      stock: 12,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile:"Tostado oscuro"
    },
    {
      name: "Kenyan AA",
      description: "Descubre las notas brillantes y afrutadas del café AA de Kenia.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 13000,
      stock: 8,
      typeOfCoffee: "Café molido",
      origin: "Café de origen único",
      roastingProfile:"Tostado ligero"
    },
    {
      name: "Italian Espresso Blend",
      description: "Experimente los sabores audaces e intensos de nuestra Mezcla Italiana Espresso.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 15000,
      stock: 10,
      typeOfCoffee: "Café en grano entero",
      origin: "Mezcla de Café",
      roastingProfile:"Tostado oscuro"
    },
    {
      name: "Guatemala Antigua",
      description: "Experimente los sabores audaces e intensos de nuestra Mezcla Italiana Espresso.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 11500,
      stock: 14,
      typeOfCoffee: "Café en cápsula",
      origin: "Café de origen único",
      roastingProfile:"Tostado medio"
    },
    {
      name: "Decaf Swiss Water Process",
      description: "Experimente los sabores ricos y suaves de nuestro café Decaf Swiss Water Process.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 9500,
      stock: 25,
      typeOfCoffee: "Café molido",
      origin: "Mezcla de Café",
      roastingProfile:"Tostado medio"
    },
    {
      name: "Costa Rican Tarrazú",
      description: "Deléitese con las notas dulces y cítricas del café Tarrazú de Costa Rica.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 11000,
      stock: 9,
      typeOfCoffee: "Café en grano entero",
      origin: "Café de origen único",
      roastingProfile:"Tostado ligero"
    },
    {
      name: "French Roast Blend",
      description: "Experimente los sabores audaces y ahumados de nuestra mezcla de tostado francés.",
      image: "https://i.pinimg.com/564x/d8/92/f1/d892f19e758c315b4a6539fb1bd10945.jpg",
      price: 12500,
      stock: 7,
      typeOfCoffee: "Café molido",
      origin: "Mezcla de Café",
      roastingProfile:"Tostado oscuro"
    }
  ]
  export default data;