let profileContainer = document.querySelector(".profileContainer");
let profileSelection = document.querySelectorAll(".profileSelection");

profileContainer.addEventListener("click", () => {
  profileSelection.forEach((selection) => {
    selection.classList.toggle("hide");
  })
})

let profileIcon = document.querySelector(".profileIcon");
profileIcon.src = localStorage.getItem("userImage") || "images/profpic.jpg";


let editNameContainer = document.querySelector(".editNameContainer");
let editNumberContainer = document.querySelector(".editNumberContainer");
let editEmailContainer = document.querySelector(".editEmailContainer");
let editAddressContainer = document.querySelector(".editAddressContainer");
let editBioContainer = document.querySelector(".editBioContainer");

let inputName = document.querySelector(".inputName");
inputName.value = localStorage.getItem("profileName") || "Kodego";
inputName.defaultValue = inputName.value;
let alertName = document.querySelector(".alertName");

let inputNumber = document.querySelector(".inputNumber");
inputNumber.value = localStorage.getItem("profileNumber") || 09271234567;
inputNumber.defaultValue = inputNumber.value;
let alertNumber = document.querySelector(".alertNumber");

let inputEmail = document.querySelector(".inputEmail");
inputEmail.value = localStorage.getItem("profileEmail") || "kodego@tryonly.com";
inputEmail.defaultValue = inputEmail.value;
let alertEmail = document.querySelector(".alertEmail");

let inputAddress = document.querySelector(".inputAddress");
inputAddress.value = localStorage.getItem("profileAddress") || "2183 Magsaysay Avenue Corner EDSA, Guadalupe Nuevo";
inputAddress.defaultValue = inputAddress.value;
let alertAddress = document.querySelector(".alertAddress");

let inputBio = document.querySelector(".inputBio");
inputBio.value = localStorage.getItem("profileBio") || '“He who works with his hands is a laborer. He who works with his hands and his head is a craftsman. He who works with his hands and his head and his heart is an artist.” We are experts in our occupation.';
inputBio.defaultValue = inputBio.value;
let alertBio = document.querySelector(".alertBio");

let editNameBtn = document.querySelector(".editName");
let editNumberBtn = document.querySelector(".editNumber");
let editEmailBtn = document.querySelector(".editEmail");
let editAddressBtn = document.querySelector(".editAddress");
let editBioBtn = document.querySelector(".editBio");

editNameBtn.addEventListener("click", () => {
    inputName.removeAttribute("disabled", '');
    editNameBtn.setAttribute("disabled", '');

    let saveName = document.createElement("button");
    saveName.innerHTML = '<i class="fa-solid fa-check"></i>';
    saveName.style.color = "whitesmoke";
    saveName.style.backgroundColor = "green";
    editNameContainer.insertBefore(saveName, editNameBtn);


    let cancelSave = document.createElement("button");
    cancelSave.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cancelSave.style.color = "whitesmoke";
    cancelSave.style.backgroundColor = "red";
    editNameContainer.insertBefore(cancelSave, editNameBtn);

    saveName.addEventListener("click", () => {
        if (inputName.value == ""){
            alertName.textContent = "Please input a name";
        } else{
        alertName.textContent = "";
        inputName.setAttribute("disabled", '');
        editNameBtn.removeAttribute("disabled", '');
        saveName.style.display = "none";
        cancelSave.style.display = "none";
        inputName.defaultValue = inputName.value;
        localStorage.setItem("profileName", inputName.defaultValue);
        }
    })

    cancelSave.addEventListener("click", () => {
        alertName.textContent = "";
        inputName.setAttribute("disabled", '');
        editNameBtn.removeAttribute("disabled", '');
        saveName.style.display = "none";
        cancelSave.style.display = "none";
        inputName.value = inputName.defaultValue;
        localStorage.setItem("profileName", inputName.value);
    })
})

editNumberBtn.addEventListener("click", () => {
    inputNumber.removeAttribute("disabled", '');
    editNumberBtn.setAttribute("disabled", '');

    let saveNumber = document.createElement("button");
    saveNumber.innerHTML = '<i class="fa-solid fa-check"></i>';
    saveNumber.style.color = "whitesmoke";
    saveNumber.style.backgroundColor = "green";
    editNumberContainer.insertBefore(saveNumber, editNumberBtn);


    let cancelSave = document.createElement("button");
    cancelSave.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cancelSave.style.color = "whitesmoke";
    cancelSave.style.backgroundColor = "red";
    editNumberContainer.insertBefore(cancelSave, editNumberBtn);

    saveNumber.addEventListener("click", () => {
        if (inputNumber.value == ""){
            alertNumber.textContent = "Please input a number";
        } else{
        alertNumber.textContent = "";
        inputNumber.setAttribute("disabled", '');
        editNumberBtn.removeAttribute("disabled", '');
        saveNumber.style.display = "none";
        cancelSave.style.display = "none";
        inputNumber.defaultValue = inputNumber.value;
        localStorage.setItem("profileNumber", inputNumber.defaultValue);
        }
    })

    cancelSave.addEventListener("click", () => {
        alertNumber.textContent = "";
        inputNumber.setAttribute("disabled", '');
        editNumberBtn.removeAttribute("disabled", '');
        saveNumber.style.display = "none";
        cancelSave.style.display = "none";
        inputNumber.value = inputNumber.defaultValue;
        localStorage.setItem("profileNumber", inputNumber.value);
    })
})

