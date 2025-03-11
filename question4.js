let tasks = [];
let currentId = 1;

// Create
function addTask(name, description) {
    const task = { id: currentId++, name, description };
    tasks.push(task);
    return task;
}

// Read all
function getAllTasks() {
    return tasks.slice(); // Return copy to prevent mutation
}

// Update
function updateTask(id, name, description) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return null;
    tasks[index] = { id, name, description };
    return tasks[index];
}

// Delete
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
}

// Export functions for testing
module.exports = { addTask, getAllTasks, updateTask, deleteTask };
