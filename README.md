# API DE PELÍCULAS

API sencilla de películas que gestiona las funcionalidades de obtener todas las películas disponibles, actualizar una película, borrar el registro de una película y añadir una nueva película a la base de datos.

## Instalación y puesta en marcha
- Clonar repositorio
- npm install
- Comprobar las instalaciones correspondientes en packcage.json
- Configura las variables de entorno con la ayuda del archivo .env_example

## Uso
La API está disponible en http://localhost:4001

## Documentación de endpoints
### POST/MOVIES
##### Crear una película:
##### URL: /api/movie
##### MÉTODO: POST
##### CUERPO DE LA SOLICITUD(JSON):
{
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
##### RESPUESTA:
{
  "id": "nuevo id generado",
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
##### Código de estado: 201

### GET/MOVIES
##### Ver todas las películas:
##### URL: /api/allmovies
##### MÉTODO: GET
##### RESPUESTA:
{
  "id": "id",
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
##### Código de estado: 200 OK

### PUT/MOVIES
##### Actualizar la información de una película:
##### URL: /api/movies/:id
##### MÉTODO: PUT
##### PARÁMETROS DE RUTA:
Id de la película
##### CUERPO DE LA SOLICITUD(JSON):
{
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
#### RESPUESTA:
{
  "id": 7,
  "name": "Nuevo nombre",
  "actors": "actor y/o actriz",
  "genre": "Drama",
  "country": "País donde se rueda la película"
}
##### Código de estado: 200 OK

### DELETE/MOVIES
##### Borrar una película:
##### URL: /api/movies/:id
##### MÉTODO: DELETE
##### PARÁMETROS DE RUTA:
Id de la película
#### RESPUESTA:
{
    "success": true
}
##### Código de estado: 200 OK


