// interface User {
// 	name: string;
// 	age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
// 	name: "satyarth",
// 	age: 20
// }, {
// 	name: "raman",
// 	age: 21
// });
// console.log(result); 


//  ---------------------------------------------------------------------------
//PICK & PARTIAL

// interface User {
// 	id: string;
// 	name: string;
// 	age: number;
// 	email: string;
// 	password: string;
// }
// //PICK
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

// //PARTIAL
// type UpdatePropsOptional = Partial<UpdateProps>;

// function updateUser(updatedProps: UpdatePropsOptional) {
// 	// Logic to update the user in the database
// }



//  ---------------------------------------------------------------------------
// READONLY
//it is used when you want to make sure that properties in an object connot be modified after they are set.


// type User = {
// 	readonly name: string;
// 	readonly age: number;
// }
// const user: User = {
// 	name: "satyarth",
// 	age: 20
// }

// OR

// type User = {
// 	name: string;
// 	age: number;
// }

// const user: Readonly<User> = {
// 	name: "satyarth",
// 	age: 20
// }

// user.age = 21; // Error: Cannot assign to 'age' because it is a read-only property.

//Main usecase of Readonly :
// interface Config {
//   readonly endpoint: string;
//   readonly apiKey: string;
// }

// const config: Readonly<Config> = {
//   endpoint: 'https://api.example.com',
//   apiKey: 'abcdef123456',
// };

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.



//  ---------------------------------------------------------------------------
//RECORDS AND MAPS
// for creating key value pairs we use records and maps

//normally types are given to objects like this:

// type UserAge = {
// 	[key: string]: number;
// }

// const users: UserAge = {
// 	"satyarth": 20,
// 	"raman": 21,
// }


//RECORDS
// type UserAge = Record<string, number>
//type UserAge = Record<string, {age: number; name: string}>

// const users: UserAge = {
// 	"satyarth": 20,
// 	"raman": 21,
// }

// const users: UserAge = {
// 	"rsaf@sds" : {age: 20, name: "satyarth"},
// 	"sss@sdsa" : {age: 26, name: "satya"}
// }


//MAPS

const users = new Map()
users.set("sdsds@sdsd", {age: 20, name: "satyarth"})
users.set("sdsdsd", {age: 26, name: "satya"})

const user = users.get("sdsds@sdsd")
users.delete("sdsds@sdsd")

//we can also specift or enforce types in maps like this:
type User = {
	age: number;
	name: string;
}

const userMap = new Map<string, User>()
userMap.set("sdsds@sdsd", {age: 20, name: "satyarth"})
userMap.set("sdsdsd", {age: 26, name: "satya"})

const user1 = userMap.get("sdsds@sdsd")


//  ---------------------------------------------------------------------------
//EXCLUDE
// it lets you exclude specific things form types

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.

