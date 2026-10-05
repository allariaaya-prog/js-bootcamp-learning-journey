/*number methods
toString() - converts a number to a string
toFixed() - formats a number using fixed-point notation
parseInt() - parses a string and returns an integer
parseFloat() - parses a string and returns a floating point number
*/


console.log((123).toString());
console.log((123.456).toFixed(2)); // the nearest 2 digits
console.log(parseInt("123abc")); // returns 123
console.log(parseFloat("123.456abc")); // returns 123.456


/* math objects
round() - rounds a number to the nearest integer
ceil() - rounds a number up to the next largest integer

floor() - rounds a number down to the next smallest integer

min() - returns the smallest of zero or more numbers
max() - returns the largest of zero or more numbers

pow() - returns the value of a number raised to the power of another number

trunc() - returns the integer part of a number by removing any fractional digits
random() - returns a random number between 0 (inclusive) and 1 (exclusive)
 */


console.log(Math.round(4.7)); // returns 5
console.log(Math.ceil(4.2)); // returns 5
console.log(Math.floor(4.8)); // returns 4
console.log(Math.min(1, 2, 3)); // returns 1
console.log(Math.max(1, 2, 3)); // returns 3
console.log(Math.pow(2, 3)); // returns 8
console.log(Math.trunc(4.8)); // returns 4
console.log(Math.random()); // returns a random number between 0 and 1

/* string methods
length - returns the length of a string

charAt() - returns the character at a specified index
indexOf() - returns the index of the first occurrence of a specified value in a string

trim() - removes whitespace from both ends of a string

toUpperCase() - converts a string to uppercase letters
toLowerCase() - converts a string to lowercase letters

*/

let str = "Hello, World!";

console.log(str);

console.log(str.length);

console.log(str[0]); // returns 'H'
console.log(str.charAt(0)); // returns 'H'

console.log(str.indexOf("World")); // returns 7 according to the W

console.log(str.trim()); // removes whitespace from both ends of the string, returns 'Hello, World!'

console.log(str.toUpperCase()); // returns 'HELLO, WORLD!'
console.log(str.toLowerCase()); // returns 'hello, world!'

/*string methods
indexOf(value [necessary], start [optional] 0) - returns the index of the first occurrence of a specified value in a string
lastIndexOf(value [necessary], start [optional] 0) - returns the index of the last occurrence of a specified value in a string

slice() - extracts a section of a string and returns it as a new string

replace() - replaces a specified value with another value in a string

split() - splits a string into an array of substrings based on a specified separator
 */

let str2 = "Hello, World!";

console.log(str2.indexOf("o")); // returns 4
console.log(str2.lastIndexOf("o")); // returns 8

console.log(str2.slice(0, 5)); // returns 'Hello'
console.log(str2.replace("World", "JavaScript")); // returns 'Hello, JavaScript!'

console.log(str2.split(", ")); // returns ['Hello', 'World!']

/*Array methods
unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
push() - adds one or more elements to the end of an array and returns the new length of the array

shift() - removes the first element from an array and returns that removed element
pop() - removes the last element from an array and returns that removed element
*/

var arr = [1, 2, 3];

console.log(arr.unshift(0)); // returns 4, the new length of the array
console.log(arr); // returns [0, 1, 2, 3]   

console.log(arr.push(4)); // returns 5, the new length of the array
console.log(arr); // returns [0, 1, 2, 3, 4]

console.log(arr.shift()); // returns 0, the removed element
console.log(arr); // returns [1, 2, 3, 4]

console.log(arr.pop()); // returns 4, the removed element
console.log(arr); // returns [1, 2, 3]

/*Array methods [search]
indexOf(value [necessary], start [optional] 0) - returns the index of the first occurrence of a specified value in an array
lastIndexOf(value [necessary], start [optional] 0) - returns the index of the last occurrence of a specified value in an array
includes(value [necessary], start [optional] 0) - determines whether an array includes a certain value among its entries, returning true or false as appropriate
*/

let arr2 = [1, 2, 3, 4, 5];

console.log(arr2.indexOf(3)); // returns 2 == index of 3 in the array
console.log(arr2.lastIndexOf(3)); // returns 2 == index of 3 in the array
console.log(arr2.includes(3)); // returns true

/*Array methods [sorting]
sort() - sorts the elements of an array in place and returns the sorted array
reverse() - reverses the order of the elements in an array in place and returns the reversed array
*/

let arr3 = [3, 1, 4, 2, 5];

