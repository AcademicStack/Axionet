# JavaScript Fundamentals Reference Guide

## Event Listeners

### addEventListener()
Attaches an event handler to an element that executes code when a specific event occurs.

**Syntax:**
```javascript
element.addEventListener(eventType, functionToRun);
```

**Common Event Types:**
- `"input"` - Fires immediately as user types
- `"change"` - Fires when element loses focus after value changes
- `"click"` - Fires when element is clicked

**Example:**
```javascript
const inputField = document.querySelector("[name='username']");
inputField.addEventListener("input", () => {
    console.log(inputField.value);
});
```

### querySelectorAll()
Returns a collection of all elements matching a selector.

**Syntax:**
```javascript
const elements = document.querySelectorAll("selector");
```

**Example with Loop:**
```javascript
const buttons = document.querySelectorAll("[name='option']");
buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
});
```

---

## Arrays

### Accessing Array Elements
Arrays use zero-based indexing (counting starts at 0).

**Syntax:**
```javascript
arrayName[index]
```

**Example:**
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // "apple"
console.log(fruits[2]);  // "orange"
```

### Array Length
The `length` property returns the total number of elements.

**Syntax:**
```javascript
arrayName.length
```

**Finding Last Element:**
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[fruits.length - 1]);  // "orange"
```

---

## Array Methods

### push()
Adds one or more elements to the end of an array.

**Syntax:**
```javascript
arrayName.push(value);
```

**How it works:**
- Adds element to the end
- Increases array length by 1
- Modifies the original array

**Example:**
```javascript
let items = ["apple", "banana"];
items.push("orange");
// items is now ["apple", "banana", "orange"]
```

### pop()
Removes the last element from an array.

**Syntax:**
```javascript
arrayName.pop();
```

**How it works:**
- Removes the last element
- Decreases array length by 1
- Returns the removed element
- Takes NO parameters

**Example:**
```javascript
let items = ["apple", "banana", "orange"];
let removed = items.pop();
// removed equals "orange"
// items is now ["apple", "banana"]
```

### join()
Converts all array elements into a single string.

**Syntax:**
```javascript
arrayName.join(separator);
```

**How it works:**
- Combines all elements into one string
- Uses the separator between each element
- Returns a new string (does NOT modify original array)
- Default separator is comma if none provided

**Examples:**
```javascript
let items = ["apple", "banana", "orange"];

let result1 = items.join();
// result1 is "apple,banana,orange"

let result2 = items.join(" - ");
// result2 is "apple - banana - orange"

let result3 = items.join("");
// result3 is "applebananaorange"
```

### slice()
Extracts a portion of an array and returns it as a new array.

**Syntax:**
```javascript
arrayName.slice(startIndex, endIndex);
```

**How it works:**
- Extracts from `startIndex` up to (but NOT including) `endIndex`
- Returns a new array
- Does NOT modify the original array
- If `endIndex` omitted, extracts to end of array
- Negative indices count from the end

**Examples:**
```javascript
let items = ["a", "b", "c", "d", "e"];

let result1 = items.slice(1, 3);
// result1 is ["b", "c"]

let result2 = items.slice(2);
// result2 is ["c", "d", "e"]

let result3 = items.slice(-2);
// result3 is ["d", "e"]

let copy = items.slice();
// copy is ["a", "b", "c", "d", "e"]
```

### splice()
Adds, removes, or replaces elements in an array.

**Syntax:**
```javascript
arrayName.splice(startIndex, deleteCount, item1, item2, ...);
```

**Parameters:**
- `startIndex` - Where to start making changes
- `deleteCount` - How many elements to remove
- `item1, item2, ...` (optional) - New elements to add

**How it works:**
- Modifies the original array
- Returns array of removed elements

**Examples:**
```javascript
// Remove elements
let items = ["a", "b", "c", "d", "e"];
items.splice(1, 2);
// items is now ["a", "d", "e"]

// Add elements
let items2 = ["a", "b", "c"];
items2.splice(1, 0, "x", "y");
// items2 is now ["a", "x", "y", "b", "c"]

// Replace elements
let items3 = ["a", "b", "c", "d"];
items3.splice(1, 2, "x");
// items3 is now ["a", "x", "d"]
```

**Key Difference:**
- `slice()` creates a copy
- `splice()` modifies the original

### indexOf()
Finds the index position of a specified value in an array.

**Syntax:**
```javascript
arrayName.indexOf(searchValue);
```

**How it works:**
- Searches for the value
- Returns the index if found
- Returns -1 if not found

**Example:**
```javascript
let days = ["Monday", "Tuesday", "Wednesday"];
let position = days.indexOf("Tuesday");
// position is 1
```

### find()
Returns the first element that satisfies a condition.

**Syntax:**
```javascript
arrayName.find(function(element) {
    return condition;
});
```

**How it works:**
- Tests each element against the condition
- Returns the first element where condition is true
- Returns `undefined` if no match found
- Does NOT modify the original array

