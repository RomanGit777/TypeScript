let x : null | number | undefined | string = null;
if (!x) {
    x = 'default';
}
console.log(x);