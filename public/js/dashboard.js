document.addEventListener("DOMContentLoaded",()=>{

// DARK MODE

const darkBtn =
document.getElementById("darkBtn");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

// REVENUE GRAPH

const ctx =
document.getElementById("revenueChart");

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:[
"January",
"February",
"March",
"April",
"May",
"June",
"July"
],

datasets:[{

label:"Revenue",

data:[
12000,
19000,
30000,
25000,
42000,
50000,
65000
],

borderColor:"#2563eb",

backgroundColor:"rgba(37,99,235,0.2)",

fill:true,

tension:0.4,

pointBackgroundColor:"#7c3aed",

pointRadius:5

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{
legend:{
labels:{
color:"#2563eb"
}
}
},

scales:{

x:{
ticks:{
color:"#2563eb"
}
},

y:{
ticks:{
color:"#2563eb"
}
}

}

}

});

}

// TOAST NOTIFICATION

window.showToast = function(message){

const toast =
document.getElementById("toast");

if(toast){

toast.innerText = message;

toast.style.display = "block";

setTimeout(()=>{

toast.style.display = "none";

},3000);

}

}

// ADD TO CART

const cartButtons =
document.querySelectorAll(".add-cart");

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

localStorage.removeItem("cartProduct");

const productName =
document.querySelector(".product-details h1").innerText;

const productPrice =
document.querySelector(".price").innerText;

const productImage =
document.getElementById("mainImage").src;

const cartItem = {

name:productName,
price:productPrice,
image:productImage

};

localStorage.setItem(
"cartProduct",
JSON.stringify(cartItem)
);

showToast("🛒 Product Added To Cart");

setTimeout(()=>{

window.location.href="/cart";

},1000);

});

});
// WISHLIST

const wishlistButtons =
document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(button=>{

button.addEventListener("click",()=>{

showToast("❤️ Added To Wishlist");

});

});

// SEARCH

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(filter)
? "block"
: "none";

});

});

}

});