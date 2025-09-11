// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void



function addToLocalStorage(arrayName: string, objToAdd: Object): void{
    const lsItem: string | null = localStorage.getItem(arrayName);
    if (!lsItem){
        throw new Error;
    }
    const array: any = JSON.parse(lsItem);
    if (typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionsList', {name:'ararar'});