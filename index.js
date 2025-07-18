    function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  // Optional: Click to remove task
  li.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
    
