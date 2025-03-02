let dateEl = document.getElementById("date");
let fullDate = new Date();
let day = fullDate.getDay();
let month = fullDate.getMonth();
let date = fullDate.getDate();
let year = fullDate.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
dateEl.innerHTML = `${days[day]}, </br> <b> ${months[month]} ${date} ${year} </b>`;
function getTime() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  let time = `${hours}:${minutes}:${seconds} ${amPm}`;
  return time;
}
