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
