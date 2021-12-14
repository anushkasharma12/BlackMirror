"use strict";

const $ = function(selector) {               // the $ function
    return document.querySelector(selector);
}

const validate = function() {
    const tenure = $("#Tenure");
    const amount = $("#amount");
    const dash = $("#dash");
    const email = $('#email')
    const invest_type = $("#toi");
    const form = document.getElementById('investment_calculator')
    let isValid = true;                      // set default value 
 
    if (tenure.value == '') { 
        tenure.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        tenure.nextElementSibling.textContent = '';;
    } 

    if (amount.value == '') { 
        amount.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        amount.nextElementSibling.textContent = '';
    }

    if (invest_type.value == '') { 
        invest_type.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        invest_type.nextElementSibling.textContent = '';
    }

    if (dash == '') { 
        dash.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        dash.nextElementSibling.textContent = '';
    }

    if (isValid == true) {
        form.submit()
      }
};

const test = () =>{
    confirm("are you sure the information is correct?")
    alert("You will recieve an email with all information soon.")
}

const storing = () =>{
        localStorage.setItem("email",email.value)
        localStorage.getItem("email",email.value)
}

function resetForm() {
    $("#investment_calculator").reset();
    $("#Tenure").nextElementSibling.textContent = "*";
    $("#amount").nextElementSibling.textContent = "*";
    $("#toi").nextElementSibling.textContent = "*";
    $("#dash").nextElementSibling.textContent = "*";
    $("#email").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $('#find').addEventListener('click', validate);
    $('#find').addEventListener('click',test);
    $('#find').addEventListener('click',storing);
    $('#clear').addEventListener('click', resetForm);
    $('#email').focus();
});