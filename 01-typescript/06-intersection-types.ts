interface Animal {
  name: string;
  age: number;
}

interface AnimalWithLegs {
  numberOfLegs: number;
}

interface Barker {
  barkPitch: number;
}

interface Meower {
  meowVolume: number;
}

type Cat = Animal & AnimalWithLegs & Meower;
type Dog = Animal & AnimalWithLegs & Barker;

let cat: Cat = {
  age: 1,
  meowVolume: 1,
  name: 'cat01',
  numberOfLegs: 4,
};

let dog: Dog = {
  age: 1,
  barkPitch: 121,
  name: 'dog01',
  numberOfLegs: 4,
};
