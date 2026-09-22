/* ============================================================
   MIN 2 MAX GYM — site logic & editable content
   ------------------------------------------------------------
   Everything the gym will update lives in the CONFIG + data
   objects below (workout, equipment, updates, events, gallery,
   contact details). Edit these and the page updates itself.
   ============================================================ */

/* ---------------- CONTACT & BRAND CONFIG ---------------- */
const CONFIG = {
  // Official email not yet provided — set it here when available.
  // e.g. EMAIL: "hello@mini2maxgym.com"  (leave "" to show placeholder)
  EMAIL: "",

  phones: [
    { label: "98847 46452", tel: "tel:+919884746452" },
    { label: "70926 00404", tel: "tel:+917092600404" }
  ],
  whatsapp: { label: "+91 98847 46452", link: "https://wa.me/919884746452" },
  instagram: [
    { handle: "@mini2maxfitnesszone", link: "https://www.instagram.com/mini2maxfitnesszone/", branch: "AVADI" },
    { handle: "@mini2max_veppampattu", link: "https://www.instagram.com/mini2max_veppampattu/", branch: "VEPPAMPATTU" }
  ],
  maps: {
    avadi: "https://share.google/UzKYLdNS9zgzcPsL4",
    veppampattu: "https://share.google/XHjRsDds9cBxjZMme"
  },
  hours: {
    weekdays: "Mon\u2013Sat \u00b7 5:30 AM \u2013 10:00 PM",
    sunday: "Sun \u00b7 6:00 AM \u2013 12:00 Noon"
  }
};

