var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 800,
  debug: false 

});




////// grid ///////

// var size = 5;

// for(var x = 0; x < 900; x += size)
// {
//   for(var y = 0; y < 900; y += size)
//   {
//     r.ellipse(x+30, y, size, size)
//       .fill('f43d2f')
//       .stroke(false);
//      }
// }


///LINES////


// r.path(0, 0)
//   .lineTo(r.width/2, r.height/2)
//   .lineTo(10,0)
//   .fill('3d3078')
//   .stroke('3d3078');
//   .closePath();



// BLUE clouds /////

var noise = new Rune.Noise().noiseDetail(0.6);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(250,250);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(210, 210);
  
var noiseCircle1 = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('3d3078')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle1.lineTo(x, y);
  noiseStep += 0.23;
  }
}



/// WHITE cloud /////

var noise = new Rune.Noise().noiseDetail(0.6);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(200,210);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(110, 180);
  var x = Rune.random(100 + randomSize, r.width - 100 - randomSize);
  var y = Rune.random(100 + randomSize, r.height - 100 - randomSize);

var noiseCircle1 = r.polygon(r.width/2, r.height/2)

  .fill('e52b1f')
    .stroke('3d3078')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle1.lineTo(x, y);
  noiseStep += 0.23;
  }
}


   
//// B L U E - L A Y E R /////

var numPoints = 20;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(300, 300);
  var radius = Rune.random(250, 150);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('3d3078')
    .stroke('3d3078')
    .strokeWidth(7);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0, 0, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);

// Y E L L O W  - L A Y E R /////

var numPoints = 4;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(500, 800);
  var radius = Rune.random(350, 150);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('f7de3c')
    .stroke('3d3078')
    .strokeWidth(5);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0, 0, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);




//// W H I T E - L A Y E R /////

var numPoints = 7;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(10, 15);
  var radius = Rune.random(100, 500);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('ffffff')
    .stroke('3d3078')
    .strokeWidth(7);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0, 0, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);

//// R E D - L A Y E R /////

var numPoints = 10;
var pointDegree = 360 / numPoints;
var myPath = r.path(r.width/2, r.height/2);

var firstX;
var firstY;

for(var i = 0; i < numPoints; i++) {
  var actualDegree = (i * pointDegree) + Rune.random(-1, 6);
  var radius = Rune.random(200, 150);
  var x = Math.cos(Rune.radians(actualDegree)) * radius;
  var y = Math.sin(Rune.radians(actualDegree)) * 2*radius;

  if(i == 0) {
    myPath.moveTo(x, y)
    .fill('e52b1f')
    .stroke('3d3078')
    .strokeWidth(7);
    firstX = x;
    firstY = y;
  } else {
    myPath.curveTo(0, 0, x, y);  
  }
}

myPath.curveTo(0, 0, firstX, firstY);

/// YELLOW CLOUD /////

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(50,50);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(90, 20);


var noiseCircle = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('f7de3c')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.07;
  }
}

/// WHITE CLOUD /////

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 120;
var pointDegree = 360 / numPoints;
var radius = Rune.random(35,35);
var noiseStep = 0;

for (var j = 0; j < 1; j++){

  var randomSize = Rune.random(90, 20);

var noiseCircle = r.polygon(r.width/2, r.height/2)

  .stroke(false)
  .fill('FFFFFF')
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 70) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.07;
  }
}





r.draw();