"use strict";



function calculateTime() {
  let result = [];
  let date = new Date(1939, 0, 1);
  let now = new Date();
  result.push(Math.floor(-(date.getYear() - now.getYear()) / 7));
  result.push(Math.floor(-(date.getMonth() - now.getMonth())/ 7));
  result.push(Math.floor( -(date.getDate() - now.getDate())/7));
  return result;
}

calculateTime()
module.exports.calculateTime = calculateTime;
