function closeCart() {
  const cart = document.querySelector('.productsOnCart');
  cart.classList.toggle('hide');
  document.querySelector('body').classList.toggle('stopScrolling')
}

  const openShopCart = document.querySelector('.shoppingCartButton');
  openShopCart.addEventListener('click', () => {
  const cart = document.querySelector('.productsOnCart');
  cart.classList.toggle('hide');
});

const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

let profileIcon = document.querySelector(".profileContainer");
let profileSelection = document.querySelectorAll(".profileSelection");

profileIcon.addEventListener("click", () => {
  profileSelection.forEach((selection) => {
    selection.classList.toggle("hide");
  })
})
let profilePic = document.querySelector(".profileIcon");
profilePic.src = localStorage.getItem("userImage") || "images/profpic.jpg";

let products =  [
      {
        id: 1,
        productName: "Acacia Bowl",
        category: "Kitchen",
        price: 500,
        image: "images/Acacia Bowl.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/acacia bowl.html"
      },
      {
        id: 2,
        productName: "Narra Rounded Table",
        category: "Tables",
        price: 3500,
        image: "images/Narra Rounded Table.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/narra rounded table.html"
      },
      {
        id: 3,
        productName: "Gmelina Bed with Drawer",
        category: "Beds",
        price: 2500,
        image: "images/Gmelina Bed with drawer.jpg",
        location: "CEBU",
        button: "Add to cart",
        anchor: "html/gmelina bed with drawer.html"
      },
      {
        id: 4,
        productName: "Acacia Chopping Board",
        category: "Kitchen",
        price: 1000,
        image: "images/Acacia Chopping Board.jpg",
        location: "DAVAO",
        button: "Add to cart",
        anchor: "html/acacia chopping board.html"
      },
      {
        id: 5,
        productName: "Natural Wood Sungka",
        category: "Toys",
        price: 1500,
        image: "images/Natural Wood Sungka.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/natural wood sungka.html"
      },
      {
        productName: "Wooden Last Supper Decor",
        category: "Decors",
        price: 2000,
        image: "images/Wooden Last Supper Decor.jpg",
        location: "BAGUIO",
        button: "Add to cart",
        anchor: "html/wooden last supper decor.html"
      },
      {
        productName: "Narra Wardrobe",
        category: "Storage",
        price: 3500,
        image: "images/Narra Wardrobe.jpg",
        location: "BAGUIO",
        button: "Add to cart",
        anchor: "html/narra wardrobe.html"
      },
      {
        productName: "Wooden Bench",
        category: "Chairs",
        price: 2000,
        image: "images/Wooden Bench.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/wooden bench.html"
      },
      {
        productName: "Hanging Santa with Maligayang Pasko",
        category: "Decors",
        price: 2000,
        image: "images/Hanging Santa with Maligayang Pasko.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/hanging santa with maligayang pasko.html"
      },
      {
        productName: "Wooden Fork Spoon Wall Decor",
        category: "Decors",
        price: 1000,
        image: "images/Wooden Fork Spoon Wall Decor.jpg",
        location: "CEBU",
        button: "Add to cart",
        anchor: "html/wooden fork spoon wall decor.html"
      },
      {
        productName: "Narra 8 seater Dining Table",
        category: "Tables",
        price: 2000,
        image: "images/Narra 8 seater Dining Table.jpg",
        location: "DAVAO",
        button: "Add to cart",
        anchor: "html/narra 8 seater dining table.html"
      },
      {
        productName: "Kamagong Spoon and Fork",
        category: "Kitchen",
        price: 2000,
        image: "images/Kamagong Spoon and Fork.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/kamagong spoon and fork.html"
      },
      {
        productName: "Santa with Mini Bird House",
        category: "Decors",
        price: 2000,
        image: "images/Santa with Mini Bird House.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/santa with mini bird house.html"
      },
      {
        productName: "Santa Christmas Wreath",
        category: "Decors",
        price: 2000,
        image: "images/Santa Christmas Wreath.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/santa christmas wreath.html"
      },
      {
        productName: "Narra Rocking Chair",
        category: "Chairs",
        price: 2000,
        image: "images/Narra Rocking Chair.jpg",
        location: "CEBU",
        button: "Add to cart",
        anchor: "html/narra rocking chair.html"
      },
      {
        productName: "Narra Queen Size Bed",
        category: "Beds",
        price: 2000,
        image: "images/Narra Queen Size Bed.jpg",
        location: "BAGUIO",
        button: "Add to cart",
        anchor: "html/narra queen size bed.html"
      },
      {
        productName: "Wooden Hand-painted Yoyo",
        category: "Toys",
        price: 2000,
        image: "images/Wooden Hand-painted Yoyo.jpg",
        location: "DAVAO",
        button: "Add to cart",
        anchor: "html/wooden hand-painted yoyo.html"
      },
      {
        productName: "Acacia Rice Bowl with Glass Cover",
        category: "Kitchen",
        price: 2000,
        image: "images/Acacia Rice Bowl with Glass Cover.jpg",
        location: "MANILA",
        button: "Add to cart",
        anchor: "html/acacia rice bowl with glass cover.html"
      },
]

