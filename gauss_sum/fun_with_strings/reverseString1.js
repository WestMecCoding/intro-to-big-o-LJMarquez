// init var someStr

// func takes arg `str`

// in function reverse str

// return str

// log function

let someStr = "Morshu";

function reverseString(str) {
    str = str.split("").reverse().join("");
    return str
    
    // return str.split("").reverse().join("");
}

console.log(reverseString(someStr));