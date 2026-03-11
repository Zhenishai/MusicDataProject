export function getLongestStreak(events) {
  if (!events.length) return null;

  let maxStreak = 1;
  let currentStreak = 1;
  let bestSong = events[0].song_id;

  for (let i = 1; i < events.length; i++) {
    if (events[i].song_id === events[i - 1].song_id) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
      bestSong = events[i].song_id;
    }
  }

  return { songId: bestSong, streak: maxStreak };
}