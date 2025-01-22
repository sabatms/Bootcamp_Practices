function countOccurrences(arr) {
  const map = new Map();
 
  for (const item of arr) {
    if(map.has(item)){
     map.set(item, map.get(item) +1 );
    } else{
      map.set(item,1)
    }
  }
 return map;
}
   
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const result = countOccurrences(items);
console.log(result);
   