const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];


  const findTheOldest = function(people) {
    let oldestPerson = null;
    let oldestAge = -1;

    people.forEach(person => {
        let age;

        // Calculate age based on year of death or current year if alive
        if (person.yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        // Update the oldest person if the current person is older
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    });

    // Return the oldest person after the loop
    return oldestPerson;
};

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
