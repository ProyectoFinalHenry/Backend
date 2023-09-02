/**
 * @swagger
 * components:
 *  schemas:
 *    Coffee:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: A unique identifier
 *        name:
 *          type: string
 *          description: Coffee name
 *        description:
 *          type: string
 *          description: A long or short description of the coffee
 *        image:
 *          type: string
 *          description: The url where the image is hosted
 *        price:
 *          type: number
 *          description: Price of coffee
 *        stock:
 *          type: integer
 *          description: Number of coffees available
 *        averageRating:
 *          type: integer
 *        isActive:
 *          type: boolean
 *          description: Defines if the coffee is available for sale
 *      required:
 *        - name
 *        - description
 *        - image
 *        - price
 *        - stock
 */

/**
 * @swagger
 * /coffee:
 *  get:
 *    summary: Devuelve lista de cafés y los filtra.
 *    description: En caso de querer filtrar los cafés se puede pasar por query cuatro valores (name, typeOfCoffee, origin, roastingProfile), los cuales pueden pasarse individualemente o combinarse. Si no se le pasa ninguna query, devuelve todos los cafés disponibles.
 *    tags: [Coffee]
 *    parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: (Optional) Filtra los cafés por su nombre
 *      - in: query
 *        name: typeOfCoffee
 *        schema:
 *          type: integer
 *        description: (Optional) Filtra los cafés por su tipo
 *      - in: query
 *        name: origin
 *        schema:
 *          type: integer
 *        description: (Optional) Filtra los cafés por su origen
 *      - in: query
 *        name: roastingProfile
 *        schema:
 *          type: integer
 *        description: (Optional) Filtra los cafés por si perfil de tostado
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                allOf:
 *                  - $ref: "#/components/schemas/Coffee"
 *                  - type: object
 *                    properties:
 *                      TypeOfCoffee:
 *                        type: object
 *                        properties:
 *                          type:
 *                            type: string
 *                      Origin:
 *                        type: object
 *                        properties:
 *                          origin:
 *                            type: string
 *                      RoastingProfile:
 *                        type: object
 *                        properties:
 *                          profile:
 *                            type: string
 *      403:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type: 
 *                        type: string
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      path:
 *                        type: string
 *                      location:
 *                        type: string
 *      404:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */

/**
 * @swagger
 * /coffee/{id}:
 *  get:
 *    summary: Devuelve el detalle de un café.
 *    description: Recibe el id(UUIDv4) de un café y devuelve tanto la informacion basica, como su categoria y reseñas.
 *    tags: [Coffee]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID del café
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              allOf:
 *                - $ref: "#/components/schemas/Coffee"
 *                - type: object
 *                  properties: 
 *                    TypeOfCoffee:
 *                      type: object
 *                      properties:
 *                        type:
 *                          type: string
 *                    Origin:
 *                      type: object
 *                      properties:
 *                        origin:
 *                          type: string
 *                    RoastingProfile:
 *                      type: object
 *                      properties:
 *                        profile:
 *                          type: string
 *                    Reviews:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          date:
 *                            type: string
 *                          comments:
 *                            type: string
 *                          ratings:
 *                            type: number
 *      403:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type: 
 *                        type: string
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      path:
 *                        type: string
 *                      location:
 *                        type: string
 *      404:
 *        description: fail
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */

/**
 * @swagger
 * /coffee:
 *  post:
 *    summary: Crea un café 
 *    description: A partir de un objeto crea un café en la db. Recuerda "image" debe ser un url, "price" debe ser un dato de tipo float, "typeOfCoffe" acepta solo uno de estos valores ("Café en grano entero", "Café molido", "Café en cápsula", "Café instantáneo",), roastingProfile acepta solo uno de estos valores ("Tostado ligero", "Tostado medio", "Tostado oscuro"), origin acepta solo uno de estos valores ("Café de origen único", "Mezcla de Café")
 *    tags: [Coffee]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              image:
 *                type: string
 *              price:
 *                type: number
 *              stock:
 *                type: integer
 *              typeOfCoffee:
 *                type: string
 *              origin:
 *                type: string
 *              roastingProfile:
 *                type: string
 * 
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *      403:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type: 
 *                        type: string
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      path:
 *                        type: string
 *                      location:
 *                        type: string
 *      500:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *     
 */

/**
 * @swagger
 * /coffee/{id}:
 *  put:
 *    summary: Actualiza la informacion de un café
 *    description: Espera que le pasen por params el id del cafe y por body un obj con las props que necesites cambiar. Dicha informacion debe estar guardada en la propiedad "categoryCoffee" en caso de ser una actualizacion de una categoria o "defaultCoffe" para el resto de informacion. Recuerda no enviar las props que no quieras cambiar, si solo quieres cambiar el "name", no le envies "categoryCoffe", y si quieres cambiar solo el "origin" no le envies "defaultCoffe". 
 *    tags: [Coffee]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description:  ID del café a actualizar
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              defaultCoffee:
 *                $ref: "#/components/schemas/Coffee"
 *              categoryCoffee:
 *                type: object
 *                properties:
 *                  typeOfCoffee:
 *                    type: string
 *                  origin:
 *                    type: string
 *                  roastingProfile:
 *                    type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *      403:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type: 
 *                        type: string
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      path:
 *                        type: string
 *                      location:
 *                        type: string
 *      500:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string                     
 */

/**
 * @swagger
 * /coffee/{id}:
 *  delete:
 *    summary: Elimina un cafe
 *    description: Espera un que le pasen el id por params
 *    tags: [Coffee]
 *    parameters:
 *      - in:  path
 *        name: id
 *        required: true
 *        description: id del cafe a borrar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *      403:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      type: 
 *                        type: string
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      path:
 *                        type: string
 *                      location:
 *                        type: string
 *      500:
 *        description: fail
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */