# Control Structures
In Web 1 you learned about the following **control structures**:
1. IF Statements (and all of their variations)
1. While Loops
1. For Loops

Now you will explore the control structures that are listed below. 
For each one, write a brief paragraph that describes the control
structure and the situations when you would use it.
Also, include a fun and imaginative code sample that demonstrates 
the control structure.

## Switch/Case Statement
    A switch/case statement compares a value of some variety to a series of cases. if the value matches
    a case then the switch performs the action specified for the case.

```js

const n = Math.floor(Math.random() * 3) + 1;
let iceCream = "";
if (n == 1){
    iceCream = "vanilla";
}else if(n == 2){
    iceCream = "chocolate";
}else if (n == 3){
    iceCream = "strawberry";
};

switch (iceCream) {
    case "vanilla":
    console.log("Yummy");
    break;

    case "chocolate":
    console.log("Hmmm. Well, nibble at it.");
    break;

    case "strawberry"
    console.log("Ultra violence shall ensue!");
    break;
};

```

## For/In Loop
The For/In loop cycles through the components of an object. 

```js

const dessert = {
    kind: "vanilla",
    brand: "kemps",
    flavor: "Yummey"
};

for (let key in dessert) {
    console.log(key + ": " + dessert[key]);
};


```

## Conditional Operator (aka Ternary Operator)
This is essentially a simplified form of an if/else statement.
```js

const food = "strawberry";
const likes = food == "strawberry" ? "yes" : "no";
console.log("You are " + (food == "strawberry" ? "disgusting" : "awesome"));


```

