type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType, U extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// example
const obj1 = { name: 'Object 1', position: 1, color: 'red', weight: 10 };
const obj2 = { name: 'Object 2', position: 2, color: 'blue', weight: 20 };

const result = compare(obj1, obj2);
console.log(result); // { name: 'Object 1', position: 2, color: 'red', weight: 20 }

export {};
