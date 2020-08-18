const itemDone = document.querySelectorAll('.item-done')
const itemRemove = document.querySelectorAll('.item-remove')
const textChore = document.querySelectorAll('.item strong')

itemDone.forEach(el => {
    el.addEventListener('click', () => {
        console.log('af')
    })
});