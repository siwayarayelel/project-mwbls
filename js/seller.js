let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", openPopup);

let productList = JSON.parse(localStorage.getItem("sellEntries"));
let productEntries = JSON.parse(localStorage.getItem("sellEntries"));
if (productEntries == null) productEntries = [];
let uploadedImg = '';
console.log(uploadedImg);
let uploadImg = document.querySelector("#image-input");
uploadImg.addEventListener("change", function() {
    let reader = new FileReader();

            reader.addEventListener("load", () => {
                uploadedImg = reader.result;

            });
            reader.readAsDataURL(this.files[0]);

})

let image = document.querySelector("#image-input");
image.src = localStorage.getItem("userImage");

function openPopup() {



    let n = localStorage.getItem("idVal");
   
    let category = document.querySelector("#category").value;
    let productName = document.querySelector("#productName").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let location = document.querySelector("#location").value;

    if (category == '' || productName == '' || description == '' || price == '' || location == ''){
        e.preventDefault();
    }
    
    n = ++n;

    let productList = {
    imageObj: uploadedImg,
    categoryObj: category,
    productNameObj: productName,
    descriptionObj: description,
    priceObj: price,
    locationObj: location,
    id: n,
    };
 
    localStorage.setItem("productDetails", JSON.stringify(productList));
    localStorage.setItem("idVal", n);
    productEntries.push(productList);
    localStorage.setItem("sellEntries", JSON.stringify(productEntries));
    
    
    let productTable = document.querySelector("#display");
    let productRow = document.createElement("tr");

    productRow.id = productList.id;
    
    let imageData = document.createElement("td");
    let imageSample = document.createElement('img');
    imageSample.src = productList.imageObj;
    imageSample.classList.add("imageSample");
    

    let categoryData = document.createElement("td");
    categoryData.classList.add("categoryData");
    categoryData.textContent = productList.categoryObj;

    let productnameData = document.createElement("td");
    productnameData.textContent = productList.productNameObj;

    let descriptionData = document.createElement("td");
    descriptionData.classList.add("descriptionData");
    descriptionData.textContent = productList.descriptionObj;

    let priceData = document.createElement("td");
    priceData.textContent = "P " + productList.priceObj;

    let locationData = document.createElement("td");
    locationData.classList.add("locationData");
    locationData.textContent = productList.locationObj;

    let remData = document.createElement("td");
    remData.innerHTML = "<button id='remBtn' onclick='remFunc()'>Remove</button>";

    productTable.appendChild(productRow);
    productRow.appendChild(imageData);
    imageData.appendChild(imageSample);
    productRow.appendChild(categoryData);
    productRow.appendChild(productnameData);
    productRow.appendChild(descriptionData);
    productRow.appendChild(priceData);
    productRow.appendChild(locationData);
    productRow.appendChild(remData);
}

    let retrieveData2 = localStorage.getItem("sellEntries");
    let productEntries2 = JSON.parse(retrieveData2);

    for (let i in productEntries2) {
        let productTable = document.querySelector("#display");
        let productRow = document.createElement("tr");
        productRow.id = productEntries2[i].id;

        let imageData = document.createElement("td");
        let imageSample = document.createElement('img');
        imageSample.src = productEntries2[i].imageObj;
        imageSample.classList.add("imageSample");
        
        let categoryData = document.createElement("td");
        categoryData.classList.add("categoryData");
        categoryData.textContent = productEntries2[i].categoryObj;

        let productnameData = document.createElement("td");
        productnameData.textContent = productEntries2[i].productNameObj;

        let descriptionData = document.createElement("td");
        descriptionData.classList.add("descriptionData");
        descriptionData.textContent = productEntries2[i].descriptionObj;

        let priceData = document.createElement("td");
        priceData.textContent = "P " + productEntries2[i].priceObj;

        let locationData = document.createElement("td");
        locationData.classList.add("locationData");
        locationData.textContent = productEntries2[i].locationObj;

        let remData = document.createElement("td");
        remData.innerHTML = "<button id='remBtn' onclick='remFunc()'>Remove</button>";

        productTable.appendChild(productRow);
        productRow.appendChild(imageData);
        imageData.appendChild(imageSample);
        productRow.appendChild(categoryData);
        productRow.appendChild(productnameData);
        productRow.appendChild(descriptionData);
        productRow.appendChild(priceData);
        productRow.appendChild(locationData)
        productRow.appendChild(remData);
}
let tbody = document.getElementsByTagName("table");
let alertListing = document.querySelector(".alertListing");

function remFunc(){
    let td = event.target.parentNode;
    let tr = td.parentNode;
    
    
    productID = tr.id
    tr.remove();
    
    productEntries2 = productEntries2.filter((obj) => obj.id != productID);
    
    console.log(productEntries2)
    localStorage.setItem("sellEntries", JSON.stringify(productEntries2));

}
