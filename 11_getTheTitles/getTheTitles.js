const getTheTitles = function(books) {
    let titles = [];
    for (let prop in books) {
        titles.push(books[prop].title);
    };
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
