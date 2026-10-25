/**
 * Statistics counter easing & calculation utilities.
 */

/**
 * Cubic ease-out calculation for smooth counter transitions
 * @param progress Value between 0 and 1
 */
export function easeOutCubic(progress: number): number {
  const p = Math.max(0, Math.min(1, progress));
  return 1 - Math.pow(1 - p, 3);
}

/**
 * Calculates current animated counter value
 * @param start Start value
 * @param end Target value
 * @param progress Value between 0 and 1
 * @param decimals Number of decimal digits to preserve
 */
export function calculateCounterStep(
  start: number,
  end: number,
  progress: number,
  decimals: number = 0
): number {
  const eased = easeOutCubic(progress);
  const current = start + (end - start) * eased;
  if (decimals === 0) {
    return Math.floor(current);
  }
  return parseFloat(current.toFixed(decimals));
}

/**
 * Formats a stat number with its prefix and suffix
 */
export function formatStatValue(
  value: number,
  prefix: string = '',
  suffix: string = '',
  decimals: number = 0
): string {
  const formattedNumber = decimals > 0 
    ? value.toFixed(decimals) 
    : value.toLocaleString('en-US');
  return `${prefix}${formattedNumber}${suffix}`;
}
