type Temperature = {day: string, morningTemp: number, dayTemp: number, nightTemp: number};

const temps : Temperature[] = [
    {day: 'Monday', morningTemp: 15, dayTemp: 25, nightTemp: 17},
    {day: 'Tuesday', morningTemp: 17, dayTemp: 27, nightTemp: 22},
    {day: 'Wednesday', morningTemp: 14, dayTemp: 23, nightTemp: 21},
    {day: 'Thursday', morningTemp: 16, dayTemp: 26, nightTemp: 26 },
    {day: 'Friday', morningTemp: 15, dayTemp: 23, nightTemp: 15},
    {day: 'Saturday', morningTemp: 15, dayTemp: 22, nightTemp: 14},
    {day: 'Sunday', morningTemp: 15, dayTemp: 22, nightTemp: 17}
];
console.log(temps);