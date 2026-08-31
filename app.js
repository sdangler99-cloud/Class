// JavaScript in 10 — app logic
// Progress is stored client-side in localStorage. No backend required.

const STORAGE_KEY = "js10_progress";

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
  const dates = Object.values(progress.completionDates).sort();
  if (dates.length === 0) return 0;

  const uniqueDates = [...new Set(dates)].sort();
  let streak = 1;
  for (let i = uniqueDates.length - 1; i > 0; i--) {
    const cur = new Date(uniqueDates[i]);
    const prev = new Date(uniqueDates[i - 1]);
    const diffDays = Math.round((cur - prev) / 86400000);
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  // Streak only counts as "current" if the last completion was today or yesterday.
  const last = new Date(uniqueDates[uniqueDates.length - 1]);
  const today = new Date(todayKey());
  const gap = Math.round((today - last) / 86400000);
  if (gap > 1) return 0;

  return streak;
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

// ---- Rendering ----

const dashboardEl = document.getElementById("dashboard");
const lessonViewEl = document.getElementById("lesson-view");
const streakBadgeEl = document.getElementById("streak-badge");
const progressBarEl = document.getElementById("progress-bar-fill");
const progressLabelEl = document.getElementById("progress-label");

function renderDashboard() {
  const progress = loadProgress();
  const streak = computeStreak(progress);

  streakBadgeEl.textContent = streak > 0 ? `🔥 ${streak} day streak` : "Start your streak today";

  const completedCount = progress.completedDays.length;
  const pct = Math.round((completedCount / LESSONS.length) * 100);
  progressBarEl.style.width = pct + "%";
  progressLabelEl.textContent = `${completedCount} / ${LESSONS.length} lessons complete`;

  dashboardEl.innerHTML = "";
  LESSONS.forEach((lesson) => {
    const unlocked = isDayUnlocked(lesson.day, progress);
    const complete = isDayComplete(lesson.day, progress);

    const tile = document.createElement("button");
    tile.className = "tile" + (complete ? " complete" : "") + (!unlocked ? " locked" : "");
    tile.disabled = !unlocked;
    tile.innerHTML = `
      <span class="tile-day">Day ${lesson.day}</span>
      <span class="tile-title">${lesson.title}</span>
      <span class="tile-status">${complete ? "✓ Done" : unlocked ? `~${lesson.minutes} min` : "🔒 Locked"}</span>
    `;
    if (unlocked) {
      tile.addEventListener("click", () => openLesson(lesson.day));
    }
    dashboardEl.appendChild(tile);
  });

  dashboardEl.hidden = false;
  lessonViewEl.hidden = true;
}

function openLesson(day) {
  const lesson = LESSONS.find((l) => l.day === day);
  if (!lesson) return;
  const progress = loadProgress();
  const alreadyComplete = isDayComplete(day, progress);

  lessonViewEl.innerHTML = `
    <button class="back-btn" id="back-btn">&larr; All days</button>
    <div class="lesson-header">
      <span class="lesson-day">Day ${lesson.day} of ${LESSONS.length}</span>
      <h2>${lesson.title}</h2>
      <span class="lesson-minutes">~${lesson.minutes} minutes</span>
    </div>

    <div class="lesson-body">
      ${lesson.learn.map((p) => `<p>${p}</p>`).join("")}
    </div>

    <div class="code-block">
      <div class="code-block-header">
        <span>Try it</span>
        <button class="copy-btn" id="copy-btn">Copy</button>
      </div>
      <pre><code>${escapeHtml(lesson.example)}</code></pre>
    </div>

    <div class="quiz" id="quiz-box">
      <h3>Quick check</h3>
      <p class="quiz-q">${lesson.quiz.q}</p>
      <div class="quiz-choices" id="quiz-choices">
        ${lesson.quiz.choices
          .map((choice, i) => `<button class="choice-btn" data-index="${i}">${choice}</button>`)
          .join("")}
      </div>
      <p class="quiz-feedback" id="quiz-feedback" hidden></p>
    </div>

    <div class="lesson-actions">
      <button class="complete-btn" id="complete-btn" ${alreadyComplete ? "disabled" : "disabled"}>
        ${alreadyComplete ? "✓ Day complete" : "Answer the quiz to mark complete"}
      </button>
    </div>
  `;

  document.getElementById("back-btn").addEventListener("click", renderDashboard);

  document.getElementById("copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(lesson.example).then(() => {
      const btn = document.getElementById("copy-btn");
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
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
        feedbackEl.textContent = "✓ Correct — " + lesson.quiz.explain;
        feedbackEl.className = "quiz-feedback correct";
        completeBtn.disabled = false;
        completeBtn.textContent = "Mark day complete";
      } else {
        btn.classList.add("incorrect");
        choiceButtons[lesson.quiz.correct].classList.add("correct");
        feedbackEl.textContent = "The correct answer is highlighted — " + lesson.quiz.explain;
        feedbackEl.className = "quiz-feedback incorrect";
        completeBtn.disabled = false;
        completeBtn.textContent = "Mark day complete";
      }
      feedbackEl.hidden = false;
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
  window.scrollTo(0, 0);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (confirm("Reset all progress? This can't be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    renderDashboard();
  }
});

renderDashboard();
