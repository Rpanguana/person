class Person{
	constructor(name, age, gender, interests){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	}
hello(){
let output = `Hi! my name is ${this.name}, I am a ${this.age} year old ${this.gender} who's interests are ${this.interests}  `
return output;
}
}

let person = new Person("Melvin", 25, "Male", [' mountain climbing', ' fitness', ' listening to jazz genre music', 'and Meditation'])
let greeting = person.hello()
console.log(greeting);

