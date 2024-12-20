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