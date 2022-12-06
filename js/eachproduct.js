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

  let profileContainer = document.querySelector(".profileContainer");
  let profileSelection = document.querySelectorAll(".profileSelection");
  
  profileContainer.addEventListener("click", () => {
    profileSelection.forEach((selection) => {
      selection.classList.toggle("hide");
    })
  })
  
let profileIcon = document.querySelector(".profileIcon");
profileIcon.src = localStorage.getItem("userImage") || "../images/profpic.jpg";

let counter = document.querySelector(".cartCounter");
let count = 0;
let allProducts = [];


let cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", toCart);

function toCart(){
 
  count ++;
  counter.innerHTML = count;
  counter.classList.add("badgeStyle")
  console.log(counter.innerText)

if (allProducts == null) allProducts = [];

let cartItems = document.querySelector("#buyItems");

let cartDiv = document.createElement("div");
cartDiv.classList.add("cartContainer");
    
let cartTitle = document.getElementsByClassName("cartTitle");
let eachCartImg = document.querySelector(".eachCartImg").innerHTML;
let eachCartTitle = document.querySelector(".eachCartTitle").innerHTML;
let eachCartPrice = document.querySelector(".eachCartPrice").innerHTML;

for (let j = 0; j < cartTitle.length; j++){
  if (cartTitle[0].innerText == eachCartTitle){
    count--;
    counter.innerHTML = count;
    alert("This item is already added in the cart");
    return;
  }
}

cartContent = `
  <div class="cartContentContainer">
    <div class="imgContainer">
      <div class="cartImg">${eachCartImg}</div>
    </div>
    <div class="detailsContainer">
      <h5 class="cartTitle">${eachCartTitle}</h5>
      <h6 class="itemPrice">P ${eachCartPrice}</h6>
      <div class="qtyRemove">
        <input type="number" min="1" class="inputQty" value="1">
        <button class="removeBtn">REMOVE</button>
      <div>
    </div>
  </div>`


cartItems.appendChild(cartDiv);

cartDiv.innerHTML = cartContent;


cartDiv.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCart1);

updateCartTotal()
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

}
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
function removeCart1(){

  count--;
  counter.innerHTML = count;
  localStorage.setItem("cartCount", counter.innerHTML)
  if (count == 0){
    counter.innerHTML = '';
    counter.classList.remove("badgeStyle");
  }

  updateCartTotal()
  this.parentElement.parentElement.parentElement.parentElement.remove();

  cartTitle = this.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("cartTitle").innerText;

  allProducts = allProducts.filter((obj) =>  obj.productName !== cartTitle)
 
  console.log(allProducts);

  localStorage.setItem("allEntries", JSON.stringify(allProducts));
  updateCartTotal()

}

let retrieveData = localStorage.getItem("allEntries")
let allProducts2 = JSON.parse(retrieveData);

for (let i in allProducts2){

  let cartItems = document.querySelector("#buyItems");

  let cartDiv = document.createElement("div");
  cartDiv.classList.add("cartContainer");
  
  cartDiv.innerHTML = allProducts2[i];
  cartItems.appendChild(cartDiv);

  cartDiv.getElementsByClassName("removeBtn")[0].addEventListener("click", removeCart)
}

function updateCartTotal(){
 
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
    localStorage.setItem("eachQuantity", quantity);

  }
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