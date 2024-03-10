export const debounce = <Params extends any[]>(callback: (...args: Params) => any = () => null, delay = 300) => {
  let timerId: NodeJS.Timeout | number | null = null;
  return (...args: Params) => {
    if (timerId) {
      window.clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}