let allProducts = JSON.parse(localStorage.getItem("allEntries"));

let counter = document.querySelector(".cartCounter");
let count = localStorage.getItem("cartCount");
counter.innerHTML = count;
if (count > 0){
  counter.classList.add("badgeStyle")
}
else {
  counter.innerHTML = '';
  counter.classList.remove("badgeStyle")
}

  for (let i of products) {

 
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    document.getElementById("products").appendChild(card);

    let categoryContainer = document.createElement("div");
    categoryContainer.innerText = i.category;
    categoryContainer.classList.add("category");
    categoryContainer.style.display = "none";
    card.appendChild(categoryContainer);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    card.appendChild(imgContainer);

    let anchorPage = document.createElement("a");
    anchorPage.setAttribute("href", i.anchor);
    imgContainer.appendChild(anchorPage);

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    anchorPage.appendChild(image);
    
    let container = document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);

    let detailContainer = document.createElement("div");
    detailContainer.classList.add("detailContainer");
    container.appendChild(detailContainer);

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    detailContainer.appendChild(name);
 
    let price = document.createElement("h6");
    price.innerText = "P" + i.price;
    price.classList.add("priceInCard")
    detailContainer.appendChild(price);

    let location = document.createElement("h6");
    location.innerText = "Location:" + " " + i.location;
    location.classList.add("locationInCard")
    detailContainer.appendChild(location);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    container.appendChild(btnContainer);

    let button = document.createElement("button");
    button.classList.add("btn-cart");
    button.innerText = i.button.toUpperCase();
    btnContainer.appendChild(button);
    button.addEventListener("click", toCart);

    let wishList = document.createElement("span");
    wishList.innerHTML = '<i class="fa-regular fa-heart"></i>';
    wishList.classList.add("wishList");
    wishList.addEventListener("click", addToWishlist);
    btnContainer.appendChild(wishList);


function addToWishlist(){
  wishList.classList.toggle("wishListAdded")
  wishList.innerHTML = wishList.classList.contains("wishListAdded") ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
}

function toCart(){
    count ++;
    counter.innerHTML = count;
    counter.classList.add("badgeStyle")

    localStorage.setItem("cartCount", counter.innerHTML)

  if (allProducts == null) allProducts = [];

  let cartItems = document.querySelector("#buyItems");


  let cartDiv = document.createElement("div");
  cartDiv.classList.add("cartContainer");

 
  let cartTitle = document.getElementsByClassName("cartTitle");
  cartTitle.id = products.id;


  for (let j = 0; j < cartTitle.length; j++){
    if (cartTitle[j].innerText == i.productName){
      count--;
      counter.innerHTML = count;
      localStorage.setItem("cartCount", counter.innerHTML)
      alert("This item is already added in the cart");
      return;
    }
  }
  cartContent = `
  <div class="cartContentContainer">
      <div class="imgContainer">
        <img class="cartImg" src="${i.image}">
      </div>
      <div class="detailsContainer">
        <h5 class="cartTitle ${i.productName}">${i.productName}</h5>
        <h6 class="itemPrice">P ${i.price}</h6>
        <div class="qtyRemove">
          <input type="number" min="1" class="inputQty" value="1">
          <button class="removeBtn">REMOVE</button>
        <div>
      </div>
    </div>
   `
  cartItems.appendChild(cartDiv);

  cartDiv.innerHTML = cartContent;
  let n = localStorage.getItem("idValue");
  n = ++n;
  let productAllss = {
    id: n,
    product: cartDiv.innerHTML
  }
  cartDiv.id = productAllss.id;
  localStorage.setItem("idValue", n);
  localStorage.setItem("taskDetails", JSON.stringify(productAllss));
  allProducts.push(productAllss);
  localStorage.setItem("allEntries", JSON.stringify(allProducts));

  cartDiv.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCart1);

  updateCartTotal()
  
  let quantityInputs = document.querySelectorAll(".inputQty");

  for (let h=0; h < quantityInputs.length; h++){
  var input = quantityInputs[h];
  input.addEventListener("change", quantityChanged)
  }
  function quantityChanged(){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  
  updateCartTotal();
}
}}

