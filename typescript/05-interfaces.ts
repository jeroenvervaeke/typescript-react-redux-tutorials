interface Animal {
  name: string;
  age: number;
}

interface AnimalWithLegs extends Animal {
  numberOfLegs: number;
}
