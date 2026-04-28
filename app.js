/* ============================================================
   MY ROUTINE • MY PURPOSE — App Logic
   ============================================================ */

// ===== DATA =====
const PRAYERS = [
  { name: 'Fajr',    ar: 'الفجر',  time: '05:14' },
  { name: 'Dhuhr',   ar: 'الظهر',  time: '12:21' },
  { name: 'Asr',     ar: 'العصر',  time: '15:43' },
  { name: 'Maghrib', ar: 'المغرب', time: '18:19' },
  { name: "Isha'a",  ar: 'العشاء', time: '19:25' },
];

const SCHEDULE = [
  { time: '04:00', end: '04:30', title: 'Warmup Exercises',         sub: 'Stretch · Light movement · Focus',              type: 'fitness' },
  { time: '04:30', end: '05:14', title: 'Qiyamu al-Layl',           sub: 'Night prayer · Duʿāʾ · Reflection',             type: 'deen'    },
  { time: '05:14', end: '05:30', title: 'Fajr Ṣalāh',              sub: 'Salah · Gratitude · Dhikr',                     type: 'prayer'  },
  { time: '05:30', end: '06:15', title: 'Qurʾān',                   sub: 'Recitation · Tafsīr · Memorization',            type: 'deen'    },
  { time: '06:15', end: '06:30', title: 'Morning Adhkār & Duʿāʾ',  sub: 'Personal · Family · Forgiveness',               type: 'deen'    },
  { time: '06:30', end: '07:15', title: 'Workout',                  sub: 'Push-ups · Squats · Plank / Cardio days',       type: 'fitness' },
  { time: '07:15', end: '07:30', title: 'Shower',                   sub: 'Freshen up · Ready for the day',                type: 'fitness' },
  { time: '07:30', end: '08:00', title: 'Breakfast + Plan Day',     sub: 'Banana · Tea · Set targets',                    type: 'food'    },
  { time: '08:00', end: '08:15', title: 'Mind Detox',               sub: 'No phone · Clear mind',                         type: 'rest'    },
  { time: '08:15', end: '10:00', title: 'Working / Studying',       sub: 'Deep Work · Focus Mode',                        type: 'study'   },
  { time: '10:00', end: '10:15', title: 'Water + Light Fruit',      sub: 'Hydrate · Refresh · Stretch',                   type: 'food'    },
  { time: '10:15', end: '11:30', title: 'Soft Skill Learning',      sub: 'Communication · Leadership',                    type: 'study'   },
  { time: '11:30', end: '12:00', title: 'Reality Check — Deen Light', sub: 'Short Islamic video / reminder',              type: 'reality' },
  { time: '12:21', end: '12:35', title: 'Dhuhr Ṣalāh',             sub: 'Pray with Khushūʿ · Dhikr',                    type: 'prayer'  },
  { time: '12:35', end: '13:25', title: 'Reality Check — Deen Deep', sub: 'Study: ʿAqīdah / Fiqh / Sīrah',              type: 'deen'    },
  { time: '13:25', end: '14:00', title: 'Lunch',                    sub: 'Less rice (60–70%) · Eat all protein',          type: 'food'    },
  { time: '14:00', end: '14:15', title: 'Post-Lunch Walk',          sub: '10–15 min · Aids digestion',                    type: 'fitness' },
  { time: '14:15', end: '14:55', title: 'Qaylūlah / Rest',          sub: 'Nap · Reading · Silence',                      type: 'rest'    },
  { time: '14:55', end: '15:30', title: 'Launch + Self Improvement', sub: 'Plan · Set Targets · Projects',                type: 'study'   },
  { time: '15:43', end: '16:00', title: 'ʿAṣr Ṣalāh',             sub: 'Pray with Focus · Dhikr',                       type: 'prayer'  },
  { time: '16:00', end: '16:20', title: 'Reality Check — Apply',    sub: 'Dhikr · Duʿāʾ · 1 Action Plan',               type: 'reality' },
  { time: '16:20', end: '17:00', title: 'Cheerup + Light Activity', sub: 'Walk · Talk · Refresh',                         type: 'fitness' },
  { time: '17:00', end: '17:30', title: 'Fruit / Snack',            sub: 'Fruit · Groundnuts · No junk',                  type: 'food'    },
  { time: '17:30', end: '18:15', title: 'Learning / Studying',      sub: 'Active Recall · Practice',                      type: 'study'   },
  { time: '18:19', end: '18:35', title: 'Maghrib Ṣalāh',           sub: 'Gratitude · Dhikr · Evening Adhkār',            type: 'prayer'  },
  { time: '18:35', end: '19:10', title: 'Self Dev & Money Managing', sub: 'Track income · Goals · Review',                type: 'study'   },
  { time: '19:10', end: '19:25', title: 'Light Meal Prep',          sub: 'Fruit or small portion · No heavy rice',         type: 'food'    },
  { time: '19:25', end: '19:45', title: "Ishāʾ Ṣalāh",            sub: 'Pray + Night Dhikr',                             type: 'prayer'  },
  { time: '19:45', end: '21:30', title: 'Working / Studying',       sub: 'Deep Focus · Review & Recall',                  type: 'study'   },
  { time: '21:30', end: '21:45', title: 'Dinner',                   sub: 'Light meal · Mindfully',                         type: 'food'    },
  { time: '21:45', end: '22:30', title: 'Games & Movies',           sub: 'Entertainment (Planned) · Wind down',           type: 'rest'    },
  { time: '22:30', end: '23:00', title: 'Daily Wrapup',             sub: '3 questions · Reflection',                       type: 'wrapup'  },
  { time: '23:00', end: '04:00', title: 'Long Rest (5 hrs)',        sub: 'Sleep · Recovery · Sunnah',                     type: 'sleep'   },
];

