// Time Conversion Question
function timeConversion(s) {
  let [hours, minutes, seconds] = s.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (seconds.includes("PM")) {
    hours = parseInt(hours, 10) + 12;
  }

  if (seconds.includes("PM") || seconds.includes("AM")) {
    seconds = seconds.slice(0, 2);
  }
  return hours + ":" + minutes + ":" + seconds;
}

// PlusMinus Question
function plusMinus(arr) {
  if (arr.length <= 1) return;

  const counter = {
    positive: 0,
    negative: 0,
    zeros: 0,
  };

  for (let num of arr) {
    if (typeof num !== "number") return;
    if (num > 0) counter.positive = counter.positive + 1;
    if (num < 0) counter.negative = counter.negative + 1;
    if (num === 0) counter.zeros = counter.zeros + 1;
  }

  for (let item in counter) {
    console.log((counter[item] / arr.length).toFixed(4));
  }
}


// minMaxSum

function miniMaxSum(arr) {
  // Write your code here
  const total = [];
  for (let i = 0; i < arr.length; ++i) {
    let initVal = arr[i];
    const sum = arr.reduce((prev, current) => prev + current, -initVal);
    total.push(sum);
  }
  const min = Math.min(...total);
  const max = Math.max(...total);

  console.log(min, max);
}

// Lonely Integer

function lonelyinteger(a) {
  // Write your code here
  let record = {};
  let maxItem;
  for (let item of a) {
    if (!record[item]) {
      record[item] = 0;
    }
    record[item] = record[item] + 1;
  }

  for (let item in record) {
    if (record[item] === 1) {
      maxItem = item;
    }
  }

  return maxItem;
}

// Diagonal Difference

function diagonalDifference(arr) {
  // Write your code here
  let left = 0;
  let right = 0;

  for (let i = 0, j = arr[0].length - 1; i < arr[0].length; i++, j--) {
    left += arr[i][i];
    right += arr[i][j];
  }
  return Math.abs(right - left);
}


// Counting Sort
function countingSort(arr) {
    // Write your code here
    // Create count array
    const newArr = [];
    
    // Create For loop to create array full of zeros for the length of the arr
    for(let i = 0; i < arr.length; ++i) {
        newArr.push(0);
    } 
    // Create For loop to count how many times the number appears within it's respective index
    for(let val of arr) {
        //Logic within for loop
        //  value is the index of the arr
        newArr[val] = newArr[val] + 1;
        //  at index of the arr, add if
    }
    return newArr.length > 100 ? newArr.slice(0, 100) : newArr;
}

function flatten(arr) {
  const flattened = arr.reduce((acc, item) => {
    if(Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc = [...acc,item]
    }
    return acc;
  }, [])
  return flattened;
}

console.log(flatten([1, 2, 3,[4, 5, 6,[7,[8]]]]));

