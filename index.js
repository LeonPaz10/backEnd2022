
// const fs = require('fs')

// class Contenedor {
//     constructor(fileName) {
//         this.fileName = fileName
//         fs.promises.writeFile(`./${fileName}`, '')
//     }
//     async save(objeto) {
//         let data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
//         if(!data) {
//             objeto.id = 1
//             const arr = [objeto]
//             await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr))
//             return objeto.id
//         } else {
//             data = JSON.parse(data);
//             objeto.id = data.length + 1
//             data.push(objeto)
//             await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(data))
//             return objeto.id
//         }
//     }
//     async getById(id) {
//         const data = JSON.parse(await fs.promises.readFile(`./${this.fileName}`, 'utf-8'))
//         return data[id - 1]
//     }
//     async getAll() {
//         const data = JSON.parse(await fs.promises.readFile(`./${this.fileName}`, 'utf-8'))
//         return data
//     }
// }
// const productos = new Contenedor('productos.txt')

// const Main = async () => {
//     try{
//         await productos.save({ nombre: "Laptop", precio: 12000, imagen: "https://m.media-amazon.com/images/I/71p-M3sPhhL._AC_SY450_.jpg" })
//         await productos.save({ nombre: "Mouse", precio: 12000, imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen" })
//         await productos.save({ nombre: "Teclado", precio: 12000, imagen: "https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png?v=1" })
//         await productos.save({ nombre: "Monitor", precio: 12000, imagen: "https://www.logitech.com/assets/images/products/logitech-g-series-gaming-laptop-monitor-1.jpg" })
//         const response = await productos.getById("")
       
//     }catch(error) {
//         console.log(error)
//     }

// }

// const productoss = [ {
//     nombre: "Laptop",
//     precio: 12000,},
//     {
//     nombre: "Mouse",
//     precio: 12000,},
//     {
//     nombre: "Teclado",
//     precio: 12000,},
//     ]

// const express = require('express');
// const app = express();
// const puerto = 8080;

// app.listen(puerto, () => {
//     console.log(`Servidor corriendo en el puerto ${puerto}`);
// })


// app.get("/", (req, res) => {
//     res.send("Hola mi rey");
// })
// app.get("/productos", (req, res) => {
//     res.send("Estos son los productos");
//     res.json(productoss)



// })
// app.get("/productosRandom", (req, res) => {
//     res.send("Estos son los productosRandom ");


// })

const express = require('express');
const app = express();
const port = 8090;

const productos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]
   

app.listen(port, err => {
    if (err) {
        console.log (`Error al iniciar el servidor: ${err}`);
    } else{
        console.log(`Tomando datos desde el puerto ${port}`);
    }
  
})

app.get("/", (req, res) => {
    res.send("Hola mundo")

})

app.get("/productos", (req, res) => {

    res.json(productos)
    
})

app.get("/productosRandom", (req, res) => {
    res.json(productos[Math.floor(Math.random() * productos.length)])
    
})