const HABITS = [
  { id: 'fajr',     label: 'Fajr on Time',           cat: 'deen'    },
  { id: 'quran',    label: 'Qurʾān (5+ min)',         cat: 'deen'    },
  { id: 'qiyam',   label: 'Qiyamu Completed',         cat: 'deen'    },
  { id: 'reality3', label: '3 Reality Checks',        cat: 'deen'    },
  { id: 'salah5',  label: 'All 5 Salah on Time',      cat: 'deen'    },
  { id: 'dhikr',   label: 'Dhikr (100+)',              cat: 'deen'    },
  { id: 'workout', label: 'Workout Done',              cat: 'fitness' },
  { id: 'norice',  label: 'No Extra Rice / Junk',      cat: 'fitness' },
  { id: 'water',   label: 'Water Intake OK',           cat: 'fitness' },
  { id: 'nosoda',  label: 'No Soda / Sugary Drinks',   cat: 'fitness' },
  { id: 'fruit',   label: 'Ate Fruit',                 cat: 'fitness' },
  { id: 'studyr',  label: 'Study Recall (10+ min)',    cat: 'mind'    },
  { id: 'wrapup',  label: 'Daily Wrapup Done',         cat: 'mind'    },
  { id: 'sleep23', label: 'Sleep before 23:00',        cat: 'mind'    },
];

const WEEKLY = [
  { day: 'Mon', topic: 'ʿAqīdah',       sub: 'Tawḥīd / Belief',          workout: 'Full Body'    },
  { day: 'Tue', topic: 'Fiqh',           sub: 'Wuḍūʾ & Ṣalāh',          workout: 'Cardio'       },
  { day: 'Wed', topic: 'Sīrah',          sub: 'Life of Prophet ﷺ',        workout: 'Full Body'    },
  { day: 'Thu', topic: 'Asmāʾ al-Ḥusnā', sub: 'Names of Allah',           workout: 'Cardio'       },
  { day: 'Fri', topic: 'Jumuʿah',        sub: 'Sunnahs & Khuṭbah',        workout: 'Full Body'    },
  { day: 'Sat', topic: 'Hadith & Akhlāq', sub: 'Manners & Character',     workout: 'Light Activity'},
  { day: 'Sun', topic: 'Review & Duʿāʾ', sub: 'Reflection & Planning',   workout: 'Rest'         },
];