**Examples:**
```javascript
// With numbers
let numbers = [5, 12, 8, 130, 44];
let result = numbers.find(num => num > 10);
// result is 12

// With objects
let people = [
    {name: "Bob", age: 25}, 
    {name: "Sue", age: 30}
];
let result = people.find(person => person.age > 26);
// result is {name: "Sue", age: 30}
```

**Parameter Name:**
The parameter (like `num` or `person`) is arbitrary - you choose the name. It represents each element as `find()` loops through the array.

### findIndex()
Returns the index of the first element that satisfies a condition.

**Syntax:**
```javascript
arrayName.findIndex(function(element) {
    return condition;
});
```

**How it works:**
- Same as `find()` but returns the index instead of the element
- Returns -1 if no match found

**Example:**
```javascript
let numbers = [5, 12, 8, 130, 44];
let index = numbers.findIndex(num => num > 10);
// index is 1
```

---

## Control Flow

### Comparison Operators
- `==` - Equal to (value only)
- `===` - Strict equal to (value and type)
- `!=` - Not equal to
- `!==` - Strict not equal to
- `>` - Greater than
- `<` - Less than
- `>=` - Greater than or equal to
- `<=` - Less than or equal to

### If Statements

**Syntax:**
```javascript
if (condition) {
    // code executes if condition is true
} else if (anotherCondition) {
    // code executes if first is false and this is true
} else {
    // code executes if all conditions are false
}
```

**Example:**
```javascript
let userInput = prompt("Enter a color");
if (userInput == "red") {
    console.log("You chose red!");
} else if (userInput == "blue") {
    console.log("You chose blue!");
} else {
    console.log("Color not recognized");
}
```

### Switch Statements

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code if no cases match
}
```

**How it works:**
- Evaluates the expression once
- Compares against each case
- Executes matching case code
- `break` prevents fall-through to next case
- `default` executes if no cases match

**Example:**
```javascript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Midweek day");
}
```

---

## Loops

### For Loop

**Syntax:**
```javascript
for (initialization; condition; increment) {
    // code to repeat
}
```

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Logs: 0, 1, 2, 3, 4
```

### Looping Through Arrays

**Standard For Loop:**
```javascript
let items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
```

**forEach Method:**
```javascript
let items = ["a", "b", "c"];
items.forEach((item) => {
    console.log(item);
});
```

### How a Loop Works: Step-by-Step Example

**Code:**
```javascript
let highestValue = 0;
let numbers = [5, 12, 8, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestValue) {
        highestValue = numbers[i];
    }
}

console.log(highestValue);
```

**Step-by-Step Execution:**

**Before loop starts:**
- `highestValue = 0`
- `numbers = [5, 12, 8, 3]`

**Iteration 1 (i = 0):**
- Check: Is `numbers[0]` (5) > `highestValue` (0)?
- Yes, 5 > 0
- Update: `highestValue = 5`

**Iteration 2 (i = 1):**
- Check: Is `numbers[1]` (12) > `highestValue` (5)?
- Yes, 12 > 5
- Update: `highestValue = 12`

**Iteration 3 (i = 2):**
- Check: Is `numbers[2]` (8) > `highestValue` (12)?
- No, 8 is NOT > 12
- `highestValue` stays 12

**Iteration 4 (i = 3):**
- Check: Is `numbers[3]` (3) > `highestValue` (12)?
- No, 3 is NOT > 12
- `highestValue` stays 12

**After loop ends:**
- `highestValue = 12`
- Console logs: 12

**Key Concept:** The loop checks every element. When it finds a larger value, it updates `highestValue`. By the end, `highestValue` contains the largest number.

---

## Flag Variables

### What is a Flag?
A boolean variable used to track whether a specific condition has been met.

**Purpose:**
- "Flags" or marks that something has happened
- Allows you to check once after a process completes
- Prevents multiple redundant actions

### How Flags Work

**Pattern:**
1. Initialize flag to `false`
2. During a loop, set flag to `true` when condition is met
3. After the loop, check flag and take action

**Generic Example:**
```javascript
let foundItem = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] == searchValue) {
        foundItem = true;
    }
}

if (foundItem == true) {
    console.log("Item was found!");
} else {
    console.log("Item was NOT found!");
}
```

**Why Use Flags?**

Without a flag, you might log a message for every element:
```javascript
// PROBLEM: Logs multiple messages
for (let i = 0; i < array.length; i++) {
    if (array[i] == "target") {
        console.log("Found it!");
    } else {
        console.log("Not found!");
    }
}
// If array has 5 items, this logs 5 messages
```

With a flag, you log only once:
```javascript
// SOLUTION: Logs one message
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] == "target") {
        found = true;
    }
}
if (found) {
    console.log("Found it!");
} else {
    console.log("Not found!");
}
```

### Flag with Early Exit

Use `break` to stop searching once found:
```javascript
let found = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] == searchValue) {
        found = true;
        break;  // Exit loop early
    }
}

if (found) {
    console.log("Found!");
} else {
    console.log("Not found!");
}
```

---

## Finding Maximum Values in Arrays

### Method 1: Store the Index

**When to use:** You need access to all properties of the element.

