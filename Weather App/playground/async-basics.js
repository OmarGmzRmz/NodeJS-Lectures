console.log('Starting App');

setTimeout(() => {
    console.log('Executing code inside callback');
}, 5000);


var secondCallback = () => {
    console.log()
}
setTimeout(() => {
    console.log('second callback');
}, 0);

console.log('Finishing up');