const DOT_COLORS = {
  prayer: '#2a8c60', deen: '#d4730a', fitness: '#3a8adf',
  study: '#3a5a8a', food: '#a06820', reality: '#f0b429',
  rest: '#3a4a6a', wrapup: '#9050b0', sleep: '#3040a0'
};

const DAYS_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// ===== STATE =====
let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
let db = {};
let currentTab = 'prayers';
let autoSaveTimer = null;

// ===== STORAGE =====
function loadDB() {
  try {
    const s = localStorage.getItem('myRoutinePurpose_v3');
    db = s ? JSON.parse(s) : {};
  } catch (e) { db = {}; }
}

function saveDB() {
  try {
    localStorage.setItem('myRoutinePurpose_v3', JSON.stringify(db));
  } catch (e) {}
}

function dateKey(d) {
  return d.toISOString().slice(0, 10);
}

function getDayData(d) {
  const k = dateKey(d);
  if (!db[k]) {
    db[k] = {
      prayers: {}, habits: {},
      journal: '', improve: '',
      deen: null, studyRate: null, prayerNotes: ''
    };
  }
  return db[k];
}

// ===== AUTO SAVE =====
function autoSave() {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(saveDay, 600);
}

function saveDay() {
  const data = getDayData(currentDate);
  const fields = { journalText: 'journal', improveText: 'improve', prayerNotes: 'prayerNotes' };
  Object.entries(fields).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) data[key] = el.value;
  });
  saveDB();
  const toast = document.getElementById('savedToast');
  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  }
  updateStrip();
}

// ===== DATE =====
function changeDay(delta) {
  const d = new Date(currentDate);
  d.setDate(d.getDate() + delta);
  currentDate = d;
  render();
}

function goToday() {
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  currentDate = t;
  render();
}

function isToday(d) {
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return d.getTime() === t.getTime();
}

function formatDateDisplay(d) {
  const opts = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  return d.toLocaleDateString('en-GB', opts);
}

function formatHijri(d) {
  try {
    return new Intl.DateTimeFormat('en-u-ca-islamic', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).format(d);
  } catch (e) { return ''; }
}

// ===== TAB SWITCHING =====
function switchTab(name) {
  currentTab = name;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
  const btns = document.querySelectorAll('.nav-btn');
  const tabs = ['prayers', 'schedule', 'habits', 'wrapup', 'progress', 'weekly'];
  const idx = tabs.indexOf(name);
  if (btns[idx]) btns[idx].classList.add('active');
  document.querySelector('.main-content').scrollTop = 0;
  renderTab(name);
}

// ===== TOGGLE PRAYER =====
function togglePrayer(name) {
  const data = getDayData(currentDate);
  const cur = data.prayers[name] || 'none';
  const seq = { none: 'prayed', prayed: 'missed', missed: 'none' };
  data.prayers[name] = seq[cur];
  saveDB();
  renderPrayers();
  updateStrip();
}

// ===== TOGGLE HABIT =====
function toggleHabit(habitId, dayOffset) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const target = new Date(today);
  target.setDate(today.getDate() - dayOffset);
  if (target > today) return;
  const data = getDayData(target);
  data.habits[habitId] = !data.habits[habitId];
  saveDB();
  renderHabits();
  updateStrip();
}

// ===== WRAPUP ACTIONS =====
function setDeen(val) {
  const data = getDayData(currentDate);
  data.deen = data.deen === val ? null : val;
  saveDB();
  renderWrapup();
}

function setStudyRate(val) {
  const data = getDayData(currentDate);
  data.studyRate = data.studyRate === val ? null : val;
  saveDB();
  renderWrapup();
}

// ===== LOG WEIGHT =====
function logWeight() {
  const inp = document.getElementById('weightInput');
  const kg = parseFloat(inp.value);
  if (!kg || kg < 40 || kg > 250) {
    inp.style.borderColor = '#cc4444';
    setTimeout(() => inp.style.borderColor = '', 1000);
    return;
  }
  if (!db.weightLog) db.weightLog = [];
  const k = dateKey(currentDate);
  const idx = db.weightLog.findIndex(e => e.date === k);
  if (idx >= 0) db.weightLog[idx].kg = kg;
  else db.weightLog.push({ date: k, kg });
  db.weightLog.sort((a, b) => a.date.localeCompare(b.date));
  saveDB();
  inp.value = '';
  renderProgress();
  updateStrip();
}

