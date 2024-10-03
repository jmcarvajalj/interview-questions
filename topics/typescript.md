# TypeScript

TypeScript is a superset of JavaScript that adds static typing to the language. It allows you to write code using a statically typed language that compiles down to plain JavaScript. This can help catch errors at compile-time rather than runtime, making your code more robust and maintainable.

Here are some key concepts and features of TypeScript:

## Static Typing

TypeScript introduces static typing, allowing you to define types for variables, function parameters, and return values.

```typescript
let myNumber: number = 5;
let myString: string = "Hello, TypeScript!";
```

## Interfaces

TypeScript supports interfaces, which allow you to define the shape of an object.

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}
```

## Classes

TypeScript supports class-based object-oriented programming.

```typescript
class Animal {
  constructor(public name: string) {}

  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound()); // Outputs: "Woof!"
```

## Enums

Enums allow you to define a set of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
```

## Generics

TypeScript supports generics, which allow you to write functions and classes that work with any data type.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello, TypeScript!");
```

## Type Assertion

TypeScript allows you to assert the type of a variable when you know more about its type than the compiler does.

```typescript
let myValue: any = "This is a string";
let strLength: number = (myValue as string).length;
```

## TypeScript Compiler (tsc)

TypeScript code is typically written in .ts files and compiled to JavaScript using the TypeScript compiler (tsc).

```typescript
tsc myFile.ts
```

## DefinitelyTyped and Declaration Files

TypeScript has a community-driven repository called DefinitelyTyped, which contains type definitions for many popular JavaScript libraries.

## Tooling Integration

TypeScript integrates well with popular code editors and IDEs, providing features like autocompletion, type checking, and refactoring support.

## Configuring tsconfig.json

The tsconfig.json file is used to configure the TypeScript compiler options for a project.

# Types vs Interfaces

In TypeScript, both types and interfaces are used to define shapes for objects, specifying the types of their properties and methods. However, there are some differences between them:s

## Type

### Definition Style

Types are often more flexible and can be used to define various kinds of shapes, including primitive types, union types, intersection types, etc.

```typescript
type MyType = number | string;
```

### Declaration Merging

Types support declaration merging, which allows you to extend or merge multiple type declarations with the same name.

```typescript
type Point = {
  x: number;
  y: number;
};

type Point = {
  z: number;
};

// This is valid with declaration merging
```

### Compatibility

Types can be used to define literal types and mapped types.

```typescript
type Color = "red" | "green" | "blue";

type Point2D = {
  [key: string]: number;
};
```

## Interface

### Declaration Style

Interfaces are typically used to define the shapes of objects and are more focused on describing the structure of data.

```typescript
interface MyInterface {
  x: number;
  y: number;
}
```

### Declaration Merging

Interfaces also support declaration merging, allowing you to extend or merge multiple interface declarations with the same name.

```typescript
interface Point {
  x: number;
  y: number;
}

interface Point {
  z: number;
}

// This is valid with declaration merging
```

### Compatibility

Interfaces can be used to describe callable objects and implement inheritance.

```typescript
interface Greeter {
  greet(): void;
}

class MyGreeter implements Greeter {
  greet() {
    console.log("Hello!");
  }
}
```

### When to Use Each

#### Use Types When

- You need a union or intersection of types.
- You want to create aliases for primitive types, unions, or intersections.
- You need to define types that include literal values.

#### Use Interfaces When

- You are defining the shape of an object or a class.
- You need to implement inheritance.
- You want to describe the contract for implementing a class.

In practice, the choice between using a type or an interface often comes down to personal preference and the specific use case. Some developers prefer interfaces for defining object shapes and reserve types for more complex scenarios, while others use types exclusively. TypeScript has evolved over time, and many features are now common to both types and interfaces.

# Utility types

TypeScript utility types are a powerful feature that allows you to manipulate and transform types in a concise and reusable way. These utility types are predefined by TypeScript and are used to perform common type transformations. Here are some of the most commonly used TypeScript utility types:

## Partial<T>

This utility type makes all properties of a type optional by marking them as ?.

```typescript
interface User {
  name: string;
  age: number;
}

const partialUser: Partial<User> = { name: "John" };
```

## Required<T>

The opposite of Partial<T>, this utility type makes all properties of a type required.

```typescript
interface PartialUser {
  name?: string;
  age?: number;
}

const user: Required<PartialUser> = { name: "John", age: 25 };
```

## Readonly<T>

This utility type makes all properties of a type read-only.

```typescript
interface Config {
  apiKey: string;
  endpoint: string;
}

const config: Readonly<Config> = {
  apiKey: "abc123",
  endpoint: "example.com/api",
};
// Error: Cannot assign to 'apiKey' because it is a read-only property.
config.apiKey = "newKey";
```

## Record<K, T>

Creates a type with keys of type K and values of type T.

```typescript
type UserRoles = "admin" | "user";
const roles: Record<UserRoles, number> = { admin: 1, user: 2 };
```

## Pick<T, K>

Constructs a type by picking the set of properties K from T.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const userInfo: Pick<User, "name" | "email"> = {
  name: "John",
  email: "john@example.com",
};
```

## Omit<T, K>

Constructs a type by omitting the set of properties K from T.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const userWithoutAge: Omit<User, "age"> = {
  name: "John",
  email: "john@example.com",
};
```

## Exclude<T, U> and Extract<T, U>

- Exclude<T, U> excludes types from T that are assignable to U.
- Extract<T, U> extracts types from T that are assignable to U.

```typescript
type Animal = "dog" | "cat" | "bird";
type Mammal = "dog" | "cat";

const birds: Exclude<Animal, Mammal> = "bird";
const mammals: Extract<Animal, Mammal> = "dog";
```

## NonNullable<T>

Constructs a type by excluding null and undefined from T.

```typescript
type User = { name: string; age?: number | null };

const validUser: NonNullable<User["age"]> = 25;
// Error: Type 'null' is not assignable to type 'number'.
const invalidUser: NonNullable<User["age"]> = null;
```

These utility types, along with others like ReturnType, Parameters, and InstanceType, provide powerful tools for working with types in TypeScript, making your code more expressive and less error-prone.
