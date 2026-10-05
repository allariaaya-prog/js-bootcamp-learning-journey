let input =document.querySelector("#calc");

// focus on the input field when you open the website
window.onload = function () {
    input.focus();
};


input.onclick = function () {

    // if input is empty
    if (input.value === '') {

        // alert message
        alert("No Value");

    } 
}