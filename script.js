const lightColors = [
  "lightblue", "lightgreen", "lightpink", "lightyellow",
  "lavender", "honeydew", "mintcream", "aliceblue",
  "beige", "linen", "oldlace", "whitesmoke",
  "seashell", "lemonchiffon", "azure", "floralwhite"
];

let intervalId = null;

function changeColor() {
  const randomIndex = Math.floor(Math.random() * lightColors.length);
  document.body.style.backgroundColor = lightColors[randomIndex];

 
  document.body.classList.add("animate");

  
  setTimeout(() => {
    document.body.classList.remove("animate");
  }, 300);
}

function startAutoChange() {
  if (intervalId === null) {
    intervalId = setInterval(changeColor, 1000);
  }
}

function stopAutoChange() {
  clearInterval(intervalId);
  intervalId = null;
}
