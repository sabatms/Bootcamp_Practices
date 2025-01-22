function getElement(array, index) {
    try {

      if(!Array.isArray(array)){
        throw new TypeError('The First Argument must be an array');
    }

      if (typeof index !== 'number'){
        throw new TypeError('The Second Argument is the number');
      }

      if( index >= array.length || index < 0){
        throw new RangeError('Index out of bounds');
      }

      return array[index];
    } catch (error) {
  
        return error.message;
    }
  }
  
  let arr = [1, 2, 3, 4, 5];
  console.log(getElement(arr, 2)); // 3
  console.log(getElement(arr, 10)); // RangeError: Index out of bounds
  console.log(getElement(arr, 'two')); // TypeError: Second argument must be a number
  console.log(getElement('not an array', 2)); // TypeError: First argument must be an array
  