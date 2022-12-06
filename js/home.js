window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.querySelector(".topOfNav").style.background = 'url("images/navbar-background.jpg")';

    }
    else {
        document.querySelector(".topOfNav").style.background = 'transparent';
    }
}

let profileContainer = document.querySelector(".profileContainer");
let profileSelection = document.querySelectorAll(".profileSelection");

profileContainer.addEventListener("click", () => {
  profileSelection.forEach((selection) => {
    selection.classList.toggle("hide");
  })
})

let profileIcon = document.querySelector(".profileIcon");
profileIcon.src = localStorage.getItem("userImage") || "images/profpic.jpg";

setInterval(carouselToRight, 10000);
function carouselToRight(){
    let carouselSubSection = document.querySelector(".carouselSubSection");
    carouselSubSection.style.marginLeft = '-100vw';
    setTimeout(carouselToLeft, 5000);
}
function carouselToLeft(){
    let carouselSubSection = document.querySelector(".carouselSubSection")
    carouselSubSection.style.marginLeft = '0';
}

let carouselNext = document.querySelector(".carouselNext");
carouselNext.addEventListener("click", () => {
    let carouselSubSection = document.querySelector(".carouselSubSection");
    carouselSubSection.style.marginLeft =  -100 + "vw";
})
let carouselPrev = document.querySelector(".carouselPrev");
carouselPrev.addEventListener("click", () => {
    let carouselSubSection = document.querySelector(".carouselSubSection");
    carouselSubSection.style.marginLeft =  0;
})



let margin = 0;

let nextBtn = document.querySelector(".nextButton")
nextBtn.addEventListener("click", () => {

    let featuredContainer = document.querySelector(".featuredContainer");
    
    featuredContainer.style.marginLeft =  (margin -= 100) + "vw";
    prevButton.removeAttribute("disabled", "");
    prevButton.style.opacity = "1";
    if (document.querySelector(".featuredContainer").style.marginLeft.split('vw')[0] == -200){
        nextBtn.setAttribute("disabled", "");
        nextBtn.style.opacity = "0.5";
      
    }
    
 
})

let prevButton = document.querySelector(".prevButton")
prevButton.setAttribute("disabled", "")
prevButton.style.opacity = "0.5";
prevButton.addEventListener("click", () => {

    let featuredContainer = document.querySelector(".featuredContainer");
    
    featuredContainer.style.marginLeft =  (margin += 100) + "vw";
    nextBtn.removeAttribute("disabled", "");
    nextBtn.style.opacity = "1";
    if (document.querySelector(".featuredContainer").style.marginLeft.split('vw')[0] == 0){
        prevButton.setAttribute("disabled", "");
        prevButton.style.opacity = "0.5";
    }
    

})


let counter = document.querySelector(".cartCounter");
let count = localStorage.getItem("cartCount");

if (count > 0){
    counter.classList.add("badgeStyle")
} else if (count == 0){
    counter.classList.add("hide");
}   


counter.innerHTML = count;
let allProducts = [];

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

    let retrieveData = localStorage.getItem("allEntries")
    let allProducts2 = JSON.parse(retrieveData);
    
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
    localStorage.setItem("eachQuantity", quantity);
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
  localStorage.setItem("quantityValue", input.value);
}

  function quantityChanged(e){
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
    localStorage.setItem("quantityValue", input.value);
  }
  
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