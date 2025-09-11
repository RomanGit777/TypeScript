// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let data: any[] = [];
for (let i: number = 1; i <= 100; i++) {
    data.push({ id: i, name: `Kokos ${i}` });
}

let currentPage: number = 1;
let itemsPerPage: number = 10;

const container: HTMLDivElement = document.getElementById('container') as HTMLDivElement;
const prevBtn: HTMLButtonElement = document.getElementById('prev') as HTMLButtonElement;
const nextBtn: HTMLButtonElement = document.getElementById('next') as HTMLButtonElement;

let start: number = (currentPage - 1) * itemsPerPage;
let end: number = start + itemsPerPage;
for (let i: number = start; i < end; i++) {
    const div: HTMLDivElement = document.createElement('div');
    div.textContent = `${data[i].id} - ${data[i].name}`;
    container.appendChild(div);
}

prevBtn.onclick = (): void => {
    if (currentPage > 1) {
        currentPage--;
        container.innerHTML = '';
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
        for (let i: number = start; i < end; i++) {
            const div: HTMLDivElement = document.createElement('div');
            div.textContent = `${data[i].id} - ${data[i].name}`;
            container.appendChild(div);
        }
    }
};

nextBtn.onclick = (): void => {
    if (currentPage < data.length / itemsPerPage) {
        currentPage++;
        container.innerHTML = '';
        start = (currentPage - 1) * itemsPerPage;
        end = start + itemsPerPage;
        for (let i: number = start; i < end; i++) {
            const div: HTMLDivElement = document.createElement('div');
            div.textContent = `${data[i].id} - ${data[i].name}`;
            container.appendChild(div);
        }
    }
};