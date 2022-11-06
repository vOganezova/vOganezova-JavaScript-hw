//seventh task

let sum = 0;

function addition(){
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > 0){
           sum += arguments[i];
        }
    }
}

addition(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

console.log(sum);