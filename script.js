var currentDate = document.getElementById("currentDay");
currentDate.textContent = moment().format("dddd, MMMM Do YYYY");

var currentHour = moment().format("H");

var saveButton = document.getElementById("button-9");
var textArea9AM = document.getElementById("nine-am");
var eventsNine = textArea9AM.value;

saveButton.addEventListener("click", function () {
  console.log(eventsNine);
  var eventsNine = textArea9AM.value;
  localStorage.setItem("hourlyEvent", eventsNine);
  console.log(eventsNine);
});

function displayNineAm() {
  textArea9AM.innerText = localStorage.getItem("hourlyEvent");
}

displayNineAm();
