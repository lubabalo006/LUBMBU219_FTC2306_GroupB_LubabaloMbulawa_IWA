// scripts.js

const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const result = [];
  

  const first = data.lists.find(list => list[0] === 'first')[1];
  const second = data.lists.find(list => list[0] === 'second')[1];
  const third = data.lists.find(list => list[0] === 'third')[1];
  
  
  
  const extractBiggest = () => {

    const lastValues = [
        first[first.length - 1] || 0, 
        second[second.length - 1] || 0,
        third[third.length - 1] || 0
        ];

    const newResult = parseInt(Math.max(...lastValues));
    
    if (first[first.length - 1] === newResult) {
        first.pop()
    }else if (second[second.length - 1] === newResult) {
        second.pop()
    }else if (third[third.length - 1] === newResult) {
        third.pop()
    }
  
    return newResult
}
    
    
  
  result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
