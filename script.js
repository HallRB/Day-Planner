//SET THE CURRENT DATE AND TIME, ATTACHED TO HEADER//
        $(document).ready(function () {
  $("#idTimeNow").text(moment().format("Do MMMM YYYY, h:mm a"))
        });

        //SAVE AND RETURN TEXT FUNCTION TEMPLATE
//VAR X = TEXTAREA ELEMENT
//VAR Y = SAVE BUTTON ELEMENT
//ADD CLICK EVENT TO BUTTON, TRIGGERS FUNCTION
//GRABS INFORMATION FROM LOCALSTORAGE, PLACES IN TEXTAREA
//SAVE FUNCTION SETS TEXTAREA TEXT IN LOCAL STORAGE

var varTextArea1 = document.querySelector('.classTextArea1');
var varSaveButton1 = document.querySelector('.classSaveButton1');
varSaveButton1.addEventListener('click', functionUserEntry1);
varTextArea1.value = localStorage.getItem('content1');

function functionUserEntry1() {
    localStorage.setItem('content1', varTextArea1.value);
}

var varTextArea2 = document.querySelector('.classTextArea2');
var varSaveButton2 = document.querySelector('.classSaveButton2');
varSaveButton2.addEventListener('click', functionUserEntry2);
varTextArea2.value = localStorage.getItem('content2');

function functionUserEntry2() {
    localStorage.setItem('content2', varTextArea2.value);
}

var varTextArea3 = document.querySelector('.classTextArea3');
var varSaveButton3 = document.querySelector('.classSaveButton3');
varSaveButton3.addEventListener('click', functionUserEntry3);
varTextArea3.value = localStorage.getItem('content3');

function functionUserEntry3() {
    localStorage.setItem('content3', varTextArea3.value);
}
var varTextArea4 = document.querySelector('.classTextArea4');
var varSaveButton4 = document.querySelector('.classSaveButton4');
varSaveButton4.addEventListener('click', functionUserEntry4);
varTextArea4.value = localStorage.getItem('content4');

function functionUserEntry4() {
    localStorage.setItem('content4', varTextArea4.value);
}
var varTextArea5 = document.querySelector('.classTextArea5');
var varSaveButton5 = document.querySelector('.classSaveButton5');
varSaveButton5.addEventListener('click', functionUserEntry5);
varTextArea5.value = localStorage.getItem('content5');

function functionUserEntry5() {
    localStorage.setItem('content5', varTextArea5.value);
}
var varTextArea6 = document.querySelector('.classTextArea6');
var varSaveButton6 = document.querySelector('.classSaveButton6');
varSaveButton6.addEventListener('click', functionUserEntry6);
varTextArea6.value = localStorage.getItem('content6');

function functionUserEntry6() {
    localStorage.setItem('content6', varTextArea6.value);
}
var varTextArea7 = document.querySelector('.classTextArea7');
var varSaveButton7 = document.querySelector('.classSaveButton7');
varSaveButton7.addEventListener('click', functionUserEntry7);
varTextArea7.value = localStorage.getItem('content7');

function functionUserEntry7() {
    localStorage.setItem('content7', varTextArea7.value);
}
var varTextArea8 = document.querySelector('.classTextArea8');
var varSaveButton8 = document.querySelector('.classSaveButton8');
varSaveButton8.addEventListener('click', functionUserEntry8);
varTextArea8.value = localStorage.getItem('content8');

function functionUserEntry8() {
    localStorage.setItem('content8', varTextArea8.value);
}
var varTextArea9 = document.querySelector('.classTextArea9');
var varSaveButton9 = document.querySelector('.classSaveButton9');
varSaveButton9.addEventListener('click', functionUserEntry9);
varTextArea9.value = localStorage.getItem('content9');

function functionUserEntry9() {
    localStorage.setItem('content9', varTextArea9.value);
}

// //SAVE ALL BUTTON TBD//
// var omegaSave = document.querySelector('.omegaSaveButton')
// omegaSave.addEventListener('click', functionUserEntryOmega);


//
$(function() {
  
  var current_date = new Date();
  var hour = current_date.getHours();
  
  if(hour > 9) {
    $('.classTextArea1').addClass('past');
    
  } else {
    $('.classTextArea1').addClass('future');
  }
  if(hour > 10) {
    $('.classTextArea2').addClass('past');
  } else {
    $('.classTextArea2').addClass('future');
  }
  if(hour > 11) {
    $('.classTextArea3').addClass('past');
  } else {
    $('.classTextArea3').addClass('future');
  }
  if(hour > 12) {
    $('.classTextArea4').addClass('past');
  } else {
    $('.classTextArea4').addClass('future');
  }
  if(hour > 13) {
    $('.classTextArea5').addClass('past');
  } else {
    $('.classTextArea5').addClass('future');
  }
  if(hour > 14) {
    $('.classTextArea6').addClass('past');
  } else {
    $('.classTextArea6').addClass('future');
  }
  if(hour > 15) {
    $('.classTextArea7').addClass('past');
  } else {
    $('.classTextArea7').addClass('future');
  }
  if(hour > 16) {
    $('.classTextArea8').addClass('past');
  } else {
    $('.classTextArea8').addClass('future');
  }
  if(hour > 17) {
    $('.classTextArea9').addClass('past');
  } else {
    $('.classTextArea9').addClass('future');
  }
});
