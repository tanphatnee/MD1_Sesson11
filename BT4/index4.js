// Tạo một mảng ngẫu nhiên gồm 10 số nguyên từ 1 đến 100
const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

// Sắp xếp mảng theo thứ tự tăng dần
arr.sort((a, b) => a - b);

// In ra mảng đã sắp xếp
console.log(`Mảng đã sắp xếp: ${arr.join(", ")}`);
