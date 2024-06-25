function getPromise<T extends (string | number)[]>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as unknown as T);
  });
}

getPromise()
.then((data) => {
  console.log(data); // [ 'Text', 50 ]
});

export {};
