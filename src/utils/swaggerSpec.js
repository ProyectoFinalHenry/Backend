import swaggerJSDoc from "swagger-jsdoc";

const spec = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Grano de Oro API",
      summary: "Just a simple coffee store",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://backend-mniu.onrender.com/"
      },
      {
        url: "http://localhost:3001/"
      }
    ]
  },
  apis: ["./src/docs/*.js"],
};

const swaggerSpec = swaggerJSDoc(spec);

export default swaggerSpec;
