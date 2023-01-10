function add(fristNum){
    return function (secondNum){
        return fristNum + secondNum ;
    }
}

let addWith = add(5);
console.log(addWith(2));
console.log(addWith(7));

// callBack Functions
// document.addEventListener("DOMContentLoaded",function(){
//     console.log("this function gets called back when");
// })

function callMeOnceDone(fn){
    console.log("I'm done");
    fn();
}

function printText(){
    console.log("Hello");
}
callMeOnceDone(printText);

function printTextWithDelay(text){
    setTimeout(function(){
        console.log(text);
    }, 3000);
}
printTextWithDelay("I'm printed with delay");