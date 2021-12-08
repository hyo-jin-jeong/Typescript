const sayHi = (name: String, age: Number, gender: String): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

console.log(sayHi("Nicolas", 444, "male"));
export {};