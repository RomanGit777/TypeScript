// #OPLI89c9G
// – Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

type StringType = string;
let arr: StringType[] = ['Main','Products','About us','Contacts'];

const menu: HTMLUListElement = document.createElement('ul');
menu.classList.add('menu');
for (const item of arr) {
    const li: HTMLLIElement = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}
document.body.appendChild(menu);