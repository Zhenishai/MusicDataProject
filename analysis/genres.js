import { aggregateBy } from "./aggregate.js";
import { getSong } from "../data.js";

export function getTopGenres(events) {
  const counts = aggregateBy(
    events,
    (e) => getSong(e.song_id).genre
  );

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);
}