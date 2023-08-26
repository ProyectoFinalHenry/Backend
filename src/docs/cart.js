/**
 * @swagger
 * /cart:
 *  get:
 *    summary: Devuelve todos los productos del carrito.
 *    description: A partir de un token de autorizacion con el nombre "auth_token" provisto por header, devuelve todos los productos del carrito.
 *    tags: [Cart]
 *    parameters:
 *      - in: header
 *        name: auth_token
 *        description: Token de autorización
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                  quantity:
 *                    type: integer
 *                  Coffee:
 *                    type: object
 *                    properties:
                        id:
                          type: string
 *                      name:
 *                        type: string
 *                      image:
 *                        type: string
 *                      price:
 *                        type: string
 *                      stock:
 *                        type: integer
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
 * /cart/add:
 *  post:
 *    summary: Agrega un producto nuevo al carrito o actualiza la cantidad del mismo.
 *    description: Necesita el token "auth_token" por header y por body un obj con las props "coffeeId" y "quantity" con los valores del cafe. El endpoint se encargara de agregar el producto al carrito o en caso de que ya exista dentro de el, actualizara la cantidad del mismo.
 *    tags: [Cart]
 *    parameters:
 *      - in: header
 *        name: auth_token
 *        description: Token de autorización
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              coffeeId:
 *                type: string
 *              quantity:
 *                type: integer
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
 *              
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
 * /cart/delete:
 *  delete:
 *    summary: Elimina un producto del carrito.
 *    description: Necesita que le pasen por body la prop "coffeeId" con el id del producto y por header el token "auth_token".
 *    tags: [Cart]
 *    parameters:
 *      - in: header
 *        name: auth_token
 *        description: Token de autorización
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              coffeeId:
 *                type: string
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
 *      404:
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
