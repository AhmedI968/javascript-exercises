const findTheOldest = function(people) {
    const getAge = function(person) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person.yearOfDeath - person.yearOfBirth;
    }

    const oldest = people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(currentPerson);
        return oldestAge < currentAge ? currentPerson : oldest;
    });

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
