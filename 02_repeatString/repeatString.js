const repeatString = function(word, occ) {
    let final_word = "";

    if (occ >= 0) {
        for (let i = 0; i < occ; i++) final_word += word;
    } else return 'ERROR';

    return final_word;
    
};

// Do not edit below this line
module.exports = repeatString;
