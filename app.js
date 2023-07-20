// npm i dotenv, para definir variables de entorno
require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
// la parte de la carpeta public tiene priodidad sobre las rutas que definimos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Lautaro",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Lautaro",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Lautaro",
    titulo: "Curso de Node",
  });
});

// app.get('/elements',  (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html")
// })

// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hola mundo desde su respectiva ruta')
// })

// app.get('/hola-mundo',  (req, res) => {
//   res.send('Hola mundo desde su respectiva ruta')
// })

// app.get('*',  (req, res) => {
//   res.sendFile(__dirname + "/public/404.html")
// })

app.listen(port, () => {
  console.log(`El ejemplo esta corriendo en el puerto ${port}`);
});
