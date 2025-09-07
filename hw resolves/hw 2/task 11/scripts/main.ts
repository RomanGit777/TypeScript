type Course = {title: string, monthDuration: number};

let coursesAndDurationArray : Course[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const course1  = coursesAndDurationArray[0]!;
if (course1.monthDuration  > 5) {
    console.log('super')
}
const asd = coursesAndDurationArray[1]!;
if (asd.monthDuration  > 5) {
    console.log('super');
}
const dd = coursesAndDurationArray[2]!;
if (dd.monthDuration > 5) {
    console.log('super');
}
const cc = coursesAndDurationArray[3]!;
if (cc.monthDuration > 5) {
    console.log('super');
}
const ff = coursesAndDurationArray[4]!;
if (ff.monthDuration > 5) {
    console.log('super');
}
const gg = coursesAndDurationArray[5]!;
if (gg.monthDuration > 5) {
    console.log('super');
}
