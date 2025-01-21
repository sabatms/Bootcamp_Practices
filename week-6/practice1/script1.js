function calculate1(a,b,operator){
    if(typeof a !== 'number' | typeof b !== 'number'){
        return 'invalid arguments'
    }

    switch (operator) {
        case '+':
        return a + b;

        case '-':
        return a-b;

        case '*':
        return a*b;

        case '/':
        return b !== 0 ? a / b : 'invalid arguments';
    
        default:
            return 'invalid arguments';
        
    }
}

console.log(calculate1 (2,3,'+'));
console.log(calculate1(2,3,'-'));
console.log(calculate1(2,0,'/'));
console.log(calculate1(2,4,'*'));