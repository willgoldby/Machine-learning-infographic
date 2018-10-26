
// Updates image
function updateImgSrc() {
    //console.log($("input[type='radio'][name='color']:checked").val());
    if ($("input[type='radio'][name='color']:checked").val() == "Crazy Berry") {
        $('#imageSRC').attr("src",'images/harnessPurple2.png');
      //console.log($('#imageSRC').attr("src"));
    }else if ($("input[type='radio'][name='color']:checked").val() == "Strawberry"){
        $('#imageSRC').attr("src", 'images/harnessStraw1.png');
    }else if ($("input[type='radio'][name='color']:checked").val() == "Fire Orange") {
        $('#imageSRC').attr("src", 'images/harnessRed.png');
    }
}

// Saves all variables locally
$("#addToCart").on("click", function() {
    saveStatusLocally();
});

// Implements saving locally
function saveStatusLocally() {
    console.log(window.localStorage.length);
    if (window.localStorage.length === 0) {
        var cart = {};
        var image = $("#imageSRC").attr("src");
        var quantity = document.getElementById("qty");
        var quantityToSave = quantity.value;
        var size = $("input[name='size']:checked").val();
        var color = $("input[name='color']:checked").val();
        cart[size + "-" + color] = quantityToSave;
        cart[size + "-" + color + "-" + "image"] = image;
        localStorage.setItem("cart", JSON.stringify(cart));

    } else {
        var cart = JSON.parse(localStorage.getItem("cart"));
        var image = $("#imageSRC").attr("src");
        var quantity = document.getElementById("qty");
        var quantityToSave = quantity.value;
        var size = $("input[name='size']:checked").val();
        var color = $("input[name='color']:checked").val();
        cart[size + "-" + color] = quantityToSave;
        cart[size + "-" + color + "-" + "image"] = image;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    // Used for debugging
    console.log(JSON.parse(localStorage.getItem("cart")));
    // Used for debugging
    console.log("clicked button");

    // Loops through the cart and up dates quantity in shopping cart
    var cart = JSON.parse(localStorage.getItem("cart"))
    var quantityOfAllProducts = 0;
    var count = 0;
    var loops = 0;
    for (var key in cart){
        count++;
        loops++;
        if (count % 2 == 0) {
            var location = cart[key];
        } else {
            var amount = cart[key];
            quantityOfAllProducts += parseInt(amount)
        }
    }
    var qunatityAsString = quantityOfAllProducts.toString();
    document.getElementById("itemsInCart").innerHTML = qunatityAsString;


}

// Populates shopping cart with image
function onLoadCart() {
    var cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart);
    var quantityOfAllProducts = 0;
    var count = 0;
    var loops = 0;
    // Loops over dictionary and sets values that are then stored
    // in local storage. The values and then used to populate
    // the image, name, and quantity divs.
    for (var key in cart){
       count++;
       loops++;
       if (count % 2 == 0) {
           var location = cart[key];
       } else {
           var amount = cart[key];
           quantityOfAllProducts += parseInt(amount)
       }
       if (loops == 2||loops % 2 == 0){
            var key = key;
            var location = location;
            var amount = amount;
            localStorage.setItem("key", JSON.stringify(key));
            localStorage.setItem("location", JSON.stringify(location));
            localStorage.setItem("amount", JSON.stringify(amount));
            createProducts(location);

       }

   }
   // Puts quantity of products next to account in upper left.
    var qunatityAsString = quantityOfAllProducts.toString();
    document.getElementById("itemsInCart").innerHTML = qunatityAsString;
}


function createProducts() {
    console.log("createProducts ran");

    //bring items in from local storage
    var oldKey = JSON.parse(localStorage.getItem("key"));
    let key = oldKey.replace("-image","-Kitty Safe Harness");
    console.log("this is the key:", key);
    var location = JSON.parse(localStorage.getItem("location"));
    var amount = JSON.parse(localStorage.getItem("amount"));

    //product row
    var productRow = document.createElement("div");
    productRow.className = "row productRow";

    //create image element as a column in productRow
    var imageElement = document.createElement("img");
    imageElement.className = "col-xs-12 col-sm-3 imageProduct";
    imageElement.src = location;
    imageElement.height = "200";
    imageElement.width = "200";

    //create title and quantity column that will go in productRow
    var titleAndQuantity = document.createElement("div");
    titleAndQuantity.className = "col-xs-12 col-sm-3 titleAndQuantity";

    //create title div that will be appended to titleAndQuantity div
    var productTitle = document.createElement("div");
    productTitle.className = "col-xs-12 productTitle";

    // create product title that will be appended to titleAndQuantity
    var productName = document.createTextNode(key);

    //create quantity div which will be appended to titleAndQuantity
    var quantityDiv = document.createElement('div');

    // create quantity input which will be appended to quantityDiv
    var quantity = document.createElement("input");
    quantity.value = amount;

    //create delete button div which will be appended to productRow
    var deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.className = "col-xs-12 col-sm-3";

    //create button which will be appended to deleteButtonDiv
    var deleteButton = document.createElement("button");
    deleteButton.className = "col-xs-12 col-sm-5 btn btn-warning deleteButton";
    deleteButton.type = "button";
    deleteButton.id = "deleteProduct";

    ///////// EVENT LISTENER FOR DELETE BUTTON //////////
    deleteButton.addEventListener('click', deleteItem, updateTheCart);


    // delete button
    function deleteItem() {
        var productRow = event.target.parentNode.parentNode;
        productRow.parentNode.removeChild(productRow);

        // Changes quantity in cart
        for (quan in quantity.value) {
            let itemQuantity = parseInt(quantity.value);
            let inCart = parseInt(document.getElementById("itemsInCart").innerHTML);
            let updatedQuantity = inCart - itemQuantity;
            updatedQuantity.toString();
            document.getElementById("itemsInCart").innerHTML = updatedQuantity;

        }


    }

    //create button text that will be appended to deleteButton
    var deleteMeText = document.createTextNode("Delete Me");


    /////// BEGIN APPENDING ELEMENTS ///////

    // appending 'Delete Me' to button
    deleteButton.appendChild(deleteMeText);

    //appending deleteButton to deleteButtonDiv
    deleteButtonDiv.appendChild(deleteButton);

    //appending image to productRow
    productRow.appendChild(imageElement);

    //appending productName to productTitle
    productTitle.appendChild(productName);

    //appending title to titleAndQuantity
    titleAndQuantity.appendChild(productTitle);

    //appending quantity to quantityDiv
    quantityDiv.appendChild(quantity);

    //appending quantityDiv to titleAndQuantity
    titleAndQuantity.appendChild(quantityDiv);

    //appending titleAndQuantity to productRow
    productRow.appendChild(titleAndQuantity);

    //appending deleteButtonDiv to productRow
    productRow.appendChild(deleteButtonDiv);

    //price variable
    var price = document.createTextNode("19.99");

    document.getElementById("allProducts").appendChild(productRow);


}

// Updates quantity in cart if item has been deleted
function updateTheCart() {
    console.log("clicked button");

    var cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart);
    var quantityOfAllProducts = 0;
    var count = 0;
    var loops = 0;
    for (var key in cart) {
        count++;
        loops++;
        if (count % 2 == 0) {
            var location = cart[key];
        } else {
            var amount = cart[key];
            quantityOfAllProducts += parseInt(amount)
        }
    }
    var qunatityAsString = quantityOfAllProducts.toString();
    document.getElementById("itemsInCart").innerHTML = qunatityAsString;
}


function onDetailsLoad() {
    console.log("onDetailsLoad ran");
    localStorage.clear();
}







