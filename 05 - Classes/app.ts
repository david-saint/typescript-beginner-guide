class Person {
  name: string;
  protected age: number;
  private type: string | undefined;

  constructor(name: string,  public username: string, age: number = 22) {
    this.age = age;
    this.name = name;
  }

  sayUserName(): void {
    console.log(this.username); // should be empty string or undefined;
    console.log(typeof this.username); // Should be string;
  }

  setType(type: string): boolean {
    this.type = type;
    if (this.type === void 0) return false;
    return true;
  }
}

class David extends Person {
  constructor(username: string) {
    super('David', username);
  }
}

/**
 *  Class representing a plant
 */
class Plant {
  private _species: string;

  /**
   * Create a Plant by specifying it's species.
   * @param {string} species A string specifying the specie.
   */
  constructor(species: string) {
    this._species = species;
  }

  set species(value: string) {
    if (value.length > 3) this._species = value;
    else this._species = 'Default';
  }

  get species(): string {
    return this._species;
  }
}

class Helpers {
  static PI: number = 3.14;

  static claculateCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

abstract class Project {
  abstract budget: number;
  projectName: string = 'Default Project';

  abstract changeName(name: string): void;

  calculateBudget() {
    return this.budget * 2;
  }
}

class Angular extends Project {
  budget: number;
  projectName: string = 'New Angular Project';

  constructor(budget: number) {
    super();
    this.budget = budget;
  }

  changeName(name: string): void {
    this.projectName = name;
  }
}

// Singleton with readonly Property
class Singleton {
  public readonly name: string;
  private static instance: Singleton;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance(name: string = 'The Singleton'): Singleton {
    if (!Singleton.instance)
      Singleton.instance = new Singleton(name);
    return Singleton.instance;
  }
}

let Vue = Singleton.getInstance('vue app');
console.log(Vue.name);
console.log(Vue);
console.log(Singleton.getInstance());

const incharge = new Angular(105000);
incharge.changeName('InCharge App');
console.log(incharge.calculateBudget());
const me = new Person('David Saint', 'rich-saint', 23);
console.log(me);
