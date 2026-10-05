// Select Elements

// Select all buttons inside the .buttons container
const allSpans = document.querySelectorAll(".buttons span");

// Select the span where we will display the results
const results = document.querySelector(".results > span");

// Select the input field
const input = document.getElementById("input");


// Handle Button Clicks
// Loop through all buttons and add a click event to each one
allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        // Check which button was clicked by checking its class name
        if (e.target.classList.contains("check")) {
            checkItem();
        }

        if (e.target.classList.contains("add")) {
            addItem();
        }

        if (e.target.classList.contains("delete")) {
            deleteItem();
        }

        if (e.target.classList.contains("show")) {
            showItem();
        }
    });

});


//FUNCTIONS
// Show Empty Input Message

function showMsg() {

    // Display a message if the input field is empty
    results.innerHTML = "Input cannot be empty";

}

// Check If an Item Exists

function checkItem() {

    // Make sure the user entered something
    if (input.value !== "") {

        // getItem() searches localStorage for a key
        // using the value entered by the user

        if (localStorage.getItem(input.value)) {

            // If the key exists, getItem() returns its value
            results.innerHTML =
                `Found local item called <span>${input.value}</span>`;

        } else {

            // If the key does not exist, getItem() returns null
            results.innerHTML =
                `No local item called <span>${input.value}</span>`;
        }

    } else {

        // If the input is empty, show an error message
        showMsg();
    }
}


// Add an Item to localStorage
function addItem() {

    // Make sure the input is not empty
    if (input.value !== "") {

        // setItem() stores data in localStorage

        // The first argument is the KEY
        // The second argument is the VALUE 

        // localStorage will contain:
        // Aya -> Test

        localStorage.setItem(input.value, "Test");

        // Tell the user that the item was added
        results.innerHTML =
            `Local storage item <span>${input.value}</span> added`;

        // Clear the input field after adding the item
        input.value = "";

    } else {

        // If the input is empty, show an error message
        showMsg();
    }
}


// Delete an Item
function deleteItem() {

    // Make sure the input is not empty
    if (input.value !== "") {

        // First, check if the item exists
        if (localStorage.getItem(input.value)) {

            // removeItem() deletes the item
            // using its KEY

            localStorage.removeItem(input.value);

            // Tell the user that the item was deleted
            results.innerHTML =
                `Local item called <span>${input.value}</span> deleted`;

            // Clear the input field
            input.value = "";

        } else {

            // The item does not exist in localStorage
            results.innerHTML =
                `No local item called <span>${input.value}</span>`;
        }

    } else {

        // If the input is empty, show an error message
        showMsg();
    }
}


// Show All Stored Items
function showItem() {

    // localStorage.length tells us how many items are currently stored

    if (localStorage.length) {

        // Clear the previous results
        results.innerHTML = "";

        // Object.entries(localStorage) converts the stored data
        // into an array of [key, value] pairs
        
        // Object.entries(localStorage) becomes:

        /*  [
        //     ["Aya", "Test"],
        //     ["John", "Test"]
            ] */ 

        for (let [key, value] of Object.entries(localStorage)) {

            // key = the name stored in localStorage
            // value = the value stored with that key
            //
            // In this example, we only need the key,
            // so "value" is not used.

            results.innerHTML += `<span>${key}</span>`;
        }

    } else {

        // If localStorage has no items
        results.innerHTML = "Local storage is empty";
    }
}