console.log(arr3.sort()); // returns [1, 2, 3, 4, 5]
console.log(arr3.reverse()); // returns [5, 4, 3, 2, 1]

/*Array methods [slicing]
slice(start [necessary], end [optional] array.length) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
splice(start [necessary], deleteCount [optional] 0, item1 [optional], item2 [optional], ...) - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
*/

let arr4 = [1, 2, 3, 4, 5];

console.log(arr4.slice(1, 4)); // returns [2, 3, 4]
console.log(arr4.splice(1, 2, 6, 7)); // removes 2 elements starting from index 1 and adds 6 and 7 in their place
console.log(arr4); // returns [1, 6, 7, 4, 5]

/*Array method [joining]
concat() - merges two or more arrays and returns a new array
join(separator [optional] & ',' is the default) - joins all elements of an array into a string and returns this string
 */

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6); // merges arr5 and arr6 into a new array

console.log(arr7); // returns [1, 2, 3, 4, 5, 6]
console.log(arr7.join(' - ')); // returns "1 - 2 - 3 - 4 - 5 - 6"




/*====== loops ======== */

//Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

for( let i=0;i<myAdmins.length;i++){

    document.write(`<div> The Admin For Team ${i+1} Is ${myAdmins[i]}</div>`);
    document.write(`<h3>Team Members:</h3>`);

    for(let j=0;j<myEmployees.length;j++){
        if(myEmployees[j][0] === myAdmins[i][0]){
            document.write(`<p>- ${myEmployees[j]}</p>`);
            document.write(`<hr>`);
        }
    }
}

/*======== Objects ========== */

let myVar ="country";

let user ={
    name: "Aya",
    age: 20,
    skills: ["html", "css", "js"], //arr
    avaliable: false,
     address: {
        ksa: "Riyadh",
        egypt: {
            city: "Cairo",
            street: "Nasr City",
        },
     },

     checkAvaliable: function()
     {
        if(this.avaliable === true){
            return "Free For Work";
        }

        else{
            return "Not Free For Work";
        }
     },
     doubleAge: function(){
        return this.age * 2;
     },

};

console.log(user.name); // returns "Aya"
console.log(user.age); // returns 20

console.log(user.skills.join(" - ")); // returns "html - css - js"
console.log(user.checkAvaliable()); // returns "Not Free For Work"

console.log(user.address.ksa); // returns "Riyadh"
console.log(user.address.egypt.city); // returns "Cairo"


let user2= new Object({
    age: 30,
});

console.log(user2.age); // returns 30

user2.age = 40; // change the age property
console.log(user2.age); // returns 40  


document.getElementById("cl").onclick = function()
{
    console.log(this); // returns the button element that was clicked
}


let myObj = 
{
    age: 30,
    ageInDays: function(){
        return this.age * 365;
    },
};

console.log(myObj.age); // returns 30
console.log(myObj.ageInDays()); // returns 10950



let obj =object.create(user); // creates a new object that inherits from the user object
console.log(obj.age); // returns 20
console.log(obj.doubleAge()); // returns 40


let obj1={
    prop1: 1,
    meth: function(){
        return this.prop1;
    },
};

let obj2={
    prop2: 2,
    meth: function(){
        return this.prop2;
    },
};

let targetObject ={
   prop1: 1,
   prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2); // merges obj1 and obj2 into targetObject
console.log(finalObject); // returns {prop1: 1, prop3: 3, prop2: 2, meth: ƒ}


/*========= DOM =========== */
/*
document.getElementById 

document.getElementsByClassName
document.getElementsByTagName

document.querySelector
document.querySelectorAll


console.log(document.title); // returns the title of the document
console.log(document.body); // returns the body element of the document

*/

let myElement =document.querySelector(".js"); // selects the first element with the class "js"

console.log(myElement.innerHTML); // returns the inner HTML of the element with the class "js" html file
console.log(myElement.textContent); // returns the text content of the element with the class "js" as it is in the html file

myElement.innerHTML = "Hello, World!"; // changes the inner HTML of the element with the class "js" to "Hello, World!"
myElement.textContent = "Hello, World!"; // changes the text content of the element with the class "js" to "Hello, World!"


document.images[0].src = "https://via.placeholder.com/150"; // changes the src attribute of the first image in the document to a placeholder image
document.images[0].alt = "Placeholder Image"; // changes the alt attribute of the first image in the document to "Placeholder Image"
document.images[0].title = "Placeholder Image"; // changes the title attribute of the first image in the document to "Placeholder Image"
document.images[0].id = "myImage"; // changes the id attribute of the first image in the document to "myImage"


