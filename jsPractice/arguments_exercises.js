// Write a sum function that takes any number of arguments:

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;
// Solve it first using the arguments keyword, then rewrite your solution to use the ...rest operator.

function sum () {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function total(...n) {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}

Function.prototype.myBindOne = function (context) {
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function _method() {
        const callArgs = Array.from(arguments);
        return that.apply(context, bindArgs.concat(callArgs));
    };
};


Function.prototype.myBind = function (context, ...bindArgs) {
    const that = this;
    return function(...callArgs) {
        return that.apply(context, bindArgs.concat(callArgs));
    };
};

function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(number) {
        numbers.push(number);
        if (numbers.length === numArgs) {
            return numbers.reduce((acc, el) => acc + el);
            
        } else {
            return _curriedSum;
        }
    };
};


Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    return function _curried(arg) {
        args.push(arg);
        if (args.length === numArgs) {
           return that.apply(null, args)
        } else {
            return _curried;
        }
    };
};


Function.prototype.curry = function (numArgs) {
    let args = [];
    let arr = this
    return function _curried(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return arr(...args);
        } else {
            return _curried;
        }
    };
};

// const a = curriedSum(3);
// const b = a.curry(3);
// const c = b.curry(4);
// const d = c.curry(10);
// console.log(d);



// console.log(total(1, 2, 3, 4) === 10);
// console.log(total(1, 2, 3, 4, 5) === 15);

