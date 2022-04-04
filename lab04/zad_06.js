'use strict';

const nwd = (a, b) => a % b == 0 ? b : nwd(b, a % b);

console.log(nwd(35, 354));
