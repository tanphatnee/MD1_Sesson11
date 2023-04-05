// Tạo một mảng ngẫu nhiên gồm 10 phần tử
const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Lọc ra các số nguyên chẵn trong mảng
const evenNumbers = arr.filter((num) => num % 2 === 0);

// In ra các số nguyên chẵn trong mảng
console.log(`Các số nguyên chẵn trong mảng là: ${evenNumbers.join(", ")}`);
