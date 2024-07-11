document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', taskText);
            if (newTaskText) {
                span.textContent = newTaskText;
            }
        });
        li.appendChild(editBtn);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completed';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            completeBtn.classList.toggle('hidden');
            li.querySelector('.tick-mark').classList.toggle('visible');
        });
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        const tickMark = document.createElement('span');
        tickMark.textContent = '✔️';
        tickMark.classList.add('tick-mark');
        li.appendChild(tickMark);

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });
});
