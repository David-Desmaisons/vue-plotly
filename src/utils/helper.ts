function cached<T>(fn: (str: string) => T) {
  const cache = Object.create(null) as Record<string, T>;
  return function cachedFn(str: string) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

const regex = /-(\w)/g;
const camelize = cached<string>(str => str.replace(regex, (_, c) => (c ? c.toUpperCase() : "")));

export { camelize };
