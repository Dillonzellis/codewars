function makeNegative(num) {
  if (num > 0) {
    const doubleNum = num * 2;
    const newNum = num - doubleNum;
    return newNum;
  } else {
    return num;
  }
}

console.log(makeNegative(-10));
