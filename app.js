let itemAmount = document.getElementById("item").value;
let Quantity = document.getElementById("Q").value;
let name = document.getElementById("name");
//^^^^^^^^do these not grab the input???^^^^^

function math() {
    //multiply the itemAmount by the Quantity
    //Number(itemAmount) * Number(Quantity);
    //itemAmount + Quantity
    //neither work

}

document.getElementById("orderBtn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = "Thanks, " + name.value + "! Your total is $" + math();
})