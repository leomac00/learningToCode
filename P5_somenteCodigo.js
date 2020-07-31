

//----------

// //Desenha uma malha de Bolinhas
// var offset = 0;
// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);
//   noStroke();

//   // desenha uma malha
//   for (var x = 0; x <= width; x += 50) {
//     for (var y = 0; y <= height; y += 50) {
//       fill(random(127), 0, random(127));
//       ellipse(x + offset, y, 25, 25);
//     }
//   }      
// }

//----------

// //Loops for e while
// function setup() {
//     createCanvas(600, 400);
//   }
  
//   function draw() {
//     background(0);
//     var x = 0;
  
//     //desenha bolinhas de golfe na horizontal
//     while (x <= 600) {
//       fill(255);
//       ellipse(x, height / 2, 50, 50);
//       x += 50;
//     }
  
//     //desenha bolinhas de golfe na vertical
//     for (var y = 0; y <= height; y += 50) {
//       fill(255, 255, 0);
//       ellipse(width / 2, y, 50, 50);
//       y += 50;
//     }
//   }

//----------

// // Interruptor de luz
// var lightSwitch = false

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {

//   if (lightSwitch) {
//     background(255);
//   } else {
//     background(0);
//   }

//   rectMode(CENTER);
//   noFill();
//   strokeWeight(4);
//   stroke(127);
//     rect(width / 2, height / 2, 100, 100)
// }

// function mousePressed() {
//   if (mouseX < 250 && mouseX > 150 && mouseY < 250 && mouseY > 150) {
//      lightSwitch = !lightSwitch
//   }
// }

//----------

// //AND e OR
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   // OR
//   if (width < mouseX || height < mouseY) {
//     fill(255, 0, 0)
//   }
  
//   // AND
//   // if (200 < mouseX && 200 < mouseY) {
//   //   fill(0, 255, 0)
//   // } 
  
  
//   else {
//     fill(0, 0, 255)
//   }
//   ellipse(width / 2, height / 2, 150, 150)
// }

//----------

// //Bola que quica
// var x = 0;
// var y = 0;
// var speedx = 10;
// var speedy = 10;


// function setup() {
//   createCanvas(600, 400);
//   x = random(0, width / 2);
//   y = random(0, height / 2);
//   //background(0);
// }


// function draw() {
//   background(0);
  
//   ellipseMode(CENTER);
//   noFill();
//   stroke(255);
//   strokeWeight(4);
//   ellipse(x, y, 50, 50);

//   //Quicada em X
//   if (x < 0) {
//     speedx = -speedx;
//   } else if (x > width) {
//     speedx = -speedx;
//   }
//   // Quicada em Y
//   if (y < 0) {
//     speedy = -speedy;
//   } else if (y > height) {
//     speedy = -speedy;
//   }
  
//   y = y + speedy;
//   x = x + speedx;
// }

//----------

// // Expressoes Booleanas: IF/ELSE
// function setup() {
//   createCanvas(600, 400);
// };

// function draw() {
//   background(0);
//   stroke(255);
//   strokeWeight(4);
//   noFill();

//   //Inicio do bloco IF
//   if (mouseX > 300) {
//     fill(200, 0, 200);
//   };
//   // Fim do bloco IF

//   ellipse(width / 2, height / 2, 150, 150);
// };

//----------

// // Shapes & Drawing
// // Code! Programming with p5.js
// // The Coding Train / Daniel Shiffman
// // https://thecodingtrain.com/beginners/p5js/1.3-shapes-and-drawing.html
// // https://youtu.be/c3TeLi6Ns1E
// // https://editor.p5js.org/codingtrain/sketches/HJ1WjEPwQ

// function setup() {
//     createCanvas(400, 300);
//   }
  
//   function draw() {
//     background(220, 0, 200);
  
//     line(0, 50, 400, 300);
//     rectMode(CENTER);
//     rect(200, 150, 150, 150);
  
//   }