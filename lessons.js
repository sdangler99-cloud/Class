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
  },
  {
    day: 31,
    title: "Classes",
    minutes: 10,
    learn: [
      "A class is a template for creating objects with shared structure and behavior. Define one with <code>class Name { constructor(...) { ... } method() { ... } }</code>, then create instances with <code>new Name(...)</code>.",
      "The <code>constructor</code> method runs automatically when you create an instance with <code>new</code>, and is where you set up initial properties."
    ],
    example: `class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " says woof!");
  }
}

const rex = new Dog("Rex");
rex.bark(); // "Rex says woof!"`,
    quiz: {
      q: "What runs automatically when you create a new instance with `new ClassName()`?",
      choices: ["The first method defined", "The constructor", "Nothing runs automatically", "The class declaration itself"],
      correct: 1,
      explain: "The constructor method runs immediately, letting you set up the new instance's initial state."
    }
  },
  {
    day: 32,
    title: "Inheritance",
    minutes: 10,
    learn: [
      "<code>extends</code> lets one class inherit properties and methods from another, avoiding duplicate code between related types.",
      "<code>super(...)</code> calls the parent class's constructor, and <code>super.method()</code> calls a parent's method from inside an overriding one."
    ],
    example: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Cat extends Animal {
  speak() {
    super.speak();
    console.log(this.name + " meows.");
  }
}

new Cat("Whiskers").speak();`,
    quiz: {
      q: "What does `super()` do inside a subclass's constructor?",
      choices: ["Creates a new subclass", "Calls the parent class's constructor", "Deletes the parent class", "Nothing, it's optional decoration"],
      correct: 1,
      explain: "super() runs the parent class's constructor, letting the subclass build on its setup."
    }
  },
  {
    day: 33,
    title: "Getters, Setters & Static Members",
    minutes: 10,
    learn: [
      "Getters (<code>get</code>) and setters (<code>set</code>) let you run code when a property is read or written, while still using normal property syntax (<code>obj.prop</code>, not <code>obj.prop()</code>).",
      "<code>static</code> methods/properties belong to the class itself, not to instances — useful for utility functions related to the class."
    ],
    example: `class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  static describe() {
    return "A circle has a radius and an area.";
  }
}

const c = new Circle(2);
console.log(c.area); // ~12.57, computed on read
console.log(Circle.describe());`,
    quiz: {
      q: "How do you call a getter named `area` defined on a class?",
      choices: ["circle.area()", "circle.area", "Circle.area", "get(circle.area)"],
      correct: 1,
      explain: "Getters are accessed like plain properties, without parentheses — the parentheses would try to call the result."
    }
  },
  {
    day: 34,
    title: "this, call, apply & bind",
    minutes: 10,
    learn: [
      "<code>this</code> depends on how a function is called, not where it's defined — that's why it can be confusing. Calling <code>obj.method()</code> sets <code>this</code> to <code>obj</code>; calling a bare function usually leaves <code>this</code> undefined (in strict mode).",
      "<code>.call(thisArg, ...args)</code> and <code>.apply(thisArg, argsArray)</code> invoke a function immediately with a chosen <code>this</code>. <code>.bind(thisArg)</code> returns a new function permanently locked to that <code>this</code>, useful for callbacks."
    ],
    example: `function greet() {
  console.log("Hi, I'm " + this.name);
}

const user = { name: "Ada" };

