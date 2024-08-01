const fibonacci = function(arg) {
    let count
    if (typeof arg !== 'number') {
        count = parseInt(arg);
    } else {
        count = arg;
    }

    if (count < 0) {
        return 'OOPS';
    }

    if (count === 0) {
        return 0;
    }

    if (count === 1) {
        return 1;
    }

    let fib = [0, 1];
    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
