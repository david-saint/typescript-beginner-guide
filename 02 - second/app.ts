// string
let myName = 'Max';

// number
let myAge: number = 22;

// boolean
let hasHobbies: boolean = true;

// array
let hobbies: string[] = ['Football', 'Coding'];
// hobbies = [100] would fail.
// let hobbies: any[] is also possible.

// tuples
let address: [number, string] = [3, 'Fola Agoro']
// that means it has to match exactly.

// enum
enum Color {
  Gray, // 0
  Green,  // 1
  Blue, // 2
}
let myColor: Color = Color.Blue;
console.log(myColor); // 2

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello, World');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 3));

// function type
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(2.1, 2));

// objects
let userData: { name: string, age?: number };
userData = {
  name: 'David Saint',
  age: 22,
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[]};
complex = {
  data: [21, 22],
  output(a) {
    return this.data;
  },
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex;
complex2 = {
  data: [],
  output: function () {
    return this.data;
  },
};

// union types 
let myRealRealAge: number | string = 27;
myRealRealAge = '27'; // this is still correct

// ccheck types 
let finalValue = 'A string';
// basically typeof

// never
function neverReturns(): never {
  throw new Error('An error');
}

// Nullable Types
let canBeNull = 12;


// ============================

type account = {money: number, deposit: (value: number) => void};
type user = {bankAccount: account, name: string, hobbies: string[]};

let bankAccount: account = {
  money: 2000,
  deposit(value): void {
    this.money += value;
  },
};


let myself: user = {
  bankAccount,
  name: 'David Saint',
  hobbies: ['Sports', 'Chess'],
};

myself.bankAccount.deposit(10000000);

console.log(myself);