/* ---------------- WEEKLY WORKOUT ---------------- */
/* Days are keyed 0 = Sunday ... 6 = Saturday (JS getDay()). */
const WORKOUTS = [
  { // SUNDAY
    focus: "RECOVERY / CARDIO / FUNCTIONAL",
    muscleGroups: [
      { group: "RECOVERY + CARDIO", exercises: [
        { name: "Treadmill Walk / Light Jog", muscle: "Cardio", sets: "1", reps: "20\u201330 min", equipment: "Treadmill", tip: "Keep an easy, conversational pace to flush out the week and boost recovery.", level: "All levels" },
        { name: "Stationary Bike", muscle: "Cardio", sets: "1", reps: "15\u201320 min", equipment: "Stationary Bike", tip: "Light resistance, steady cadence \u2014 focus on breathing and rhythm.", level: "All levels" }
      ]},
      { group: "FUNCTIONAL", exercises: [
        { name: "Bodyweight Circuit", muscle: "Full Body", sets: "3 rounds", reps: "12 reps each", equipment: "Turf / Open area", tip: "Squats, lunges and plank back-to-back with short rests between rounds.", level: "All levels" },
        { name: "Mobility & Stretch", muscle: "Recovery", sets: "1", reps: "10\u201315 min", equipment: "Turf / Open area", tip: "Slow full-body stretching to restore movement and end the week strong.", level: "All levels" }
      ]}
    ]
  },
  { // MONDAY
    focus: "CHEST + TRICEPS",
    muscleGroups: [
      { group: "CHEST", exercises: [
        { name: "Machine Chest Press", muscle: "Chest", sets: "3\u20134", reps: "8\u201312", equipment: "Strength Machine", tip: "Keep elbows slightly below shoulder line and press with control.", level: "All levels" },
        { name: "Bench Press", muscle: "Chest", sets: "3\u20134", reps: "8\u201312", equipment: "Bench + Plates", tip: "Plant your feet, squeeze your shoulder blades and lower the bar with control.", level: "Intermediate" },
        { name: "Incline Press", muscle: "Upper Chest", sets: "3", reps: "8\u201312", equipment: "Strength Machine / Bench", tip: "Set a moderate incline and drive through the chest, not the shoulders.", level: "Intermediate" }
      ]},
      { group: "TRICEPS", exercises: [
        { name: "Cable Triceps Pushdown", muscle: "Triceps", sets: "3\u20134", reps: "10\u201315", equipment: "Cable Machine", tip: "Elbows pinned to your sides, full lockout at the bottom of each rep.", level: "All levels" },
        { name: "Overhead Cable Extension", muscle: "Triceps (long head)", sets: "3", reps: "10\u201315", equipment: "Cable Machine", tip: "Keep your upper arms still and extend fully overhead.", level: "Intermediate" }
      ]}
    ]
  },
  { // TUESDAY
    focus: "BACK + BICEPS",
    muscleGroups: [
      { group: "BACK", exercises: [
        { name: "Lat Pulldown", muscle: "Back (Lats)", sets: "3\u20134", reps: "8\u201312", equipment: "Cable Machine", tip: "Pull the bar to your upper chest and squeeze your shoulder blades.", level: "All levels" },
        { name: "Seated Cable Row", muscle: "Back (Mid-back)", sets: "3\u20134", reps: "10\u201312", equipment: "Cable Machine", tip: "Chest up, pull to your belly button and pause at the contraction.", level: "All levels" },
        { name: "Barbell Row", muscle: "Back", sets: "3", reps: "8\u201312", equipment: "Barbell + Plates", tip: "Hinge at the hips and pull the bar toward your lower ribs.", level: "Intermediate" }
      ]},
      { group: "BICEPS", exercises: [
        { name: "Cable Biceps Curl", muscle: "Biceps", sets: "3", reps: "10\u201315", equipment: "Cable Machine", tip: "Keep elbows fixed and curl through a full range of motion.", level: "All levels" },
        { name: "Cable Hammer Curl", muscle: "Biceps / Forearms", sets: "3", reps: "10\u201312", equipment: "Cable Machine (rope)", tip: "Neutral grip \u2014 squeeze at the top, control the descent.", level: "All levels" }
      ]}
    ]
  },
  { // WEDNESDAY
    focus: "LEGS",
    muscleGroups: [
      { group: "LEGS", exercises: [
        { name: "Leg Press", muscle: "Quads / Glutes", sets: "4", reps: "10\u201315", equipment: "Leg Press", tip: "Lower to about 90\u00b0 and avoid locking your knees at the top.", level: "All levels" },
        { name: "Barbell Squat", muscle: "Quads / Glutes", sets: "3\u20134", reps: "8\u201312", equipment: "Barbell + Plates", tip: "Keep your chest up and knees tracking over your toes.", level: "Intermediate" },
        { name: "Leg Extension", muscle: "Quads", sets: "3", reps: "12\u201315", equipment: "Resistance Machine", tip: "Squeeze the quads at the top of each rep.", level: "All levels" },
        { name: "Walking Lunges", muscle: "Legs / Glutes", sets: "3", reps: "12 / leg", equipment: "Turf / Open area", tip: "Long, controlled steps \u2014 keep your torso upright.", level: "All levels" }
      ]},
      { group: "FINISHER", exercises: [
        { name: "Treadmill or Bike Finisher", muscle: "Cardio", sets: "1", reps: "10\u201315 min", equipment: "Treadmill / Bike", tip: "Finish the session with steady-state cardio to burn it out.", level: "All levels" }
      ]}
    ]
  },
  { // THURSDAY
    focus: "SHOULDERS + ABS",
    muscleGroups: [
      { group: "SHOULDERS", exercises: [
        { name: "Machine Shoulder Press", muscle: "Shoulders", sets: "3\u20134", reps: "8\u201312", equipment: "Strength Machine", tip: "Press overhead without arching your lower back.", level: "All levels" },
        { name: "Cable Lateral Raise", muscle: "Side Delts", sets: "3", reps: "12\u201315", equipment: "Cable Machine", tip: "Raise to shoulder height with a slight elbow bend.", level: "All levels" },
        { name: "Plate Front Raise", muscle: "Front Delts", sets: "3", reps: "12", equipment: "Weight Plate", tip: "Raise the plate to eye level and lower with control.", level: "All levels" }
      ]},
      { group: "ABS", exercises: [
        { name: "Cable Crunch", muscle: "Abs", sets: "3", reps: "15\u201320", equipment: "Cable Machine", tip: "Curl your ribs toward your hips, abs doing the work.", level: "All levels" },
        { name: "Plank", muscle: "Core", sets: "3", reps: "30\u201360 sec", equipment: "Turf / Open area", tip: "Keep a straight line from head to heels \u2014 no sagging hips.", level: "All levels" }
      ]}
    ]
  },
  { // FRIDAY
    focus: "CHEST + BACK",
    muscleGroups: [
      { group: "CHEST", exercises: [
        { name: "Bench Press", muscle: "Chest", sets: "3\u20134", reps: "8\u201312", equipment: "Bench + Plates", tip: "Control the bar down and drive it up with intent.", level: "Intermediate" },
        { name: "Machine Chest Press", muscle: "Chest", sets: "3", reps: "10\u201312", equipment: "Strength Machine", tip: "Smooth, even tempo on every rep.", level: "All levels" }
      ]},
      { group: "BACK", exercises: [
        { name: "Lat Pulldown", muscle: "Lats", sets: "3\u20134", reps: "8\u201312", equipment: "Cable Machine", tip: "Lead with your elbows and squeeze at the bottom.", level: "All levels" },
        { name: "Seated Cable Row", muscle: "Mid-back", sets: "3", reps: "10\u201312", equipment: "Cable Machine", tip: "Keep your back tall and pull to your torso.", level: "All levels" },
        { name: "Barbell Row", muscle: "Back", sets: "3", reps: "8\u201312", equipment: "Barbell + Plates", tip: "Hinge and pull \u2014 avoid using momentum.", level: "Intermediate" }
      ]}
    ]
  },
  { // SATURDAY
    focus: "ARMS + SHOULDERS",
    muscleGroups: [
      { group: "ARMS", exercises: [
        { name: "Cable Triceps Pushdown", muscle: "Triceps", sets: "3\u20134", reps: "10\u201315", equipment: "Cable Machine", tip: "Elbows locked in, squeeze at the bottom.", level: "All levels" },
        { name: "Cable Biceps Curl", muscle: "Biceps", sets: "3\u20134", reps: "10\u201312", equipment: "Cable Machine", tip: "Full range of motion, controlled lowering.", level: "All levels" },
        { name: "Overhead Cable Extension", muscle: "Triceps", sets: "3", reps: "10\u201315", equipment: "Cable Machine", tip: "Keep elbows narrow and extend fully overhead.", level: "Intermediate" }
      ]},
      { group: "SHOULDERS", exercises: [
        { name: "Machine Shoulder Press", muscle: "Shoulders", sets: "3", reps: "8\u201312", equipment: "Strength Machine", tip: "Press with control, don\u2019t bounce at the bottom.", level: "All levels" },
        { name: "Cable Lateral Raise", muscle: "Side Delts", sets: "3", reps: "12\u201315", equipment: "Cable Machine", tip: "Slow on the way down for maximum burn.", level: "All levels" }
      ]}
    ]
  }
];

