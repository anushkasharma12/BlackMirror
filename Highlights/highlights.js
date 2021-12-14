const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  const name = $('#name');
  const website = $('#website');
  const province = $('#province');
  const terms = $('#terms');


  let isValid = true;
  if (name.value == '') {
    name.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    name.nextElementSibling.textContent = '';
  }

  if (website.value == '') {
    website.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else {
    website.nextElementSibling.textContent = '';
  }

  if (province.value == '') {
    province.nextElementSibling.textContent = 'Please select a province.';
    isValid = false;
  } else {
    $('#province').nextElementSibling.textContent = '';
  }

  if (terms.checked == false) {
    terms.nextElementSibling.textContent = 'Must agree to terms and conditions.';
    isValid = false;
  } else {
    terms.nextElementSibling.textContent = '';
  }


  if (isValid == true) {
    $('form').submit();
  }
};

const resetForm = () => {
  $('form').reset();
  $('#name').nextElementSibling.textContent = '*';
  $('#website').nextElementSibling.textContent = '*';
  $('#province').nextElementSibling.textContent = '*';
  $('#terms').nextElementSibling.textContent = '*';
  $('#name').focus();
};

document.addEventListener('DOMContentLoaded', () => {
  $('#register').addEventListener('click', processEntries);
  $('#reset_form').addEventListener('click', resetForm);
  $('#name').focus();
});