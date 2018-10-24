
// Updates image
function updateImgSrc() {
    //console.log($("input[type='radio'][name='color']:checked").val());
    if ($("input[type='radio'][name='color']:checked").val() == "Crazy Berry") {
        $('#imageSRC').attr("src",'images/harnessStraw.png');
      //console.log($('#imageSRC').attr("src"));
    }else if ($("input[type='radio'][name='color']:checked").val() == "Strawberry"){
        $('#imageSRC').attr("src", 'images/harnessPurple2.png');
    }else if ($("input[type='radio'][name='color']:checked").val() == "Fire Orange") {
        $('#imageSRC').attr("src", 'images/harnessRed.png');
    }
}

// Save all variables locally
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

    console.log(JSON.parse(localStorage.getItem("cart")));
}

function onLoadCart() {
    let cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart)
    for (var key in cart) {
        var sizeAndColor = key;


        var amount = cart[key];
        if (cart[key].slice(0,5) == 'image') {
            var location = cart[key]
        } else {
            continue;
        }
        // console.log(location)
        // if (parseInt(cart[key]) ==  ) {
        //     var amount = cart[key]
        // } else {
        //     continue;
        // }
}


    console.log("size and color:" + sizeAndColor + "amount:" + amount + "location:" + location)
}






    // let color = JSON.parse(localStorage.getItem("database")).color;
    // console.log(color);
    // document.getElementById("color").innerHTML = color;
    // let size = JSON.parse(localStorage.getItem("database")).size;
    // document.getElementById("size").innerHTML = size;
    // console.log(size);
    // let quantity = JSON.parse(localStorage.getItem("database")).item.quantity;
    // document.getElementById("itemsInCart").innerHTML = quantity;
    // console.log(quantity);
    // let price = 19.99 * JSON.parse(localStorage.getItem("database")).item.quantity;
    // document.getElementById("dollarPrice").innerHTML = price;
    // let qntyInCart = JSON.parse(localStorage.getItem("database")).item.quantity.toString();
    // console.log(qntyInCart)
    // $("#updateQty").attr("value", qntyInCart);



$("#updateCart").on("click", function () {
    updateTheCart();

});

function updateTheCart(){
    console.log("clicked button");
    let newQuantity = document.getElementById("updateQty");
    let newQuantityToSave = newQuantity.value;
    let cart = JSON.parse(localStorage.getItem("database"));
    document.getElementById("itemsInCart").innerHTML = newQuantityToSave;
    cart['quantity'] = newQuantityToSave;
    localStorage.setItem("database", JSON.stringify(cart))
    console.log(localStorage.getItem("database"));
    let price = 19.99 * JSON.parse(localStorage.getItem("database")).item.quantity;
    document.getElementById("dollarPrice").innerHTML = price;

}


$("#dollarPrice").on('click', function() {
    updatePrice();

});

function updatePrice() {
    let price = JSON.parse(localStorage.getItem("database")).quantity;
}


//
// function deleteItem() {
//
// }

function onDetailsLoad() {
    console.log("onDetailsLoad ran");
    localStorage.clear();
}







