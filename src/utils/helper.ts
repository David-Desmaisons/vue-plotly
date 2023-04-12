function cached<T>(fn: (str: string) => T) {
  const cache = Object.create(null) as Record<string, T>;
  return function cachedFn(str: string) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

const regex = /-(\w)/g;
const camelize = cached<string>(str => str.replace(regex, (_, c) => (c ? c.toUpperCase() : "")));

function valType(val): string {
  return Array.isArray(val) ? 'arr' : typeof val
}


function deepEqual(objA: any, objB: any) {
  //const ok = Object.keys, tA = valType(objA), tB = valType(objB);
  const ok = Object.keys, arr = Array.isArray;
  const tA = typeof objA, tB = typeof objB;
  const bothArray = objA && objB && arr(objA) && arr(objB);
  const bothNotArray = (objA && !arr(objA)) && (objB && !arr(objB));
  const sameKind = (bothArray || bothNotArray) && tA === tB;
  return tA === 'object' && sameKind ? (
      ( bothArray
        ? objA.length === objB.length
        : ok(objA).length === ok(objB).length
      ) &&
      ok({...objA, ...objB}).every(key => deepEqual(objA[key], objB[key]))
    ) : (objA === objB);
}

export { camelize, deepEqual };
