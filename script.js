let button = document.getElementById("btn");
let itemName = document.getElementById("item-name-input");
let itemPrice = document.getElementById("item-price-input");
button.addEventListener("click", () => {
    let name = itemName.value;
    let price = parseFloat(itemPrice.value);
    // Alert message for empty field
    if(!itemName || !price){
        alert("Enter required details")
        return;
    }
    // Adding item
   let itemList = document.getElementById("item-list");
   let newItem = document.createElement("tr")
    newItem.innerHTML = 
    `<td data-ns-test = "item-name">${name}</td>
    <td data-ns-test = "item-price">${price}</td>`;
    itemList.appendChild(newItem)
    // grand total
    let grandTotal = document.querySelector("[data-ns-test='grandTotal']")
    let currentTotal = parseFloat(grandTotal.textContent)
    let newTotal = currentTotal + price;
    grandTotal.textContent = newTotal.toFixed(2)
    // empty field
    itemName.value = ""
    itemPrice.value = ""


});