function deleteWeight(date) {
  db.weightLog = (db.weightLog || []).filter(e => e.date !== date);
  saveDB();
  renderProgress();
}

// ===== STRIP =====
function updateStrip() {
  const data = getDayData(currentDate);
  const todayPrayed = PRAYERS.filter(p => data.prayers[p.name] === 'prayed').length;
  const todayHabits = HABITS.filter(h => data.habits[h.id]).length;
  const wl = db.weightLog || [];
  const latestKg = wl.length ? wl[wl.length - 1].kg : 85;

  // streak: consecutive days with all 5 prayers
  let streak = 0;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 365; i++) {
    const d = new Date(t); d.setDate(t.getDate() - i);
    const dd = getDayData(d);
    const allPrayed = PRAYERS.every(p => dd.prayers[p.name] === 'prayed');
    if (!allPrayed) break;
    streak++;
  }

  document.getElementById('psSalah').textContent = todayPrayed + '/5';
  document.getElementById('psHabits').textContent = todayHabits + '/' + HABITS.length;
  document.getElementById('psWeight').textContent = latestKg.toFixed(1) + 'kg';
  document.getElementById('psStreak').textContent = streak;

  const psSalahEl = document.getElementById('psSalah');
  psSalahEl.style.color = todayPrayed === 5 ? '#5adda0' : todayPrayed >= 3 ? '#f0b429' : '#ff8888';
}

// ===== RENDERS =====

function renderDateNav() {
  document.getElementById('topbarDate').textContent = formatDateDisplay(currentDate);
  document.getElementById('topbarHijri').textContent = formatHijri(currentDate);
}

function renderPrayers() {
  const data = getDayData(currentDate);
  const grid = document.getElementById('prayersGrid');
  grid.innerHTML = '';
  PRAYERS.forEach(p => {
    const st = data.prayers[p.name] || 'none';
    const div = document.createElement('div');
    div.className = 'prayer-card' + (st === 'prayed' ? ' prayed' : st === 'missed' ? ' missed' : '');
    div.setAttribute('role', 'button');
    div.setAttribute('aria-label', p.name + ' prayer, status: ' + st);
    div.onclick = () => togglePrayer(p.name);
    div.innerHTML =
      '<div class="prayer-check-icon">' +
        (st === 'prayed' ? '✔' : st === 'missed' ? '✕' : '') +
      '</div>' +
      '<div class="prayer-ar">' + p.ar + '</div>' +
      '<div class="prayer-nm">' + p.name + '</div>' +
      '<div class="prayer-tm">' + p.time + '</div>' +
      '<div class="prayer-st">' +
        (st === 'prayed' ? 'Prayed' : st === 'missed' ? 'Missed' : 'Tap') +
      '</div>';
    grid.appendChild(div);
  });
  const pn = document.getElementById('prayerNotes');
  if (pn) pn.value = data.prayerNotes || '';
}

