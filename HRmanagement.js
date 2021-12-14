var toggle1  = document.getElementById("toggle1");
var content1 = document.getElementById("content1");

toggle1.addEventListener("click", function() {
  content1.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

var toggle  = document.getElementById("toggle2");
var content = document.getElementById("content2");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

var toggle3  = document.getElementById("toggle3");
var content3 = document.getElementById("content3");

toggle3.addEventListener("click", function() {
  content3.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});
