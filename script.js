//your code here
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const totalElement = document.getElementById("total");
const table = document.getElementById("table");

if (itemNameInput.value === "" && itemPriceInput.value === "") {
  table.setAttribute("hidden", "hidden");
}

let grandTotal = 0;

addButton.addEventListener("click", () => {
  const itemName = itemNameInput.value.trim();
  const itemPrice = Number(itemPriceInput.value);

  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and price");
    return;
  }

  const row = document.createElement("tr");

  const tDataName = document.createElement("td");
  tDataName.textContent = itemName;
  row.appendChild(tDataName);

  const tDataPrice = document.createElement("td");
  tDataPrice.textContent = itemPrice;
  row.appendChild(tDataPrice);

  tableBody.appendChild(row);

  table.removeAttribute("hidden");

  grandTotal += itemPrice;
  totalElement.textContent = `Grand Total: ${grandTotal}`;

  itemNameInput.value = "";
  itemPriceInput.value = "";
});