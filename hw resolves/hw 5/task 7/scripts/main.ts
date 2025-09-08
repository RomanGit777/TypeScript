// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
type CurrencyType = {currency: string,value: number}[];

let exchange = (sumUAH: number,currencyValues: CurrencyType ,exchangeCurrency: string) => {
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
    return 'Currency not found';
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));


