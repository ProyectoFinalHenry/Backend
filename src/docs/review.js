/**
 * @swagger
 * /review/add:
 *  post:
 *    summary: Agrega una reseña a un producto.
 *    description: Necesita que le envien por header el token "auth_token" y por body un obj con las props "coffeeId", "comments" y "rating". El endpoint se encargara de agregar la reseña al cafe y asociarla con un usuario.
 *    tags: [Review]
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
 *              comments:
 *                type: string
 *              rating:
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
 * /review/delete:
 *  delete:
 *    summary: Borra una reseña de un producto.
 *    description: Necesita que le envien por header el token "auth_token" y por body un obj con las props "coffeeId". El endpoint esta destinado a que el usuario pueda borrar sus propias reseñas.
 *    tags: [Review]
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
 */
