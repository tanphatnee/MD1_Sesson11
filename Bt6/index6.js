const arr = [1, 3, 4, 6, 2, 8, 5, 10];
let sum = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1] && arr[i] % 2 === 0) {
    sum += arr[i];
  }
}

console.log(`Tổng các số chẵn mà nó lớn hơn số trước đó là: ${sum}`);
