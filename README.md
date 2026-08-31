# JavaScript in 10

A 30-day JavaScript course delivered in daily 10-minute lessons. No build step, no backend — open `index.html` in a browser or serve the folder with any static file server.

## How it works

- **30 lessons** (`lessons.js`), each with a short explanation, a runnable code example, and a one-question quiz.
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
| `style.css` | Styling (dark theme) |
| `lessons.js` | The 30-day curriculum content |
| `app.js` | Dashboard, unlock logic, quiz handling, progress tracking |

## Curriculum outline

Days 1–10: variables, data types, operators, strings, numbers, booleans, conditionals
Days 11–20: arrays, loops, functions, scope, objects, map/filter/reduce
Days 21–30: destructuring, spread/rest, the DOM, events, closures, callbacks, promises, async/await, and a wrap-up project prompt.
