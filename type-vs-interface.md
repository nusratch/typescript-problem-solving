# Type vs Interface in TypeScript

In TypeScript, we can use both type and interface to define the structure of data. They look quite similar, especially when we use them with objects. But there are some differences between them. It is useful to know these differences so we can choose the right one.


## Type

A type can be used for different kinds of types. We can use it for objects, unions, tuples, and other types.

type User = {
  name: string;
  age: number;
};

type ID = string | number;


Here, User describes an object, and ID can be either a string or a number.

## Interface

An interface is mainly used to describe the structure of an object.


interface User {
  name: string;
  age: number;
}


We can also extend an interface when we need more properties.

interface Admin extends User {
  role: string;
}

Another difference is that we can add more properties to an existing interface.

interface User {
  name: string;
}

interface User {
  age: number;
}

Now User has both name and age.

## When to Use Them

For object structures, I would normally use an interface. When I need a union, tuple, or another type combination, I would use a type. However, both can be used for object structures in many cases.



The simple way to remember it is that interface is commonly used for objects, while type is more flexible. Both are useful in TypeScript, and we can choose one depending on what we need.