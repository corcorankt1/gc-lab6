
var items = [
	{
		name: "milk",
		price: 3.00
	},
	{
		name: "bread",
		price: 2.50
	},
	{
		name: "eggs",
		price: 1.25
	},
	{
		name: "ice cream",
		price: 5.00
	},
]

function addItem(){
	var itemName = document.getElementById("itemName").value;
	var itemPrice = document.getElementById("price").value;
	var x = {name: itemName, price: itemPrice};
	items.push(x);
	console.log(items);
};

var total = 0;

items.forEach(function(element){
	var newP = document.createElement('p');
	newP.innerHTML = element.name + " $" + element.price.toFixed(2);
	document.body.appendChild(newP);
	total += element.price;
});

var newP = document.createElement('p');
newP.innerHTML = "Total: $" + total.toFixed(2);
document.body.appendChild(newP);


