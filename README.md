API DE PELÍCULAS

API sencilla de películas que gestiona las funcionalidades de obtener todas las películas disponibles, actualizar una película, borrar el registro de una película y añadir una nueva película a la base de datos.

## Instalación y puesta en marcha
- Clonar repositorio
- npm install
- Comprobar las instalaciones correspondientes en packcage.json
- Configura las variables de entorno con la ayuda del archivo .env_example

## Uso
La API está disponible en http://localhost:4001

### Documentación de endpoints
## POST/MOVIES
# Crear una película:
# URL: /api/movie
# MÉTODO: POST
# CUERPO DE LA SOLICITUD(JSON):
{
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
# RESPUESTA:
{
  "id": "nuevo id generado",
  "name": "Nombre de la película",
  "actors": "Nombre del actor o actriz",
  "genre": "Acción",
  "country": "País donde se rueda la película"
}
# Código de estado: 201
