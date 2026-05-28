const express = require("express");
const session = require("express-session");

const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));


app.use(session({
secret:"secret",
resave:false,
saveUninitialized:false,
cookie:{
    secure: false
}
}));
const PORT = process.env.PORT || 3000;

const product = [

{
id:1,
name:"Gaming Laptop",
price:50000,
rating:4.8,
reviews:120,
image:"https://tse4.mm.bing.net/th/id/OIP.q9iZ36WkYDG9MB-zu0pwXwHaEK?pid=Api&P=0&h=180"
},

{
id:2,
name:"iPhone 15",
price:80000,
rating:4.9,
reviews:200,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
id:3,
name:"Wireless Headphones",
price:5000,
rating:4.6,
reviews:80,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
}

];

app.get("/",(req,res)=>{

res.render("index",{products});

});

app.get("/search",(req,res)=>{

const query =
req.query.query.toLowerCase();

const filteredProducts =
products.filter(product=>

product.name.toLowerCase()
.includes(query)

);

res.render("index",{
products:filteredProducts
});

});

app.get("/login",(req,res)=>{

res.render("login");

});

app.post("/login",(req,res)=>{

const email = req.body.email;
const password = req.body.password;
console.log(req.body);

if(
email === "admin@gmail.com"
&&
password === "123456"
){

req.session.user = email;

 return res.redirect("/dashboard");

}else{

res.send("Invalid Login");

}

});

app.get("/dashboard",(req,res)=>{

if(!req.session.user){

return res.redirect("/login");

}

res.render("dashboard",{products});

});

app.get("/cart",(req,res)=>{

if(!req.session.cart){

req.session.cart = [];

}

const cartProducts =
products.filter(product=>

req.session.cart.includes(
product.id.toString()
)

);

const total =
cartProducts.reduce((sum,item)=>

sum + item.price

,0);

res.render("cart",{
cartProducts,
total
});

});

app.get("/add/:id",(req,res)=>{

if(!req.session.cart){

req.session.cart = [];

}

req.session.cart.push(req.params.id);

res.redirect("/cart");

});

app.get("/wishlist",(req,res)=>{

if(!req.session.wishlist){

req.session.wishlist = [];

}

const wishlistProducts =
products.filter(product=>

req.session.wishlist.includes(
product.id.toString()
)

);

res.render("wishlist",{
wishlistProducts
});

});

app.get("/wishlist/add/:id",(req,res)=>{

if(!req.session.wishlist){

req.session.wishlist = [];

}

req.session.wishlist.push(req.params.id);

res.redirect("/wishlist");

});

app.get("/product/:id",(req,res)=>{

const product =
products.find(p=>

p.id == req.params.id

);

res.render("product",{product});

});

app.get("/payment",(req,res)=>{

res.render("payment");

});

app.listen(3000,()=>{

console.log("Server Started");

});
app.get("/orders",(req,res)=>{

res.send("Orders Page");

});

app.get("/revenue",(req,res)=>{

res.send("Revenue Analytics Page");

});

app.get("/users",(req,res)=>{

res.send("Users Management Page");

});

app.get("/products",(req,res)=>{

res.send("Products Management Page");

});
app.get("/orders",(req,res)=>{

res.send("<h1>Orders Page</h1>");

});

app.get("/revenue",(req,res)=>{

res.send("<h1>Revenue Analytics</h1>");

});

app.get("/users",(req,res)=>{

res.send("<h1>Users Management</h1>");

});

app.get("/products",(req,res)=>{

res.send("<h1>Products Management</h1>");

});
app.get("/orders",(req,res)=>{

res.render("orders");

});

app.get("/revenue",(req,res)=>{

res.render("revenue");

});

app.get("/users",(req,res)=>{

res.render("users");

});

app.get("/products",(req,res)=>{

res.render("products",{products});

});
app.get("/orders",(req,res)=>{
res.render("orders");
});

app.get("/revenue",(req,res)=>{
res.render("revenue");
});

app.get("/users",(req,res)=>{
res.render("users");
});

app.get("/products",(req,res)=>{
res.render("products");
});

const products = [

{
id:1,
name:"Gaming Laptop",
price:"₹50,000",
image:"/images/img.jpg",
description:"High performance gaming laptop with RTX graphics."
},

{
id:2,
name:"iPhone 15",
price:"₹80,000",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
description:"Latest Apple iPhone with powerful camera."
},

{
id:3,
name:"Headphones",
price:"₹5,000",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
description:"Premium wireless headphones."
}

];

app.get("/product/:id",(req,res)=>{

const product =
products.find(
p => p.id == req.params.id
);

res.render("product",{product});

});
app.get("/payment",(req,res)=>{
res.render("payment");
});
