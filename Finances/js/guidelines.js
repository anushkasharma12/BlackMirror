"use strict";

const $ = function(selector) {               // the $ function
    return document.querySelector(selector);
}
 
const new_test = () => {
let today= new date();
console.log(today);
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var datetime = date +' '+ time;
document.getElementById('current_time').innerHTML = "time:"+datetime;
};

document.addEventListener("DOMContentLoaded", () => {
    $('#current_time').addEventListener('mouseover',new_test)
    window.onload = (event) => {
        incrementCount();
    }
});

var counter_list = [10,100,100];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var counter_inner = document.getElementById("counter_inner");

function incrementCount(current_count){
  setInterval(function(){
    // clear count
    while (counter_inner.hasChildNodes()) {
        counter_inner.removeChild(counter_inner.lastChild);
    }
    str_counter_0++;
    if (str_counter_0 > 99) {
      str_counter_0 = 10; // reset count
      str_counter_1++;    // increase next count
    }
    if(str_counter_1>999){
      str_counter_2++;
    }
    display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
    for (var i = 0; i < display_str.length; i++) {
      var new_span = document.createElement('span');
      new_span.className = 'num_tiles';
      new_span.innerText = display_str[i];
      counter_inner.appendChild(new_span);
    }
  },3000);
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });
