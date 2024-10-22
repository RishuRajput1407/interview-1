Difference between “ == “ and “ === “ operators.---------------------------------------

== (Loose Equality):
The == operator compares the values of two variables after performing type conversion if necessary., 
Compares two values for equality after converting both to a common type (type coercion).
It does not check the type of the values.
Example:
let a = 1; 
let b = 1; 
let c = new String("Hello"); 
let d = new String("Hello"); 
let e = "Hello"; 

console.log(a==b); 
console.log(c==d); 
console.log(c==e);

=== (Strict Equality)
Compares two values for equality without converting them.
It checks both the value and the type.
the === operator compares the values of two variables without performing type conversion.
Example:
let b = 5
let abc = a === b
console.log(abc); 


What are the differences between var, let and const?-----------------------------------------

Var
var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
var variables are hoisted to the top of their scope and initialized with a value of undefined.
Example:
if (true) {
    var x = 10;
  }
  console.log(x);
  
Let
let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations.
 It also solves the problem with var that we just covered. 
Example:
if (true) {
    let y = 20;
  }
  console.log(y);
  
Const
Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
Example:
if (true) {
    const z = 30;
  }
  console.log(z);
  
What is execution context--------------------------------------------------

//Execution context is the concept for describing the internal working of a code.  
It is the execution context that decides which code section has access to the functions,
 variables, and objects used in the code. During the execution context, the specific code
  gets parsed line by line then the variables and functions are stored in the memory. it is 
  the execution context that provides an environment for the specific code to get executed
There are three main types of execution contexts:
lobal Execution Context
Function Execution Context
Eval Execution Context

What is creation phase and execution phase.--------------------------------------------------

The creation phase includes creating the global and function execution contexts, 
creating the scope chain, and allocating memories for the variables and functions. 
During the execution phase, the JavaScript engine executes the code line by line. 
This includes evaluating and executing statements.


What is hoisting?---------------------------------------------------------------------

Hoisting is the default behavior in JavaScript where variable and function declarations are moved to 
the top of their respective scopes during the compilation phase. This guarantees that regardless of where 
these declarations appear within a scope, they can be accessed throughout that scope.

Features of Hoisting

Declarations are hoisted, not initializations.
Allows calling functions before their declarations.
All variable and function declarations are processed before any code execution.
Undeclared variables are implicitly created as global variables when assigned a value.


Difference between undefined vs not defined vs NaN----------------------------------------------------------------------

indefined
undefined is a primitive value that indicates a variable has been declared but has not been assigned a value.
When it occurs: This can happen when:
A variable is declared but not initialized.
A function does not return a value.
An object property does not exist.
Example:
let m;
console.log(m)

not defined
The phrase "not defined" is not a value but an error message that occurs when you try to access a variable
 that has not been declared in any scope.
Example:
 console.log(5)

NaN
NaN is a special value that represents an undefined or unrepresentable value in numeric operations, 
indicating a calculation that does not yield a valid number.Attempting to perform arithmetic operations with non-numeric values.
Dividing zero by zero.
Converting a non-numeric string to a number.
Example:
console.log(0 / 0);
console.log(parseInt("hello")); // NaN
console.log("string" * 2); // NaN


How many operators do we have in JS ? 
 1. Arithmetic Operators: + (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus (remainder))
** (Exponentiation)
++ (Increment)
-- (Decrement)

  2. Assignment Operators :  = (Assign)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)
**= (Exponentiation and assign)



3.  Comparison Operators: == (Equal to)
!= (Not equal to)
== (equal types)
=== (Strict equal)
!== (Strict not equal)
> (Greater than)
< (Less than)
>= (Greater than or equal)
<= (Less than or equal)

4.Logical Operators: 
&& (Logical AND)
|| (Logical OR)
! (Logical NOT)
5.Bitwise Operators:
& (AND)
| (OR)
^ (XOR)
~ (NOT)
<< (Left shift)
>> (Right shift)
>>> (Zero-fill Right shift)


Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript-----------------------------------------------

1. Local Scope:
 A variable declared inside a function is in local scope. It means the variable is only accessible within that function and not outside it.
 Whenever you declare a variable using var, let, or const inside a function, it is local to that function.
Example:
function myFunction() {
  let localVariable = 'I am local scope';
  console.log(localVariable); 
}
console.log(localVariable);

2. Block Scope:
 Variables declared with let or const inside a block ({}) are in block scope. They are only accessible within that specific block.
 Any block (e.g., if, for, or just {}) defines a block scope if it contains variables declared with let or const. var does not respect 
 block scope and will hoist the variable outside the block.
Example:
{
    let x = 13;
}
console.log(x);

3. Function Scope:
 Variables declared with var inside a function are function-scoped, meaning they are only accessible within that function. Unlike let and const, var does not have block scope, but it does have function scope.
  var respects function scope but does not respect block scope (like if or for blocks).
Example:
function main_function() { 
	let a = 2; 
	let multiply = function () {
		console.log(a * 5);
	}
	multiply();
}
console.log(main_function());
console.log(a);
multiplyBy2(); 
  testScope();

 4. Scope Chain:
What it means: The scope chain is how JavaScript looks for variables. If a variable is not found in the current scope, 
JavaScript will look at the outer scope (parent scope), all the way up to the global scope. This creates a chain of scopes, 
hence the name "scope chain". When it happens: The scope chain is used when a variable is called. JavaScript starts looking 
for the variable in the current scope, and if it doesn't find it, it goes up to the next outer scope, and so on.
Example:
var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); 
    console.log(outerVariable); 
    console.log(globalVariable); 
  }

  innerFunction();
}
