"use strict";

const $ = function(selector) {               // the $ function
    return document.querySelector(selector);
}

const validate = function() {
    const name = $("#name");
    const contact = $("#contact");
    const txtmsg = $("#text_msg");
    const business = $("#business");
    const email = $("#email");
    const form = document.getElementById('hire_form')
    let isValid = true;                      // set default value 
 
    if (name.value == '') { 
        name.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        name.nextElementSibling.textContent = '';;
    } 

    if (contact.value == '') { 
        contact.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        contact.nextElementSibling.textContent = '';
    }

    if (txtmsg.value == '') { 
        txtmsg.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        txtmsg.nextElementSibling.textContent = '';
    }

    if (business == '') { 
        business.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        business.nextElementSibling.textContent = '';
    }

    if (email == '') { 
        email.nextElementSibling.textContent = 'This field is required.';
        isValid = false;                     // set valid flag to off
    } else {
        email.nextElementSibling.textContent = '';
    }

    if (isValid == true) {
        form.submit()
      }
};

const test = () =>{
    document.getElementById('help').click(function (){
        localStorage.setItem("email",$("#email").value)
        localStorage.getItem("email",$("#email").value)
        console.log("heheheheheh")
    })
    confirm("are you sure the information is correct?")
    alert("Thank you for subscribing to our list.")
} 


function resetForm() {
    $("#hire_form").reset();
    $("#name").nextElementSibling.textContent = "*";
    $("#contact").nextElementSibling.textContent = "*";
    $("#text_msg").nextElementSibling.textContent = "*";
    $("#business").nextElementSibling.textContent = "*";
    $("#email").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $('#help').addEventListener('click', validate);
    $('#help').addEventListener('click',test);
    $('#clear').addEventListener('click', resetForm);
    $('#email').focus();
});