export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Use const here since newArray will not be reassigned
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
