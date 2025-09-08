// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: string[] = ['6','7','8','9','10','jack','queen','king','ace'];

type Card = { cardSuit: string, value: string, color: string };

const cards: Card[] = [];
for (let suit of cardSuits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        cards.push({ cardSuit: suit, value: value, color: color })
    }}
console.log(cards);
type Accumulator = {spades: Card[], diamonds: Card[], hearts: Card[], clubs: Card[]};
console.log(cards.reduce((acc: Accumulator, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card)
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));