import { getUserIDs, getListenEvents } from "./data.js";
import { renderMost } from "./ui/renderMost.js";
import { filterFridayNight } from "./analysis/friday.js";
import { getLongestStreak } from "./analysis/streak.js";
import { getSongsEveryDay } from "./analysis/everyDay.js";
import { getTopGenres } from "./analysis/genres.js";
import { addSection } from "./ui/renderSection.js";
import { getSong } from "./data.js";

const select = document.getElementById("user-select");
const results = document.getElementById("results");
const noData = document.getElementById("no-data");

function populateUsers() {
  getUserIDs().forEach(id => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `User ${id}`;
    select.appendChild(option);
  });
}

function renderUser(userId) {
  results.innerHTML = "";
  const events = getListenEvents(userId);

  if (!events.length) {
    noData.hidden = false;
    return;
  }

  noData.hidden = true;

  renderMost(results, events);

  const friday = filterFridayNight(events);
  if (friday.length) {
    addSection(results, "Friday night listens", "See data...");
  }

  const streak = getLongestStreak(events);
  addSection(
    results,
    "Longest streak",
    `${getSong(streak.songId).artist} - ${getSong(streak.songId).title} (${streak.streak})`
  );

  const everyDay = getSongsEveryDay(events);
  if (everyDay.length) {
    addSection(results, "Songs every day", everyDay.join(", "));
  }

  const genres = getTopGenres(events);
  if (genres.length) {
    addSection(results, "Top genres", genres.join(", "));
  }
}

select.addEventListener("change", e => renderUser(e.target.value));

populateUsers();
renderUser(getUserIDs()[0]);