**Generic Example:**
```javascript
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
        maxIndex = i;
    }
}

console.log("Index: " + maxIndex);
console.log("Value: " + array[maxIndex]);
```

**With Objects:**
```javascript
let players = [
    {name: "Alice", score: 100},
    {name: "Bob", score: 250},
    {name: "Carol", score: 175}
];

let maxIndex = 0;

for (let i = 1; i < players.length; i++) {
    if (players[i].score > players[maxIndex].score) {
        maxIndex = i;
    }
}

console.log(players[maxIndex].name);   // "Bob"
console.log(players[maxIndex].score);  // 250
```

### Method 2: Store the Value

**When to use:** You only need the maximum value itself.

**Generic Example:**
```javascript
let maxValue = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
    }
}

console.log(maxValue);
```

**With Objects:**
```javascript
let players = [
    {name: "Alice", score: 100},
    {name: "Bob", score: 250},
    {name: "Carol", score: 175}
];

let maxScore = 0;

for (let i = 0; i < players.length; i++) {
    if (players[i].score > maxScore) {
        maxScore = players[i].score;
    }
}

console.log(maxScore);  // 250
```

**Key Difference:**
- Storing the index gives you access to the entire element
- Storing the value only gives you the number

---

## Arrow Functions

### Basic Syntax

**Traditional Function:**
```javascript
function(parameter) {
    return parameter * 2;
}
```

**Arrow Function:**
```javascript
(parameter) => {
    return parameter * 2;
}
```

**Shortened (single expression):**
```javascript
(parameter) => parameter * 2
```

### Common Uses

**With Array Methods:**
```javascript
let numbers = [1, 2, 3, 4, 5];

// find()
let result = numbers.find(num => num > 3);

// forEach()
numbers.forEach(num => console.log(num));
```

**Parameter Naming:**
The parameter name is arbitrary - choose what makes sense:
```javascript
array.find(x => x > 5)
array.find(item => item > 5)
array.find(element => element > 5)
// All work identically
```

---

## String Concatenation

### Using + Operator

**Syntax:**
```javascript
"string1" + variable + "string2"
```

**Example:**
```javascript
let index = 3;
let value = 78;
console.log("[" + index + "]:" + value);
// Logs: [3]:78
```

### Template Literals (Modern Alternative)

**Syntax:**
```javascript
`string ${variable} string`
```

**Uses backticks (`) instead of quotes:**
```javascript
let index = 3;
let value = 78;
console.log(`[${index}]:${value}`);
// Logs: [3]:78
```

**Benefits of Template Literals:**
- Cleaner syntax
- Can span multiple lines
- Easier to read with many variables

**Both produce identical output - use whichever you're more comfortable with.**

---

## Common Errors to Avoid

### Assignment vs Comparison
```javascript
// WRONG - assigns value
if (x = 5) { }

// CORRECT - compares value
if (x == 5) { }
```

### Variable Not Defined
```javascript
// WRONG
console.log(myVariable);  // ReferenceError

// CORRECT
let myVariable = 10;
console.log(myVariable);
```

### Accessing Properties
```javascript
let index = 2;

// WRONG - can't use dot notation with variables
array.index

// CORRECT - use bracket notation
array[index]
```

### Array Index Out of Bounds
```javascript
let arr = ["a", "b", "c"];  // length is 3

// WRONG - index 3 doesn't exist
console.log(arr[3]);  // undefined

// CORRECT - last element is length - 1
console.log(arr[arr.length - 1]);  // "c"
```

### Semicolon Placement
```javascript
// Function expression - semicolon after closing brace
let func = () => {
    // code
};

// If/for/while - no semicolon after closing brace
if (condition) {
    // code
}

for (let i = 0; i < 5; i++) {
    // code
}
```

---

## Best Practices

### Formatting
- Use consistent indentation (2 or 4 spaces)
- Put opening braces on same line as statement
- Put closing braces on their own line
- Include semicolons at end of statements
- Use meaningful variable names

### Variable Naming
- Use camelCase: `firstName`, `totalPoints`, `maxIndex`
- Choose descriptive names: `userInput` not `x`
- Boolean flags: `isFound`, `hasValue`, `foundItem`

### Code Organization
```javascript
// Good structure
let variable = initialValue;

for (let i = 0; i < array.length; i++) {
    if (condition) {
        // action
    }
}

console.log(result);
```

---

## Quick Reference

### Common Array Operations

**Add to end:** `array.push(value)`  
**Remove from end:** `array.pop()`  
**Find index:** `array.indexOf(value)`  
**Find element:** `array.find(element => condition)`  
**Find index by condition:** `array.findIndex(element => condition)`  
**Copy portion:** `array.slice(start, end)`  
**Modify array:** `array.splice(start, deleteCount, newItems)`  
**Join to string:** `array.join(separator)`

### Loop Patterns

**Simple iteration:**
```javascript
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

**Find maximum:**
```javascript
let max = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
```

**Count occurrences:**
```javascript
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == targetValue) {
        count++;
    }
}
```

**Search with flag:**
```javascript
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
        found = true;
        break;
    }
}
```