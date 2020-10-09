const btnAdd = document.querySelector('.to-do__button');
const listElement = document.querySelector('.to-do__list');
const listDoneElement = document.querySelector('.done__list');
const textElement = document.querySelector('input');

btnAdd.addEventListener('click', () => {
    let boxElement = document.querySelector('.to-do__box');
    boxElement.classList.add('is-active');

    if(textElement.value !== "") {
        let item = document.createElement('li');
        let task = document.createElement('span');

        item.innerHTML = `${textElement.value}`;
        listElement.appendChild(item);
        item.appendChild(task);
        textElement.value = null;

        task.addEventListener('click', () => {            
            let boxTaskElement = document.querySelector('.done__box');
            boxTaskElement.classList.add('is-active');
            let taskDone = document.createElement('b');

            item.style.textDecoration = "line-through";
            
            listDoneElement.appendChild(item);
            item.appendChild(taskDone);
            task.remove();

            taskDone.addEventListener('click', () => {
                item.remove();
            });
        });
    }
});