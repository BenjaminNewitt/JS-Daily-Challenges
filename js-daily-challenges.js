// March 19, 2020
function timeForMilkAndCookies(date) {
  let month = date.getMonth();
  let day = date.getDate();

  if (month == 11 && day == 24) {
    return true;
  }
  return false;
}

//  March 20, 2020
function findPerimeter(height, width) {
  return height * 2 + width * 2;
}

// March 24, 2020
function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num1 == 0 || num2 == 0) {
        return "Can't divide by 0!";
      }
      return num1 / num2;
    default:
      break;
  }
}
