
function myFunction() {

  let x = document.getElementById("numb").value;
  //validation for the customer input.
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Thank you for your feedback.";
  }
  document.getElementById("rating").innerHTML = text;
}


document.write(Date());