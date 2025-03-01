function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}
document.getElementById("theme").addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});
