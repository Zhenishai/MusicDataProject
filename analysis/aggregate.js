export function aggregateBy(events, keyFn, valueFn = () => 1) {
  const result = {};

  for (const event of events) {
    const key = keyFn(event);
    const value = valueFn(event);
    result[key] = (result[key] || 0) + value;
  }

  return result;
}