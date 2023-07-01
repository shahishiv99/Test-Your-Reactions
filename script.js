let startTime = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function makeShape() {
  const genHeightWidth = Math.random() * 200 + 50;
  const genLeftTop = Math.random() * 500;
  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.left = genLeftTop + "px";
  document.getElementById("shape").style.top = genLeftTop + "px";
  document.getElementById("shape").style.height = genHeightWidth + "px";
  document.getElementById("shape").style.width = genHeightWidth + "px";
  document.getElementById("shape").style.display = "block";
  startTime = new Date().getTime();
}

function dly() {
  setTimeout(makeShape, 1000);
}

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  const endTime = new Date().getTime();
  timeTaken = (endTime - startTime) / 1000;
  document.getElementById("time").innerHTML = timeTaken + " s";
  dly();
};
