// JavaScript in 10 — 30-day curriculum data
// Each lesson is designed to be readable + practiced in about 10 minutes.

const LESSONS = [
  {
    day: 1,
    title: "Hello, JavaScript",
    minutes: 10,
    learn: [
      "JavaScript is the language that runs in every web browser and adds behavior to pages: reacting to clicks, updating content, validating forms, and more. It also runs outside the browser (Node.js) for servers and tools.",
      "The fastest way to try JavaScript is your browser's console: right-click a page → Inspect → Console tab, then type code and press Enter. You can also put code inside a <code>&lt;script&gt;</code> tag in an HTML file.",
      "<code>console.log(...)</code> prints a value so you can see what your code is doing. You'll use it constantly to debug."
    ],
    example: `console.log("Hello, JavaScript!");
console.log(2 + 2);
console.log("Today I'm learning day " + 1);`,
    quiz: {
      q: "Which line prints output you can see while debugging?",
      choices: ["console.log(...)", "console.hide(...)", "javascript.print(...)", "log.console(...)"],
      correct: 0,
      explain: "console.log() writes a value to the console — your main debugging tool."
    }
  },
  {
    day: 2,
    title: "Variables: let, const, var",
    minutes: 10,
    learn: [
      "Variables store values so you can reuse and update them. Modern JavaScript uses two keywords: <code>let</code> for values that may change, and <code>const</code> for values that shouldn't be reassigned.",
      "You'll also see <code>var</code> in older code — avoid it. It has confusing scoping rules that <code>let</code> and <code>const</code> fix.",
      "Naming rule of thumb: use camelCase (e.g. <code>firstName</code>), and pick names that describe what the value is."
    ],
    example: `let score = 0;
score = score + 10; // let can be reassigned

const name = "Ada";
// name = "Grace"; // ❌ Error: can't reassign a const

console.log(score, name);`,
    quiz: {
      q: "You have a value that should never change after it's set. Which keyword fits best?",
      choices: ["var", "let", "const", "static"],
      correct: 2,
      explain: "const signals — and enforces — that a variable won't be reassigned."
    }
  },
  {
    day: 3,
    title: "Data Types",
    minutes: 10,
    learn: [
      "Every value in JavaScript has a type. The primitive types are: <code>string</code> (text), <code>number</code> (integers & decimals), <code>boolean</code> (true/false), <code>undefined</code> (no value assigned yet), and <code>null</code> (intentionally empty).",
      "Use <code>typeof</code> to check a value's type — handy when debugging unexpected behavior.",
      "Unlike some languages, you don't declare a type up front; JavaScript figures it out from the value."
    ],
    example: `console.log(typeof "hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (a famous JS quirk!)`,
    quiz: {
      q: "What does typeof 42 return?",
      choices: ["\"int\"", "\"number\"", "\"42\"", "\"integer\""],
      correct: 1,
      explain: "JavaScript has one numeric type, called \"number\", for both integers and decimals."
    }
  },
  {
    day: 4,
    title: "Operators & Expressions",
    minutes: 10,
    learn: [
      "Arithmetic operators: <code>+ - * / %</code> (% is remainder/modulo — useful for things like checking even/odd).",
      "Assignment shortcuts combine an operation with assignment: <code>x += 5</code> means <code>x = x + 5</code>. Same for <code>-=, *=, /=</code>.",
      "<code>++</code> and <code>--</code> increment/decrement a number by 1 — common in loops."
    ],
    example: `let x = 10;
x += 5;      // 15
x *= 2;      // 30
x--;         // 29

console.log(7 % 2);  // 1 (remainder)
console.log(8 % 2);  // 0 → even number`,
    quiz: {
      q: "What does 9 % 2 evaluate to?",
      choices: ["4", "4.5", "1", "0"],
      correct: 2,
      explain: "% returns the remainder after division: 9 ÷ 2 = 4 remainder 1."
    }
  },
  {
    day: 5,
    title: "Strings",
    minutes: 10,
    learn: [
      "Strings hold text, written with single quotes, double quotes, or backticks. Backticks enable <b>template literals</b> — the modern way to build strings with variables inside <code>${...}</code>.",
      "Common string methods: <code>.length</code> (character count), <code>.toUpperCase()</code>/<code>.toLowerCase()</code>, <code>.slice(start, end)</code> to grab a substring, and <code>.includes(text)</code> to search."
    ],
    example: `const first = "Ada";
const last = "Lovelace";

const full = \`\${first} \${last}\`;
console.log(full);              // "Ada Lovelace"
console.log(full.length);       // 11
console.log(full.toUpperCase());// "ADA LOVELACE"
console.log(full.includes("Love")); // true`,
    quiz: {
      q: "What's the modern way to insert a variable into a string?",
      choices: [
        "\"Hello \" + name",
        "`Hello ${name}`",
        "\"Hello %s\" % name",
        "Hello + name"
      ],
      correct: 1,
      explain: "Template literals (backticks) with ${} let you embed expressions directly in a string."
    }
  },
  {
    day: 6,
    title: "Numbers & Math",
    minutes: 10,
    learn: [
      "<code>parseInt(text)</code> and <code>parseFloat(text)</code> convert strings to numbers — essential when reading form input, which always arrives as text.",
      "The built-in <code>Math</code> object has useful helpers: <code>Math.round()</code>, <code>Math.floor()</code>, <code>Math.ceil()</code>, <code>Math.random()</code>, and <code>Math.max()/Math.min()</code>.",
      "<code>NaN</code> (\"Not a Number\") shows up when a math operation fails, e.g. parsing text that isn't numeric."
    ],
    example: `console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14
console.log(Math.round(4.6));    // 5
console.log(Math.max(3, 9, 1));  // 9
console.log(Math.random());      // random number between 0 and 1
console.log(parseInt("abc"));    // NaN`,
    quiz: {
      q: "Which function turns \"3.14\" into the number 3.14?",
      choices: ["Number.text()", "parseFloat()", "toDecimal()", "Math.parse()"],
      correct: 1,
      explain: "parseFloat() converts a string to a decimal number (parseInt() would give just 3)."
    }
  },
  {
    day: 7,
    title: "Booleans & Truthy/Falsy",
    minutes: 10,
    learn: [
      "A boolean is <code>true</code> or <code>false</code>. But JavaScript also treats every value as \"truthy\" or \"falsy\" when used in a condition.",
      "The only falsy values are: <code>false, 0, \"\", null, undefined, NaN</code>. Everything else — including <code>\"0\"</code> (a string!) and empty arrays/objects — is truthy.",
      "This matters when writing conditions like <code>if (name)</code> to check \"is this set to something?\""
    ],
    example: `if ("") console.log("truthy"); else console.log("falsy"); // falsy
if (0) console.log("truthy"); else console.log("falsy");   // falsy
if ("0") console.log("truthy"); else console.log("falsy"); // truthy!
if ([]) console.log("truthy"); else console.log("falsy");  // truthy!`,
    quiz: {
      q: "Which of these is truthy?",
      choices: ["0", "\"\"", "\"0\"", "null"],
      correct: 2,
      explain: "The string \"0\" is non-empty text, so it's truthy — only the number 0 and empty string \"\" are falsy."
    }
  },
  {
    day: 8,
    title: "Comparison & Equality",
    minutes: 10,
    learn: [
      "Comparison operators: <code>&lt; &gt; &lt;= &gt;=</code> compare numbers/strings. <code>===</code> (strict equality) checks value AND type. <code>==</code> (loose equality) converts types first, which causes surprising bugs.",
      "Rule of thumb: always use <code>===</code> and <code>!==</code>. Avoid <code>==</code> and <code>!=</code> unless you have a specific reason."
    ],
    example: `console.log(5 === 5);   // true
console.log(5 === "5"); // false — different types
console.log(5 == "5");  // true — "5" gets converted, can be confusing!
console.log(5 !== "5"); // true`,
    quiz: {
      q: "Why do most style guides recommend === over ==?",
      choices: [
        "=== is faster to type",
        "== silently converts types, which can cause bugs",
        "=== also works for assignment",
        "There's no real difference"
      ],
      correct: 1,
      explain: "== performs type coercion before comparing, which can produce unexpected true/false results."
    }
  },
  {
    day: 9,
    title: "Conditionals: if / else",
    minutes: 10,
    learn: [
      "<code>if (condition) { ... } else if (condition) { ... } else { ... }</code> runs different code depending on a condition.",
      "The <b>ternary operator</b> <code>condition ? valueIfTrue : valueIfFalse</code> is a compact one-line if/else, great for simple choices."
    ],
    example: `const age = 20;

if (age < 13) {
  console.log("child");
} else if (age < 20) {
  console.log("teen");
} else {
  console.log("adult");
}

const status = age >= 18 ? "adult" : "minor";
console.log(status);`,
    quiz: {
      q: "What does `age >= 18 ? \"adult\" : \"minor\"` do?",
      choices: [
        "Always returns \"adult\"",
        "Is shorthand for an if/else that picks one of two values",
        "Throws an error",
        "Loops until age is 18"
      ],
      correct: 1,
      explain: "The ternary operator is a compact if/else expression that evaluates to one value or the other."
    }
  },
  {
    day: 10,
    title: "Switch Statements",
    minutes: 10,
    learn: [
      "<code>switch</code> is useful when you're comparing one value against many possible exact matches — cleaner than a long if/else if chain.",
      "Each <code>case</code> needs a <code>break</code> or execution \"falls through\" into the next case. <code>default</code> runs when nothing matches."
    ],
    example: `const day = "Mon";

switch (day) {
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  case "Mon":
    console.log("Start of week");
    break;
  default:
    console.log("Midweek");
}`,
    quiz: {
      q: "What happens if you forget `break` in a switch case?",
      choices: [
        "Nothing, it's optional and has no effect",
        "It throws a syntax error",
        "Execution falls through into the next case",
        "The switch stops immediately"
      ],
      correct: 2,
      explain: "Without break, JavaScript keeps executing the following case's code too — a common bug source."
    }
  },
  {
    day: 11,
    title: "Arrays",
    minutes: 10,
    learn: [
      "An array is an ordered list of values, written with square brackets. Access items by index (starting at 0).",
      "<code>.push(item)</code> adds to the end, <code>.pop()</code> removes from the end, <code>.length</code> gives the count."
    ],
    example: `const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);     // "apple"
console.log(fruits.length); // 3

fruits.push("date");
console.log(fruits);        // ["apple","banana","cherry","date"]

fruits.pop();
console.log(fruits);        // ["apple","banana","cherry"]`,
    quiz: {
      q: "What is fruits[0] if fruits = [\"apple\", \"banana\"]?",
      choices: ["\"banana\"", "\"apple\"", "undefined", "1"],
      correct: 1,
      explain: "Array indexes start at 0, so fruits[0] is the first item, \"apple\"."
    }
  },
  {
    day: 12,
    title: "Loops: for & while",
    minutes: 10,
    learn: [
      "A <code>for</code> loop repeats code a set number of times: <code>for (let i = 0; i &lt; 5; i++) { ... }</code>.",
      "A <code>while</code> loop repeats as long as a condition is true — good when you don't know the count in advance.",
      "<code>break</code> exits a loop early; <code>continue</code> skips to the next iteration."
    ],
    example: `for (let i = 0; i < 3; i++) {
  console.log("i is", i);
}

let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}`,
    quiz: {
      q: "What does `continue` do inside a loop?",
      choices: [
        "Ends the loop entirely",
        "Skips the rest of this iteration and moves to the next",
        "Pauses the loop",
        "Restarts the loop from i = 0"
      ],
      correct: 1,
      explain: "continue jumps straight to the next iteration, skipping any remaining code in the current one."
    }
  },
  {
    day: 13,
    title: "Array Iteration",
    minutes: 10,
    learn: [
      "<code>.forEach(callback)</code> runs a function once for every item in an array — the go-to way to \"do something with each item\".",
      "<code>for...of</code> is a simpler loop syntax that also walks through each item, and works with break/continue."
    ],
    example: `const nums = [10, 20, 30];

nums.forEach((num, index) => {
  console.log(index, num);
});

for (const num of nums) {
  console.log(num * 2);
}`,
    quiz: {
      q: "Which array method runs a function once per item automatically?",
      choices: [".length", ".forEach()", ".push()", ".typeof()"],
      correct: 1,
      explain: "forEach() calls your callback function for every element in the array."
    }
  },
  {
    day: 14,
    title: "Functions",
    minutes: 10,
    learn: [
      "Functions bundle reusable code. Define one with <code>function name(parameters) { ...; return value; }</code>, then call it with <code>name(arguments)</code>.",
      "<code>return</code> sends a value back to wherever the function was called; without it, a function returns <code>undefined</code>."
    ],
    example: `function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // 7

function greet(name) {
  console.log("Hello, " + name);
  // no return → returns undefined
}
greet("Ada");`,
    quiz: {
      q: "What does a function return if it has no `return` statement?",
      choices: ["null", "0", "undefined", "An error"],
      correct: 2,
      explain: "A function without an explicit return implicitly returns undefined."
    }
  },
  {
    day: 15,
    title: "Function Expressions & Arrow Functions",
    minutes: 10,
    learn: [
      "You can store a function in a variable (a \"function expression\"). Arrow functions are a shorter syntax: <code>(a, b) => a + b</code>.",
      "For a single expression, arrow functions can skip <code>{}</code> and <code>return</code> — the result is returned automatically.",
      "Arrow functions are everywhere in modern JS, especially as short callbacks."
    ],
    example: `const add = function (a, b) {
  return a + b;
};

const multiply = (a, b) => a * b; // implicit return

const square = x => x * x; // single param, no parens needed

console.log(add(2, 3), multiply(2, 3), square(4));`,
    quiz: {
      q: "What does `const double = x => x * 2;` do?",
      choices: [
        "Nothing, it's invalid syntax",
        "Defines a function that returns x doubled",
        "Declares a variable equal to x times 2 immediately",
        "Creates an infinite loop"
      ],
      correct: 1,
      explain: "This is an arrow function with an implicit return — double(5) would return 10."
    }
  },
  {
    day: 16,
    title: "Scope",
    minutes: 10,
    learn: [
      "Scope determines where a variable is accessible. Variables declared with <code>let</code>/<code>const</code> inside <code>{ }</code> (a block) only exist inside that block.",
      "Variables declared outside any function are <b>global</b> and accessible everywhere. Prefer keeping variables as local as possible — it prevents bugs from unrelated code changing them."
    ],
    example: `function example() {
  let local = "I only exist in here";
  console.log(local);
}
example();
// console.log(local); // ❌ Error: local is not defined out here

if (true) {
  let blockVar = "inside the if-block";
  console.log(blockVar);
}
// console.log(blockVar); // ❌ Error: not accessible here`,
    quiz: {
      q: "A variable declared with `let` inside an if-block is accessible...",
      choices: [
        "Everywhere in the file",
        "Only inside that block",
        "Only inside functions",
        "Nowhere, it's an error"
      ],
      correct: 1,
      explain: "let and const are block-scoped — they only exist within the { } they were declared in."
    }
  },
  {
    day: 17,
    title: "Objects",
    minutes: 10,
    learn: [
      "Objects store related data as key-value pairs — great for representing \"a thing\" with properties.",
      "Access properties with dot notation (<code>obj.name</code>) or bracket notation (<code>obj[\"name\"]</code>) — brackets are needed when the key is dynamic or has special characters."
    ],
    example: `const person = {
  name: "Ada",
  age: 28,
  isAdmin: true
};

console.log(person.name);       // "Ada"
console.log(person["age"]);     // 28

person.age = 29;      // update
person.email = "ada@example.com"; // add new property
console.log(person);`,
    quiz: {
      q: "When do you need bracket notation instead of dot notation?",
      choices: [
        "Never, they're identical",
        "When the property name is stored in a variable or has spaces",
        "Only for arrays",
        "Only for numbers"
      ],
      correct: 1,
      explain: "Bracket notation lets you use a dynamic key, e.g. obj[keyVariable], or keys with spaces/special chars."
    }
  },
  {
    day: 18,
    title: "Object Methods & this",
    minutes: 10,
    learn: [
      "A function stored as an object property is called a <b>method</b>. Inside a regular method, <code>this</code> refers to the object it was called on.",
      "Shorthand method syntax: <code>{ greet() { ... } }</code> instead of <code>{ greet: function() { ... } }</code>."
    ],
    example: `const dog = {
  name: "Rex",
  bark() {
    console.log(this.name + " says woof!");
  }
};

dog.bark(); // "Rex says woof!"`,
    quiz: {
      q: "Inside dog.bark(), what does `this` refer to?",
      choices: ["The global window object", "The dog object", "undefined", "The bark function itself"],
      correct: 1,
      explain: "When a method is called as obj.method(), `this` inside it refers to obj — here, dog."
    }
  },
  {
    day: 19,
    title: "Array Methods: map & filter",
    minutes: 10,
    learn: [
      "<code>.map(fn)</code> transforms every item in an array and returns a <b>new array</b> of the results — same length as the original.",
      "<code>.filter(fn)</code> returns a new array containing only the items where <code>fn</code> returns true. Neither method changes the original array."
    ],
    example: `const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4]`,
    quiz: {
      q: "What does nums.filter(n => n > 3) return for nums = [1,2,3,4,5]?",
      choices: ["[4, 5]", "true", "[1,2,3]", "5"],
      correct: 0,
      explain: "filter() keeps only the items that satisfy the condition — here, values greater than 3."
    }
  },
  {
    day: 20,
    title: "Array Methods: reduce & find",
    minutes: 10,
    learn: [
      "<code>.reduce((acc, item) => ..., startValue)</code> combines all array items into a single value, e.g. a sum or total — it's the most flexible array method.",
      "<code>.find(fn)</code> returns the first item matching a condition (or undefined if none match)."
    ],
    example: `const nums = [1, 2, 3, 4];

const total = nums.reduce((acc, n) => acc + n, 0);
console.log(total); // 10

const firstEven = nums.find(n => n % 2 === 0);
console.log(firstEven); // 2`,
    quiz: {
      q: "What does [1,2,3].reduce((acc, n) => acc + n, 0) return?",
      choices: ["[1,2,3]", "6", "0", "3"],
      correct: 1,
      explain: "reduce accumulates: 0+1=1, 1+2=3, 3+3=6 — the final total is 6."
    }
  },
  {
    day: 21,
    title: "Destructuring",
    minutes: 10,
    learn: [
      "Destructuring unpacks values from arrays or objects into named variables in one line, instead of accessing them one at a time.",
      "Object destructuring matches by property name: <code>const { name } = person;</code>. Array destructuring matches by position: <code>const [first, second] = arr;</code>."
    ],
    example: `const person = { name: "Ada", age: 28 };
const { name, age } = person;
console.log(name, age); // "Ada" 28

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // "red" "green"`,
    quiz: {
      q: "What does `const { age } = person;` do?",
      choices: [
        "Deletes the age property",
        "Creates a variable `age` holding person.age",
        "Renames person to age",
        "Throws an error if age doesn't exist"
      ],
      correct: 1,
      explain: "Object destructuring pulls out a property and assigns it to a variable of the same name."
    }
  },
  {
    day: 22,
    title: "Spread & Rest",
    minutes: 10,
    learn: [
      "The <b>spread</b> operator <code>...</code> expands an array or object into individual elements — great for copying or merging: <code>[...arr1, ...arr2]</code>.",
      "The <b>rest</b> operator uses the same <code>...</code> syntax to gather multiple arguments into one array, usually in function parameters."
    ],
    example: `const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]

const original = { x: 1 };
const copy = { ...original, y: 2 };
console.log(copy); // { x: 1, y: 2 }

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`,
    quiz: {
      q: "In `function sum(...nums) {}`, what is `nums` inside the function?",
      choices: [
        "The first argument only",
        "An array of all the arguments passed in",
        "undefined",
        "A string"
      ],
      correct: 1,
      explain: "Rest parameters collect any number of arguments into a single array."
    }
  },
  {
    day: 23,
    title: "The DOM: Selecting Elements",
    minutes: 10,
    learn: [
      "The DOM (Document Object Model) is how JavaScript sees and controls an HTML page. <code>document.querySelector(css)</code> returns the first matching element; <code>document.querySelectorAll(css)</code> returns all matches.",
      "You can select by tag (<code>\"p\"</code>), class (<code>\".title\"</code>), or id (<code>\"#main\"</code>) — same syntax as CSS selectors."
    ],
    example: `// Given: <button id="save">Save</button>

const button = document.querySelector("#save");
console.log(button); // the <button> element

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs.length);`,
    quiz: {
      q: "How do you select the element with id=\"save\"?",
      choices: [
        "document.querySelector(\"save\")",
        "document.querySelector(\"#save\")",
        "document.querySelector(\".save\")",
        "document.get(\"save\")"
      ],
      correct: 1,
      explain: "# targets an id in CSS-style selectors, same as it does in querySelector."
    }
  },
  {
    day: 24,
    title: "DOM Manipulation",
    minutes: 10,
    learn: [
      "Once you've selected an element, you can change it: <code>.textContent</code> sets its text, <code>.style.property</code> sets a CSS style, and <code>.classList.add/remove/toggle()</code> manages CSS classes.",
      "Prefer <code>.textContent</code> over <code>.innerHTML</code> when inserting plain text — innerHTML parses HTML, which can be a security risk with untrusted input."
    ],
    example: `const heading = document.querySelector("h1");

heading.textContent = "Welcome!";
heading.style.color = "blue";
heading.classList.add("highlight");
heading.classList.toggle("hidden");`,
    quiz: {
      q: "Why prefer .textContent over .innerHTML for plain text?",
      choices: [
        "textContent is deprecated",
        "innerHTML parses the string as HTML, which is risky with untrusted input",
        "There's no difference",
        "textContent only works on buttons"
      ],
      correct: 1,
      explain: "innerHTML executes/renders HTML tags, which can enable injection attacks if the text comes from users."
    }
  },
  {
    day: 25,
    title: "Events",
    minutes: 10,
    learn: [
      "<code>element.addEventListener(\"event\", callback)</code> runs your function when something happens — a click, a keypress, a form submit, etc.",
      "The callback receives an <b>event object</b> with details, like <code>event.target</code> (what was clicked)."
    ],
    example: `// Given: <button id="save">Save</button>

const button = document.querySelector("#save");

button.addEventListener("click", (event) => {
  console.log("Clicked:", event.target);
  button.textContent = "Saved!";
});`,
    quiz: {
      q: "What triggers the callback in addEventListener(\"click\", fn)?",
      choices: [
        "The page loading",
        "The user clicking the element",
        "Every second",
        "It runs immediately once"
      ],
      correct: 1,
      explain: "The listener fires the callback whenever the named event — here, a click — occurs on that element."
    }
  },
  {
    day: 26,
    title: "Closures",
    minutes: 10,
    learn: [
      "A closure is a function that \"remembers\" variables from where it was created, even after that outer function has finished running.",
      "This is how you create private state in JavaScript — a common pattern for counters, caches, and encapsulation."
    ],
    example: `function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3 — it remembers "count" between calls!`,
    quiz: {
      q: "Why does calling counter() repeatedly give increasing numbers?",
      choices: [
        "It's random",
        "The returned function closes over and remembers `count`",
        "JavaScript resets count automatically",
        "It doesn't — this is a bug"
      ],
      correct: 1,
      explain: "The inner function forms a closure around `count`, keeping it alive between calls instead of resetting it."
    }
  },
  {
    day: 27,
    title: "Callbacks & Higher-Order Functions",
    minutes: 10,
    learn: [
      "A <b>callback</b> is a function passed into another function to be called later. A <b>higher-order function</b> is any function that takes a function as an argument or returns one (map, filter, and addEventListener all qualify).",
      "This pattern lets you customize behavior without rewriting the surrounding logic."
    ],
    example: `function processOrder(item, onSuccess) {
  console.log("Processing", item);
  onSuccess(item); // calling the callback
}

processOrder("Book", (item) => {
  console.log(item + " shipped!");
});`,
    quiz: {
      q: "What best describes a callback function?",
      choices: [
        "A function that runs before the page loads",
        "A function passed into another function to be invoked later",
        "A function with no parameters",
        "A built-in browser function"
      ],
      correct: 1,
      explain: "Callbacks let you hand behavior to another function to run at the right moment."
    }
  },
  {
    day: 28,
    title: "Promises",
    minutes: 10,
    learn: [
      "A Promise represents a value that will be available later — typically from an async operation like a network request. It's in one of three states: pending, fulfilled, or rejected.",
      "Use <code>.then(result => ...)</code> to handle success and <code>.catch(error => ...)</code> to handle failure."
    ],
    example: `function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "Ada" }), 1000);
  });
}

fetchUser()
  .then(user => console.log("Got user:", user))
  .catch(err => console.log("Error:", err));`,
    quiz: {
      q: "Which method handles a Promise's successful result?",
      choices: [".catch()", ".then()", ".resolve()", ".success()"],
      correct: 1,
      explain: ".then() registers a callback that runs once the promise resolves successfully."
    }
  },
  {
    day: 29,
    title: "Async/Await & Error Handling",
    minutes: 10,
    learn: [
      "<code>async/await</code> is cleaner syntax for working with Promises. Mark a function <code>async</code>, then use <code>await</code> to pause until a Promise resolves — the code reads top-to-bottom like synchronous code.",
      "Wrap awaited code in <code>try { ... } catch (error) { ... }</code> to handle failures gracefully instead of crashing."
    ],
    example: `async function getUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUser();`,
    quiz: {
      q: "What does `await` do inside an async function?",
      choices: [
        "Skips the next line",
        "Pauses execution until the Promise resolves, then returns its value",
        "Converts a value to a string",
        "Stops the function permanently"
      ],
      correct: 1,
      explain: "await pauses the async function until the awaited Promise settles, then yields the resolved value."
    }
  },
  {
    day: 30,
    title: "Putting It Together",
    minutes: 10,
    learn: [
      "You now know: variables & types, operators, conditionals & loops, functions, arrays & objects, DOM manipulation & events, and async JavaScript with promises. That's the real foundation used in virtually every JS/React/Node codebase.",
      "Next steps: build something small end-to-end — a to-do list, a quiz app, or a simple API call to a public API (like a weather or joke API) — using what you've learned. Reading is 20% of learning to code; building is the other 80%.",
      "Keep going: pick one real project and finish it, even if it's small and imperfect."
    ],
    example: `// A tiny recap combining several days of lessons
const todos = ["Learn JS", "Build a project", "Ship it"];

const summary = todos
  .map((task, i) => \`\${i + 1}. \${task}\`)
  .join("\\n");

console.log(summary);
// 1. Learn JS
// 2. Build a project
// 3. Ship it`,
    quiz: {
      q: "What's the recommended next step after finishing this course?",
      choices: [
        "Memorize the MDN docs",
        "Build a small real project using what you learned",
        "Immediately learn 5 frameworks at once",
        "Nothing, you're done learning"
      ],
      correct: 1,
      explain: "Applying concepts in a real (even small) project cements learning far better than reading alone."
    }
  }
];
