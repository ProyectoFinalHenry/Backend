/**
 * @swagger
 * /management/user:
 *  get:
 *    summary: Trae todos los usuarios.
 *    description: Necesita que le pasen por header el token "auth_token" del administrador y devolvera la informacion de todos los usuarios.
 *    tags: [Admin]
 *    parameters:
 *      -  in: header
 *         name: auth_token
 *         description: Token de autorización
 *         required: true
 *         schema:
 *           type: string
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
 *                  name:
 *                    type: string
 *                  lastname:
 *                    type: string
 *                  image:
 *                    type: string
 *                  email:
 *                    type: string
 *                  phone:
 *                    type: string
 *                  address:
 *                    type: object
 *                  localRegistration:
 *                    type: boolean
 *                  validated:
 *                    type: boolean
 *                  isActive:
 *                    type: boolean
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
 * /management/user/status:
 *  put:
 *    summary: Activa o desactiva a un usuario.
 *    description: Necesita que le pasen el id del usuario "userId" y el token del administrador "auth_token". El ednpoint baneara al usuario o lo desbaneara dependiendo de como este su estado actual.
 *    tags: [Admin]
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
 *              userId:
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
 * /management/login:
 *  post:
 *    summary: Autentica al administrador.
 *    description: Revisa a partir del "email" y "password" si hay un usuario registrado como admin con esas credenciales, en caso de que sea así devuelve un token de autorizacion.
 *    tags: [Admin]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                auth_token:
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
 *      400:
 *        description: FAIL
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 */