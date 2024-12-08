const sumAll = function(range1, range2) {
    if (typeof range1 != 'number' || typeof range2 != 'number') {
        return 'ERROR';
    }

    if ((parseInt(range1) != range1) || parseInt(range2) != range2) {
        return 'ERROR';
    }

    if (range1 < 0 || range2 < 0) {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = Math.min(range1, range2); i <= Math.max(range1, range2); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
