export function filterFridayNight(events) {
  return events.filter(event => {
    const date = new Date(event.timestamp);
    const day = date.getDay();
    const hour = date.getHours();

    return (
      (day === 5 && hour >= 17) ||
      (day === 6 && hour < 4)
    );
  });
}