function removeCart1(e){

  count--;
  counter.innerHTML = count;
  localStorage.setItem("cartCount", counter.innerHTML)
  if (count == 0){
    counter.innerHTML = '';
    counter.classList.remove("badgeStyle");
  }

  let cartDivs = e.target.parentElement.parentElement.parentElement.parentElement;
  cartDivs.remove();
  cartID = cartDivs.id;
  console.log(cartID);
 
  allProducts = allProducts.filter((obj) => obj.id != cartID)

  console.log(allProducts);

  localStorage.setItem("allEntries", JSON.stringify(allProducts));
  updateCartTotal();
}

let retrieveData = localStorage.getItem("allEntries")
let allProducts2 = JSON.parse(retrieveData);
console.log(allProducts2)

for (let i in allProducts2){

  let cartItems = document.querySelector("#buyItems");

  let cartDiv = document.createElement("div");
  cartDiv.classList.add("cartContainer");
  cartDiv.id = allProducts2[i].id;
  
  cartDiv.innerHTML = allProducts2[i].product;
  cartItems.appendChild(cartDiv);

  cartDiv.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCart)
}

function removeCart(e){
  count--;
  counter.innerHTML = count;
  localStorage.setItem("cartCount", counter.innerHTML)
  if (count == 0){
    counter.innerHTML = '';
    counter.classList.remove("badgeStyle");
  }

  let cartDivs = e.target.parentElement.parentElement.parentElement.parentElement;

  cartID = cartDivs.id;
  cartDivs.remove();
  console.log(cartID);

  allProducts2 = allProducts2.filter((obj) => obj.id != cartID);
  
  localStorage.setItem("allEntries", JSON.stringify(allProducts2));

  updateCartTotal();
  console.log(allProducts2);
}

document.getElementsByClassName("subTotalPrice")[0].innerText = localStorage.getItem("subTotalPrice")
document.getElementsByClassName("deliveryFee")[0].innerText = localStorage.getItem("checkoutFee")
document.getElementsByClassName("totalPrice")[0].innerText = localStorage.getItem("totalPrice");

let cartItems = document.getElementsByClassName("buyItems")[0];
let cartDiv = cartItems.getElementsByClassName("cartContainer")

if(cartDiv.length == 0){
  document.getElementsByClassName("cartPrices")[0].style.display = "none";
  document.getElementsByClassName("cartIsEmpty")[0].innerHTML = "Cart is Empty";
  document.getElementsByClassName("checkout")[0].style.display = "none"
  document.getElementsByClassName("cartIsEmpty")[0].style.marginBottom = "200px";
}

function updateCartTotal(){
  
  let quantityAllValues = [];

  if(cartDiv.length == 0){
    document.getElementsByClassName("cartPrices")[0].style.display = 'none';
    document.getElementsByClassName("cartIsEmpty")[0].innerText = "Cart is Empty";
    document.getElementsByClassName("cartIsEmpty")[0].style.marginBottom = "200px";
    document.getElementsByClassName("checkout")[0].style.display = "none"
  } else if(cartDiv.length >= 1){
    document.getElementsByClassName("cartPrices")[0].style.display = '';
    document.getElementsByClassName("cartIsEmpty")[0].innerText = "";
    document.getElementsByClassName("cartIsEmpty")[0].style.marginBottom = "0";
    document.getElementsByClassName("checkout")[0].style.display = ""
  }

  let subtotal = 0
  let deliveryFee = 0;
  let total = 0;

  for (var i = 0; i < cartDiv.length; i++){
  
    var cartRow = cartDiv[i]
    var priceElement = cartRow.getElementsByClassName("itemPrice")[0];
    var quantityElement = cartRow.getElementsByClassName("inputQty")[0];
    var price = parseFloat(priceElement.innerText.replace('P', ''));
    var quantity = quantityElement.value;
    if (cartDiv.length >= 3){
      deliveryFee = 0;
    } else {
      deliveryFee = deliveryFee + 80;
    }
    subtotal = subtotal + (price * quantity);
    total = subtotal + deliveryFee;
    
    quantityAllValues.push(quantity);
   

  }
  localStorage.setItem("quantityCartValues", JSON.stringify(quantityAllValues))
  subtotal = Math.round(subtotal);
  deliveryFee = Math.round(deliveryFee);
  total = Math.round(total);
  document.getElementsByClassName("subTotalPrice")[0].innerText = 'P ' + subtotal;
  document.getElementsByClassName("deliveryFee")[0].innerText = 'P ' + deliveryFee;
  document.getElementsByClassName("totalPrice")[0].innerText = 'P ' + total;

  
  localStorage.setItem("subTotalPrice", subtotal)
  localStorage.setItem("totalPrice", total);
  localStorage.setItem("checkoutFee", deliveryFee)
}

let quantityInputs = document.getElementsByClassName("inputQty");