const DAY_NAMES = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const DAY_SHORT = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/* ---------------- EQUIPMENT ---------------- */
/* Only equipment confirmed from the supplied gym material. */
const EQUIPMENT = [
  { name: "Leg Press", category: "strength", purpose: "Lower-body strength for quads, glutes and hamstrings." },
  { name: "Free Weights & Plates", category: "strength", purpose: "Barbell and plate loading for compound lifts." },
  { name: "Flat & Adjustable Benches", category: "strength", purpose: "Pressing and rowing support across chest, back and arms." },
  { name: "Strength Machines", category: "strength", purpose: "Guided pressing and pulling movements for all levels." },
  { name: "Resistance Machines", category: "strength", purpose: "Isolated muscle work with smooth, controlled resistance." },
  { name: "Cable Machine", category: "strength", purpose: "Pushdowns, rows, curls and raises through a full range of motion." },
  { name: "Treadmills", category: "cardio", purpose: "Walking and running for endurance and conditioning." },
  { name: "Stationary Bikes", category: "cardio", purpose: "Low-impact cardio to build stamina and burn energy." },
  { name: "Turf / Open Training Area", category: "functional", purpose: "Open space for functional movement, conditioning and dynamic drills." }
];

/* ---------------- UPDATES (news) ----------------
   Add new updates here. Fields:
   date, category, title, description, image (optional), link (optional)
   Categories: GYM NEWS, NEW EQUIPMENT, EVENTS, CHALLENGES, OFFERS,
               ANNOUNCEMENTS, HOLIDAY UPDATES, TRAINING
   NOTE: no updates have been published yet, so this starts empty. */
const UPDATES = [];

const UPDATE_CATEGORIES = [
  "GYM NEWS", "NEW EQUIPMENT", "EVENTS", "CHALLENGES",
  "OFFERS", "ANNOUNCEMENTS", "HOLIDAY UPDATES", "TRAINING"
];

/* ---------------- EVENTS ----------------
   Add events here. Fields:
   name, day, month, date, time, location, branch, description, image, registerLink */
const EVENTS = [];

/* ---------------- GALLERY ----------------
   Actual gym photos from the supplied material.
   category: "gym" | "strength" | "cardio" | "functional" | "exterior"
   The category tags are a best-effort assignment — review and
   re-tag any image by editing the category field below. */
