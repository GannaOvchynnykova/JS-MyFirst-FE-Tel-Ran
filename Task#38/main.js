/*Реализовать todoList. у вас должен быть инпут и кнопка, в инпут вводится строка, при нажатии на кнопку создается элемент списка с checkbox и текстом из инпута, элемент отрисовывается под инпутом, если checkbox отмечен, то текст перечеркивается, если checkbox не отмечен текст имеет обычный вид
*/
const inputText = document.querySelector('#myInput'),
    addBtn = document.querySelector('#addBtn'),
    list = document.querySelector('#todo-list');

inputText.focus();

addBtn.onclick = () => {
    const li = document.createElement('li');
    const check = document.createElement('input');
    //checkbox.type = 'checkbox'; tak i tak
    check.setAttribute('type', 'checkbox');

    li.innerHTML += inputText.value;
    li.prepend(check);

    check.onchange = () => {
        li.style.textDecoration = check.checked ? 'line-through' : 'none';
    }
    list.append(li);
    inputText.value = '';
    inputText.focus();
}

/*Сохранять вводимые строчки в массив todoList, как объекты: {todo: 'some text', done: false}. в поле todo сохраняется строчка из инпута, в поле done состояние checkbox (false - checkbox не отмечен, true - отмечен). Если состояние checkbox меняется, значение, хранящееся в поле done у объекта тоже меняется
*/

/*
btn.onsubmit = (event) => {
    event.preventDefault();
    const todo = event.target.input,
    done = event.target.checked;
    const mission = {
        todo: input.value,
        done: input.checked,
    }
    todoArray.push(mission);
    console.log(todoArray);
}
*/
