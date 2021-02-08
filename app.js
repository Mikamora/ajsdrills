name = "Michael"
var name;
console.log(name);

setName();
function setName(){
    var name = "Michael";
    console.log(name);
}

console.log("1");
let avg = findAvg(2,2);
console.log("2", avg);
function findAvg(a,b){
    console.log("3");
    var answer = (a + b) / 2;
    return answer;
}

//scoping


let fruits = ["apple", "orange", "banana"];


function pickFruit(){
     let favFruit = "banana";
    console.log(fruits[0]);
    function printfruit(){
        console.log(favFruit);
        let leastFav = fruits[0];
    }
    printfruit();
}

pickFruit();
someFunc();
function someFunc(){
    console.log("hello, Michael");
}
let frjjjj = function(){
    alert("hi");
}
frjjjj();