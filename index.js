const express = require("express");
const app = express();
const fs = require("fs");
const pRoute = require("./routes/pRoutes");
const pro = require("./productos");
// Ruta principal
app.get("/", (req, res) => {
  res.send('"/api/productos:"Para ingresar a el arreglo de productos \n "/api/productos/:id: Para buscar por id"');
});
//Primer item
app.get("/api/productos", (req, res) => {
  console.log("Resquest recibida");
  res.send(pro);
});
//Segundo item
app.get("/api/productos/:id", async (req, res) => {
  console.log("Request producto por id");
  let i = Number(req.params.id);
  let findId = i;
  for (let i = 0; i < pro.length; i++) {
    const element = pro[i];
    if (element.id === findId) {
      res.send(element);
    }
  }
});
//Tercer item

app.post('/post/id:', (req, res) => {

  try {
      const { title, price, thumbnail } = req.body

      console.log('title', title)
      console.log('price', price)
      console.log('thumbnail', thumbnail)

      let d = (arr) => {

          let cantidad = arr.length

          if (cantidad !== 0) {
              let ultimo = arr[arr.length - 1];
              return ultimo.id
          }
      }

      let result = d(pro)

      const Obj = {
          id: result == undefined ? 1 : result + 1,
          title,
          price,
          thumbnail
      }
      pro.push(newObj)
      res.json({ Mensaje: 'Request de Producto Agregado', Obj })
  } catch (error) {
      console.log(error);
  }
})
//Cuarto item

app.put('/put/:id', (req, res) => {

  try {
      const id2 = req.params.id
      const { title, price, thumbnail } = req.body
      let id = pro.findIndex(i => i.id == id);
      const newProd = {
          id: id,
          title,
          price,
          thumbnail
      }

      ArrProducts[id2] = newProd

      res.send(ArrProducts)

  } catch (error) {
      console.log('Error: '+error);
  }
})

//Quinto item
app.delete("/api/borrar/:id", (req, res) => {
  console.log("Delete request Recibido");
  let i = Number(req.params.id);
  let findId = i;
  for (let i = 0; i < pro.length; i++) {
    const element = pro[i];
    if (element.id === findId) {
      element.id[i] = [];
      res.send("Objeto eliminado");
    }
  }
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server on port 8080");
});
