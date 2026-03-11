export function getSongsEveryDay(events) {
  if (!events.length) return [];

  const byDay = {};

  for (const event of events) {
    const day = event.timestamp.split("T")[0];

    if (!byDay[day]) byDay[day] = new Set();
    byDay[day].add(event.song_id);
  }

  const daySets = Object.values(byDay);

  return [...daySets.reduce((a, b) =>
    new Set([...a].filter(x => b.has(x)))
  )];
}