document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById("new-task-description");
    const task = input.value;
    const ul = document.getElementById("tasks")
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
  });
});

