const nameValue = document.getElementById('nameValuePair');
const listResult = document.getElementById('listResult');

const buttonAdd = document.getElementById('addBtn');
const sortByNameBtn = document.getElementById('sortByNameBtn');
const sortByValueBtn = document.getElementById('sortByValueBtn');
const deleteBtn = document.getElementById('deleteBtn');
//зв'язала  html  з js//


//описала класс який описує дані///
class Item {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    get displayName() {
        return `${this.name}=${this.value}`;
    }
}

let itemList = [];

const assigneValue = (newList) =>{
    const newOptions = newList.map((item, index) => {
        const option = document.createElement('option');
        option.id = (index+1).toString();
        option.innerText = item.displayName;

        return option;
    });

    itemList = newList;
    listResult.replaceChildren(...newOptions);
};


/// описала логіку натиску на кнопки///
buttonAdd.onclick = (event) => {
    const inputValue = nameValue.value;

    //валідація значення//
    if(!inputValue || !inputValue.includes('=')){
        console.error('value is incorrect')
        return;
    }

    const values = inputValue.split('=');

    if(values.length !== 2) {
        console.error('value is incorrect')
        return;
    }

    const name = values[0].trim();
    const value = values[1].trim();

    const item = new Item (name, +value);
    itemList.push(item);

    const option = document.createElement('option');
    option.id = itemList.length.toString();
    option.innerText = item.displayName;

    listResult.appendChild(option);

    nameValue.value = '';
};

sortByNameBtn.onclick = (event) => {
    const sortedList = itemList.sort((a, b) => a.name.localeCompare(b.name));

    assigneValue(sortedList);
};

sortByValueBtn.onclick = (event) => {
    const sortedList = itemList.sort((a, b) => a.value - b.value);

    assigneValue(sortedList);
};

///описала видалення всього///
deleteBtn.onclick = (event) => {
    itemList = [];
    listResult.innerHTML = '';
};
/*
assigneValue([
    new Item('Q', 99),
    new Item('A', 1000),
    new Item('P', 44),
    new Item('C', 56)
])
 */