# Access Modifiers in TypeScript OOP

When we create a class in TypeScript, we may not want every property to be accessed from everywhere. Access modifiers help us control this. The main access modifiers are public, private, and protected. There is also readonly, which stops a value from being changed after it is set.

## Public

public means we can access the property from outside the class. It is also the default modifier.


class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Nusrat");
console.log(user.name);


Here, user.name can be accessed directly.

## Private

private means the property can only be used inside the same class.


class Account {
  private balance = 1000;

  getBalance() {
    return this.balance;
  }
}

We cannot directly access balance from outside the class.

## Protected

protected is similar to private, but a child class can also use it.

class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Manager extends Employee {
  showName() {
    return this.name;
  }
}

Here, Manager can use name because it is protected.

## Readonly

readonly means we cannot change the value after it has been set.

class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

After creating the object, we cannot change id.

In simple words, public can be accessed from anywhere, private can only be used inside the same class, and protected can be used inside the class and its child classes. readonly prevents a property from being changed. These modifiers help us control our class properties.