import { multiplier } from "./tools.js";
import log, {Person} from './tools'; 
import logger from './tools.js';
//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
//logger(`Welcome! The application name is ${appName} . There is a function that returns "${dummyFunction()}"` );

/*try{
    logger(multiplier(2,3));
}catch(error){
    logger(`Error: ${error.message}`);
}
*/

/*
let person1 = new Person("Chudi", "Ofoma", "Male",1.7); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 
log(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose height is ${person2.height}`);


let person1 = new Person("Pius", "Onobhayedo", "Male",1.7); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter 
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter 
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is $ {person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName. 
*/