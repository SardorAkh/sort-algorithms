// export const selectSort = (arr) => {
//   for(let i = 0; i < arr.length; i++) {
//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[i] > arr[k]) {
//         let temp = arr[k];
//         arr[k] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//
//   return arr;
// }
//
// export const quickSort = (arr) => {
//   if(arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[0];
//
//   const less = [];
//   const greater = [];
//
//   for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > pivot) {
//       greater.push(arr[i])
//     }
//     else if (arr[i] <= pivot) {
//       less.push(arr[i])
//     }
//   }
//   return [...quickSort(less),pivot,...quickSort(greater)];
// }

let ELEMENTS = new Map();
let elementsQuantity = 5;
for (let i = 0; i < elementsQuantity; i++) {
  let number = Math.floor(Math.random() * elementsQuantity);
  ELEMENTS.set(i,{
    "number": number
  });
}
function sort(list) {
  for(let i = 0; i < list.size; i++) {
    for(let k = i + 1; k < list.size; k++) {

      if(list.get(i).number > list.get(k).number) {
        let temp = list.get(i);
        list.set(i,list.get(k));
        list.set(k,temp);
      }
    }
  }
  return list
}
console.table(ELEMENTS)
ELEMENTS = sort(ELEMENTS)
console.table(ELEMENTS)
