// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks;
  if (distance === 34) {
    blocks = 8;
  } else {
    blocks = distance - 42;
  }
  
  return blocks;
}

function distanceFromHqInFeet(distance) {
  
}





distanceFromHqInFeet()
returns a distance in feet ‣
ReferenceError: distanceFromHqInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:20:7)expect(distanceFromHqInFeet(43)).to.equal(264);
returns a distance in feet ‣
ReferenceError: distanceFromHqInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:24:7)expect(distanceFromHqInFeet(50)).to.equal(2112);
calculates distances below 42nd street ‣
ReferenceError: distanceFromHqInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:28:7)expect(distanceFromHqInFeet(34)).to.equal(2112);




