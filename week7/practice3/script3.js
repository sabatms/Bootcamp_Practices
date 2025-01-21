function getRandomInt(min , max){
    const random1 = Math.random();
    const random2 = random1 * (max - min + 1);
    const random3 = Math.floor(random2) + min ;
    return random3
}

console.log(getRandomInt(1,10));
console.log(getRandomInt (6,20));