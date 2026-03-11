import { getSong } from "../data.js";
import { getMostByCount, getMostByTime } from "../analysis/most.js";
import { addSection } from "./renderSection.js";

export function renderMost(container, events) {
  const songCount = getMostByCount(events, e => e.song_id);
  const songTime = getMostByTime(events, e => e.song_id);

  addSection(
    container,
    "Most listened song (count)",
    `${getSong(songCount.key).artist} - ${getSong(songCount.key).title}`
  );

  addSection(
    container,
    "Most listened song (time)",
    `${getSong(songTime.key).artist} - ${getSong(songTime.key).title}`
  );

  const artistCount = getMostByCount(events, e => getSong(e.song_id).artist);
  const artistTime = getMostByTime(events, e => getSong(e.song_id).artist);

  addSection(container, "Most listened artist (count)", artistCount.key);
  addSection(container, "Most listened artist (time)", artistTime.key);
}