// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

async function getData<T>(url: string): Promise<T> {
    try{
    const res: Response = await fetch(url);
        return await res.json();
    } catch (err){
        console.log(err);
        throw err;
    }
}
getData<{name: string, age: number}>('http://localhost:3000/')
    .then((data)=>console.log(data))
    .catch((err)=>console.error('Error fetching data',err));