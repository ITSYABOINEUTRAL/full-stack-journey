const itemForm = document.getElementById('item-form');

const itemInput = document.getElementById('item-input');

const duplicateErrorMessage = document.getElementById('item-error')

const itemList = document.getElementById('item-list');

const clearBtn = document.getElementById('clear');

const filterInput = document.getElementById('filter');

const items = [];

function addItem (e) {
    e.preventDefault();
    const item = itemInput.value.trim()
    if (item === "") {
        return
    }
    if (items.includes(item)) {
        duplicateErrorMessage.textContent = "Item already exists."
        duplicateErrorMessage.style.display = "block";
        return
    }
    items.push(item);
    const li = document.createElement('li');
    li.innerText = item
    const button = document.createElement('button');
        
    button.innerHTML = `
    <i class="fa-solid fa-xmark"></i>
    `
    button.className = "remove-item btn-link text-red"
    li.appendChild(button)
    itemList.appendChild(li)  
        
    itemInput.value = ""
    itemInput.focus()
};

function removeItem (e) {
    const removeBtn = e.target.closest('.remove-item');

    if (!removeBtn) {
        return;
    }

    const closestLi = removeBtn.closest('li');

    const itemClicked = closestLi.textContent.trim();

    const itemIndex = items.indexOf(itemClicked);

    items.splice(itemIndex, 1);

    closestLi.remove();
}

function clearAllItems () {
    itemList.innerHTML = "";
    items.splice(0, items.length)
}

function filterItems(e) {
  const filterText = e.target.value.toLowerCase();
  const listItems = itemList.querySelectorAll('li');
  listItems.forEach((listItem) => {
    const itemText = listItem.textContent.trim().toLowerCase();
    listItem.style.display = itemText.includes(filterText) ? 'flex' : 'none';
  });
}

itemInput.addEventListener('input', () => {
    duplicateErrorMessage.style.display = "none";
})

filterInput.addEventListener('input', filterItems)

itemList.addEventListener('click', removeItem)

itemForm.addEventListener('submit', addItem);

clearBtn.addEventListener('click', clearAllItems)