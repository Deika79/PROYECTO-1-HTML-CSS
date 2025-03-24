// Importamos las dependencias
const express = require('express');
const mysql = require('mysql2');

// Creamos la aplicación de Express
const app = express();
const port = 3000;  // El puerto en el que correrá el servidor

// Configuramos Express para que pueda recibir datos en formato JSON
app.use(express.json());

// Crear la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',       // O la dirección de tu servidor MySQL
  user: 'root',            // Tu usuario de MySQL
  password: '',            // Tu contraseña de MySQL (si tienes una)
  database: 'mydb'         // El nombre de tu base de datos
});

// Verificamos que la conexión funcione
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});

// Endpoint para recibir el formulario de contacto
app.post('/contact', (req, res) => {
  const { nombre, email, mensaje } = req.body;  // Obtenemos los datos del cuerpo de la petición

  // Consulta SQL para insertar los datos en la tabla
  const query = 'INSERT INTO table1 (Nombre, Email, Mensaje) VALUES (?, ?, ?)';

  // Ejecutamos la consulta
  db.query(query, [nombre, email, mensaje], (err, result) => {
    if (err) {
      console.error('Error al insertar los datos:', err);
      return res.status(500).send('Error al insertar los datos');
    }
    // Enviamos una respuesta exitosa
    res.status(200).send('Mensaje enviado correctamente');
  });
});

// Iniciamos el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