greet.call(user);              // "Hi, I'm Ada"
const boundGreet = greet.bind(user);
boundGreet();                  // "Hi, I'm Ada" — this is now locked`,
    quiz: {
      q: "What does .bind(obj) return?",
      choices: ["The result of calling the function immediately", "A new function permanently bound to obj as this", "undefined", "A copy of obj"],
      correct: 1,
      explain: "bind() doesn't call the function — it hands back a new function whose this is fixed to obj."
    }
  },
  {
    day: 35,
    title: "JSON",
    minutes: 10,
    learn: [
      "JSON (JavaScript Object Notation) is a text format for representing data — the standard way APIs send and receive structured data.",
      "<code>JSON.stringify(value)</code> converts a JS value to a JSON string. <code>JSON.parse(text)</code> converts a JSON string back into a JS value. JSON only supports strings, numbers, booleans, null, arrays, and plain objects — not functions or undefined."
    ],
    example: `const user = { name: "Ada", age: 28, skills: ["JS", "Math"] };

const json = JSON.stringify(user);
console.log(json); // '{"name":"Ada","age":28,"skills":["JS","Math"]}'

const parsed = JSON.parse(json);
console.log(parsed.name); // "Ada"`,
    quiz: {
      q: "Which method turns a JS object into a JSON string?",
      choices: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "Object.json()"],
      correct: 1,
      explain: "JSON.stringify() serializes a JS value into JSON text; JSON.parse() does the reverse."
    }
  },
  {
    day: 36,
    title: "The Fetch API in Depth",
    minutes: 10,
    learn: [
      "<code>fetch(url)</code> sends a network request and returns a Promise that resolves to a Response object. Call <code>.json()</code> on the response to parse the body as JSON (this also returns a Promise).",
      "To send data (e.g. a POST request), pass a second options object: <code>{ method: \"POST\", headers: {...}, body: JSON.stringify(data) }</code>.",
      "Always check <code>response.ok</code> — fetch doesn't reject on HTTP error statuses like 404 or 500, only on network failures."
    ],
    example: `async function createPost(title) {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response.json();
}`,
    quiz: {
      q: "Does fetch() reject its promise on a 404 response?",
      choices: ["Yes, always", "No — you must check response.ok yourself", "Only for POST requests", "Only in Node.js"],
      correct: 1,
      explain: "fetch() only rejects on network-level failures; a 404 or 500 still resolves successfully, so you must check response.ok."
    }
  },
  {
    day: 37,
    title: "Array Methods: sort, some, every",
    minutes: 10,
    learn: [
      "<code>.sort(compareFn)</code> sorts an array in place. Without a compare function it sorts as strings (surprising for numbers!) — pass <code>(a, b) => a - b</code> for ascending numeric sort.",
      "<code>.some(fn)</code> returns true if at least one item matches; <code>.every(fn)</code> returns true only if all items match. Both stop early once the answer is known."
    ],
    example: `const nums = [10, 2, 33, 4];

nums.sort();
console.log(nums); // [10, 2, 33, 4] sorted as strings — wrong order!

nums.sort((a, b) => a - b);
console.log(nums); // [2, 4, 10, 33] — correct numeric order

console.log(nums.some(n => n > 30));  // true
console.log(nums.every(n => n > 0));  // true`,
    quiz: {
      q: "Why does [10, 2, 33].sort() give a surprising order?",
      choices: ["sort() is broken", "Without a compare function, it sorts elements as strings", "Arrays can't be sorted", "It only works on strings"],
      correct: 1,
      explain: "The default sort converts elements to strings and compares them character by character, not numerically."
    }
  },
  {
    day: 38,
    title: "Sets and Maps",
    minutes: 10,
    learn: [
      "A <code>Set</code> stores unique values — adding a duplicate has no effect. Great for deduplicating an array: <code>[...new Set(array)]</code>.",
      "A <code>Map</code> stores key-value pairs like an object, but keys can be any type (not just strings) and it preserves insertion order reliably."
    ],
    example: `const unique = [...new Set([1, 2, 2, 3, 3, 3])];
console.log(unique); // [1, 2, 3]

const scores = new Map();
scores.set("Ada", 95);
scores.set("Grace", 88);
console.log(scores.get("Ada")); // 95
console.log(scores.size);       // 2`,
    quiz: {
      q: "What's the easiest way to remove duplicates from an array?",
      choices: ["array.unique()", "[...new Set(array)]", "array.dedupe()", "Object.values(array)"],
      correct: 1,
      explain: "Spreading the array into a Set drops duplicates automatically, and spreading it back out gives you an array again."
    }
  },
  {
    day: 39,
    title: "Optional Chaining & Nullish Coalescing",
    minutes: 10,
    learn: [
      "<code>?.</code> (optional chaining) safely accesses a nested property, returning <code>undefined</code> instead of throwing if something along the way is <code>null</code>/<code>undefined</code>: <code>user?.address?.city</code>.",
      "<code>??</code> (nullish coalescing) returns the right-hand value only if the left is <code>null</code> or <code>undefined</code> — unlike <code>||</code>, it doesn't treat <code>0</code> or <code>\"\"</code> as \"missing\"."
    ],
    example: `const user = { name: "Ada" };

console.log(user.address?.city); // undefined, no error

const count = 0;
console.log(count || 10); // 10 — wrong! 0 is treated as falsy
console.log(count ?? 10); // 0 — correct, 0 is not nullish`,
    quiz: {
      q: "Why use ?? instead of || when a default value of 0 is valid?",
      choices: ["There's no real difference", "|| treats 0 and \"\" as missing and replaces them; ?? only replaces null/undefined", "?? is faster to run", "|| doesn't work with numbers"],
      correct: 1,
      explain: "|| falls back on any falsy value, including 0 and \"\"; ?? only falls back on null or undefined."
    }
  },
  {
    day: 40,
    title: "IIFEs & the Road to Modules",
    minutes: 10,
    learn: [
      "An IIFE (Immediately Invoked Function Expression) — <code>(function () { ... })()</code> — runs once immediately and keeps its variables private, an older way to avoid polluting the global scope before modules existed.",
      "Modern JavaScript uses modules instead: each file gets its own private scope automatically, and you explicitly <code>export</code> what other files should be able to <code>import</code>."
    ],
    example: `(function () {
  const secret = "only visible in here";
  console.log(secret);
})();
// console.log(secret); // ❌ Error: not defined out here`,
    quiz: {
      q: "What problem did IIFEs solve before ES modules existed?",
      choices: ["Making code run faster", "Keeping variables out of the global scope", "Adding types to JavaScript", "Enabling async/await"],
      correct: 1,
      explain: "Wrapping code in an IIFE kept its variables private instead of leaking into the shared global scope."
    }
  },
  {
    day: 41,
    title: "ES Modules",
    minutes: 10,
    learn: [
      "<code>export</code> marks a value from a file as available to other files; <code>import</code> brings it in. <code>export default</code> marks a file's single main export.",
      "Modules load with <code>&lt;script type=\"module\" src=\"...\"&gt;</code> in HTML, and each module file has its own scope — no global leakage."
    ],
    example: `// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;

// main.js
import { add, PI } from "./math.js";
console.log(add(2, 3), PI);`,
    quiz: {
      q: "What does `<script type=\"module\">` enable that a regular script tag doesn't?",
      choices: ["Nothing, it's identical", "import/export syntax, plus its own private scope", "Running the script twice", "Disabling console.log"],
      correct: 1,
      explain: "type=\"module\" scripts can use import/export and don't leak their top-level variables into the global scope."
    }
  },
  {
    day: 42,
    title: "Local Storage & Session Storage",
    minutes: 10,
    learn: [
      "<code>localStorage</code> saves key-value string data in the browser that persists across page reloads and browser restarts, scoped to the site's origin.",
      "<code>sessionStorage</code> works the same way but clears when the tab closes. Both only store strings — use <code>JSON.stringify</code>/<code>JSON.parse</code> for objects."
    ],
    example: `localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

const settings = { volume: 80 };
localStorage.setItem("settings", JSON.stringify(settings));
const loaded = JSON.parse(localStorage.getItem("settings"));
console.log(loaded.volume); // 80`,
    quiz: {
      q: "What's the difference between localStorage and sessionStorage?",
      choices: ["No difference", "sessionStorage clears when the tab closes; localStorage persists", "localStorage is faster", "sessionStorage can store objects directly"],
      correct: 1,
      explain: "Both share the same API, but sessionStorage is wiped when its tab closes while localStorage sticks around."
    }
  },
  {
    day: 43,
    title: "Timers",
    minutes: 10,
    learn: [
      "<code>setTimeout(fn, delay)</code> runs <code>fn</code> once after <code>delay</code> milliseconds. <code>setInterval(fn, delay)</code> runs it repeatedly every <code>delay</code> ms until stopped.",
      "Both return an ID you can pass to <code>clearTimeout(id)</code> or <code>clearInterval(id)</code> to cancel it."
    ],
    example: `const id = setInterval(() => {
  console.log("tick");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("stopped after 5 seconds");
}, 5000);`,
    quiz: {
      q: "How do you stop a running setInterval?",
      choices: ["setInterval.stop()", "clearInterval(id) using the ID it returned", "return false from the callback", "It stops automatically after 10 runs"],
      correct: 1,
      explain: "setInterval returns an ID that clearInterval() uses to cancel the repeating timer."
    }
  },
  {
    day: 44,
    title: "Debouncing & Throttling",
    minutes: 10,
    learn: [
      "Debouncing delays running a function until a burst of calls has paused for a set time — useful for a search box that shouldn't fetch on every keystroke.",
      "Throttling limits a function to run at most once per time window, no matter how often it's triggered — useful for scroll or resize handlers."
    ],
    example: `function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => console.log("Searching:", query), 300);
search("j");
search("ja");
search("java"); // only this call actually runs, after 300ms of silence`,
    quiz: {
      q: "What's debouncing useful for?",
      choices: ["Making code run faster", "Delaying a function until rapid calls settle down, e.g. search-as-you-type", "Sorting arrays", "Handling errors"],
      correct: 1,
      explain: "Debouncing waits for a pause in activity before running, avoiding wasted work on every single keystroke."
    }
  },
  {
    day: 45,
    title: "Regular Expressions",
    minutes: 10,
    learn: [
      "A regular expression (regex) describes a text pattern, written between slashes: <code>/pattern/flags</code>. Use <code>.test(str)</code> to check for a match, or <code>.match()</code>/<code>.replace()</code> on strings.",
      "Common building blocks: <code>\\d</code> (digit), <code>\\w</code> (word character), <code>+</code> (one or more), <code>*</code> (zero or more), <code>^</code>/<code>$</code> (start/end of string)."
    ],
    example: `const hasDigit = /\\d/;
console.log(hasDigit.test("abc123")); // true

const email = "ada@example.com";
console.log(/^[\\w.]+@[\\w.]+\\.\\w+$/.test(email)); // true

console.log("2024-01-15".replace(/-/g, "/")); // "2024/01/15"`,
    quiz: {
      q: "What does /\\d/.test(str) check?",
      choices: ["If str is a number", "If str contains at least one digit", "If str is exactly one digit", "If str has no digits"],
      correct: 1,
      explain: ".test() returns true as soon as the pattern matches anywhere in the string — here, any single digit."
    }
  },
  {
    day: 46,
    title: "Error Handling & Custom Errors",
    minutes: 10,
    learn: [
      "<code>throw</code> raises an error, stopping execution until something catches it with <code>try/catch</code>. You can throw any value, but an <code>Error</code> object (with a <code>.message</code> and stack trace) is the convention.",
      "Create custom error types by extending <code>Error</code> — useful for distinguishing error kinds (e.g. <code>ValidationError</code> vs <code>NetworkError</code>) in a <code>catch</code> block."
    ],
    example: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function setAge(age) {
  if (age < 0) throw new ValidationError("Age can't be negative");
  return age;
}

try {
  setAge(-5);
} catch (err) {
  console.log(err.name + ": " + err.message);
}`,
    quiz: {
      q: "Why create a custom error class instead of always throwing a plain Error?",
      choices: ["It's required by JavaScript", "It lets catch blocks distinguish different kinds of failures", "It makes code run faster", "Plain Error doesn't work with try/catch"],
      correct: 1,
      explain: "A named subclass (checked via instanceof or .name) lets calling code react differently to different failure types."
    }
  },
  {
    day: 47,
    title: "The Event Loop",
    minutes: 10,
    learn: [
      "JavaScript runs on a single thread with a call stack, but handles async work through the event loop: when the stack is empty, it pulls the next task from a queue and runs it.",
      "This is why <code>setTimeout(fn, 0)</code> doesn't run immediately — it waits for the current synchronous code to finish first. Promises use a separate \"microtask queue\" that runs before regular timers."
    ],
    example: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Output order: 1, 4, 3, 2
// Sync code first, then microtasks (promises), then timers`,
    quiz: {
      q: "In the example, why does \"3\" log before \"2\"?",
      choices: ["Promises always run before code with no delay", "Promise callbacks (microtasks) run before setTimeout callbacks (timer tasks)", "It's random", "setTimeout(fn, 0) never actually runs"],
      correct: 1,
      explain: "The microtask queue (promises) is always drained before the event loop moves on to timer tasks."
    }
  },
  {
    day: 48,
    title: "Promise.all, race & allSettled",
    minutes: 10,
    learn: [
      "<code>Promise.all(promises)</code> waits for every promise to resolve and returns an array of results — but rejects immediately if any one fails.",
      "<code>Promise.race(promises)</code> settles as soon as the first promise settles (win or lose). <code>Promise.allSettled(promises)</code> waits for all of them and reports each outcome, never rejecting."
    ],
    example: `const p1 = fetch("/api/user");
const p2 = fetch("/api/posts");

const [user, posts] = await Promise.all([p1, p2]);
// If either fetch fails, Promise.all rejects immediately

const results = await Promise.allSettled([p1, p2]);
// results always resolves; each entry is { status: "fulfilled"|"rejected", ... }`,
    quiz: {
      q: "What's the key difference between Promise.all and Promise.allSettled?",
      choices: ["There's no real difference", "allSettled never rejects — it reports every outcome instead", "all() is faster", "allSettled only works with two promises"],
      correct: 1,
      explain: "all() short-circuits on the first rejection; allSettled waits for everything and hands back each result."
    }
  },
  {
    day: 49,
    title: "Generators & Iterators",
    minutes: 10,
    learn: [
      "A generator function (<code>function*</code>) can pause and resume, yielding one value at a time with <code>yield</code> instead of returning once. Calling it returns an iterator you step through with <code>.next()</code>.",
      "Generators are handy for lazily producing a sequence (like an infinite counter) without computing it all upfront."
    ],
    example: `function* countUpTo(max) {
  let i = 1;
  while (i <= max) {
    yield i;
    i++;
  }
}

for (const n of countUpTo(3)) {
  console.log(n); // 1, 2, 3
}`,
    quiz: {
      q: "What keyword pauses a generator function and produces a value?",
      choices: ["return", "pause", "yield", "break"],
      correct: 2,
      explain: "yield hands back a value and pauses the generator right there until .next() is called again."
    }
  },
  {
    day: 50,
    title: "Working with Dates",
    minutes: 10,
    learn: [
      "<code>new Date()</code> creates the current date/time. <code>new Date(2024, 0, 15)</code> creates a specific one — months are 0-indexed, so January is 0!",
      "Useful methods: <code>.getFullYear()</code>, <code>.getMonth()</code>, <code>.getDate()</code>, <code>.getDay()</code> (weekday), and <code>.getTime()</code> (milliseconds since 1970, handy for comparing dates)."
    ],
    example: `const now = new Date();
console.log(now.getFullYear());

const bday = new Date(2024, 0, 15); // January 15, 2024
console.log(bday.getDate());  // 15
console.log(bday.getMonth()); // 0 (January)

const msDiff = now.getTime() - bday.getTime();
console.log(Math.floor(msDiff / 86400000) + " days apart");`,
    quiz: {
      q: "In `new Date(2024, 0, 15)`, what month does 0 represent?",
      choices: ["Invalid — months start at 1", "January", "December", "The current month"],
      correct: 1,
      explain: "JavaScript's Date months are 0-indexed: 0 is January, 11 is December."
    }
  },
  {
    day: 51,
    title: "Form Validation in the DOM",
    minutes: 10,
    learn: [
      "Listen for a form's <code>submit</code> event, and call <code>event.preventDefault()</code> to stop the page from reloading so you can validate first.",
      "Check field values via <code>.value</code>, and give feedback by setting <code>.textContent</code> on an error element or toggling a CSS class — never trust client-side validation alone; the server must also validate."
    ],
    example: `const form = document.querySelector("#signup");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;

  if (!email.includes("@")) {
    document.querySelector("#error").textContent = "Enter a valid email";
    return;
  }
  console.log("Submitting:", email);
});`,
    quiz: {
      q: "Why call event.preventDefault() in a submit handler?",
      choices: ["It's required syntax", "It stops the default page reload so you can validate/handle the data in JS first", "It clears the form", "It submits the form faster"],
      correct: 1,
      explain: "Without it, the browser's default full-page form submission happens before your validation ever runs."
    }
  },
  {
    day: 52,
    title: "Fetching & Rendering a List",
    minutes: 10,
    learn: [
      "A common real-world pattern: fetch data, then build DOM elements from it in a loop, then render them all at once.",
      "Building an HTML string with <code>.map().join(\"\")</code> and setting <code>.innerHTML</code> once is usually simpler than creating each element individually — just make sure the data isn't untrusted user input (see Day 24)."
    ],
    example: `async function renderUsers() {
  const response = await fetch("/api/users");
  const users = await response.json();

  const html = users
    .map(u => \`<li>\${u.name} — \${u.email}</li>\`)
    .join("");

  document.querySelector("#user-list").innerHTML = html;
}`,
    quiz: {
      q: "Why build one HTML string with map().join() instead of updating innerHTML in a loop?",
      choices: ["It's required by fetch()", "Updating the DOM once is simpler and avoids repeated re-renders", "innerHTML only works once", "It's the only way to use fetch"],
      correct: 1,
      explain: "Setting innerHTML once with the full list avoids re-rendering the DOM on every single item."
    }
  },
  {
    day: 53,
    title: "Debugging with DevTools",
    minutes: 10,
    learn: [
      "The Sources tab lets you set breakpoints — click a line number to pause execution there and inspect variables, instead of sprinkling <code>console.log</code> everywhere.",
      "Adding a <code>debugger;</code> statement in your code does the same thing: it pauses execution right there whenever DevTools is open.",
      "The Console tab isn't just for console.log — you can run any JavaScript in it, live, against the current page."
    ],
    example: `function total(items) {
  debugger; // execution pauses here when DevTools is open
  return items.reduce((sum, item) => sum + item.price, 0);
}`,
    quiz: {
      q: "What does the `debugger;` statement do?",
      choices: ["Deletes bugs from the code", "Pauses execution there when DevTools is open, like a breakpoint", "Logs an error", "Nothing, in production or development"],
      correct: 1,
      explain: "It acts as a breakpoint written directly in code, pausing execution there whenever DevTools is open."
    }
  },
  {
    day: 54,
    title: "Code Style & Linting",
    minutes: 10,
    learn: [
      "A linter (like ESLint) analyzes your code for likely bugs and style issues — e.g. using a variable before defining it, or comparing with <code>==</code> instead of <code>===</code> — before you ever run it.",
      "Consistent style (naming, spacing, quote style) isn't about taste for its own sake — it means any file in a codebase feels familiar, which matters far more once more than one person touches the code."
    ],
    example: `// A linter would flag issues like these:
if (x = 5) { }        // assignment instead of comparison — likely a bug
let count = count + 1; // used before it's declared
var y = 10;            // prefer let/const over var`,
    quiz: {
      q: "What's a linter's main job?",
      choices: ["Making code run faster", "Automatically flagging likely bugs and style issues in your code", "Compiling JavaScript to another language", "Minifying files for production"],
      correct: 1,
      explain: "Linters statically analyze code to catch likely mistakes and enforce consistent style, before you run anything."
    }
  },
  {
    day: 55,
    title: "Testing Basics",
    minutes: 10,
    learn: [
      "A unit test runs a small piece of code and checks the result matches what you expect — catching bugs automatically instead of manually re-checking by hand every time you change something.",
      "Testing libraries like Jest or Vitest give you <code>describe</code>/<code>test</code> blocks and assertions like <code>expect(result).toBe(expected)</code>, but the core idea is simple enough to write by hand too."
    ],
    example: `function add(a, b) {
  return a + b;
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(label + " failed: got " + actual + ", expected " + expected);
  }
  console.log(label + " passed");
}

assertEqual(add(2, 3), 5, "add(2,3)");`,
    quiz: {
      q: "What's the main benefit of writing tests?",
      choices: ["Tests make code run faster", "They catch regressions automatically instead of manual re-checking", "Tests are required to publish to npm", "They replace the need for code review"],
      correct: 1,
      explain: "Automated tests catch broken behavior the moment it's introduced, instead of relying on someone noticing later."
    }
  },
  {
    day: 56,
    title: "Recursion",
    minutes: 10,
    learn: [
      "A recursive function calls itself to solve a smaller version of the same problem, until it reaches a base case that stops the recursion.",
      "Every recursive function needs a base case (when to stop) and progress toward it each call — without both, it recurses forever and crashes with a stack overflow."
    ],
    example: `function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // calls itself with a smaller problem
}

console.log(factorial(5)); // 120`,
    quiz: {
      q: "What happens if a recursive function has no base case?",
      choices: ["It runs once and stops", "It calls itself forever and crashes (stack overflow)", "JavaScript automatically adds one", "It returns undefined"],
      correct: 1,
      explain: "Without a stopping condition, the function keeps calling itself until the call stack runs out of room."
    }
  },
  {
    day: 57,
    title: "Currying & Composition",
    minutes: 10,
    learn: [
      "Currying transforms a function that takes multiple arguments into a chain of functions that each take one: <code>add(2)(3)</code> instead of <code>add(2, 3)</code> — useful for creating specialized versions of a function.",
      "Function composition combines small functions into a pipeline, where each one's output feeds the next's input — a common pattern in functional-style code."
    ],
    example: `const add = a => b => a + b;
const add5 = add(5); // a specialized version
console.log(add5(3)); // 8

const double = x => x * 2;
const increment = x => x + 1;
const compose = (f, g) => x => f(g(x));

const doubleThenIncrement = compose(increment, double);
console.log(doubleThenIncrement(5)); // 11`,
    quiz: {
      q: "What does `add(5)` return in `const add = a => b => a + b;`?",
      choices: ["8", "A new function waiting for b", "undefined", "An error"],
      correct: 1,
      explain: "Calling add(5) only supplies the first argument, so it returns the inner arrow function still waiting for b."
    }
  },
  {
    day: 58,
    title: "Module & Singleton Patterns",
    minutes: 10,
    learn: [
      "The module pattern groups related state and functions together, exposing only what's needed — modern ES modules give you this automatically per file.",
      "The singleton pattern ensures only one instance of something ever exists, useful for shared state like app configuration."
    ],
    example: `const AppConfig = (() => {
  let theme = "dark";
  return {
    getTheme: () => theme,
    setTheme: (t) => { theme = t; }
  };
})();

AppConfig.setTheme("light");
console.log(AppConfig.getTheme()); // "light"
// theme itself is private — can't be accessed directly from outside`,
    quiz: {
      q: "What does the singleton pattern guarantee?",
      choices: ["A function runs only once", "Only one instance of something exists across the app", "Code runs faster", "No errors can occur"],
      correct: 1,
      explain: "Singletons centralize shared state or resources behind a single, app-wide instance."
    }
  },
  {
    day: 59,
    title: "Performance Basics",
    minutes: 10,
    learn: [
      "Avoid doing expensive work (like a DOM query or a big computation) repeatedly inside a loop — pull it out and do it once if the result doesn't change each time.",
      "Big O notation describes how an algorithm's time grows with input size: O(n) (linear) scales fine; nested loops over the same data are often O(n²), which gets slow fast as data grows."
    ],
    example: `// Slow: looks up the element on every iteration
for (let i = 0; i < 1000; i++) {
  document.querySelector("#box").textContent = i; // repeated DOM query
}

// Faster: look it up once, then reuse it
const box = document.querySelector("#box");
for (let i = 0; i < 1000; i++) {
  box.textContent = i;
}`,
    quiz: {
      q: "Why is a nested loop over the same array often a performance concern?",
      choices: ["Nested loops are always a syntax error", "It's often O(n²) — work grows quadratically as the array grows", "JavaScript doesn't support nested loops", "It only affects Node.js, not browsers"],
      correct: 1,
      explain: "Comparing every item against every other item means the work grows with the square of the input size."
    }
  },
  {
    day: 60,
    title: "Capstone Project",
    minutes: 10,
    learn: [
      "You've now covered classes, modern syntax, async patterns, browser storage and APIs, functional patterns, debugging, and testing — genuinely enough to build a real small application end-to-end.",
      "Pick one and build it fully: a weather app (fetch a public API, render results, handle loading/error states), an expense tracker (add/remove entries, localStorage persistence, running total), or a quiz app like this one. Scope it small enough to finish in a few sessions — finished and small beats ambitious and abandoned.",
      "When you get stuck, that's the job: break the problem into the smallest piece that could possibly work, get that piece working, then build outward from it."
    ],
    example: `// A tiny scaffold to start an expense tracker from
const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");

function addExpense(name, amount) {
  expenses.push({ name, amount, date: new Date().toISOString() });
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function total() {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

addExpense("Coffee", 4.5);
console.log("Total spent:", total());`,
    quiz: {
      q: "What's the recommended way to scope your capstone project?",
      choices: ["Build the most ambitious app you can imagine", "Pick something small enough to actually finish, then build outward from a working piece", "Copy an existing app exactly", "Skip building and just read more docs"],
      correct: 1,
      explain: "A small, finished project beats an ambitious, abandoned one — and gives you a real working foundation to extend."
    }
  }
];
