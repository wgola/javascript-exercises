const runFunc = () => console.log('Funkcja 1');

const runFunc2 = () => console.log('Funkcja 2');

switch(status) {
    case 'Completed':
        runFunc();
        break;
 
    case 'Running': 
        runFunc2();
}