const express = require("express")
const multer = require('multer');
const app = express()
const port = 3000
const path = require("path")

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"))
app.use("/assets", express.static(path.join(__dirname, "assets")))

app.use(express.urlencoded({extended: true}));

// ROUTINg

const blogs = [];

// Middleware untuk parsing body request
app.use(express.urlencoded({ extended: true }));

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Folder tempat menyimpan file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nama file unik
  }
});

const upload = multer({ storage: storage });

// Route untuk menangani halaman utama
app.get('/', home);
app.get('/blog', blog);
app.get('/contact', contact);
app.get('/testimonial', testimonial);
app.get('/add-blog', addBlogView);

// Route untuk menangani form submission dan upload gambar
app.post('/add-blog', upload.single('image'), addBlog);

// Fungsi untuk merender halaman utama
function home(req, res) {
  res.render('index');
};

// Fungsi untuk merender halaman blog
function blog(req, res){
  res.render("blog", { blogs });
}

// Fungsi untuk merender halaman kontak
function contact(req, res) {
  res.render('contact');
};

// Fungsi untuk merender halaman testimonial
function testimonial(req, res) {
  res.render('testimonial');
};

// Fungsi untuk menampilkan form tambah blog
function addBlogView(req, res) {
  res.render('add-blog');
};

// Fungsi untuk menambah blog baru
function addBlog(req, res) {
  const { projectName, startDate, endDate, content, technologies } = req.body;
  const image = req.file ? req.file.filename : null; // Nama file gambar yang diupload

  const newBlog = {
    projectName,
    startDate,
    endDate,
    content,
    technologies,
    image,
    createdAt: new Date(),
  };

  blogs.unshift(newBlog); // Tambah blog ke array blogs

  console.log('Blogs:', blogs);
  res.redirect('/blog'); // Redirect setelah berhasil upload
};

function blogDetail(req, res) {
  const blogId = req.params.id; // Jika ingin pakai ID untuk detail blog
  const blog = blogs.find((b, index) => index === parseInt(blogId)); // Ambil blog berdasarkan index
  if (blog) {
    res.render("blog-detail", { blog });
  } else {
    res.status(404).send("Blog not found");
  }
}


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
