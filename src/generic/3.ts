function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// example merging
const obj1 = { name: 'Object 1', position: 1 };
const obj2 = { color: 'red', weight: 10 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj); // { name: 'Object 1', position: 1, color: 'red', weight: 10 }

export {};
