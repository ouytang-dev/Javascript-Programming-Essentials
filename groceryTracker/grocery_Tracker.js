let length;
let width;

function calculateTotal() {
 grocery1 = parseFloat(document.getElementById('Grocery-1').value);
 grocery2 = parseFloat(document.getElementById('Grocery-2').value);
 grocery3 = parseFloat(document.getElementById('Grocery-3').value);

 let total = grocery1 + grocery2 + grocery3;

 document.getElementById('result').innerText = `The total amount is: ${total}`;

}

