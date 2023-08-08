# General JS questions

### Types of variables in JS and their differences

const: you cannot reassign values initialized with const.

let: you can reassign values initialized with let, let is block scoped.

```javascript
if(true) {
    let a = 1;
}

/* this will throw an error since outside of the scope of the if, a is not defined */
console.log(a);
```

var: you can reassign values initialized with var, var is not block scoped.

```javascript
if(true) {
    var a = 1;
}

/* this will log the value 1 due to hoisting */
console.log(a);
```

### What is hoisting and why does it exist?

Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

<ol>
<li>
Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
</li>
<li>
Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
</li>
<li>
The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
</li>
<li>
The side effects of a declaration are produced before evaluating the rest of the code that contains it.
</li>
</ol>

### Difference between class and object

A class is a blueprint for declaring and creating objects. An object is a class instance that allows programmers to use variables and methods from inside the class. Memory is not allocated to classes. Classes have no physical existence.

### What is the <ins>this</ins> keyword, and when do we use it?

In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

<ul>
<li>
In an object method, this refers to the object.
</li>
<li>
Alone, this refers to the global object.
</li>
<li>
In a function, this refers to the global object.
</li>
<li>
In a function, in strict mode, this is undefined.
</li>
<li>
In an event, this refers to the element that received the event.
</li>
<li>
Methods like call(), apply(), and bind() can refer this to any object.
</li>
</ul>

### Difference between normal function and arrow function

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

<ul>
<li>
Arrow functions don't have their own bindings to <ins>this</ins>, <ins>arguments</ins>, or <ins>super</ins>, and should not be used as methods.
</li>
<li>
Arrow functions cannot be used as constructors. Calling them with <ins>new</ins> throws a TypeError. They also don't have access to the <ins>new.target</ins> keyword.
</li>
<li>
Arrow functions cannot use <ins>yield</ins> within their body and cannot be created as generator functions.
</li>
</ul>

