let profileContainer = document.querySelector(".profileContainer");
let profileSelection = document.querySelectorAll(".profileSelection");

profileContainer.addEventListener("click", () => {
  profileSelection.forEach((selection) => {
    selection.classList.toggle("hide");
  })
})

let profileIcon = document.querySelector(".profileIcon");
profileIcon.src = localStorage.getItem("userImage") || "images/profpic.jpg";

let nextBtn = document.querySelector(".orderbtn");
let backBtn = document.querySelector(".backbtn");
let firstName = document.querySelector(".first");
let lastName = document.querySelector(".last");
let address = document.querySelector(".streetaddress");
let address2= document.querySelector(".streetaddress2")
let country = document.querySelector(".country");
let region = document.querySelector(".regions");
let city = document.querySelector(".city");
let zipcode = document.querySelector(".zipcode");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");

let receiptName = document.querySelector(".receiptName");
let receiptAddress = document.querySelector(".receiptAddress");
let receiptPhone = document.querySelector(".receiptPhone");
let receiptEmail = document.querySelector(".receiptEmail");


nextBtn.addEventListener("click", () => {
    if (firstName.value != '' && lastName.value != '' && address.value != '' && country.value != '' && region.value != '' && city.value != '' && zipcode.value != '' && phone.value != '' && email.value != ''){
        nextBtn.setAttribute("type", "button");
        document.querySelector(".checkout-body").style.marginLeft = '-100%';
        receiptName.textContent = firstName.value + " " + lastName.value;
        receiptAddress.textContent = address.value + " " + address2.value + " " + city.value + " City, " + region.value + ", " + country.value + ", " + zipcode.value;
        receiptPhone.textContent = phone.value;
        receiptEmail.textContent = email.value;
    }
    else{
        nextBtn.setAttribute("type", "submit");
    }
})

backBtn.addEventListener("click", () => {
    window.history.back();
})

let newsLetterInput = document.querySelector("#newsletter-email")
document.querySelector(".newsLetterBtn").addEventListener("click", () => {
  newsLetterInput.value = '';
})

let reviewOrder = document.querySelector(".reviewOrder1");
allProducts = JSON.parse(localStorage.getItem("allEntries"));
for (let i in allProducts){
  let reviewOrderDiv = document.createElement("div");
  reviewOrderDiv.classList.add("reviewCheckout");
  reviewOrderDiv.innerHTML = allProducts[i].product;
  reviewOrder.appendChild(reviewOrderDiv);
}

let cartItems = document.getElementsByClassName("reviewOrder1")[0];
let cartDiv = cartItems.getElementsByClassName("cartContentContainer")
let retrieveValues = localStorage.getItem("quantityCartValues");
let productValues = JSON.parse(retrieveValues);


for (let i=0; i < cartDiv.length; i++){
  var cartRow = cartDiv[i];
  var quantityElement = cartRow.getElementsByClassName("inputQty")[0];
  quantityElement.value = productValues[i];
}

let reviewOrder2 = document.querySelector(".reviewOrder2");
allProducts2 = JSON.parse(localStorage.getItem("allEntries"));
for (let i in allProducts2){
  let reviewOrderDiv2 = document.createElement("div");
  reviewOrderDiv2.classList.add("reviewOrder");
  reviewOrderDiv2.innerHTML = allProducts[i].product;
  reviewOrder2.appendChild(reviewOrderDiv2);
}

let cartItems2 = document.getElementsByClassName("reviewOrder2")[0];
let cartDiv2 = cartItems2.getElementsByClassName("cartContentContainer");


for (let i=0; i < cartDiv2.length; i++){
  var cartRow = cartDiv2[i];
  var quantityElement = cartRow.getElementsByClassName("inputQty")[0];
  quantityElement.value = productValues[i];
}

let qtyRemove = document.querySelectorAll(".qtyRemove");
qtyRemove.forEach((qty) => {
    qty.insertAdjacentText("afterbegin", ' x ');
})

let checkoutTotal = document.querySelector(".checkoutTotal");
checkoutTotal.innerText = localStorage.getItem("totalPrice");

let checkoutSubTotal = document.querySelector(".checkoutSubTotal");
checkoutSubTotal.innerText = localStorage.getItem("subTotalPrice");

let checkoutFee = document.querySelector(".checkoutFee");
checkoutFee.innerText = localStorage.getItem("checkoutFee")

let orderTotal = document.querySelector(".orderTotal");
orderTotal.innerText = localStorage.getItem("totalPrice");

let orderSubTotal = document.querySelector(".orderSubTotal");
orderSubTotal.innerText = localStorage.getItem("subTotalPrice");

let orderFee = document.querySelector(".orderFee");
orderFee.innerText = localStorage.getItem("checkoutFee")