function renderSchedule() {
  const list = document.getElementById('timelineList');
  list.innerHTML = '';
  const now = new Date();
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const isCurrentDay = isToday(currentDate);

  SCHEDULE.forEach((s, i) => {
    const [sh, sm] = s.time.split(':').map(Number);
    const blockMins = sh * 60 + sm;
    const isCurrent = isCurrentDay && nowMins >= blockMins &&
      (i === SCHEDULE.length - 1 || nowMins < (parseInt(SCHEDULE[i+1].time)*60 + parseInt(SCHEDULE[i+1].time.split(':')[1])));

    const block = document.createElement('div');
    block.className = 'tl-block';
    block.style.opacity = (isCurrentDay && nowMins < blockMins - 5) ? '0.55' : '1';

    const badge = s.type === 'prayer'  ? '<span class="tl-badge badge-prayer">Prayer</span>' :
                  s.type === 'deen'    ? '<span class="tl-badge badge-deen">Deen</span>'    :
                  s.type === 'fitness' ? '<span class="tl-badge badge-fitness">Fitness</span>' : '';

    block.innerHTML =
      '<div class="tl-time">' + s.time + '<br>' + s.end + '</div>' +
      '<div class="tl-dot-wrap">' +
        '<div class="tl-dot" style="background:' + (DOT_COLORS[s.type] || '#3a4a6a') + ';' +
          (isCurrent ? 'box-shadow:0 0 6px ' + (DOT_COLORS[s.type] || '#3a4a6a') + ';width:11px;height:11px;' : '') +
        '"></div>' +
        (i < SCHEDULE.length - 1 ? '<div class="tl-line"></div>' : '') +
      '</div>' +
      '<div class="tl-card ' + s.type + '">' +
        '<div class="tl-title">' + s.title + badge + '</div>' +
        '<div class="tl-sub">' + s.sub + '</div>' +
      '</div>';
    list.appendChild(block);
  });
}

function renderHabits() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const wrap = document.getElementById('habitsContent');
  wrap.innerHTML = '';

  // Day headers
  const hdrRow = document.createElement('div');
  hdrRow.className = 'day-header';
  hdrRow.innerHTML = '<div class="day-header-label"></div><div class="day-header-days">' +
    Array.from({length:7}, (_,i) => {
      const d = new Date(today); d.setDate(today.getDate() - (6 - i));
      const isTod = d.getTime() === today.getTime();
      return '<div class="day-lbl-h" style="' + (isTod ? 'color:var(--gold-l);font-weight:700;' : '') + '">' + DAYS_SHORT[d.getDay()] + '</div>';
    }).join('') + '</div>';
  wrap.appendChild(hdrRow);

  let lastCat = '';
  HABITS.forEach(h => {
    if (h.cat !== lastCat) {
      const catDiv = document.createElement('div');
      catDiv.className = 'habit-cat-title';
      catDiv.textContent = h.cat === 'deen' ? '— Deen —' : h.cat === 'fitness' ? '— Fitness / Body —' : '— Mind / Study —';
      wrap.appendChild(catDiv);
      lastCat = h.cat;
    }
    const row = document.createElement('div');
    row.className = 'habit-row';
    const boxes = document.createElement('div');
    boxes.className = 'habit-boxes';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today); d.setDate(today.getDate() - i);
      const data = getDayData(d);
      const checked = data.habits[h.id] === true;
      const isFuture = d > today;
      const isTod = d.getTime() === today.getTime();
      const box = document.createElement('div');
      box.className = 'hbox' +
        (isFuture ? ' future' : checked ? ' checked' : '') +
        (isTod && !isFuture ? ' today-box' : '');
      box.textContent = isFuture ? '' : checked ? '✓' : '';
      box.setAttribute('aria-label', h.label + ' ' + DAYS_SHORT[d.getDay()]);
      if (!isFuture) {
        const dayOff = i;
        box.onclick = () => toggleHabit(h.id, dayOff);
      }
      boxes.appendChild(box);
    }
    row.innerHTML = '<span class="habit-lbl">' + h.label + '</span>';
    row.appendChild(boxes);
    wrap.appendChild(row);
  });
}

function renderWrapup() {
  const data = getDayData(currentDate);
  const dy = document.getElementById('deenYes');
  const dn = document.getElementById('deenNo');
  if (dy) dy.className = 'choice-btn' + (data.deen === 'yes' ? ' yes' : '');
  if (dn) dn.className = 'choice-btn' + (data.deen === 'no' ? ' no' : '');

  const rg = document.getElementById('studyRateGrid');
  if (rg) {
    rg.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      const b = document.createElement('button');
      b.className = 'rate-btn' + (data.studyRate === i ? ' active' : '');
      b.textContent = i;
      b.onclick = () => setStudyRate(i);
      rg.appendChild(b);
    }
  }
  const jt = document.getElementById('journalText');
  const it = document.getElementById('improveText');
  if (jt) jt.value = data.journal || '';
  if (it) it.value = data.improve || '';
}