for (let h=0; h < quantityInputs.length; h++){
var input = quantityInputs[h];
input.addEventListener("change", quantityChanged)
}
function quantityChanged(){
var input = event.target;
if (isNaN(input.value) || input.value <= 0){
  input.value = 1;
}

updateCartTotal();
  
  localStorage.setItem("quantityValue", input.value);

  console.log(input.value);
  updateCartTotal();
}

let retrieveValues = localStorage.getItem("quantityCartValues");
let productValues = JSON.parse(retrieveValues);
for (let i=0; i < cartDiv.length; i++){

  var cartRow = cartDiv[i];
  var quantityElement = cartRow.getElementsByClassName("inputQty")[0];
  quantityElement.value = productValues[i];
 
}

document.getElementById("search-input").addEventListener("input", searchProduct) 
function searchProduct(){

  let searchInput = document.getElementById("search-input").value;
  let allProduct = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
 
  allProduct.forEach((everyProduct, index) => {
   
    if (everyProduct.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
};

document.getElementById("searchLocation").addEventListener("input", searchLocation) 
function searchLocation(){

  let searchLocation = document.getElementById("searchLocation").value;
  let allProduct = document.querySelectorAll(".locationInCard");
  let cards = document.querySelectorAll(".card");
 
  allProduct.forEach((everyProduct, index) => {
    if (everyProduct.innerText.includes(searchLocation.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
};

function filterByPriceBtn(value) {
  let allButton = document.querySelectorAll(".button-value");
  allButton.forEach((everyButton) => {
   
    if (value.toUpperCase() == everyButton.innerText.toUpperCase()) {
      everyButton.classList.add("active");
    } else {
      everyButton.classList.remove("active");
    }
  })
};

function filterByCategory(value) {
  let allButton = document.querySelectorAll(".button-value");
  allButton.forEach((everyButton) => {
    if (value.toUpperCase() == everyButton.innerText.toUpperCase()) {
      everyButton.classList.add("active");
    } else {
      everyButton.classList.remove("active");
    }
  });

  let allCard = document.querySelectorAll(".card");
  allCard.forEach((everyCard) => {
    if (value == "all") {
      everyCard.classList.remove("hide");
    } else {
    if (everyCard.classList.contains(value)) {
      
      everyCard.classList.remove("hide");
    } else {
   
       everyCard.classList.add("hide");
    }
    }
  });
}
window.onload = () => {
  filterByCategory("all");
};

let allCategory = document.querySelector(".main");
let subCategory = document.querySelectorAll(".sub");
let filterCategory = document.querySelector(".filterCategory");
allCategory.addEventListener("click", () => {
  
subCategory.forEach((element) => {

  element.classList.toggle('hide');
  filterCategory.innerHTML = element.classList.contains("hide") ? '<i class="fa-solid fa-sort-up"></i>' : '<i class="fa-solid fa-sort-down"></i>';
  })
})

let allPrice = document.querySelector(".mainPrice");
let subPrice = document.querySelectorAll(".subPrice");
let filterPrice = document.querySelector(".filterPrice");
allPrice.addEventListener("click", () => {
  
  subPrice.forEach((eachPrice) => {
    eachPrice.classList.toggle('hide');
    filterPrice.innerHTML = eachPrice.classList.contains("hide") ? '<i class="fa-solid fa-sort-up"></i>' : '<i class="fa-solid fa-sort-down"></i>';
  })
})

let checkboxAll = document.querySelector(".checkboxAll"); 

function filterCondtn1(event){
  let element = event.target;
  let condt1 = document.getElementsByClassName("category");
  for (let i = 0; i < condt1.length; i++){
    if (condt1[i].innerText == element.value){
      if(element.checked == true){
        condt1[i].parentElement.classList.remove("hide");
      } else {
        condt1[i].parentElement.classList.add("hide");
      }
    }
    if(element.value == 'all'){
      if(element.checked == true){
        condt1[i].parentElement.classList.remove("hide");
      } else{
        condt1[i].parentElement.classList.add("hide");
      }
    }
  }
  if (checkboxAll.checked == true){
    for (let i = 0; i < checkboxCategory.length; i++){
      checkboxCategory[i].setAttribute("disabled", "");
    }
  } else {
  for (let i = 0; i < checkboxCategory.length; i++){
    checkboxCategory[i].removeAttribute("disabled", "");
  }
}
}
let checkboxCategory = document.getElementsByClassName("checkboxCategory")
if (checkboxAll.checked == true){
  for (let i = 0; i < checkboxCategory.length; i++){
    checkboxCategory[i].setAttribute("disabled", "");
  }
}
let newsLetterInput = document.querySelector("#newsletter-email")
document.querySelector(".newsLetterBtn").addEventListener("click", () => {
  newsLetterInput.value = '';
})









 
