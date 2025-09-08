// #gEFoxMMO
type PrimitivesType = number | string | boolean;

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrOfPrimitives: PrimitivesType[] = [1,2,3,4,true,false,'string',8,9];
let foo = (arr:PrimitivesType[] ): void => {
    document.write(`<ul>`)

    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }

    document.write(`</ul>`)
}
foo(arrOfPrimitives);