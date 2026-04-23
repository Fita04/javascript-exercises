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
    ]

const findTheOldest = function(arr) {
    let currentYear = new Date().getFullYear();
    arr.forEach((person) => 
    {if (Object.hasOwn(person, "yearOfBirth") && Object.hasOwn(person, "yearOfDeath")) 
        { person.age = person.yearOfDeath - person.yearOfBirth;
        
    } else { person.age = currentYear - person.yearOfBirth;
        
    }});
    arr.sort((a, b) => b.age - a.age);
    return arr[0]
};

findTheOldest(people);
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
