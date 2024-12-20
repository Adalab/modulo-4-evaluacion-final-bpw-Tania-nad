const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//Crear el servidor
const api = express();

//Configurar el servidor
api.use(cors());
api.use(express.json());

//Escuchar el puerto
const port = 4001;
api.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

})

//Función para conectarme a la base de datos
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "otwjh.h.filess.io",
        user: "proyectosMolones2_fruitsent",
        password: "53bb7532480537c28ab0c00b74cb5c27f5551aea",
        database: "proyectosMolones2_fruitsent",
        port: 3307
    })
    connection.connect();
    return connection;
}

//ENDPOINTS

/*Insertar una pelicula en la tabla movies
    - recoger los datos de la película de frontend
    - conectar a la base de datos
    - añadir la nueva película a la base de datos
    - finalizar la conexión
    - responder a frontend
*/

api.post("/api/movie", async (req, res) => {
    console.log(req.body);
    const { name, actors, genre, country } = req.body;
    if (!name || !actors || !genre || !country) {
        res.status(400).json({
            success: false,
            message: "falta un campo por rellenar"
        })
    } else {
        const connection = await getDBConnection();
        const query = "INSERT INTO movies(name, actors, genre, country) VALUES (?, ?, ?, ?)";
        const [result] = await connection.query(query, [name, actors, genre, country]);
        console.log(result);
        connection.end();
        res.status(201).json({
            success: true,
            id: result.insertId
        })

    }
})
/* Obtener todas las películas 
    - conectar con la base de datos
    - seleccionar todas las películas
    - finalizar la conexión
    - responder a frontend
*/
api.get("/api/allmovies", async (req, res) => {
    const connection = await getDBConnection();
    const movieQuery = "SELECT * FROM movies";
    const [resultMovies] = await connection.query(movieQuery);
    //console.log(resultMovies);
    res.status(200).json({
        info: { count: resultMovies.lenght },
        results: resultMovies
    })
})
