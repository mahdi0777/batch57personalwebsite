const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"))
app.use("/assets", express.static(path.join(__dirname, "assets")))

// ROUTING
app.get('/', (req, res) => {
  res.render("index")
})

app.get('/blog', (req, res) => {
  res.render("blog")
});

app.get('/contact', (req, res) => {
  res.render("contact")
});

app.get('/testimonial', (req, res) => {
  res.render("testimonial")
});

app.get('/add-blog', (req, res) => {
  res.render("add-blog")
});

// app.get('/about', (req, res) => {
//   res.send("Ini halaman tentang saya")
// })

// //DYNAMIC ROUT
// app.get("/detail/:id", (req, res) => {
//   const id = req.params.id
//   const {name , alamat} = req.query;

//   res.send(`Detail ${id}; ${name}; ${alamat}`);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
