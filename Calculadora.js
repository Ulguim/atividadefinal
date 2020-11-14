function sum() {
    let a = parseFloat(lines.shift());
    let b = parseFloat(lines.shift());
    let result = a + b;
    console.log(result);
}


function sub() {
    let a = parseFloat(lines.shift());
    let b = parseFloat(lines.shift());
    let result = a - b;
    console.log(result);
}

function mult() {
    //TODO: Implementar multiplicação
}

function div() {
    let a = parseFloat(lines.shift());
    let b = parseFloat(lines.shift());
    let result = a / b;
    console.log(result);
}