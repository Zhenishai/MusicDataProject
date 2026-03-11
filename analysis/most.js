import { aggregateBy } from "./aggregate.js";
import { getSong } from "../data.js";

export function getMostByCount(events, keyFn) {
  if (!events.length) return null;

  const counts = aggregateBy(events, keyFn);

  const topKey = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  return { key: topKey, value: counts[topKey] };
}

export function getMostByTime(events, keyFn) {
  if (!events.length) return null;

  const totals = aggregateBy(
    events,
    keyFn,
    (e) => getSong(e.song_id).duration_seconds
  );

  const topKey = Object.keys(totals).reduce((a, b) =>
    totals[a] > totals[b] ? a : b
  );

  return { key: topKey, value: totals[topKey] };
}