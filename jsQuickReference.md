# JavaScript Quick Reference

## Event Listeners

### addEventListener()
```javascript
const element = document.querySelector("selector");
element.addEventListener("eventType", () => {
    // code
});
```

### querySelectorAll() with Loop
```javascript
const elements = document.querySelectorAll("selector");
elements.forEach((element) => {
    element.addEventListener("eventType", functionName);
});
```

---

## Array Access

### Access Element by Index
```javascript
arrayName[index]
```

### Last Element
```javascript
arrayName[arrayName.length - 1]
```

### Array Length
```javascript
arrayName.length
```

---

## Array Methods

### push()
```javascript
arrayName.push(value);
```

### pop()
```javascript
arrayName.pop();
```

### indexOf()
```javascript
arrayName.indexOf(searchValue);
```

### join()
```javascript
arrayName.join(separator);
```

### slice()
```javascript
arrayName.slice(startIndex, endIndex);
```

### splice()
```javascript
// Remove elements
arrayName.splice(startIndex, deleteCount);

// Add elements
arrayName.splice(startIndex, 0, newItem1, newItem2);

// Replace elements
arrayName.splice(startIndex, deleteCount, newItem);
```

### find()
```javascript
arrayName.find(element => element == value);

// With objects
arrayName.find(element => element.property == value);
```

### findIndex()
```javascript
arrayName.findIndex(element => element == value);

// With objects
arrayName.findIndex(element => element.property == value);
```

---

## Control Flow

### If Statement
```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}
```

### Switch Statement
```javascript
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

---

## Loops

### For Loop
```javascript
for (let i = 0; i < array.length; i++) {
    // code
}
```

### forEach
```javascript
arrayName.forEach((element) => {
    // code
});
```

---

## Flags

### Basic Flag Pattern
```javascript
let flagName = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] == targetValue) {
        flagName = true;
    }
}

if (flagName == true) {
    // found
} else {
    // not found
}
```

### Flag with Early Exit
```javascript
let flagName = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] == targetValue) {
        flagName = true;
        break;
    }
}

if (flagName) {
    // found
} else {
    // not found
}
```

---

## Finding Maximum Values

### Store the Index
```javascript
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
        maxIndex = i;
    }
}

console.log(array[maxIndex]);
```

### Store the Value
```javascript
let maxValue = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
    }
}

console.log(maxValue);
```

### Maximum in Array of Objects
```javascript
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i].property > array[maxIndex].property) {
        maxIndex = i;
    }
}

console.log(array[maxIndex]);
```

---

## Counting

### Count Occurrences
```javascript
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == targetValue) {
        count++;
    }
}

console.log(count);
```

### Count with Condition (Objects)
```javascript
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i].property == value) {
        count++;
    }
}

console.log(count);
```

---

## Calculating Averages

### Sum and Average
```javascript
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

let average = sum / array.length;
console.log(average);
```

---

## Arrow Functions

### Basic Syntax
```javascript
(parameter) => {
    return value;
}
```

### Shortened (Single Expression)
```javascript
(parameter) => value
```

### With Array Methods
```javascript
array.find(element => element > 5)
array.findIndex(element => element.property == value)
array.forEach(element => console.log(element))
```

---

## String Operations

### Concatenation with +
```javascript
"text " + variable + " more text"
```

### Template Literals
```javascript
`text ${variable} more text`
```

---

## User Input

### prompt()
```javascript
let userInput = prompt("Question?");
```

### Store and Compare
```javascript
let answer = prompt("Enter value:");
if (answer == "target") {
    // code
}
```

---

## Common Patterns

### Search Array for Value
```javascript
let found = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] == searchValue) {
        found = true;
        break;
    }
}
```

### Find All Matching Elements
```javascript
let matches = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] > targetValue) {
        matches.push(array[i]);
    }
}
```

### Process Array of Objects
```javascript
for (let i = 0; i < objects.length; i++) {
    console.log(objects[i].property);
}
```

---

## Object Access

### Dot Notation
```javascript
objectName.propertyName
```

### Bracket Notation (with variable)
```javascript
objectName[variableName]
```

### Array of Objects
```javascript
arrayName[index].propertyName
```

---

## Comparison Operators

```javascript
==   // equal to
===  // strict equal to
!=   // not equal to
!==  // strict not equal to
>    // greater than
<    // less than
>=   // greater than or equal to
<=   // less than or equal to
```

---

## Logical Operators

```javascript
&&   // AND
||   // OR
!    // NOT
```

### Examples
```javascript
if (condition1 && condition2) { }
if (condition1 || condition2) { }
if (!condition) { }
```

---

## Increment/Decrement

```javascript
variable++    // increment by 1
variable--    // decrement by 1
variable += 5 // add 5
variable -= 3 // subtract 3
```