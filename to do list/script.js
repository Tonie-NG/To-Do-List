let addButton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDOContainer');
let inputField = document.getElementById('inputField')

addButton.addEventListener ('click', addFunction);

function addFunction() {
    var div = document.createElement ('div')
    toDocontainer.appendChild(div);
    div.classList.add('div-style')

    var list= document.createElement('li');
    list.classList.add('list-style')
    list.innerText = inputField.value;
    div.appendChild(list);
    list.addEventListener('click', function() {
        list.style.textDecoration = 'line-through';
    })

    var btn = document.createElement('button');
    btn.innerText = 'X'
    div.appendChild(btn);
    btn.classList.add('btn-style')

    btn.addEventListener('click', remove);

    function remove() {
        div.innerHTML =" "
    }
    inputField.value = " ";
}