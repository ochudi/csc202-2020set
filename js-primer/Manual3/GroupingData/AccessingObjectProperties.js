var myObject = { 
    name: { 
    firstName : "Chudi", 
    surname: "Ofoma" 
    }, 
    expertise: "Full Stack Development", 
    languages: [ "Python", "JavaScript", "Java", "C++" ], 
    isRetired: false, 
    favouriteCombination: 20 + 1 
}

console.log(myObject.name); // Prints out { firstName: 'Chudi', surname: 'Ofoma' }. 
console.log(myObject['name']); // Also prints out { firstName: 'Chudi', surname: 'Ofoma' }. 
console.log(myObject.expertise); // Prints out Full Stack Development 
console.log(myObject['expertise']); // Also prints out Full Stack Development
console.log(myObject.languages); // Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); // Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); // Prints out false 
console.log(myObject['isRetired']); // Also prints out false 
console.log(myObject.favouriteCombination); // Prints out 21 
console.log(myObject['favouriteCombination']); // Also prints out 21

//Accessing nested objects 
console.log(myObject.name.firstName); // Prints out Chudi. 
console.log(myObject['name']['firstName']); // Also prints out Chudi.