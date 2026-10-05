const passwordBox = document.getElementById("password"); //get the password input box element
const length=10; //password length


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-+";


function generatePassword() {
    let password = ""; //empty string to store the generated password

    //math.random() generates a random number between 0 and 1
    //math.floor() rounds down the number to the nearest integer
    //multiply the random number by the length of the character set to get a random index,

    //then use that index to get a random character from the set and append it to the password string
    //result taken as index of the uppercase string and added to the password accordingly to the const defined above

    password += uppercase[Math.floor(Math.random() * uppercase.length)]; 
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];


    //combine all character sets into one string
    const allChars = uppercase + lowercase + numbers + symbols; 

    for (let i = 0; i < length; i++) {

        // Append a random character from the combined string to the password
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    //set the generated password as the value of the password input box
    passwordBox.value = password; 
}

function copyPassword()
{
    //select the text in the password input box
    passwordBox.select(); 

    //copy the selected text to the clipboard
    document.execCommand("copy"); 

    //show an alert to the user
    alert("Password copied to clipboard!"); 

}