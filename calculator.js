// Initialise variables 
let no1; // Variable for the first number element
let no2; // Variable for the second number element
let outStr; // Variable to output the equation and subsequent answer
let answer = 0; // Variable to store the outcome of the mathematical equation


// Create a function to store the addition operation
function addValues(){
    // Parse both of the elements retrieved by their ids from the labels in the html to integers
    // To allow mathematical operation
    no1 = parseInt(document.getElementById("n1").value);
    no2 = parseInt(document.getElementById("n2").value);
    // If the values are not numbers, the input is invalid / validation of input
    if(isNaN(no1) || isNaN(no2)){
        outStr = "Input not valid.";
    }// End if
    else{
        // Mathematical operation for the addition of two numbers
        answer = no1+no2;
        outStr = `${no1} + ${no2} = ${answer}`;
    }// End else
    // Write the output of the mathematical operation (addition) to the HTML page
    document.getElementById("answer").innerHTML = outStr;
}// End addValues()

function subtractValues(){
    no1 = parseInt(document.getElementById("n1").value);
    no2 = parseInt(document.getElementById("n2").value);
    if(isNaN(no1) || isNaN(no2)){
        outStr = "Input not valid.";
    }// End if
    else{
        answer = no1-no2;
        outStr = `${no1} - ${no2} = ${answer}`;
    }// End else
    document.getElementById("answer").innerHTML = outStr;
}// End subtractValues()

function multiplyValues(){
    no1 = parseInt(document.getElementById("n1").value);
    no2 = parseInt(document.getElementById("n2").value);
    if(isNaN(no1) || isNaN(no2)){
        outStr = "Input not valid.";
    }// End if
    else{
        answer = no1*no2;
        outStr = `${no1} * ${no2} = ${answer}`;
    }// End else
    document.getElementById("answer").innerHTML = outStr;
}// End multiplyValues()

function divideValues(){
    no1 = parseInt(document.getElementById("n1").value);
    no2 = parseInt(document.getElementById("n2").value);
    if(isNaN(no1) || isNaN(no2)){
        outStr = "Input not valid.";
    }// End if
    else{
        // Divide the first number by the second number
        answer = no1/no2;
        // And round as there is functionality to calculate and display the remainder from division
        answer = Math.round(answer);
        outStr = `${no1} / ${no2} = ${answer}`;
    }// End else
    document.getElementById("answer").innerHTML = outStr;
}// End divideValues()

function getRemainder(){
    no1 = parseInt(document.getElementById("n1").value);
    no2 = parseInt(document.getElementById("n2").value);
    if(isNaN(no1) || isNaN(no2)){
        outStr = "Input not valid.";
    }// End if
    else{
        // Get the modulus (remainder) of the division of the two numbers
        answer = no1%no2;
        Math.round(answer);
        outStr = `The remainder of: ${no1} / ${no2} is: ${answer}`;
    }// End else
    document.getElementById("answer").innerHTML = outStr;
}// End getRemainder()

// Declare variables to capture the button and add event listeners to each 
// Respective button, declared at end of script to solve error of button being null
const addBtn = document.getElementById("aBtn");
addBtn.addEventListener('click', addValues);

const subBtn = document.getElementById("sBtn");
subBtn.addEventListener('click', subtractValues);

const multiBtn = document.getElementById("mBtn");
multiBtn.addEventListener('click', multiplyValues);

const divBtn = document.getElementById("dBtn");
divBtn.addEventListener('click', divideValues);

const remBtn = document.getElementById("rBtn");
remBtn.addEventListener('click', getRemainder);

