'use strict';

const unequal = (item1, item2, item3) => {
    return item1 === item2 || item1 === item3 || item2 === item3 ? false : true;
}

console.log(unequal(1, 1, 2));
