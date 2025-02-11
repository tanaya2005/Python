function addTask() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    if (taskInput.value) {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      const delbut = document.createElement('button');
      delbut.textContent = 'Delete';
      delbut.onclick = () => taskList.removeChild(li);
      li.appendChild(delbut);
      taskList.appendChild(li);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  }