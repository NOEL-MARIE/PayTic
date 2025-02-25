// utils.ts ou utils.js
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');  // Filtrer les valeurs falsy et les combiner
}
