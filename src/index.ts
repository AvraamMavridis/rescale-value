export default function meanNormalization(value : number, array : Array < number >) : number {
  if(typeof value !== "number"){
    throw Error('The 1st parameter should be a number');
  }

  if(!array){
    throw Error('The 2nd parameter should be an Array');
  }

  if(!array.length){
    throw Error('The 2nd parameter should not be an empty Array');
  }

  const sum = array.reduce((sum, b) => sum + b, 0);
  const avg = sum/array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);

  return (value - avg) / (max - min);
}