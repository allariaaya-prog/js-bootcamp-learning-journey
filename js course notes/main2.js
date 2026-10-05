//=== set data type ===

let myData = [1,1,1,2,3,'A'];
let myUniqeData = new Set ([1,1,1,2,3,'A']); // or new Set(myData);

console.log(myData);

console.log(myUniqeData); //remove the doplicated elements
console.log(myUniqeData.size);


//set data type methods
myUniqeData = new Set().add(4).add(5);
myUniqeData.delete(5); // if you put it in the console it will give you true or false accourding to the arr 

console.log(myUniqeData); // 1 2 3 4 
console.log(myUniqeData.size);//==4

myUniqeData.clear(); // clear remove everything but delete remove one selected element

console.log(myUniqeData.has("A")); //true or false result
console.log(Array.from(myData)); //instade of making a new arr (uniqeData)

/*
=== Set vs WeakSet ===
        The WeakSet is weak,
        meaning-references-to-objects-in-a-WeakSet-are-held-weakly.
        If no other references to an object-stored in the WeakSet-exist,
        those objects-can-be-garbage collected.


        Set Can Store Any Data Values
        WeakSet => Collection Of Objects Only Set Have Size Property

        WeakSet => Does Not Have Size Property
        Set> Have Keys, Values, Entries

        WeakSet => Does Not Have clear, Keys, Values And Entries
        Set> Can Use forEach

        WeakSet => Cannot Use-forEach

        usage: store objects & remove them once they become inaccesible

*/


/*
=== Map Data Type ===
    Syntax: new Map (Iterable With Key/Value)
    Map-vs-Object
    Map > Does Not Contain Key By Default
    Object => Has Default Keys


    Map > Key Can Be Anything [Function, Object, Any Primitive Data Types
    Object => String Or Symbol =>

    Map => Ordered-By Insertion
    Object--> Not 100% Till-Now


    Map-> Get-Items-By-Size
    Object > Need To Do Manually


    Map > Can Be Directly Iterated
    Object => Not Directly And Need To Use Object.keys() And


    Map => Better Performance When Add Or Remove Data
*/

let myObject ={};
let myEmpty = Object.create(null);
let myMap = new Map();

let myNewObject ={
    10: "Number",
    "10": "String",
};

//set data by using new map -> using arr
let myNewMap = new Map([
    //[key , value]
    ["Name" , "Aya"],
    [false, "Boolean"],
]);

// set data 
myNewMap.set(10, "Number");
myNewMap.set("10", "String");

/*== all the data in this map object 
    Name => Aya
    false => Boolean
    10 => Number
    "10" => String 
 */

//get data by using the key
console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log(myMap.get(10));
console.log(myMap.get(false));

//map methods
console.log(myMap.size);

console.log(myMap.delete("Name")); //deleting with the key & by printing it it will give you true or false accourding to it exicity


//=== regular expresion ===

let tld = "com net org info code io";

//i=> to remove the sensivity;
//g=> for globility
let tldRe = /(org|info|io)/ig; 

console.log(tld.match(tldRe));

// range 
let nums = "12345678910";
let numsRe = /[0-9]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNumsRe = /[^0-9]/g;
console.log(nums.match(notNumsRe));

let specialNums = "1!2@3#45678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

// === Date & Time === 

let dateNow = new Date();

//time from 1970 in mille
console.log(Date.now());

//number in seconds
let seconds = Date.now() /1000; 
console.log(seconds);

//number of minutes
let minutes = seconds/60;
console.log(minutes);

/*
Date And Time
    getTime() > Number Of Milliseconds
    getDate() => Day Of The Month
    getFullYear()
    getMonth()-> Zero Based
    getDay()-> Day Of The Week
    getHours()
    getMinutes()
    getSeconds()
 */


let dNow = new Date();
let birthday = new Date("Oct 25, 88");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff /1000);

console.log(dNow);
console.log(dNow.getTime());
console.log(dNow.getDate());
console.log(dNow.getFullYear());
console.log(dNow.getMonth());
console.log(dNow.getDay()); //sun ==0 & so on 

/*
Date And Time
    setTime(Milliseconds)
    setDate() Day Of The Month [Negative And Positive]
    setFullYear(year, month Optional [0-11], day-Optional [1-31])
    setMonth (Month [9-11], Day Optional [1-31]) [Negative And Positive]
    setHours(Hours [08-23], Minutes Optional (0-59), Seconds Optional (8-59), RS > Optional (0-999])
    setMinutes(Minutes (0-59), Seconds Optional [0-59], MS Optional (0-9991)
    setSeconds(Seconds [0-59], MS Optional-[0-999])
*/


//==== JSON ===
const myJsonObject = {
  "string": "Hello, World!",
  "number": 42,
  "object": {
    "key1": "value1",
    "key2": "value2"
  },
  "array": [1, 2, 3, 4, 5],
  "boolean": true,
  "nullValue": null
};

const myJsonObject2 = `{
  "userName": "Aya",
  "age": 20
}`;

console.log(myJsonObject);
console.log(JSON.parse(myJsonObject2));

//change data
myJsonObject2["userName"] = "Aya2";
myJsonObject2["age"] = 21;

//convert to string
const myJsonString = JSON.stringify(myJsonObject2);
console.log(myJsonString);

/*
Synchronous
    Operations Runs in Sequence
    Each Operation Must Wait For The Previous One To Complete
    
Asynchronous
    Operations Runs In Parallel
    This Means That An Operation Can Occur while Another One Is Still Being Processed
*/

//Synchronous
console.log("1");
console.log("2");

//it can not continue the program until the alert is closed
alert("operation");

console.log("3");

//Asynchronous
console.log("1");
console.log("2");

/*it will continue the program without waiting for the alert
to be closed after 2 seconds it will print the operation */
setTimeout(() => console.log("operation"), 2000); 

console.log("3");

/*
Call Stack || Stack-Trace

    Javascript Engine Uses A Call Stack To Manage Execution Contexts

    Mechanism To Make The Interpreter Track Your Calls

    When Function Called It Added To The Stack

    When Function Executed It Removed From The Stack

    After Function Is Finished Executing The Interpreter Continue From The Last Point

    Work Using LIFO Principle Last In First Out

    Code Execution Is-Synchronous.

    Call Stack Detect Web API Methods And Leave It To The Browser To Handle It


Web API
    Methods Available From The Environment- Browser
 */


//=== AJAX ===
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
myRequest.send();

myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

        let jsData = JSON.parse(this.responseText);

        for(let i=0 ; i<jsData.length; i++){
            let div = document.createElement("div");
            let repoName = document.createTextNode(jsData[i].title);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
}


