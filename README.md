# JavaScript in 10

A 60-day JavaScript course delivered in daily 10-minute lessons. No build step, no backend — open `index.html` in a browser or serve the folder with any static file server.

## How it works

- **60 lessons** (`lessons.js`), each with a short explanation, a runnable code example, and a one-question quiz.
- **Sequential unlock**: Day *N* unlocks once Day *N − 1* is marked complete, so lessons build on each other.
- **Progress tracking**: completion and streaks are stored in the browser's `localStorage` (key `js10_progress`) — no account or server needed. "Reset progress" clears it.
- **Streaks**: counts consecutive calendar days with at least one completed lesson.

## Running it

```bash
# from this directory
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser (localStorage still works from `file://`).

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell |
| `style.css` | Styling (terminal/editor theme) |
| `lessons.js` | The 60-day curriculum content |
| `app.js` | Dashboard, unlock logic, quiz handling, progress tracking |

## Curriculum outline

**Days 1–30 — Fundamentals:**
Days 1–10: variables, data types, operators, strings, numbers, booleans, conditionals
Days 11–20: arrays, loops, functions, scope, objects, map/filter/reduce
Days 21–30: destructuring, spread/rest, the DOM, events, closures, callbacks, promises, async/await

**Days 31–60 — Intermediate & practical:**
Days 31–40: classes, inheritance, getters/setters, `this`/call/apply/bind, JSON, fetch, sort/some/every, Sets & Maps, optional chaining/nullish coalescing, IIFEs
Days 41–50: ES modules, localStorage/sessionStorage, timers, debounce/throttle, regex, custom errors, the event loop, Promise.all/race/allSettled, generators, dates
Days 51–60: form validation, fetching & rendering lists, DevTools debugging, linting, testing basics, recursion, currying/composition, design patterns, performance basics, and a capstone project
