const runFunc = () => console.log('Funkcja 1');

const runFunc2 = () => console.log('Funkcja 2');

const naprawionyStatus = 'Running';

switch(naprawionyStatus) {
    case 'Completed':
        runFunc();
        break;
 
    case 'Running': 
        runFunc2();
        break;
}