
let itemInput = document.getElementById("item-input") //we are calling the kitchen-input from the html file ans saving here in the variable named as kitchenInput same the other 2 also
let addBtn = document.getElementById("add-btn")
let itemsList = document.getElementById("items-list")

//step 2 : Add  items
function addItems() {
    let itemInputData = itemInput.value;   //we are storing the kitcheninput to a variable named as kitcheninputdata
    // Create DOM elements now
    let li = document.createElement("li"); //creating the list as li
    li.innerText = itemInputData; //adding text in between the <li></li> can see in the console but in browser only text can be seen
    li.style.cssText = "animation-name: slideIn;";
    itemsList.appendChild(li); //we need to append this item in ul(unordered list) ie in the html file ,li is the child of ul
    itemInput.value = ""; //make the input place empty
    itemInput.focus(); //cursor will come in the input area as | blinking
    console.log(li);
}
//step 1 : Add an event listener to the button
addBtn.addEventListener("click", addItems); //when we click on add now button,the eventlistener will know the click is done then it will redirect to the function named addKitchenItems
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
        addItems(); // Call addKitchenItems function
    }
});

// Function to delete the last item
function deleteLastItem() {
    let items = itemsList.getElementsByTagName("li");
    if (items.length > 0) {
        itemsList.removeChild(items[items.length - 1]);
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Delete" && document.activeElement === itemInput) {
        deleteLastItem();
    }
});
