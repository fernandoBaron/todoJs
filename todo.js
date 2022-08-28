const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const showList = document.querySelector('ul');
const nodata = document.querySelector('.nodata');

addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const task = input.value;
    console.log(task);
    if(task !== '') {
        const li = document.createElement('li');
        const paragraph = document.createElement('p');
        paragraph.textContent = task;
        li.appendChild(paragraph);
        li.appendChild(addDeleteButton());
        showList.appendChild(li);
        input.value = '';
        nodata.style.display = 'none';
    }
});

function addDeleteButton(){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', (event) => {
        const deleted = event.target.parentElement;
        showList.removeChild(deleted);
        const deletedItems = document.querySelectorAll('li');
        if(deletedItems.length=== 0 ) {
            nodata.style.display = 'block';
        }
    })
    return deleteButton;
}


