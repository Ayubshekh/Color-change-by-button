let div = document.querySelector("div");

 function demo() {
 
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r}, ${g}, ${b})`;
  div.style.background = color;
}

