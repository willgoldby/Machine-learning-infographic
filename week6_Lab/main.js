function addNewList() {
    alert('hello world!');
}

function addListItem() {
    console.log('hello world');
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);

}




function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
    item.parentNode.removeChild(item);
}


function completeListItem(item) {
    if (item.checked) {
        item.parentNode.style.textDecoration = "line-through";
    }
    else {
        item.parentNode.style.textDecoration = "none";
    }
}