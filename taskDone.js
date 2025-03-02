taskArr.forEach((button) => {
  button.addEventListener("click", () => {
    let taskDone = strToNum("task-done");
    let sum = taskDone + 1;
    document.getElementById("task-done").innerText = sum;

    let containerText = document.createElement("p");
    let card = button.closest(".task");
    let taskHeading = card.querySelector("h2").innerText;
    containerText.innerHTML = `
    <p class = "bg-[#0044ff1c] my-5 mx-3 sm:mx-5 lg:mx-10 py-4 px-3 rounded-lg">
    You have Complete The Task ${taskHeading} at 12:48:15 PM
    </p>
    `;
    let containerEl = document.getElementById("p-container");
    containerEl.appendChild(containerText);
  });
});