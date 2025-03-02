// using id
// function disableButton(id) {
//     document.getElementById(id).addEventListener('click', function() {
//         document.getElementById(id).disabled = true;
//     });
// }
// disableButton('btn1')
// disableButton('btn2')
// disableButton('btn3')
// disableButton('btn4')
// disableButton('btn5')
// disableButton('btn6')


// using querySelectorAll and forEach and oneclick
// document.querySelectorAll('.task-btn').forEach(button => {
//     button.onclick = function() {
//         this.disabled = true;
//     };
// });

// using querySelectorAll and forEach and addEventListener
taskArr.forEach((button) => {
  button.addEventListener("click", function () {
    this.disabled = true;
  });
});
