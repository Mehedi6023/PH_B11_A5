const taskArr = document.querySelectorAll(".task-btn");
function strToNum(id) {
  let str = document.getElementById(id).innerHTML;
  let num = parseInt(str);
  return num;
}
