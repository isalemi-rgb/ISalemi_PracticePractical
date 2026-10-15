//let itemAmount = document.getElementById("item").value;
//let Quantity = document.getElementById("Q").value;
let name = document.getElementById("name");
//^^^^^^^^do these not grab the input???^^^^^

function math() {
    //multiply the itemAmount by the Quantity
    //Number(itemAmount) * Number(Quantity);
    //itemAmount + Quantity
    //neither work
    //Number(document.getElementById("item").value) * Number(document.getElementById("Q").value);

}

document.getElementById("orderBtn").addEventListener("click", () => {
    //idk
    document.getElementById("result").innerHTML = "Thanks, " + name.value + "! Your total is $" + Number(document.getElementById("item").value); * Number(document.getElementById("Q").value);
})