const GALLERY = [
  { src: "images/gym-wide-4.jpg",  category: "gym",         label: "The Gym" },
  { src: "images/gym-land-1.jpg",  category: "gym",         label: "The Gym" },
  { src: "images/gym-land-2.jpg",  category: "gym",         label: "The Gym" },
  { src: "images/gym-wide-1.jpg",  category: "strength",    label: "Strength" },
  { src: "images/gym-land-3.jpg",  category: "strength",    label: "Strength" },
  { src: "images/gym-port-1.jpg",  category: "strength",    label: "Strength" },
  { src: "images/gym-wide-2.jpg",  category: "cardio",      label: "Cardio" },
  { src: "images/gym-land-4.jpg",  category: "cardio",      label: "Cardio" },
  { src: "images/gym-port-3.jpg",  category: "cardio",      label: "Cardio" },
  { src: "images/gym-wide-3.jpg",  category: "functional",  label: "Functional" },
  { src: "images/gym-port-5.jpg",  category: "functional",  label: "Functional" },
  { src: "images/gym-port-6.jpg",  category: "functional",  label: "Functional" }
];

/* ============================================================
   RENDERERS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);

/* --- Email handling --- */
function renderEmail() {
  const slots = document.querySelectorAll(".email-slot");
  slots.forEach((el) => {
    if (CONFIG.EMAIL) {
      el.outerHTML = `<a href="mailto:${CONFIG.EMAIL}" class="email-link">${CONFIG.EMAIL}</a>`;
    } else {
      el.textContent = "Email address coming soon";
    }
  });
}

/* --- Workout --- */
let selectedDay = new Date().getDay();
let today = new Date().getDay();

