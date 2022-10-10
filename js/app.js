var menuButton = document.querySelector(".menu").addEventListener("click", menu);

function menu() {
  var links = document.querySelector(".links");

  if(links.style.opacity === "1") {
    links.style.opacity = "0";
  } else {
    links.style.opacity = "1";
  }
}