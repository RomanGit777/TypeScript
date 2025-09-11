// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push({ id: i, name: `Kokos ${i}` });
}

let currentPage = 1;
let itemsPerPage = 10;

const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let start = (currentPage -1) * itemsPerPage;
let end = start + itemsPerPage;
for (let i = start; i < end; i++) {
    const div = document.createElement('div');
    div.textContent = `${data[i].id} - ${data[i].name}`;
    container.appendChild(div);
}

prevBtn.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        container.innerHTML = '';
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
        for (let i = start; i < end; i++) {
            const div = document.createElement('div');
            div.textContent = `${data[i].id} - ${data[i].name}`;
            container.appendChild(div);
        }
    }
};

nextBtn.onclick = () => {
    if (currentPage < data.length / itemsPerPage) {
        currentPage++;
        container.innerHTML = '';
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
        for (let i = start; i < end; i++) {
            const div = document.createElement('div');
            div.textContent = `${data[i].id} - ${data[i].name}`;
            container.appendChild(div);
        }
    }
};