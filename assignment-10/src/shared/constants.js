export const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export function getDayOfWeek(i) {
  if (i < 0 || i > days.length) return -1;
  return days[i];
}
