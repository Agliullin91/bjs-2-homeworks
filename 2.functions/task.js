function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let summa = 0;
  for (let i=0;i<arr.length;i=i+1) {
    summa = summa + arr[i];
    if (arr[i]<min) {
      min = arr[i]
    };
    if (arr[i]>max) {
      max = arr[i]
    };
  };
  let avg = summa / arr.length
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0
  }
  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0;i<arr.length;i=i+1) {
    if (arr[i]%2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i]
    };
  };
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i=0;i<arr.length;i=i+1) {
    if (arr[i]%2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i=0;i<arrOfArr.length;i=i+1) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    };
  };
  return maxWorkerResult
}
