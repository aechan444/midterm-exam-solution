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



// Array to store todos
let todos = [];

// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ""; // Clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ""; // Clear the input
        renderTodos();
    }
}

// Function to edit a todo
function editTodo(index) {
    const newTodo = prompt("Edit your todo:", todos[index]);
    if (newTodo) {
        todos[index] = newTodo;
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    if (confirm("Are you sure you want to delete this todo?")) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event listeners
todoForm.addEventListener("submit", addTodo);

// Innitia Render
renderTodos();