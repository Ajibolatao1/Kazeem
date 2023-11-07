const object = document.getElementById("movingObject");
const container = document.querySelector(".movingObjectcontainer");

const speedX = 2; // Adjust speed as needed
const speedY = 2;
const amplitudeX = 100; // Adjust bounce amplitude as needed
const amplitudeY = 100;

let x = container.clientWidth / 2 - object.clientWidth / 2;
let y = container.clientHeight / 2 - object.clientHeight / 2;
let directionX = 1;
let directionY = 1;

function animate() {
  x += speedX * directionX;
  y += speedY * directionY;

  if (x < 0 || x > container.clientWidth - object.clientWidth) {
    directionX *= -1;
    x += amplitudeX * directionX;
  }

  if (y < 0 || y > container.clientHeight - object.clientHeight) {
    directionY *= -1;
    y += amplitudeY * directionY;
  }

  object.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animate);
}

animate();
