/*
var logger = function(output){
    console.log(output)
}

export var appName = "ES6 Review";
export var dummyFunction = function(){ 
    return "I am a dummy function"; 
}
*/

export var logger = (output) => {
    console.log(output)
}

export default logger;

/*
var functionWithNoParameter = () => {
    console.log("No parameter included.")
}

var functionWithTwoOrMoreParameters = (parameter1, parameter2) => {
    console.log("Two parameters included.")
}

/*
export const  dummyFunction = () => {
    let feedback = "I am a dummy function"; // mutable variable
    feedback = "I am still a dummy function"; // value change

}

export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    let [firstLang, secondLang, ...otherLanguages] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}`
} 

export const genericFunction = () => {
    //declare an object literal
    let personalInformation = {
        firstName : 'Chudi',
        lastName : 'Ofoma',
        gender : 'Male',
        religion : 'Christianity (Catholic)',
        fathersName : 'Pese',
        mothersName : 'Pese'
    }
    //deconstruct into new variables firstName, last name and otherPersonalInfo
    let { firstName, lastName, ...otherPersonalInfo } = personalInformation;

    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = $ {otherPersonalInfo.gender}; religion = ${otherPersonalInfo.religion}; etc.`;
} 

export const genericFunction = (a, b = 1) => {
    // This function multiplies any two numbers
    // if only one argument is sent as argument when function is called, b will default to 1.
    return (a * b);
}


export const multiplier = (...numbers) => {
    var product = 1;
    if (numbers.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    //loop through using the old forEach approach which still works
    //numbers.forEach((number)=>{
    // product = product * number;
    //});
    //More elegantly we can replace the above forEach with ES6's for...of
    for(let number of numbers){
    product = product * number;
    }
    return product;
}


export class Person{ 
    constructor(firstName, lastName, gender, height){ 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height; 
    } 
};

export default logger;

//Create a function that will capitalize the first letter of a string. 
const toTitleCase = (str) => { 
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
   } 
   export class Person{ 
    constructor(firstName, lastName, gender, height){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.height = height 
    } 
    getFirstName(){ 
    return toTitleCase(this.firstName) 
    } 
   };

   //static methods 
export class CustomMath{ 
    static sqrt(a){ 
    return Math.sqrt(a);
} 
static pow(a,b){ 
return Math.pow(a,b); 
} 
} */