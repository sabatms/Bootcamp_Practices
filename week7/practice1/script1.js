const numbers = [5, 12, 8, 130, 44];

const sortDescending = [...numbers].sort(( a, b) => b-a);
console.log("ارایه به صورت نزولی : " , sortDescending );

const lessThan30 = numbers.filter(num1 => num1 < 30);
console.log("محاسبه اعدا کمتر از 30 :" , lessThan30);

const sumOfallnumbers = numbers.reduce((sum,num) => sum + num , 0);
console.log('Numbers جمع تمام ارایه های داخل :' , sumOfallnumbers);

const stringifNumber = numbers.map(num => num.toString());
console.log('تبدیل عناصر به رشته :' , stringifNumber);

const subtractedByIndex = numbers.map((num, index) => num - index);
console.log('index کم شدن مقادیر از :' , subtractedByIndex);