function renderProgress() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const data = getDayData(today);
  const todayPrayed = PRAYERS.filter(p => data.prayers[p.name] === 'prayed').length;
  const todayHabits = HABITS.filter(h => data.habits[h.id]).length;
  const wl = db.weightLog || [];
  const latestKg = wl.length ? wl[wl.length - 1].kg : 85;
  const lostKg = Math.max(0, 85 - latestKg);
  const pctToGoal = Math.min(100, Math.round(lostKg / 15 * 100));

  let salahStreak = 0;
  for (let i = 1; i <= 365; i++) {
    const d = new Date(today); d.setDate(today.getDate() - i);
    const dd = getDayData(d);
    if (!PRAYERS.every(p => dd.prayers[p.name] === 'prayed')) break;
    salahStreak++;
  }

  const grid = document.getElementById('statsGrid');
  if (grid) {
    grid.innerHTML = [
      { lbl: "Today's Salah", val: todayPrayed + '/5', sub: todayPrayed === 5 ? 'All prayers done!' : (5-todayPrayed) + ' remaining', pct: todayPrayed*20, col: todayPrayed===5?'#2a8c60':'#f0b429' },
      { lbl: "Today's Habits", val: todayHabits + '/' + HABITS.length, sub: Math.round(todayHabits/HABITS.length*100) + '% complete', pct: Math.round(todayHabits/HABITS.length*100), col: '#3a8adf' },
      { lbl: "Current Weight", val: latestKg.toFixed(1) + ' kg', sub: lostKg.toFixed(1) + ' kg lost', pct: pctToGoal, col: '#c9960c' },
      { lbl: "Salah Streak", val: salahStreak, sub: 'consecutive days', pct: Math.min(100, salahStreak*10), col: '#9050b0' },
    ].map(s =>
      '<div class="stat-card">' +
        '<div class="stat-lbl">' + s.lbl + '</div>' +
        '<div class="stat-val">' + s.val + '</div>' +
        '<div class="stat-sub">' + s.sub + '</div>' +
        '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + s.pct + '%;background:' + s.col + '"></div></div>' +
      '</div>'
    ).join('');
  }

  const wgb = document.getElementById('weightGoalBar');
  if (wgb) {
    wgb.innerHTML =
      '<div class="wgb-labels"><span>85 kg</span><span style="color:var(--gold)">Goal: 70 kg</span></div>' +
      '<div class="wgb-track"><div class="wgb-fill" style="width:' + pctToGoal + '%"></div></div>' +
      '<div class="wgb-pct">' + pctToGoal + '% — ' + latestKg.toFixed(1) + ' kg now · ' + (latestKg - 70).toFixed(1) + ' kg to go</div>';
  }

  const wlogEl = document.getElementById('weightLog');
  if (wlogEl) {
    const logs = [...wl].reverse();
    if (!logs.length) {
      wlogEl.innerHTML = '<div class="no-entries">No entries yet. Log your first weigh-in above.</div>';
    } else {
      wlogEl.innerHTML = logs.map((e, i) => {
        const prev = logs[i + 1];
        const diff = prev ? (e.kg - prev.kg) : null;
        const diffStr = diff === null ? '' : (diff > 0 ? '+' : '') + diff.toFixed(1) + ' kg';
        const diffColor = diff === null ? '' : diff < 0 ? '#5adda0' : diff > 0 ? '#ff8888' : '#888';
        return '<div class="wlog-row">' +
          '<span class="wlog-date">' + e.date + '</span>' +
          '<span class="wlog-kg">' + e.kg.toFixed(1) + ' kg</span>' +
          '<span class="wlog-diff" style="color:' + diffColor + '">' + diffStr + '</span>' +
          '<button class="wlog-del" onclick="deleteWeight(\'' + e.date + '\')" aria-label="Delete entry">✕</button>' +
          '</div>';
      }).join('');
    }
  }

  // Streak dots (last 30 days)
  const dotsEl = document.getElementById('streakDots');
  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today); d.setDate(today.getDate() - i);
      const isFuture = d > today;
      const dd = getDayData(d);
      const prayed = PRAYERS.filter(p => dd.prayers[p.name] === 'prayed').length;
      const cls = isFuture ? 'future' : prayed === 5 ? 'full' : prayed > 0 ? 'part' : 'none';
      const dot = document.createElement('div');
      dot.className = 'sdot ' + cls;
      dot.textContent = isFuture ? '' : prayed;
      dot.title = d.toDateString() + ' — ' + prayed + '/5 prayers';
      dotsEl.appendChild(dot);
    }
  }
}

