const addNote = document.querySelector('.add');
const todoList = document.querySelector('.todos')
const search = document.querySelector('.search input');

function generateList(todos) {
    const list =
        `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todos}</span>
                <i class="far fa-trash-alt delete"></i>
        </li>`;
    todoList.innerHTML += list;

};

addNote.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addNote.add.value.trim();
    if (todo !== '')
        generateList(todo);
    addNote.reset();
});

todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

function filterTodo(term) {
    Array.from(todoList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(todoList.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodo(term);
});