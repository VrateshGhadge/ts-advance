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

type User = {
	name: string;
	age: number;
}

const user: Readonly<User> = {
	name: "satyarth",
	age: 20
}

// user.age = 21; // Error: Cannot assign to 'age' because it is a read-only property.

//Main usecase of Readonly :
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.



