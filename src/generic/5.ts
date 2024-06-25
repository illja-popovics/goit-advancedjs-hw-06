interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклади використання
const numberStringPair: KeyValuePair<number, string> = { key: 1, value: "one" };
const stringBooleanPair: KeyValuePair<string, boolean> = { key: "isValid", value: true };

console.log(numberStringPair); 
console.log(stringBooleanPair); 

export {};
