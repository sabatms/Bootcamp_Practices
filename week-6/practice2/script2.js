function isPrim1(number){
    if(typeof number !== 'number' ){
        return 'invalid argument';
    }

    if (number < 2 ){
        return false
    }

    for(let i = 2 ; i <= Math.sqrt(number) ; i++){
        if( number % 2 === 0){
            return false
        }
    }

    return true
}

console.log(isPrim1(2));

console.log(isPrim1(6));

console.log(isPrim1("true"))