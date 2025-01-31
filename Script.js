document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Add a delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      // Clear the input
      taskInput.value = '';
    }
  });