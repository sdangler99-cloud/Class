// JavaScript in 10 — app logic
// Progress is stored client-side in localStorage. No backend required.

const STORAGE_KEY = "js10_progress";

const ICON = {
  lock: '<svg class="icon" width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="2"/></svg>',
  check: '<svg class="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12l5 5L20 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  x: '<svg class="icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',
  arrowLeft: '<svg class="icon" width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  copy: '<svg class="icon" width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" stroke-width="2"/></svg>'
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedDays: [], completionDates: {} };
    const parsed = JSON.parse(raw);
    return {
      completedDays: parsed.completedDays || [],
      completionDates: parsed.completionDates || {}
    };
  } catch (e) {
    return { completedDays: [], completionDates: {} };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function isDayUnlocked(day, progress) {
  if (day === 1) return true;
  return progress.completedDays.includes(day - 1);
}

function isDayComplete(day, progress) {
  return progress.completedDays.includes(day);
}

function computeStreak(progress) {
  const uniqueDates = [...new Set(Object.values(progress.completionDates))].sort();
  if (uniqueDates.length === 0) return 0;

  let streak = 1;
  for (let i = uniqueDates.length - 1; i > 0; i--) {
    const diffDays = Math.round((new Date(uniqueDates[i]) - new Date(uniqueDates[i - 1])) / 86400000);
    if (diffDays === 1) streak++; else break;
  }

  const gap = Math.round((new Date(todayKey()) - new Date(uniqueDates[uniqueDates.length - 1])) / 86400000);
  return gap > 1 ? 0 : streak;
}

function markDayComplete(day) {
  const progress = loadProgress();
  if (!progress.completedDays.includes(day)) {
    progress.completedDays.push(day);
  }
  progress.completionDates[day] = todayKey();
  saveProgress(progress);
  return progress;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function codeToLines(code) {
  return code
    .split("\n")
    .map((line, i) => `<div class="code-line"><span class="ln">${i + 1}</span><span class="lc">${escapeHtml(line)}</span></div>`)
    .join("");
}

// ---- Rendering ----

const dashboardEl = document.getElementById("dashboard");
const lessonViewEl = document.getElementById("lesson-view");
const streakPillEl = document.getElementById("streak-pill");
const streakTextEl = document.getElementById("streak-text");
const graphEl = document.getElementById("graph");
const progressLabelEl = document.getElementById("progress-label");

function renderDashboard() {
  const progress = loadProgress();
  const streak = computeStreak(progress);

  if (streak > 0) {
    streakTextEl.textContent = streak + " day streak";
    streakPillEl.classList.add("active");
  } else {
    streakTextEl.textContent = "start your streak today";
    streakPillEl.classList.remove("active");
  }

  const completedCount = progress.completedDays.length;
  progressLabelEl.textContent = String(completedCount).padStart(2, "0") + " / " + LESSONS.length + " lessons complete";

  graphEl.innerHTML = "";
  LESSONS.forEach((lesson) => {
    const sq = document.createElement("div");
    const complete = isDayComplete(lesson.day, progress);
    const unlocked = isDayUnlocked(lesson.day, progress);
    sq.className = "sq" + (complete ? " done" : unlocked ? " active" : "");
    sq.title = "Day " + lesson.day + ": " + lesson.title;
    graphEl.appendChild(sq);
  });

  dashboardEl.innerHTML = "";
  LESSONS.forEach((lesson) => {
    const unlocked = isDayUnlocked(lesson.day, progress);
    const complete = isDayComplete(lesson.day, progress);

    const tile = document.createElement("button");
    tile.className = "tile" + (complete ? " complete" : unlocked ? " unlocked" : "");
    tile.disabled = !unlocked;
    const fileName = "day-" + String(lesson.day).padStart(2, "0") + ".js";
    const statusHtml = complete
      ? ICON.check + " done"
      : unlocked
      ? "~" + lesson.minutes + " min"
      : ICON.lock + " locked";
    tile.innerHTML = `
      <span class="tile-file">${fileName}</span>
      <span class="tile-title">${lesson.title}</span>
      <span class="tile-status">${statusHtml}</span>
    `;
    if (unlocked) {
      tile.addEventListener("click", () => openLesson(lesson.day));
    }
    dashboardEl.appendChild(tile);
  });

  dashboardEl.hidden = false;
  dashboardEl.classList.add("fade-in");
  lessonViewEl.hidden = true;
}

function openLesson(day) {
  const lesson = LESSONS.find((l) => l.day === day);
  if (!lesson) return;
  const progress = loadProgress();
  const alreadyComplete = isDayComplete(day, progress);
  const fileName = "day-" + String(day).padStart(2, "0") + ".js";

  lessonViewEl.innerHTML = `
    <div class="tab-bar">
      <button class="back-btn" id="back-btn">${ICON.arrowLeft} all days</button>
      <span class="tab">${fileName}</span>
      <span style="width:70px"></span>
    </div>
    <div class="lesson-inner">
      <div class="lesson-header">
        <p class="lesson-comment">// Day ${lesson.day} of ${LESSONS.length}</p>
        <h2>${lesson.title}</h2>
        <span class="lesson-minutes">~${lesson.minutes} minutes</span>
      </div>

      <div class="lesson-body">
        ${lesson.learn.map((p) => `<p>${p}</p>`).join("")}
      </div>

      <div class="code-block">
        <div class="code-block-header">
          <span>try it</span>
          <button class="copy-btn" id="copy-btn">${ICON.copy} copy</button>
        </div>
        <div class="code-scroll"><div class="code-lines">${codeToLines(lesson.example)}</div></div>
      </div>

      <div class="quiz" id="quiz-box">
        <p class="quiz-prompt">&gt; quick check</p>
        <p class="quiz-q">${lesson.quiz.q}</p>
        <div class="quiz-choices" id="quiz-choices">
          ${lesson.quiz.choices
            .map((choice, i) => `<button class="choice-btn" data-index="${i}"><span class="marker">${String.fromCharCode(97 + i)}.</span>${choice}<span class="result-icon"></span></button>`)
            .join("")}
        </div>
        <p class="quiz-feedback" id="quiz-feedback" hidden></p>
      </div>

      <div class="lesson-actions">
        <button class="complete-btn" id="complete-btn" disabled>
          ${alreadyComplete ? ICON.check + " day complete" : "answer the quiz to mark complete"}
        </button>
      </div>
    </div>
  `;

  document.getElementById("back-btn").addEventListener("click", renderDashboard);

  document.getElementById("copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(lesson.example).then(() => {
      const btn = document.getElementById("copy-btn");
      btn.innerHTML = ICON.check + " copied!";
      setTimeout(() => (btn.innerHTML = ICON.copy + " copy"), 1400);
    });
  });

  const choiceButtons = document.querySelectorAll(".choice-btn");
  const feedbackEl = document.getElementById("quiz-feedback");
  const completeBtn = document.getElementById("complete-btn");

  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      choiceButtons.forEach((b) => (b.disabled = true));

      if (index === lesson.quiz.correct) {
        btn.classList.add("correct");
        btn.querySelector(".result-icon").innerHTML = ICON.check;
        feedbackEl.innerHTML = ICON.check + " correct — " + lesson.quiz.explain;
        feedbackEl.className = "quiz-feedback correct";
      } else {
        btn.classList.add("incorrect");
        btn.querySelector(".result-icon").innerHTML = ICON.x;
        const correctBtn = choiceButtons[lesson.quiz.correct];
        correctBtn.classList.add("correct");
        correctBtn.querySelector(".result-icon").innerHTML = ICON.check;
        feedbackEl.innerHTML = ICON.x + " the correct answer is highlighted — " + lesson.quiz.explain;
        feedbackEl.className = "quiz-feedback incorrect";
      }
      feedbackEl.hidden = false;

      if (!alreadyComplete) {
        completeBtn.disabled = false;
        completeBtn.textContent = "mark day complete";
      }
    });
  });

  if (!alreadyComplete) {
    completeBtn.addEventListener("click", () => {
      markDayComplete(day);
      renderDashboard();
    });
  }

  dashboardEl.hidden = true;
  lessonViewEl.hidden = false;
  lessonViewEl.classList.add("fade-in");
  window.scrollTo(0, 0);
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all progress? This can't be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    renderDashboard();
  }
});

renderDashboard();