editEmailBtn.addEventListener("click", () => {
    inputEmail.removeAttribute("disabled", '');
    editEmailBtn.setAttribute("disabled", '');

    let saveEmail = document.createElement("button");
    saveEmail.innerHTML = '<i class="fa-solid fa-check"></i>';
    saveEmail.style.color = "whitesmoke";
    saveEmail.style.backgroundColor = "green";
    editEmailContainer.insertBefore(saveEmail, editEmailBtn);


    let cancelSave = document.createElement("button");
    cancelSave.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cancelSave.style.color = "whitesmoke";
    cancelSave.style.backgroundColor = "red";
    editEmailContainer.insertBefore(cancelSave, editEmailBtn);

    saveEmail.addEventListener("click", () => {
        if (inputEmail.value == ""){
            alertEmail.textContent = "Please input an email";
        } else{
        alertEmail.textContent = "";
        inputEmail.setAttribute("disabled", '');
        editEmailBtn.removeAttribute("disabled", '');
        saveEmail.style.display = "none";
        cancelSave.style.display = "none";
        inputEmail.defaultValue = inputEmail.value;
        localStorage.setItem("profileEmail", inputEmail.defaultValue);
        }
    })

    cancelSave.addEventListener("click", () => {
        alertEmail.textContent = "";
        inputEmail.setAttribute("disabled", '');
        editEmailBtn.removeAttribute("disabled", '');
        saveEmail.style.display = "none";
        cancelSave.style.display = "none";
        inputEmail.value = inputEmail.defaultValue;
        localStorage.setItem("profileEmail", inputEmail.value);
    })
})

editAddressBtn.addEventListener("click", () => {
    inputAddress.removeAttribute("disabled", '');
    editAddressBtn.setAttribute("disabled", '');

    let saveAddress = document.createElement("button");
    saveAddress.innerHTML = '<i class="fa-solid fa-check"></i>';
    saveAddress.style.color = "whitesmoke";
    saveAddress.style.backgroundColor = "green";
    editAddressContainer.insertBefore(saveAddress, editAddressBtn);


    let cancelSave = document.createElement("button");
    cancelSave.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cancelSave.style.color = "whitesmoke";
    cancelSave.style.backgroundColor = "red";
    editAddressContainer.insertBefore(cancelSave, editAddressBtn);

    saveAddress.addEventListener("click", () => {
        if (inputAddress.value == ""){
            alertAddress.textContent = "Please input an address";
        } else{
        alertAddress.textContent = "";
        inputAddress.setAttribute("disabled", '');
        editAddressBtn.removeAttribute("disabled", '');
        saveAddress.style.display = "none";
        cancelSave.style.display = "none";
        inputAddress.defaultValue = inputAddress.value;
        localStorage.setItem("profileAddress", inputAddress.defaultValue);
        }
    })

    cancelSave.addEventListener("click", () => {
        alertAddress.textContent = "";
        inputAddress.setAttribute("disabled", '');
        editAddressBtn.removeAttribute("disabled", '');
        saveAddress.style.display = "none";
        cancelSave.style.display = "none";
        inputAddress.value = inputAddress.defaultValue;
        localStorage.setItem("profileAddress", inputAddress.value);
    })
})

editBioBtn.addEventListener("click", () => {
  inputBio.removeAttribute("disabled", '');
  editBioBtn.setAttribute("disabled", '');

  let saveBio = document.createElement("button");
  saveBio.innerHTML = '<i class="fa-solid fa-check"></i>';
  saveBio.style.color = "whitesmoke";
  saveBio.style.backgroundColor = "green";
  editBioContainer.insertBefore(saveBio, editBioBtn);


  let cancelSave = document.createElement("button");
  cancelSave.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  cancelSave.style.color = "whitesmoke";
  cancelSave.style.backgroundColor = "red";
  editBioContainer.insertBefore(cancelSave, editBioBtn);

  saveBio.addEventListener("click", () => {
      if (inputBio.value == ""){
          alertBio.textContent = "Please input an address";
      } else{
      alertBio.textContent = "";
      inputBio.setAttribute("disabled", '');
      editBioBtn.removeAttribute("disabled", '');
      saveBio.style.display = "none";
      cancelSave.style.display = "none";
      inputBio.defaultValue = inputBio.value;
      localStorage.setItem("profileBio", inputBio.defaultValue);
      }
  })

  cancelSave.addEventListener("click", () => {
      alertBio.textContent = "";
      inputBio.setAttribute("disabled", '');
      editBioBtn.removeAttribute("disabled", '');
      saveBio.style.display = "none";
      cancelSave.style.display = "none";
      inputBio.value = inputBio.defaultValue;
      localStorage.setItem("profileAddress", inputBio.value);
  })
})

let uploadImg = document.querySelector("#changepic");
uploadImg.addEventListener("change", function() {
    let reader = new FileReader();

            reader.addEventListener("load", () => {
                localStorage.setItem("userImage", reader.result);
            });

            reader.readAsDataURL(this.files[0]);

            location.reload()


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

let profilePic = document.querySelector(".profilePic");
let imageURL = localStorage.getItem("userImage");

let profImg = document.createElement("img");
profImg.src = imageURL || "images/profpic.jpg";;
profilePic.insertBefore(profImg, uploadImg);

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


