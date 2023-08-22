/**
 * @swagger
 * /category/{category}:
 *  get:
 *    summary: Devuelve un array de categorias
 *    description: Acepta los valores "TypeOfCoffee", "Origin", "RoastingProfile" y devuelve una array de objetos.
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *        description: Nombre de la categoria
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
 *                    type: integer
 *                  name:
 *                    type: string
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