let myLink = document.querySelector("a"); // selects the first anchor element in the document

console.log(myLink.getAttribute("class")); // returns the value of the class attribute of the first anchor element in the document
myLink.getAttribute("class");



let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("product One");
let myComment = document.createComment("this is div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);

// append text to element
myElement.appendChild(myText);

// append element to body 
document.body.appendChild(myElement);

// append comment to element
myElement.appendChild(myComment);

console.log(myElement);
console.log(myAttr);
console.log(myText);
console.log(myComment);



let myMainelement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("product Title");
let myParagraphText = document.createTextNode("product Description");


// add heading text
    myHeading.appendChild(myHeadingText);

// add heading to main element
    myMainElement.appendChild(myHeading);

//add paragraph text
    myParagraph.appendChild(myParagraphText);

//add paragraph to main element
    myMainElement.appendChild(myParagraph);

myMainelement.className = 'product';
document.body.appendChild(myMainElement);

/* ==== events =====
    onclick() 

    oncontextmenu --> on content text menu
    onmouseenter  --> on mouse enter
    onmouseleave  --> on mouse leave
*/

/*DOM [css] */

let ele =document.getElementById("myDiv");

ele.style.color = "red";
ele.style.fontWeight = "bold";

ele.style.cssText ="font-weight: bold; color: green;";

ele.style.removeProperty("color");
ele.style.setProperty("font-size" , "40px");

document.styleSheets[0].rules[0].style.removeProperty("font-size"); //rules ==> which is all the proparity in the css file



/*===== BOM --> Browser Object Model ======*/

/* setTimeout(function ,timeout, additional parameter)
   clearTimeout(identifier)
 */

function msg (user, age){
    console.log(`Hi ${user}!, your age is ${age} years old `);
}// 3000ms == 3seconds


//call the function by setTimeout method
// function name , time , parameter
let counter = setTimeout(msg , 2000 , "Aya", 20);


let btn = document.querySelector("button");

btn.onclick =function(){
    clearTimeout(counter);
};


let div =document.querySelector("div");


function countDown(){
    div.innerHTML -=1;
    if(div.innerHTML === '0')
    {
        clearInterval(counter);
    }
}

let counter2 = setInterval(countDown, 1000);

console.log(location);
console.log(location.href);

location.href="https://google.com";

console.log(location.host);
console.log(location.hostname);

console.log(location.protocol);

window.location.reload();

window.location.replace("https://elzero.org");

setTimeout(function(){
    window.open("https://elzero.org", "_blank", "width=400 , height=400");
}, 2000);


//window history object [you can use it without writing window keyword]

window.history.length; //how many pages you entered including the current one
history.back();
history.forward();
history.go(); // 1 == forword & -1 == backword

window.scrollTo({
    left: 500,
    top:200,
    behavior:"smooth"
});


window.onscroll= function(){
    if(window.scrollY >= 600){
        btn.style.display = "block";
    }

    else{
        btn.style.display = "none";
    }
}

// === local storage ===

//set
window.localStorage.setItem("color", "#f00");
window.localStorage.fontWeight = "bold";

//get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);

//remove one item 
window.localStorage.removeItem("color");

// remove all items
window.localStorage.clear();

//get key
console.log(window.localStorage.key(0));

//set color in page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage); //== object


//destructuring
let chosen =1;

let myFriends = [
{title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
{title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
{title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let sol =[
    {title: t1 ,age:ag1, available: v1, skills:[,s1] },
    {title: t2 ,age:ag2, available: v2, skills:[,s2] },
    {title: t3 ,age:ag3, available: v3, skills:[,s3] },
];


if(chosen === '1'){
    if(v1 == true){
        console.log(`Your name is ${t1}  you are available to work & your last skill is ${s1} `);
    }

    else{
        console.log(`Your name is ${t1}  you are not available to work & your last skill is ${s1} `);
    }
}

if(chosen === '2'){
    if(v2 == true){
        console.log(`Your name is ${t2}  you are available to work & your last skill is ${s2} `);
    }

    else{
        console.log(`Your name is ${t2}  you are not available to work & your last skill is ${s2} `);
    }
}

if(chosen === '3'){
    if(v3 == true){
        console.log(`Your name is ${t3}  you are available to work & your last skill is ${s3} `);
    }

    else{
        console.log(`Your name is ${t3}  you are not available to work & your last skill is ${s3} `);
    }
}

