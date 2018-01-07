let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");
let outputReversal = document.getElementById("outputR");
let outputAlphabits = document.getElementById("outputA");
let outputPalindrome = document.getElementById("outputP");

const getInput = () => {
    if (isNaN(input.value) === false){
        return alert("Words only please!");
    } else {
    return output.innerHTML = input.value;
    }    
};

button.addEventListener("click", getInput);

button.addEventListener("click", function reversal() {
    return outputReversal.innerHTML = input.value.split("").reverse().join("");
     } )

 button.addEventListener("click",   function alphabits() {
        return outputAlphabits.innerHTML = input.value.split("").sort().join("");
    });
    
button.addEventListener ("click", function palindrome() {
        if (output.innerHTML === outputReversal.innerHTML){
            outputPalindrome.innerHTML = "Your string is a palindrome!"
        } else {
            outputPalindrome.innerHTML = "";
        }
    
    });
    
