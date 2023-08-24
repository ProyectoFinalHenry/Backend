/**
 * @swagger
 * /user:
 *  get:
 *    summary: Devuelve toda la informacion de un usuario
 *    description: A partir de un token de autorizacion con el nombre "auth_token" provisto por header, devuelve toda la informacion correspondiente a un usuario.
 *    tags: [User]
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
 *                id:
 *                  type: string
 *                name:
 *                  type: string
 *                image:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                validated:
 *                  type: boolean
 *                isActive:
 *                  type: boolean
 *                RoleId:
 *                  type: string
 *                Orders:
 *                  type: array
 *                  items:
 *                    type: object
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
 * /user/signup:
 *  post:
 *    summary: Registra un usuario
 *    description: A partir de un obj con "name", "email", "password","image"(Opcional) registra un usuario en el sistema. Seguido envia un email de validacion y como respuesta un token de autorizacion. Recuerda que "name" solo acepta valores alphanumericos y entre 2 y 20 caracteres, y en caso de querer enviar "image"(opcional) debe ser una url
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
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
 * /user/login:
 *  post:
 *    summary: Autentica un usuario
 *    description: Revisa a partir del "email" y "password" si hay un usuario registrado con esas credenciales, en caso de que sea así devuelve un token de autorizacion.
 *    tags: [User]
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


/**
 * @swagger
 * /user/updateData:
 *  put:
 *    summary: Actualiza informacion basica de un usuario
 *    description: A partir de un token de acceso llamado "auth_token" enviado por header y un obj con nuevos valores enviado por body, permite al usuario actualizar su "name", "email" e "image" a su gusto. En caso de querer cambiar algun dato sensible tirara un error 500.
 *    tags: [User]
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
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              image:
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
 * /user:
 *  delete:
 *    summary: Elimina usuario
 *    description: Este endpoint esta destino a borrar la cuenta de un usuario en caso de que este lo quiera. Requiere un token de acceso de nombre "auth_token" enviado por header.
 *    tags: [User]
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
 * /user/send/validation:
 *  post:
 *    summary: Envia un email de validacion
 *    description: Este endpoint necesita que le pasen por body el email, y enviara el correspondiente email para que el usuario pueda terminar con el proceso de registro.
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
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
 * /user/send/restorePassword:
 *  post:
 *    summary: Envia un email para reestablecer una contraseña.
 *    description: Este endpoint necesita que le pasen por body el email, y enviara el correspondiente email para que el usuario pueda ser redirijido a la vista de reestablecimineto de contraseña.
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
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
 * /user/resetPassword:
 *  post:
 *    summary: Reestablece la contraseña de un usuario
 *    description: Necesita que le pasen por body el "token" (se encuntra en la url de la vista de reestablecimiento de contraseña) y "newPassword". En caso de que el token sea el correcto se reestablecera la contraseña y se enviara un obj con el status. Caso contrario tirara un 500.
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              token:
 *                type: string
 *              newPassword:
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
 *                
 */