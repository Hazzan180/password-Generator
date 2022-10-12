//Created By Hazzan

//getting all the html element we need
var input = document.querySelector("#myInput");
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");


//creating an array 
var hex  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C",
"D", "E", "F"];

//Generate button 
generate.addEventListener("click", () => {
    var rand = " ";
    for(let i = 0; i < 10; i++){
        rand +=  hex[ getRandomNumber()];
    }

    //changing the size of the value 
    input.style.fontSize = "20px"

    //sending the Generate value to input filed 
    input.value = rand
});

//creating a function that get Random Number and letter from the array
function getRandomNumber(){
    return  Math.floor(Math.random() * hex.length);
};

//copy button
copy.addEventListener("click", () => {

    // Select the text field
   input.select();
   input.setSelectionRange(0, 99999); 
   //document.execCommand("copy")
   navigator.clipboard.writeText(input.value);

   let tooltiptext = document.querySelector(".tooltiptext");
    tooltiptext.innerHTML = "Copied";
});


//Created By Hazzan