function renderWeekly() {
  const wrap = document.getElementById('weeklyContent');
  if (!wrap) return;
  const todayDay = DAYS_SHORT[new Date().getDay()];
  wrap.innerHTML = '';

  const titleEl = document.createElement('div');
  titleEl.className = 'card-label';
  titleEl.style.cssText = 'padding-bottom:8px;border-bottom:1px solid var(--border);margin-bottom:10px;font-size:11px;';
  titleEl.textContent = 'Weekly Deen Focus & Workout';
  wrap.appendChild(titleEl);

  const grid = document.createElement('div');
  grid.className = 'week-deen-grid';
  WEEKLY.forEach(w => {
    const card = document.createElement('div');
    card.className = 'wday-card' + (w.day === todayDay ? ' today' : '');
    card.innerHTML =
      '<div class="wday-name">' + w.day + (w.day === todayDay ? ' ✦' : '') + '</div>' +
      '<div class="wday-topic">' + w.topic + '</div>' +
      '<div class="wday-sub">' + w.sub + '</div>' +
      '<div class="wday-workout">' + w.workout + '</div>';
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  // Rules
  const rulesTitle = document.createElement('div');
  rulesTitle.className = 'card-label';
  rulesTitle.style.cssText = 'margin:12px 0 8px;padding-bottom:6px;border-bottom:1px solid var(--border);';
  rulesTitle.textContent = 'Non-Negotiable Rules';
  wrap.appendChild(rulesTitle);

  const rulesCard = document.createElement('div');
  rulesCard.className = 'rules-card';
  const rules = [
    { x: true, text: 'No second serving of rice' },
    { x: true, text: 'No sugary drinks / soda' },
    { x: true, text: 'No heavy late night meals' },
    { x: true, text: 'No phone during Salah' },
    { x: false, text: 'Drink plenty of water daily' },
    { x: false, text: 'Stay active every day' },
    { x: false, text: 'Be consistent, not perfect' },
    { x: false, text: 'Begin every task with Bismillāh' },
  ];
  rulesCard.innerHTML = rules.map(r =>
    '<div class="rule-item">' +
      '<span class="' + (r.x ? 'rule-x' : 'rule-c') + '">' + (r.x ? '✕' : '✓') + '</span>' +
      '<span>' + r.text + '</span>' +
    '</div>'
  ).join('');
  wrap.appendChild(rulesCard);

  // Footer
  const footer = document.createElement('div');
  footer.className = 'footer-q';
  footer.innerHTML =
    '<div class="footer-arabic">رَبِّ زِدۡنِي عِلۡمًا</div>' +
    '<div class="footer-trans">"My Lord, increase me in knowledge." — Qurʾān 20:114</div>';
  wrap.appendChild(footer);
}

// ===== MAIN RENDER =====
function renderTab(tab) {
  switch (tab) {
    case 'prayers':  renderPrayers(); break;
    case 'schedule': renderSchedule(); break;
    case 'habits':   renderHabits(); break;
    case 'wrapup':   renderWrapup(); break;
    case 'progress': renderProgress(); break;
    case 'weekly':   renderWeekly(); break;
  }
}

function render() {
  renderDateNav();
  updateStrip();
  renderTab(currentTab);
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  loadDB();

  // Splash fade out
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('hidden');
    setTimeout(() => { splash.style.display = 'none'; }, 700);
    render();
  }, 1800);
});

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
