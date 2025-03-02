taskArr.forEach((button) => {
  button.addEventListener("click", () => {
    let taskNum = strToNum("task");
    if (taskNum > 0) {
      let sum = taskNum - 1;
      document.getElementById('task').innerText = String(sum).padStart(2, '0')
    } else {
      alert("No task remaining");
    }
  });
});
