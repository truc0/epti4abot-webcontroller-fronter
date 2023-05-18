export const useThresholdFn = (fn: Function, threshold = 100) => {
  let lastCall = 0;
  return (...args: any) => {
    const now = Date.now();
    if (now - lastCall < threshold) {
      return false;
    }
    fn(...args);
    lastCall = now;
    return true;
  };
};
