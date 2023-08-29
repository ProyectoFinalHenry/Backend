/**
 * @swagger
 * /payment/createOrder:
 *  get:
 *    summary: Crea una orden de compra
 *    description: Necesita que le pasen el token "auth_token" provisto por header. El endpoint se encargara de crear la correspondiente orden en la db y en MP, y devolvera la informacion correspondiente a la orden de MP donde podran sacar el enlace para realizar la compra.
 *    tags: [Payment]
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
 *              type: object
 *              properties:
 *                body:
 *                  type: object
 *                  properties:
 *                    init_point:
 *                      type: string
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