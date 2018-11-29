class Person {
    constructor(private name: string) {}
    printName = () => console.log(this.name);
}

var p = new Person("Jeroen");
p.printName();