function renderWorkout() {
  const day = WORKOUTS[selectedDay];
  $("#workoutDay").textContent = DAY_NAMES[selectedDay];
  $("#workoutFocus").textContent = day.focus;

  const grid = $("#workoutGrid");
  grid.innerHTML = "";
  day.muscleGroups.forEach((mg) => {
    const groupHeader = document.createElement("div");
    groupHeader.className = "workout__group-head";
    groupHeader.style.cssText = "grid-column:1/-1;font-family:var(--font-display);font-size:1.5rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);margin-top:.6rem;";
    groupHeader.textContent = mg.group;
    grid.appendChild(groupHeader);

    mg.exercises.forEach((ex) => {
      const card = document.createElement("div");
      card.className = "workout-card";
      card.innerHTML = `
        <div class="workout-card__top">
          <div>
            <div class="workout-card__name">${ex.name}</div>
            <div class="workout-card__muscle">${ex.muscle}</div>
          </div>
          <span class="badge">Available at Min 2 Max</span>
        </div>
        <div class="workout-card__meta">
          <span><b>Sets</b> ${ex.sets}</span>
          <span><b>Reps</b> ${ex.reps}</span>
          <span><b>Equipment</b> ${ex.equipment}</span>
        </div>
        <p class="workout-card__tip">${ex.tip}</p>
        <span class="workout-card__level">Level: ${ex.level}</span>
      `;
      grid.appendChild(card);
    });
  });

  // weekly track
  const track = $("#weekTrack");
  track.innerHTML = "";
  WORKOUTS.forEach((w, i) => {
    const d = document.createElement("button");
    d.className = "week__day";
    if (i === today) d.classList.add("is-today");
    if (i === selectedDay) d.classList.add("is-selected");
    d.innerHTML = `
      <span class="week__day-label">${DAY_SHORT[i]}</span>
      <span class="week__day-name">${w.focus.split(" / ").join("<br/>")}</span>
      ${i === today ? '<span class="week__day-today">TODAY</span>' : ""}
    `;
    d.addEventListener("click", () => {
      selectedDay = i;
      renderWorkout();
      const sec = $("#workout");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    track.appendChild(d);
  });
}

/* --- Equipment --- */
function renderEquipment(filter = "all") {
  const grid = $("#equipmentGrid");
  grid.innerHTML = "";
  EQUIPMENT.filter((e) => filter === "all" || e.category === filter)
    .forEach((e, i) => {
      const card = document.createElement("div");
      card.className = "equip-card";
      card.innerHTML = `
        <span class="equip-card__cat">${e.category}</span>
        <span class="equip-card__num">0${i + 1}</span>
        <h3>${e.name}</h3>
        <p>${e.purpose}</p>
      `;
      grid.appendChild(card);
    });
}

/* --- Updates --- */
function renderUpdates() {
  const grid = $("#updatesGrid");
  grid.innerHTML = "";
  if (UPDATES.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No updates yet</h3>
        <p>The latest news and announcements from Min 2 Max Gym will appear here soon. Check back shortly.</p>
      </div>
    `;
    return;
  }
  UPDATES.forEach((u) => {
    const card = document.createElement("article");
    card.className = "update-card";
    card.innerHTML = `
      ${u.image ? `<div class="update-card__media"><img src="${u.image}" alt="${u.title}" loading="lazy" /><span class="update-card__cat">${u.category}</span></div>` : ""}
      <div class="update-card__body">
        <span class="update-card__date">${u.date} ${u.image ? "" : `\u00b7 ${u.category}`}</span>
        ${u.image ? "" : `<span class="update-card__cat" style="position:static;align-self:flex-start;display:inline-block;padding:.25rem .6rem;">${u.category}</span>`}
        <h3>${u.title}</h3>
        <p>${u.description}</p>
        ${u.link ? `<a class="update-card__link" href="${u.link}" ${u.link.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>Read more</a>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });
}

/* --- Events --- */
function renderEvents() {
  const grid = $("#eventsGrid");
  grid.innerHTML = "";
  if (EVENTS.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No upcoming events</h3>
        <p>Events and challenges will be listed here once announced. Follow us on Instagram to stay in the loop.</p>
      </div>
    `;
    return;
  }
  EVENTS.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-card__date"><span class="d">${ev.day}</span><span class="m">${ev.month}</span></div>
      <div class="event-card__body">
        <h3>${ev.name}</h3>
        <p class="event-card__meta"><b>${ev.time}</b> &bull; ${ev.location} &bull; ${ev.branch}</p>
        <p>${ev.description}</p>
        <div class="event-card__actions">
          ${ev.registerLink ? `<a href="${ev.registerLink}" target="_blank" rel="noopener" class="btn btn--accent">REGISTER</a>` : ""}
          <a href="tel:+919884746452" class="btn btn--ghost">CONTACT</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* --- Gallery --- */
let galleryFilter = "all";
const galleryItems = [];

function renderGallery() {
  const grid = $("#galleryGrid");
  grid.innerHTML = "";
  galleryItems.length = 0;

  const filtered = GALLERY.filter((g) => galleryFilter === "all" || g.category === galleryFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>Photos coming soon</h3>
        <p>Photos for this section will be added here shortly.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((g) => {
    const item = document.createElement("a");
    item.className = "gallery__item";
    item.href = g.src;
    item.dataset.src = g.src;
    item.dataset.label = g.label;
    item.innerHTML = `<img src="${g.src}" alt="${g.label}" loading="lazy" /><span>${g.label}</span>`;
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(galleryItems.indexOf(item));
    });
    grid.appendChild(item);
    galleryItems.push(item);
  });
}

/* --- Lightbox --- */
let lightboxIndex = 0;
function openLightbox(i) {
  lightboxIndex = i;
  const lb = $("#lightbox");
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightbox();
}
function updateLightbox() {
  const items = galleryItems;
  if (!items.length) return;
  const idx = (lightboxIndex + items.length) % items.length;
  $("#lightboxImg").src = items[idx].dataset.src;
  $("#lightboxImg").alt = items[idx].dataset.label;
}
function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.style.overflow = "";
}

/* ============================================================
   NAV / SCROLL / REVEAL / PARALLAX
   ============================================================ */
function initNav() {
  const nav = $("#nav");
  const burger = $("#navBurger");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav__link").forEach((l) =>
    l.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  // active link highlight
  const sections = [...document.querySelectorAll("section[id], header.hero[id]")];
  const links = [...document.querySelectorAll(".nav__link")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = en.target.id;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

/* --- Mobile map popover --- */
function initMobileBar() {
  const btn = $("#mapBtn");
  const pop = $("#mapPop");
  btn.addEventListener("click", () => {
    pop.hidden = !pop.hidden;
  });
  document.addEventListener("click", (e) => {
    if (!pop.hidden && !pop.contains(e.target) && e.target !== btn) pop.hidden = true;
  });
}

/* --- Filters --- */
function initFilters() {
  $("#equipmentFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#equipmentFilters .chip").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderEquipment(chip.dataset.cat);
  });

  $("#galleryFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#galleryFilters .chip").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    galleryFilter = chip.dataset.cat;
    renderGallery();
  });
}

/* --- Lightbox controls --- */
function initLightbox() {
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  $("#lightboxPrev").addEventListener("click", () => {
    lightboxIndex--;
    updateLightbox();
  });
  $("#lightboxNext").addEventListener("click", () => {
    lightboxIndex++;
    updateLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") { lightboxIndex--; updateLightbox(); }
    if (e.key === "ArrowRight") { lightboxIndex++; updateLightbox(); }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderEmail();
  renderWorkout();
  renderEquipment();
  renderUpdates();
  renderEvents();
  renderGallery();
  initNav();
  initReveal();
  initMobileBar();
  initFilters();
  initLightbox();
});
