const express = require("express"); 
const app = express(); 
const path = require("path"); 
const bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + "/public")); 

app.listen(8080, () => {
    console.log("Servidor Mercado Liebre funcionando"); 
}); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html")); 
}); 
app.post('/', (req,res)=>{
    res.send(req.body);
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html")); 
}); 

app.post('/register', (req,res)=>{
    res.send(req.body);
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html")); 
}); 

app.post('/login', (req,res)=>{
    res.send(req.body);
});



