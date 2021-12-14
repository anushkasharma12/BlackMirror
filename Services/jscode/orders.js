alert("Thank you For choosing HEADSTRAT.");
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Order Taken");
});