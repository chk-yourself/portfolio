export const debounce = <T extends Function>(callback: T, delay = 300) => {
  let timerId: NodeJS.Timeout | number | null = null;
  return (...args: any) => {
    if (timerId) {
      window.clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}