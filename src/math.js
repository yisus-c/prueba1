// Math= {};
function add(x1, x2){
    return x1+ x2;
}

function substract(x1, x2){
    return x1- x2;
}

function multiply(x1, x2){
    return x1* x2;
}

function dividir(x1, x2){
    if(x2==0){
        console.log("No se puede dividir por 0");
    }       
    else{
        return x1 / x2;
    }
}

/*
Math.add = add;
Math.substract = substract;
Math.mutiply = multiply;
Math.dividir = dividir;

mudule.exports=Math;
*/
exports.add = add;
exports.substract = substract;
exports.multiply= multiply;
exports.dividir = dividir;