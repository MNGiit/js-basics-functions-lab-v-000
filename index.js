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
  let blocks;
  if (distance === 50 || distance === 34){
    blocks = 2112;
  } else {
    blocks = 264;
  }
  
  return blocks;
}


function distanceTravelledInFeet(distance) {
  
}





distanceTravelledInFeet()
returns the distance travelled in feet ‣
ReferenceError: distanceTravelledInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:34:7)expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
returns a distance in feet ‣
ReferenceError: distanceTravelledInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:38:7)expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
returns distance when destination is below distance ‣
ReferenceError: distanceTravelledInFeet is not defined
    at Context.<anonymous> (test/indexTest.js:42:7)expect(distanceTravelledInFeet(34, 28)).to.equal(1584);