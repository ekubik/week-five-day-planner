var currentDate = document.getElementById("currentDay");
currentDate.textContent = moment().format("dddd, MMMM Do YYYY");
var timeBlocksAll = document.querySelectorAll(".textarea");

var saveButtonNine = document.getElementById("button-9");
var saveButtonTen = document.getElementById("button-10");
var saveButtonEleven = document.getElementById("button-11");
var saveButtonTwelve = document.getElementById("button-12");
var saveButtonOne = document.getElementById("button-1");
var saveButtonTwo = document.getElementById("button-2");
var saveButtonThree = document.getElementById("button-3");
var saveButtonFour = document.getElementById("button-4");
var saveButtonFive = document.getElementById("button-5");
var textArea9AM = document.getElementById("nine-am");
var textArea10AM = document.getElementById("ten-am");
var textArea11AM = document.getElementById("eleven-am");
var textArea12PM = document.getElementById("twelve-pm");
var textArea1PM = document.getElementById("one-pm");
var textArea2PM = document.getElementById("two-pm");
var textArea3PM = document.getElementById("three-pm");
var textArea4PM = document.getElementById("four-pm");
var textArea5PM = document.getElementById("five-pm");
var eventsNine = textArea9AM.value;
var eventsTen = textArea10AM.value;
var eventsEleven = textArea11AM.value;
var eventsTwelve = textArea12PM.value;
var eventsOne = textArea1PM.value;
var eventsTwo = textArea2PM.value;
var eventsThree = textArea3PM.value;
var eventsFour = textArea4PM.value;
var eventsFive = textArea5PM.value;

var currentHour = moment().format("H");

function changeBackgroundColour() {
  if (currentHour >= 0 && currentHour < 9) {
    $("textarea").addClass("future");
  } else if (currentHour === "9") {
    $(textArea9AM).addClass("present");
    $("textarea:not(#nine-am)").addClass("future");
  } else if (currentHour === "10") {
    $(textArea9AM).addClass("past");
    $(textArea10AM).addClass("present");
    $("textarea:not(#nine-am):not(#ten-am").addClass("future");
  } else if (currentHour === "11") {
    $(textArea9AM).addClass("past");
    $(textArea10AM).addClass("past");
    $(textArea11AM).addClass("present");
    $("textarea:not(#nine-am):not(#ten-am):not(#eleven-am").addClass("future");
  } else if (currentHour === "12") {
    $(textArea9AM).addClass("past");
    $(textArea10AM).addClass("past");
    $(textArea11AM).addClass("past");
    $(textArea12PM).addClass("present");
    $(
      "textarea:not(#nine-am):not(#ten-am):not(#eleven-am):not(#twelve-pm"
    ).addClass("future");
  } else if (currentHour === "13") {
    $(textArea9AM).addClass("past");
    $(textArea10AM).addClass("past");
    $(textArea11AM).addClass("past");
    $(textArea12PM).addClass("past");
    $(textArea1PM).addClass("present");
    $(
      "textarea:not(#nine-am):not(#ten-am):not(#eleven-am):not(#twelve-pm):not(#one-pm)"
    ).addClass("future");
  } else if (currentHour === "14") {
    $("textarea:not(#three-pm):not(#four-pm):not(#five-pm)").addClass("past");
    $(textArea2PM).addClass("present");
    $(textArea3PM).addClass("future");
    $(textArea4PM).addClass("future");
    $(textArea5PM).addClass("future");
  } else if (currentHour === "15") {
    $(textArea3PM).addClass("present");
    $(textArea4PM).addClass("future");
    $(textArea5PM).addClass("future");
    $("textarea:not(#three-pm):not(#four-pm):not(#five-pm)").addClass("past");
  } else if (currentHour === "16") {
    $(textArea4PM).addClass("present");
    $(textArea5PM).addClass("future");
    $("textarea:not(#four-pm):not(#five-pm)").addClass("past");
  } else if (currentHour === "17") {
    $(textArea5PM).addClass("present");
    $("textarea:not(#five-pm)").addClass("past");
  } else if (currentHour >= "18") {
    $("textarea").addClass("past");
    // } else if (currentHour >= 0 && currentHour < 9) {
    //  $("textarea").addClass("future");
  }
}

changeBackgroundColour();

saveButtonNine.addEventListener("click", function () {
  var eventsNine = textArea9AM.value;
  localStorage.setItem("hourlyEventNine", eventsNine);
  console.log(eventsNine);
});

function displayNineAm() {
  textArea9AM.innerText = localStorage.getItem("hourlyEventNine");
}

saveButtonTen.addEventListener("click", function () {
  var eventsTen = textArea10AM.value;
  localStorage.setItem("hourlyEventTen", eventsTen);
  console.log(eventsTen);
});

function displayTenAm() {
  textArea10AM.innerText = localStorage.getItem("hourlyEventTen");
}

saveButtonEleven.addEventListener("click", function () {
  var eventsEleven = textArea11AM.value;
  localStorage.setItem("hourlyEventEleven", eventsEleven);
  console.log(eventsEleven);
});

function displayElevenAm() {
  textArea11AM.innerText = localStorage.getItem("hourlyEventEleven");
}

saveButtonTwelve.addEventListener("click", function () {
  var eventsTwelve = textArea12PM.value;
  localStorage.setItem("hourlyEventTwelve", eventsTwelve);
  console.log(eventsTwelve);
});

function displayTwelvePm() {
  textArea12PM.innerText = localStorage.getItem("hourlyEventTwelve");
}

saveButtonOne.addEventListener("click", function () {
  console.log(eventsOne);
  var eventsOne = textArea1PM.value;
  localStorage.setItem("hourlyEventOne", eventsOne);
});

function displayOnePm() {
  textArea1PM.innerText = localStorage.getItem("hourlyEventOne");
}

saveButtonTwo.addEventListener("click", function () {
  console.log(eventsTwo);
  var eventsTwo = textArea2PM.value;
  localStorage.setItem("hourlyEventTwo", eventsTwo);
});

function displayTwoPm() {
  textArea2PM.innerText = localStorage.getItem("hourlyEventTwo");
}

saveButtonThree.addEventListener("click", function () {
  console.log(eventsThree);
  var eventsThree = textArea3PM.value;
  localStorage.setItem("hourlyEventThree", eventsThree);
});

function displayThreePm() {
  textArea3PM.innerText = localStorage.getItem("hourlyEventThree");
}

saveButtonFour.addEventListener("click", function () {
  console.log(eventsFour);
  var eventsFour = textArea4PM.value;
  localStorage.setItem("hourlyEventFour", eventsFour);
});

function displayFourPm() {
  textArea4PM.innerText = localStorage.getItem("hourlyEventFour");
}

saveButtonFive.addEventListener("click", function () {
  console.log(eventsFive);
  var eventsFive = textArea5PM.value;
  localStorage.setItem("hourlyEventFive", eventsFive);
});

function displayFivePm() {
  textArea5PM.innerText = localStorage.getItem("hourlyEventFive");
}

displayNineAm();
displayTenAm();
displayElevenAm();
displayTwelvePm();
displayOnePm();
displayTwoPm();
displayThreePm();
displayFourPm();
displayFivePm();
